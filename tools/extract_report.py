# /// script
# dependencies = ["beautifulsoup4", "lxml"]
# requires-python = ">=3.11"
# ///
"""
Extract rich per-system content from report.html into systemsRichData.js,
keyed by system id from systemsData.js.

Usage:
    uv run tools/extract_report.py

Mapping rules:
- systemsData.js declares 22 systems grouped by category, in descending
  prevalence order within each category.
- report.html has 22 detail panels: id="panel-proj-{cat}-{rank}".
  Categories: design_planning(5), development(4), quality_risk(5),
  infrastructure_ops(4), meta_work(uses ranks 1,2,4,5 -- skips 3).
- Mapping = (category, ordinal index in systemsData order) -> panel rank.
  For all categories ranks are sequential; for meta_work the rank sequence
  is [1, 2, 4, 5].
"""

from __future__ import annotations
import json
import re
from pathlib import Path
from bs4 import BeautifulSoup, Tag

REPO = Path(__file__).resolve().parents[1]
REPORT = REPO / "report.html"
SYSTEMS_DATA = REPO / "systemsData.js"
OUTPUT = REPO / "systemsRichData.js"

# Common mojibake (UTF-8 decoded as Latin-1) seen in report.html source.
MOJIBAKE_FIXES = [
    ("â€™", "\u2019"),  # right single quote '
    ("â€˜", "\u2018"),  # left single quote '
    ("â€œ", "\u201c"),  # left double quote "
    ("â€\x9d", "\u201d"),  # right double quote "
    ("â€\u009d", "\u201d"),  # right double quote "
    ("â€”", "\u2014"),  # em dash —
    ("â€“", "\u2013"),  # en dash –
    ("â€¦", "\u2026"),  # ellipsis …
]


def fix_mojibake(s: str) -> str:
    if not s:
        return s
    for bad, good in MOJIBAKE_FIXES:
        s = s.replace(bad, good)
    return s

# (systemsData category) -> (report category key, [rank sequence in declaration order])
CATEGORY_MAP = {
    "Development": ("development", [1, 2, 3, 4]),
    "Design-Planning": ("design_planning", [1, 2, 3, 4, 5]),
    "Quality-Risk": ("quality_risk", [1, 2, 3, 4, 5]),
    "Infra-Ops": ("infrastructure_ops", [1, 2, 3, 4]),
    "Meta-work": ("meta_work", [1, 2, 4, 5]),
}


def load_systems():
    """Parse systemsData.js to recover ids in declaration order, grouped by category."""
    text = SYSTEMS_DATA.read_text()
    # Find each object; pull id and category fields.
    pattern = re.compile(
        r'\{\s*id:\s*"([^"]+)".*?category:\s*"([^"]+)"', re.DOTALL
    )
    items = pattern.findall(text)
    # Preserve order; group by category in declaration order.
    grouped: dict[str, list[str]] = {}
    for sid, cat in items:
        grouped.setdefault(cat, []).append(sid)
    return grouped


def text_of(node: Tag | None) -> str:
    if node is None:
        return ""
    return fix_mojibake(re.sub(r"\s+", " ", node.get_text(" ", strip=True)).strip())


def list_items(ul_or_ol: Tag | None) -> list[str]:
    if ul_or_ol is None:
        return []
    return [text_of(li) for li in ul_or_ol.find_all("li", recursive=False)]


def parse_quotes(section: Tag) -> list[dict]:
    """Pull inline quote-blocks (not the modal) from a section."""
    quotes = []
    for qb in section.select(".quote-block"):
        qt = qb.select_one(".quote-text")
        pid = qb.select_one(".pid-badge")
        if qt:
            quotes.append({
                "quote": text_of(qt),
                "pid": text_of(pid).replace("PID ", "").strip() if pid else None,
            })
    return quotes


def find_section(panel: Tag, heading: str) -> Tag | None:
    for sec in panel.select(".opp-section"):
        h3 = sec.find("h3")
        if h3 and text_of(h3).lower() == heading.lower():
            return sec
    return None


def extract_signals(who_section: Tag) -> dict:
    """Pull bullet list of quantitative signals (best-effort; freeform text)."""
    sig_ul = None
    for strong in who_section.find_all("strong"):
        if "Quantitative Signals" in strong.get_text():
            ul = strong.find_parent("div").find("ul")
            sig_ul = ul
            break
    return {
        "signals": list_items(sig_ul),
    }


def extract_constraints_inline(constraints_section: Tag) -> list[dict]:
    out = []
    for cb in constraints_section.select(".constraint-block"):
        text = cb.select_one(".constraint-text")
        quote = cb.select_one(".constraint-quote")
        out.append({
            "text": text_of(text),
            "quote": text_of(quote),
        })
    return out


def extract_success(success_section: Tag) -> dict:
    cols = success_section.select(".success-col")
    out = {"qualitative": [], "quantitative": []}
    for col in cols:
        h4 = text_of(col.find("h4")).lower()
        items = list_items(col.find("ul"))
        if "qualitative" in h4:
            out["qualitative"] = items
        elif "quantitative" in h4:
            out["quantitative"] = items
    return out


