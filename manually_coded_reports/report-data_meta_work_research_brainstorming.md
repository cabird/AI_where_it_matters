# Qualitative Analysis for Research & Brainstorming
# Category: Meta Work

This document is an AI-generated synthesis of manually coded survey responses from software developers about AI usage in Research & Brainstorming (Meta-Work). The analysis preserves the research team's thematic structure and descriptions, weaves participant quotes into coherent narratives, identifies patterns and tensions across themes, and offers design implications grounded in the coded data.

---

## Executive Summary

- Developers want AI to synthesize large, distributed information sources and produce concise, source-linked summaries to speed research and documentation (e.g., Participants 20, 336).  
- They want AI as a brainstorming partner that can generate ideas and break down roadmaps, but not as a substitute for human judgment or creativity (e.g., Participants 160, 17).  
- Personalization—contextual answers, tailored learning materials, and long-term memory—is valued, provided users retain control over what the AI remembers (e.g., Participants 280, 360).  
- Major barriers are quality and trust: outdated data, hallucinations, and poor outputs drive developers to prefer official documentation over AI when reliability is uncertain (e.g., Participants 44, 353).  
- Designers should prioritize source-linked synthesis, human-in-the-loop brainstorming modes, personalization with explicit controls, and transparent confidence/provenance indicators; avoid promoting AI as an authoritative decision maker or hiding sources.  
- Recommendation: Build AI tools that are explicitly labeled and tiered (e.g., “synthesis,” “ideas,” “personal tutor”), include verification affordances, and default to facilitation with clear human sign-off for decisions to align with developer expectations and preserve learning opportunities.

---


## 1) Core Themes

### A. Where AI is Wanted

#### Theme: 1. Information Synthesis & Summarization

Participants consistently describe a desire for AI that can gather, collate, and summarize relevant information from large or distributed sources to make research more efficient. The researchers’ description—that “AI should gather, collate, and summarize relevant information from large or distributed sources, improving efficiency in research”—captures this need: developers want an assistant that reduces the time spent hunting through documentation and disparate resources. Several participants framed this as being akin to “talking to someone who knows about a subject” rather than reading everything themselves, and emphasized that citations and verifiable sourcing are essential to trust the output (e.g., “AI is great for research, as long as it cites sources…” (Participant 20)).

Context and motivation center on efficiency and triage: developers want AI to surface the most relevant content, produce concise overviews, and potentially generate documentation artifacts automatically from code or collected materials. However, they imposed clear boundaries: outputs must be reviewed, and hallucinations are a known risk, so AI-produced summaries are starting points rather than final authorities. For example, a participant noted documentation generation is attractive “as long as there is detailed review of the output, as hallucinations are common” (Participant 66). Desired outcomes include faster onboarding, succinct syntheses of large literature sets, and auto-collation of cross-source resources, while preserving human verification.

**Representative quotes**:
- *"AI is great for research, as long as it cites sources. It's more like talking to someone who knows about a subject than having to read through documentation."* (Participant 20)  
- *"Researching should be where AI plays a big role in the future, to easily pick out relevant information from large amounts of research data."* (Participant 28)  
- *"Automatic documentation from code, auto collation and summarization of resources from different sources."* (Participant 336)

---

#### Theme: 2. Brainstorming & Ideation Support

Participants want AI to function as a thought partner that helps generate ideas, surface alternative approaches, and break down high-level concepts into actionable plans. The researchers’ description—that “AI should act as a thought partner, helping brainstorm technical solutions, generate ideas, or create project roadmaps when given high-level prompts”—reflects developers’ framing of AI as a facilitator for ideation rather than a decision-maker. Many see AI as useful for producing roadmaps or task breakdowns from rough project concepts (“Create roadmap and breakdown of tasks when given high level idea of the next projects,” Participant 160) and as a sounding board to iterate on technical directions (“AI...as a sounding board for research,” Participant 17).

Motivation is mainly to accelerate the early, generative phases of work and to expose developers to alternatives or technologies they might not have considered. Boundaries are similar to other themes: humans must validate and not accept first-pass AI ideas uncritically (Participant 217). Participants emphasized using AI to augment creativity and lower the cost of exploring options, while ensuring final ideas remain human-curated and refined.

**Representative quotes**:
- *"AI shouldn't be involved in most of these tasks, but can be OK... as a sounding board for research, as long as there is human validation…"* (Participant 17)  
- *"Create roadmap and breakdown of tasks when given high level idea of the next projects."* (Participant 160)  
- *"An AI that can help with research and brainstorming of technical things would be very useful."* (Participant 189)

---

#### Theme: 3. Adaptive & Personalized Assistance

Developers expressed interest in AI that adapts to their individual context, prior knowledge, and ongoing projects—offering tailored learning materials, continuity across sessions, and contextual recommendations. The coded description—“AI should adapt to the developer’s context, knowledge, and projects — providing learning support, tailored materials, and continuity through memory”—matches participants’ desire for tools that reduce repetitive setup and deliver progressively relevant suggestions. Several respondents emphasized learning and onboarding benefits: AI that “takes into account my own knowledge and experience to provide study materials” (Participant 280) or that accelerates learning new technologies (Participant 195).

