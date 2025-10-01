# Thematic Analysis: Documentation

**Task Category:** Meta Work\n**Task Name:** Documentation\n\n**Generated:** 2025-10-01 00:12:19\n**Number of Participants:** 28\n**Data Source:** `data-meta_work-documentation.csv`\n\n---\n\n# Thematic Analysis — Documentation (Meta Work)

This report synthesizes manually coded survey responses from software developers about AI usage in Documentation within the Meta Work category. I preserved the research team’s themes, codes, and descriptions and integrated participant quotes to produce a coherent analysis. The approach was to aggregate codes into narrative themes, count unique participants cited per theme, surface tensions and boundary conditions, and derive implications and concrete design guidance for AI documentation tooling.

---

## 1) Core Themes

### A. Where AI is Wanted

#### Theme: 1. Auto-document generation, maintenance, and updates

Participants imagine AI doing the heavy lifting of producing and keeping documentation aligned with the evolving codebase. They want tools that scan checked-in code, pull context from PRs and tests, and synthesize those artifacts into readable documentation—reducing the manual, repetitive work developers find tedious. As one participant put it, “Having AI help create and maintain documentation based on checked-in code, PRs, tests, etc would be a game changer for documentation.” (Participant 27). The motivation is practical: save time, avoid stale docs, and ensure code-to-doc parity.

Beyond line-level docs, participants also expect AI to generate higher-level outputs—progress reports, architectural diagrams, and alignment artifacts—so documentation can serve project management and cross-team communication. For example: “I would like the AI to 1) automatically generate progress reports using my ADOs … [and] automatically generating documentation from my code.” (Participant 72). However, respondents frequently noted boundaries: generated content should be reviewable and not published without human approval, and AI should respect contextual cues (e.g., which level of detail is appropriate).

Sub-themes identified:
- **Auto-generate documentation from code/PRs/tests**: Participants want AI to automatically produce documentation by analyzing existing artifacts like code, PRs, and tests.
- **Keep documentation up-to-date**: Calls for AI to maintain accuracy and freshness of documentation, fixing the problem of docs becoming stale or incomplete.
- **Generate progress reports/architecture docs**: Extends documentation generation into higher-level meta outputs such as project reports and system architecture diagrams.

Number of participants: ~10 participants (unique PIDs: 27, 102, 332, 369, 126, 228, 262, 72, 272, 403; rounded to nearest 5)

Representative quotes:
- *“Having AI help create and maintain documentation based on checked-in code, PRs, tests, etc would be a game changer for documentation.”* (Participant 27)
- *“I think the biggest role that AI can assist in is maintaining documentation to be accurate and up-to-date. Missing or incomplete or outdated documentation is arguably the biggest pitfall of development.”* (Participant 126)
- *“I would like the AI to 1) automatically generate progress reports using my ADOs … [and] automatically generating documentation from my code.”* (Participant 72)

Confidence: High

---

#### Theme: 2. Contextual synthesis from different sources and summarization

Developers want AI to act as a context aggregator—taking meeting transcripts, Slack threads, code comments, and scattered documents, and synthesizing them into concise, actionable documentation. This includes summarizing discussions and surfacing the rationale behind decisions so that documentation becomes a living record rather than a set of disconnected files. One participant summarized this desire: “Summarizing meetings and communication, helping draft documentation.” (Participant 217). The motivation is to reduce the cognitive load of reconstructing context from many sources when writing docs or onboarding others.

Closely related is the ability to collate relevant artifacts into a unified view so answers are easier to find. Respondents expect AI to identify and bring together the right set of resources—code snippets, design notes, and external references—so documentation authors and readers don’t need to hunt across repositories and channels. Boundaries mentioned include the need for traceability and the requirement that synthesized outputs point back to original sources.

Sub-themes identified:
- **Summarization of meetings/discussions**: AI is envisioned as summarizing meetings, communications, or discussions into concise outputs.
- **Collation of resources/documents**: Focused on AI pulling together disparate resources (docs, project artifacts, communications) into a unified view.