def extract_theme(theme_section: Tag) -> dict:
    card = theme_section.select_one(".card")
    if not card:
        return {}
    name_el = card.find("strong")
    code_el = name_el.find_next_sibling("div") if name_el else None
    chips = [text_of(c) for c in card.select(".chip")]
    desc_el = card.find("p")
    return {
        "name": text_of(name_el),
        "code": text_of(code_el),
        "chips": chips,
        "description": text_of(desc_el),
    }


def parse_modal_data(html: str) -> dict:
    """Extract MODAL_DATA = {...} blob from the script tag."""
    m = re.search(r"var MODAL_DATA\s*=\s*(\{.*?\});", html, re.DOTALL)
    if not m:
        raise SystemExit("MODAL_DATA not found")
    raw = m.group(1)
    return json.loads(raw)


def get_modal(modal_data: dict, key: str) -> dict:
    entry = modal_data.get(key)
    if not entry:
        return {"title": "", "quotes": []}
    quotes = []
    for q in entry.get("quotes", []):
        quotes.append({
            "pid": q.get("pid"),
            "quote": fix_mojibake(q.get("quote", "")),
        })
    return {"title": fix_mojibake(entry.get("title", "")), "quotes": quotes}


def extract_panel(soup: BeautifulSoup, modal_data: dict, cat_key: str, rank: int) -> dict:
    panel = soup.find("div", id=f"panel-proj-{cat_key}-{rank}")
    if panel is None:
        raise RuntimeError(f"Missing panel: panel-proj-{cat_key}-{rank}")

    title_el = panel.select_one(".opp-detail-title")
    problem_el = panel.select_one(".opp-problem")

    desc_section = find_section(panel, "Project Description")
    # Project Description has a leading <p>, then "Relevant Context Sources" + "Capability Steps"
    desc_p = desc_section.find("p") if desc_section else None
    inputs = []
    how_steps = []
    if desc_section:
        for strong in desc_section.find_all("strong"):
            label = strong.get_text().strip()
            list_el = strong.find_parent("div").find(["ul", "ol"])
            if "Relevant Context Sources" in label:
                inputs = list_items(list_el)
            elif "Capability Steps" in label:
                how_steps = list_items(list_el)

    who_section = find_section(panel, "Who It Affects")
    who_chips = [text_of(c) for c in who_section.select(".chip")] if who_section else []
    who_para = who_section.find("p") if who_section else None
    signals = extract_signals(who_section) if who_section else {"signals": []}
    who_inline_quotes = parse_quotes(who_section) if who_section else []

    impact_section = find_section(panel, "Impact")
    impact_para = impact_section.find("p") if impact_section else None
    impact_inline_quotes = parse_quotes(impact_section) if impact_section else []

    constraints_section = find_section(panel, "Constraints & Guardrails")
    constraints_inline = extract_constraints_inline(constraints_section) if constraints_section else []

    success_section = find_section(panel, "Success Definition")
    success = extract_success(success_section) if success_section else {"qualitative": [], "quantitative": []}

    theme_section = find_section(panel, "Theme Evidence")
    theme = extract_theme(theme_section) if theme_section else {}

    # Pull full quote samples from MODAL_DATA
    base = f"modal-proj-{cat_key}-{rank}"
    who_quotes_all = get_modal(modal_data, f"{base}-who")
    impact_quotes_all = get_modal(modal_data, f"{base}-evidence")
    constraints_quotes_all = get_modal(modal_data, f"{base}-constraints")
    theme_quotes_all = get_modal(modal_data, f"{base}-theme")

    return {
        "reportTitle": text_of(title_el),
        "problem": text_of(problem_el),
        "idea": text_of(desc_p),
        "inputs": inputs,
        "howItOperates": how_steps,
        "audience": {
            "text": text_of(who_para),
            "chips": who_chips,
            "signals": signals["signals"],
            "quotesInline": who_inline_quotes,
            "quotesAll": who_quotes_all["quotes"],
        },
        "impact": {
            "text": text_of(impact_para),
            "quotesInline": impact_inline_quotes,
            "quotesAll": impact_quotes_all["quotes"],
        },
        "constraints": {
            "inline": constraints_inline,
            "quotesAll": constraints_quotes_all["quotes"],
        },
        "success": success,
        "theme": {
            **theme,
            "quotesAll": theme_quotes_all["quotes"],
        },
    }


def main():
    grouped = load_systems()
    html = REPORT.read_text()
    soup = BeautifulSoup(html, "lxml")
    modal_data = parse_modal_data(html)

    out: dict[str, dict] = {}
    for sd_cat, ids in grouped.items():
        cat_key, ranks = CATEGORY_MAP[sd_cat]
        if len(ids) != len(ranks):
            raise SystemExit(
                f"Category {sd_cat}: {len(ids)} systems vs {len(ranks)} ranks"
            )
        for sid, rank in zip(ids, ranks):
            out[sid] = extract_panel(soup, modal_data, cat_key, rank)

    # Emit as a JS file that hangs the data off window.
    js = (
        "// Generated by tools/extract_report.py — DO NOT EDIT BY HAND.\n"
        "// Source: report.html (per-system rich content + quote samples).\n"
        "window.systemsRichData = "
        + json.dumps(out, indent=2, ensure_ascii=False)
        + ";\n"
    )
    OUTPUT.write_text(js, encoding="utf-8")
    print(f"Wrote {OUTPUT} ({len(out)} systems)")


if __name__ == "__main__":
    main()