Desired outcomes include personalized study plans, contextual answers that avoid re-explaining basics, and long-term memory so the assistant understands project histories (“A contextual AI assistant with long term memory that understands my needs and my projects,” Participant 360). Boundaries include privacy and explicit control over what is remembered; although not heavily detailed in these quotes, the demand for contextual memory implies expectations for transparent control and opt-in continuity.

**Representative quotes**:
- *"Learning new technologies as well as Research. ML currently cuts down time on these tasks significantly for me, and I like to see that continue."* (Participant 195)  
- *"Research and learning. I want it take into account my own knowledge and experience to provide study materials."* (Participant 280)  
- *"A contextual AI assistant with long term memory that understands my needs and my projects."* (Participant 360)

---

### B. Where AI is Not Wanted

#### Theme: Quality and Trust Issues

A central barrier to adopting AI in research and brainstorming is lack of trust in the accuracy, timeliness, and overall quality of outputs. The researchers’ description—that participants cite outdated info, hallucinations, or poor quality and therefore prefer validated sources—captures recurring concerns. Respondents worry that AI may provide incorrect or stale information, and several explicitly prefer consulting “official technical documentation” over AI summaries (Participant 353). Experiences of “bad personal experience (output is not that good)” (Participant 292) amplify skepticism.

Context and feared outcomes are concrete: bad guidance during research can lead to wasted time or incorrect technical choices. Participants therefore advocate either avoiding AI for critical research tasks or limiting it to preliminary triage where human verification follows. Timeliness and source-verification are decisive conditions—without up-to-date data and clear provenance, developers will not rely on AI for substantive decisions.

**Representative quotes**:
- *"Research and Learning new technologies requires nuanced knowledge and AI is not reliable in providing up to date information…"* (Participant 44)  
- *"I don't trust Copilot for helping me research, it's often wrong or outdated… I prefer going straight to official technical documentation."* (Participant 353)  
- *"Research and Brainstorming, primarily because of bad personal experience (output is not that good)."* (Participant 292)

---

#### Theme: Avoid Intellectual Offloading