Number of participants: ~5 participants (unique PIDs: 217, 172, 206, 336, 44; rounded to nearest 5)

Representative quotes:
- *“Summarizing meetings and communication, helping draft documentation.”* (Participant 217)
- *“Coalescing relevant documentation and making answers easier to find.”* (Participant 206)
- *“Automatic documentation from code, auto collation and summarization of resources from different sources.”* (Participant 336)

Confidence: Medium

---

#### Theme: 3. Document search, indexing, and discovery

A common complaint is that existing search across docs and code is insufficient; participants want AI to act as a “smart” search and discovery layer that can find relevant documentation, point to authoritative sources, and return traceable references. One participant noted limitations with current tools: “Searching documentation and code repositories hasn’t usually worked well when using Copilot – improvements in this space would be helpful.” (Participant 47). The desired outcome is faster problem-solving and less time spent chasing down the right doc or example.

Participants stressed that search results must be trustworthy—AI should ideally link back to the original, authoritative documents rather than only offering synthesized answers that might be unverifiable. This reflects a preference for discovery aids that reduce friction while preserving source traceability.

Sub-themes identified:
- **Smart search for documentation**: Dissatisfaction with current search; respondents want AI to function as a better discovery engine.

Number of participants: ~5 participants (unique PIDs: 47, 167, 187; rounded to nearest 5)

Representative quotes:
- *“Searching documentation and code repositories hasn’t usually worked well when using Copilot – improvements in this space would be helpful.”* (Participant 47)
- *“I use AI to find pertinent documentation … As long as the AI’s response is traceable to an authoritative source, I’m happy.”* (Participant 167)
- *“Use as a ‘smart’ search engine to help discover relevant information, ideally directing to accurate (non-ai) references/documentation/etc.”* (Participant 187)

Confidence: Low

---

#### Theme: 4. AI for newcomer onboarding and knowledge transfer support

Participants see AI as a force-multiplier for onboarding and knowledge transfer—generating onboarding walkthroughs, training plans, and troubleshooting guides that help new team members ramp quickly. For instance: “Creating and updating documentation. Walkthrough onboarding process.” (Participant 375). Developers expect auto-generated training plans and onboarding resources that reduce the dependency on scarce senior engineers for repetitive orientation tasks.

There is also interest in AI helping newcomers find resources and offering “first-pass” troubleshooting to surface likely causes and relevant docs. That said, respondents emphasized that the personal, mentorship aspects of onboarding remain human roles—AI should assist with logistics and content, not replace human-led socialization.

Sub-themes identified:
- **Onboarding walkthroughs**: Envisions AI creating onboarding walkthroughs or interactive support to ease new developer entry.
- **Training plans and troubleshooting**: Calls for AI to generate training plans for newcomers and help troubleshoot documentation during onboarding.

Number of participants: ~5 participants (unique PIDs: 375, 272, 271, 157, 385; rounded to nearest 5)

Representative quotes:
- *“Creating and updating documentation. Walkthrough onboarding process.”* (Participant 375)
- *“Auto-generated training plan for new onboardings.”* (Participant 272)
- *“Assist in onboarding, documentation and learning new technologies.”* (Participant 157)

Confidence: Medium

---

### B. Where AI is Not Wanted

#### Theme: Need for Human Oversight

Across safety-conscious respondents, the dominant refrain was that AI-generated documentation must not be treated as authoritative without human review. The concern is that AI can hallucinate, omit critical nuance, or communicate inaccuracies—so outputs should be vetted before being published or used for onboarding and customer communication. “AI should definitely not be the primary factor in documentation, communication, or mentoring/onboarding. Its tendency to hallucinate is too great to risk in these areas without significant human oversight.” (Participant 17). Participants requested varying levels of oversight depending on the task and stressed the need to prevent autonomous dissemination of content (e.g., sending emails or publishing docs) without explicit human approval.