Several participants view research and brainstorming as inherently human, creative exercises that should not be outsourced to AI. The researchers’ description—that AI risks stifling originality, reducing learning opportunities, or replacing valuable effort—reflects a normative stance: engaging in these tasks is part of professional growth. Respondents fear that relying on AI could diminish their skill development and reduce deep understanding (e.g., “Research and brainstorming require a lot of human creativity and mental efforts… I don't want AI to interfere,” Participant 18).

The concern is less about technical capability and more about preserving cognitive work: developers want to be challenged and grow through the process of exploration. This yields a clear boundary—AI may be allowed to assist with mundane or repetitive aspects, but should not replace the cognitive labor involved in coming up with original designs or significant decisions. Participants also noted that AI tends to reproduce existing patterns rather than create genuinely new ideas (“Coming up with new ideas since it's more designed to output something it's already seen before,” Participant 186).

**Representative quotes**:
- *"Research and brainstorming require a lot of human creativity and mental efforts… I don't want AI to interfere."* (Participant 18)  
- *"Coming up with new ideas since it's more designed to output something it's already seen before."* (Participant 186)  
- *"Brainstorming because I want to use my own brain and force myself to think."* (Participant 366)

---

#### Theme: AI as a Facilitator, Not Decision Maker - Need for oversight

Many participants accept AI in a strictly supporting role but insist on human control over judgments and final decisions. The researchers’ description—that some are okay with AI surfacing prompts or asking questions, but humans must retain control—captures the prevailing expectation for oversight. Respondents want AI to ask clarifying questions, surface alternatives, and accelerate exploration, but they repeatedly stressed validating AI outputs and not deferring to them for “deep thought and analysis” (Participant 142).

This theme ties closely to trust and intellectual offloading: even when AI provides useful suggestions, developers want mechanisms for verification and explicit sign-off. The boundary is clear: AI can facilitate and prompt, but critical analysis, design decisions, and final acceptance must remain human-led. Participants framed acceptable AI behavior as “help[ing] ask questions to facilitate” but not replacing reasoned human choice (Participant 217).

**Representative quotes**:
- *"I don't want to give full control to AI for deep thought and analysis for research… I would like to validate its work."* (Participant 142)  
- *"Research and brainstorming are exercises it can help ask questions to facilitate, but we shouldn't go with its first ideas…"* (Participant 217)  
- *"I think AI can help with part of research but it's not good enough to come up with new solutions yet."* (Participant 262)

---

## 2) Cross-Cutting Patterns

- Complementary desires and concerns: Developers simultaneously want AI to accelerate information retrieval, ideation, and personalized learning, while fearing poor quality, outdated data, and creativity loss. These complementary threads form a conditional acceptance: AI is valuable when it shortens boring, time-consuming tasks (synthesis, triage) or acts as an idea generator, but becomes problematic when it produces unverified facts or replaces the cognitive work that developers value.

- Conditional acceptance: Across themes, acceptance is contingent on explicit conditions—citation and provenance for synthesized information (Participant 20), human validation of brainstormed ideas (Participant 17, 217), and contextual adaptation that respects the developer’s knowledge (Participant 280). Participants expect control mechanisms (validation, opt-in memory) and transparency about sources and recency.

- Task-specific nuances: Research Brainstorming is unique because it combines discovery, creativity, and learning. Unlike routine code generation, it requires nuanced, up-to-date knowledge and benefits from exploratory, divergent thinking. This makes it sensitive to hallucinations and to tools that might short-circuit learning; participants therefore treat brainstorming as a space where AI should assist but not dominate.

- Trust and control dynamics: Trust is the hinge on which acceptance rotates. Developers want AI outputs that are verifiable and auditable; when trust is low (outdated info, hallucinations), they revert to official documentation. Control expectations cluster around facilitation (AI asks questions, suggests alternatives) rather than automation (AI deciding or endorsing solutions). Many responses reflect an uneasy balance: willing to use AI for efficiency gains but only with clear oversight and provenance.

---

## 3) Outliers and Edge Cases

- Minority perspectives that contradict dominant themes: A few responses show a stronger openness to AI handling more substantive tasks if quality improves (e.g., willingness to use AI for research provided outputs are high quality). These voices suggest that threshold improvements in reliability could shift attitudes toward greater delegation.

- Unique insights that don't fit neatly: Participant 336 explicitly mentions “automatic documentation from code, auto collation” as a research-adjacent use—this straddles synthesis and engineering documentation and hints at workflows where research output becomes living artifacts tied to code. That operational perspective is more concrete than abstract brainstorming.

- Ambivalent responses: Several participants expressed both positive and negative views in the same response (e.g., Participant 17 accepts AI as a sounding board but insists on validation). These ambivalences underscore conditionality rather than binary acceptance.

- Contradictions within individuals: Some respondents simultaneously praise AI for learning acceleration (Participant 195) and distrust it for reliability on nuanced topics (Participant 44); this shows developers will use AI for low-risk, time-saving tasks while avoiding it in high-stakes or deeply technical research without verification.

---

## 4) Implications for AI Tool Design

Designers building AI tools for Research Brainstorming should treat the assistant as a configurable collaborator: emphasize accurate synthesis with provenance, support ideation without decision-making authority, and offer adaptive personalization while preserving developer control and opportunities for learning.

#### Key "Must Haves" (features designers should prioritize)

- **Source-linked Information Synthesis**
  - Capability: Summarize and collate from multiple sources with explicit citations, timestamps, and source quality indicators so developers can validate claims quickly.
  - Rationale: Participants repeatedly demanded citations and up-to-date information as prerequisites for trusting summaries (Participants 20, 353).

- **Brainstorming Mode with Human-in-the-Loop**
  - Capability: Provide idea generation and roadmap breakdowns that are explicitly labeled as suggestions, include alternative approaches, and offer “ask clarifying questions” prompts to surface assumptions.
  - Rationale: Developers want AI as a thought partner to generate and structure ideas while keeping humans responsible for final choices (Participants 160, 17).

- **Contextual Personalization and Memory Controls**
  - Capability: Adapt recommendations and learning materials to the developer’s known skill level and project context, with clear opt-in/out controls for long-term memory and project histories.
  - Rationale: Participants asked for tailored study materials and continuity across projects while implying desire for control over what is remembered (Participants 280, 360).

- **Confidence & Verification Tools**
  - Capability: Present confidence scores, provenance links, and quick verification tooling (e.g., “show me the source,” “compare against official docs”) to make quality judgments easier.
  - Rationale: Given concerns about hallucinations and outdated content, transparent confidence indicators support faster human validation (Participants 66, 44).

#### Key "Must Not Haves" (design guardrails)

- **Do not present unverified assertions as facts**
  - Risk: Hallucinated or outdated outputs can mislead research and decisions.
  - Example: Participants explicitly distrust AI that is “often wrong or outdated” (Participant 353) and warn about hallucinations (Participant 66).

- **Do not replace human creative effort**
  - Risk: Over-automation can reduce learning and stifle original thinking.
  - Example: Multiple respondents insisted brainstorming is a human-led creative exercise and should not be outsourced (Participants 18, 366).

- **Do not assume authority or make final decisions**
  - Risk: Allowing AI to auto-select or finalize solutions without human sign-off undermines developer control and can produce poor outcomes.
  - Example: Participants want to validate AI work and keep decision authority (Participants 142, 217).

- **Do not hide provenance or recency of information**
  - Risk: Lack of source visibility undermines trust and leads developers back to official documentation.
  - Example: Preference for “going straight to official technical documentation” when provenance is unclear (Participant 353).