Sub-themes identified:
- **(No code)**: AI documentation outputs must always be reviewed by humans before dissemination to avoid risks from errors or hallucinations.

Number of participants: ~5 participants (unique PIDs: 17, 72, 204; rounded to nearest 5)

Representative quotes:
- *“AI should definitely not be the primary factor in documentation, communication, or mentoring/onboarding. Its tendency to hallucinate is too great to risk in these areas without significant human oversight.”* (Participant 17)
- *“I don't want it to send emails on my behalf without me proof reading first. Same applies to the documentation generated by the AI; I don't want it to send those documents, or share them, without my approval.”* (Participant 72)
- *“I believe AI can handle all of them to some extent, but I wouldn't want AI to be entirely autonomous. There should still be varying levels of human oversight depending on the task.”* (Participant 204)

Confidence: Low

---

#### Theme: Loss of Personalization

Some developers resist AI in authorship roles because they value their own voice and the social function of personal writing—especially when a human reader is expected. They fear that AI-generated content will feel generic, misrepresent intent, or undermine the authenticity of mentorship and onboarding. One participant put this bluntly: “I do not use AI to write emails or docs. If I expect a human to read it, I'm going to take the time to write it myself.” (Participant 167). Another framed mentorship as inherently personal: “Filling out details of documentation (I don't trust a stochastic parrot to be capable of getting it right, no matter how refined); mentoring and onboarding (building the personal connection is the point!! (but there are places AI can help))” (Participant 385).

Sub-themes identified:
- **(No code)**: Developers value their authentic voice and do not want AI to replace personal authorship in documentation.

Number of participants: ~5 participants (unique PIDs: 167, 385; rounded to nearest 5)

Representative quotes:
- *“I do not use AI to write emails or docs. If I expect a human to read it, I'm going to take the time to write it myself.”* (Participant 167)
- *“Filling out details of documentation (I don't trust a stochastic parrot to be capable of getting it right, no matter how refined); mentoring and onboarding (building the personal connection is the point!! (but there are places AI can help))”* (Participant 385)

Confidence: Low

---

#### Theme: Contextual Limitations

Respondents emphasized that company-specific language, internal naming conventions, permissions, and incomplete internal knowledge bases limit AI effectiveness. Internal docs often use idiosyncratic labels and reside behind permission barriers; if the AI cannot access or interpret these artifacts, its outputs can be misleading or incomplete. “Internal documentation retrieval, because in MS we love to give names to everything, and internal docs have a lot of permission barriers. AI cannot get all related information, and some terminology can be misleading for AI.” (Participant 232). This creates a boundary where AI can help with general tasks but fails on tightly-coupled, organization-specific documentation unless it can be trained on or given access to internal corpora and metadata.

Sub-themes identified:
- **(No code)**: AI struggles with company-specific jargon, organizational structures, permissions, and incomplete internal knowledge, which limits its usefulness.

Number of participants: ~5 participants (unique PIDs: 232, 327; rounded to nearest 5)

Representative quotes:
- *“Internal documentation retrieval, because in MS we love to give names to everything, and internal docs have a lot of permission barriers. AI cannot get all related information, and some terminology can be misleading for AI.”* (Participant 232)
- *“Onboarding and documentation. When the related knowledge is not included, it can't handle it.”* (Participant 327)

Confidence: Low

---

#### Theme: Quality and Trust Issues

Trust implications surfaced both as a general fear of hallucination and as concern about shallow domain knowledge. Participants flagged that AI can fabricate details (hallucinations) or lack the nuance required for domain- and company-specific documentation. “AI should definitely not be the primary factor in documentation, communication, or mentoring/onboarding. Its tendency to hallucinate is too great to risk in these areas without significant human oversight.” (Participant 17). Others observed that for specialized customer-facing communications or precise technical wording, standard AI models may not be adequate: “Customer communication for me is rare and precise enough that standard chatGPT AI is not that useful. Same goes for documentation.” (Participant 189).

These concerns create a trust barrier: AI can be useful for first drafts or discovery, but outputs must be verifiable and subject-to-human correction for any high-risk or customer-facing artifacts.

Sub-themes identified:
- **Hallucinations / False Information**: Concerns about AI fabricating or inserting misleading content into documentation.
- **Limited Support with Domain/Company-Specific Knowledge**: AI lacks depth for specialized, domain-specific, or highly contextual documentation tasks.

Number of participants: ~5 participants (unique PIDs: 17, 385, 189, 379; rounded to nearest 5)

Representative quotes:
- *“AI should definitely not be the primary factor in documentation, communication, or mentoring/onboarding. Its tendency to hallucinate is too great to risk in these areas without significant human oversight.”* (Participant 17)
- *“Filling out details of documentation (I don't trust a stochastic parrot to be capable of getting it right, no matter how refined)...”* (Participant 385)
- *“Customer communication for me is rare and precise enough that standard chatGPT AI is not that useful. Same goes for documentation.”* (Participant 189)

Confidence: Low

---

## 2) Cross-Cutting Patterns

- Complementary desires and concerns: Developers consistently want automation for repetitive, time-consuming documentation tasks (generation, updating, collation) but simultaneously fear unvetted AI outputs and loss of personal voice. This produces a two-sided demand: AI that accelerates content creation while exposing provenance and enabling human review.

- Conditional acceptance: Across themes, acceptance is conditional. Participants want AI to synthesize, summarize, and suggest—but only within guardrails: traceability to authoritative sources, explicit review workflows, and contextual awareness (e.g., company jargon, permissions). Onboarding and customer-facing docs require higher scrutiny than internal drafts.

- Task-specific nuances: Documentation is judged differently from coding tasks. While code suggestions might be quickly validated by running tests, documentation errors can mislead many users and persist; thus documentation tooling demands stronger provenance, review, and domain-aware models.

- Trust and control dynamics: There's a clear preference for human-in-the-loop systems. Developers want AI to be an assistant rather than an autonomous author or dispatcher. The balance sought is pragmatic: AI accelerates discovery and first drafts, humans validate and humanize the final artifacts.

## 3) Outliers and Edge Cases

- Minority resistance to AI authorship: A small set of participants refuse AI-written docs entirely for any human-read material, citing authenticity and trust—this is more absolutist than the general conditional stance.

- Ambivalent respondents: Some participants simultaneously expressed enthusiasm for AI’s potential to create onboarding/training plans and worry about its inability to handle company-specific terminology—indicating they see AI as useful in principle but insufficient in practice without improved access and training.

- Reuse vs. originality tension: A few comments hint at wanting AI to convert code to docs and “vice versa” (Participant 332), implying more advanced round-trip capabilities (synthesis + code generation) that go beyond present-day summarization tools.

- Contradictions within individuals: Participant 72 asked for automated generation of progress reports and documentation but also insisted AI should not send or share documents without human approval—showing willingness to automate creation but not distribution.

## 4) Implications for AI Tool Design

Overall, developers want AI that reduces the friction of creating, finding, and maintaining documentation, but they demand strong provenance, reviewability, and contextual grounding. Tools that treat AI as an assistant—producing traceable drafts, surfacing source links, and enabling easy human edits—will better align with developer expectations.

#### Key "Must Haves" (features designers should prioritize)

- **Automated doc generation from code and PRs**
  - Capability: Parse code, commit messages, PR descriptions, and tests to auto-generate function-level and high-level documentation with suggested edits when code changes.
  - Rationale: Participants want to reduce tedious documentation work and keep docs current. (“Analyze the code I just wrote and write documentation…” — Participant 102)
- **Automatic update detection and change logs**
  - Capability: Detect code changes that invalidate existing docs and present suggested updates or a change summary for human review.
  - Rationale: Prevents stale documentation; participants explicitly asked for automatic documentation updates. (“Automatic documentation updates based on code changes.” — Participant 262)
- **Contextual synthesis and summarization**
  - Capability: Aggregate meeting notes, PR discussions, and disparate docs into concise summaries and decision logs, with links to original artifacts.
  - Rationale: Helps capture rationale and decisions and reduces time reconstructing context. (“Summarizing meetings and communication, helping draft documentation.” — Participant 217)
- **Smart, provenance-aware search**
  - Capability: Search across code and document corpora with AI-augmented ranking and explicit source citations for every generated answer.
  - Rationale: Developers want discovery that points to authoritative sources and is traceable. (“As long as the AI’s response is traceable to an authoritative source, I’m happy.” — Participant 167)
- **Onboarding templates and troubleshooting guides**
  - Capability: Auto-generate role-specific onboarding checklists, learning paths, and first-pass troubleshooting steps drawn from team-specific resources.
  - Rationale: Streamlines ramp-up for newcomers while freeing mentors for relational tasks. (“Auto-generated training plan for new onboardings.” — Participant 272)

#### Key "Must Not Haves" (design guardrails)

- **Autonomous publication or distribution**
  - Risk: AI publishing docs, sending emails, or sharing content without explicit human approval can propagate errors and reduce accountability.
  - Example: “I don't want it to send emails on my behalf without me proof reading first.” (Participant 72)
- **Opaque, unverifiable answers (no provenance)**
  - Risk: Responses without links to sources undermine trust and make hallucinations more dangerous.
  - Example: “Use as a ‘smart’ search engine… ideally directing to accurate (non-ai) references/documentation/etc.” (Participant 187)
- **Replacing human voice in people-facing content**
  - Risk: AI-authored communications for mentorship, onboarding, or sensitive customer engagement can diminish personalization.
  - Example: “If I expect a human to read it, I'm going to take the time to write it myself.” (Participant 167)
- **Ignoring company-specific context and permissions**
  - Risk: Producing content that assumes wrong terms or lacks access to private docs leads to misleading outputs.
  - Example: “AI cannot get all related information, and some terminology can be misleading for AI.” (Participant 232)

#### Design Patterns to Resolve Tensions

- Human-in-the-loop draft-and-approve: Present AI-generated docs as editable drafts with annotated provenance and a lightweight review workflow (e.g., “suggested updates” queue) so humans retain final sign-off while benefiting from automation.

- Source-first answers: Always attach the minimal set of links and artifacts that informed an AI-generated passage; support an “expand provenance” mode where users can trace sentences back to commits, PRs, or meeting notes.

- Persona-aware templates with human override: Provide default templates for onboarding and reports that can be customized to preserve personal voice; include prompts that encourage authors to inject personal notes before publishing.

- Scoped access and contextual adapters: Allow teams to attach vetted internal corpora and terminology maps (glossaries, naming conventions) to the AI so it can operate with organization-specific context while respecting permissions.

---

## Executive Summary

- Developers want AI to automate repetitive documentation tasks: auto-generate docs from code/PRs/tests, keep docs up-to-date, and produce higher-level artifacts like progress reports and architecture diagrams.
- They also want AI to synthesize context across meetings, PRs, and documents and to act as a provenance-aware discovery layer (smart search).
- Critical design implication: AI must produce traceable, editable drafts and never be allowed to autonomously publish or distribute documentation without explicit human sign-off.
- Another implication: Tools must support organization-specific context (terminology, permissions) and expose provenance to overcome hallucination and trust issues.
- Notable tension: Strong desire for automation conflicts with fears about hallucination and loss of personal voice—resolvable by human-in-the-loop workflows and persona-aware templates.
- Forward-looking recommendation: Build documentation AI that emphasizes draft generation + source traceability + simple approval workflows; prioritize integrations with code, PR systems, and meeting artifacts so outputs are both useful and verifiable.