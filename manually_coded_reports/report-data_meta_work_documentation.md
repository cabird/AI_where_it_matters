# Qualitative Analysis for Documentation
# Category: Meta-Work

This document is an AI-generated synthesis of manually coded survey responses about AI usage in Documentation (Meta-Work). I synthesized the human-coded themes and quotes, preserved the research team’s thematic structure and code labels, and produced integrated narratives, patterns, and design implications based on the provided excerpts.

---

## Executive Summary

- Developers want AI to automate and maintain documentation (from code/PRs/tests), synthesize dispersed context, improve discovery, and support onboarding — to save time and reduce stale docs.
- Developers do not want AI to act autonomously, to replace personal authorship for human-facing docs, or to present unchecked assertions without provenance.
- Critical design implication: build tools that generate drafts and suggestions but require human review and provide clear provenance and confidence signals.
- Critical design implication: integrate with internal permissions and vocabularies so AI can reliably access and interpret company-specific sources.
- Notable tension: strong desire for automation is balanced by concerns about hallucinations, loss of voice, and contextual limitations — acceptance is conditional.
- Recommendation: prioritize features for auto-generation, contextual summarization, and smart search with mandatory approval flows, source citations, and role-aware onboarding capabilities.

---


## 1) Core Themes

### A. Where AI is Wanted

#### Theme: 1. Auto-document generation, maintenance, and updates

Participants strongly want AI to reduce the manual burden of producing and keeping documentation current. The code Auto-generate documentation from code/PRs/tests captures requests for AI to analyze code artifacts and produce relevant documentation automatically — “Having AI help create and maintain documentation based on checked-in code, PRs, tests, etc would be a game changer for documentation” (Participant 27). This desire reflects motivation to capture technical intent and context close to where work happens so that documentation is less likely to be omitted or left outdated.

Closely linked is the code Keep documentation up-to-date: respondents see AI as a solution to the pervasive problem of stale or missing docs. They want continuous or event-triggered updates — for example, “Automatic documentation updates based on code changes” (Participant 262) — so documentation stays aligned with implementation. Participants also envision AI producing higher-level outputs under Generate progress reports/architecture docs, such as project progress summaries and architecture diagrams, to support coordination and visibility across teams (“I would like the AI to 1) automatically generate progress reports using my ADOs … [and] automatically generating documentation from my code.” — Participant 72). Boundaries noted include the expectation that these outputs be accurate and integrated with existing workflows; participants often imply they want AI to handle tedious or repetitive parts while humans validate higher-level judgments.

**Sub-themes identified:**
- **Auto-generate documentation from code/PRs/tests**: Participants want AI to automatically produce documentation by analyzing existing artifacts like code, PRs, and tests.
- **Keep documentation up-to-date**: Calls for AI to maintain accuracy and freshness of documentation, fixing the problem of docs becoming stale or incomplete.
- **Generate progress reports/architecture docs**: Extends documentation generation into higher-level meta outputs such as project reports and system architecture diagrams.

**Representative quotes**:
- *“Having AI help create and maintain documentation based on checked-in code, PRs, tests, etc would be a game changer for documentation.”* (Participant 27)
- *“Analyze the code I just wrote and write documentation that is relevant and adds the relevant context.”* (Participant 102)
- *“Automatic documentation updates based on code changes.”* (Participant 262)

---

#### Theme: 2. Contextual synthesis from different sources and summarization

Participants want AI to act as an integrator: to synthesize meeting discussions, decisions, and dispersed artifacts into concise, context-rich documentation. The code Summarization of meetings/discussions reflects requests for AI to turn conversations and communications into usable documentation and decision logs — “Summarizing meetings and communication, helping draft documentation.” (Participant 217). This helps capture ephemeral knowledge that otherwise vanishes after meetings.

The code Collation of resources/documents emphasizes pulling together documents, code, tickets, and conversational threads into a unified view so answers are easier to find and more complete. One participant framed this as “Coalescing relevant documentation and making answers easier to find” (Participant 206). The desired outcome is quicker onboarding, fewer duplicated efforts, and documentation that reflects cross-source context rather than isolated artifacts. Participants implicitly want the AI to surface provenance and context so synthesized outputs remain traceable.

**Sub-themes identified:**
- **Summarization of meetings/discussions**: AI is envisioned as summarizing meetings, communications, or discussions into concise outputs.
- **Collation of resources/documents**: Focused on AI pulling together disparate resources (docs, project artifacts, communications) into a unified view.

**Representative quotes**:
- *“Summarizing meetings and communication, helping draft documentation.”* (Participant 217)
- *“I want AI to support meta work by … surfacing relevant context, summarizing discussions, and tracking decisions over time.”* (Participant 172)
- *“Automatic documentation from code, auto collation and summarization of resources from different sources.”* (Participant 336)

---

#### Theme: 3. Document search, indexing, and discovery

Participants report dissatisfaction with current search capabilities and see AI as a path to smarter discovery. The code Smart search for documentation describes a desire for an AI discovery engine that can locate authoritative sources, point to references, and return traceable answers — “Use as a ‘smart’ search engine to help discover relevant information, ideally directing to accurate (non-ai) references/documentation/etc.” (Participant 187). Several respondents emphasize the need for traceability: they will accept AI-derived answers when they can verify the source (“As long as the AI’s response is traceable to an authoritative source, I’m happy.” — Participant 167).

The motivation is efficiency and confidence: faster retrieval of the right docs, fewer wasted searches, and less time reconstructing context. Participants note limitations in existing tools (e.g., Copilot’s search shortcomings) and expect AI to meaningfully improve indexing and retrieval across repositories and documentation silos.

**Representative quotes**:
- *“Searching documentation and code repositories hasn’t usually worked well when using Copilot – improvements in this space would be helpful.”* (Participant 47)
- *“I use AI to find pertinent documentation … As long as the AI’s response is traceable to an authoritative source, I’m happy.”* (Participant 167)
- *“Use as a ‘smart’ search engine to help discover relevant information, ideally directing to accurate (non-ai) references/documentation/etc.”* (Participant 187)

---

#### Theme: 4. AI for newcomer onboarding and knowledge transfer support

Participants see clear value for AI in onboarding: creating walkthroughs, training plans, and troubleshooting support to accelerate knowledge transfer. The code Onboarding walkthroughs captures requests for AI-generated or updated walkthroughs to guide new hires through codebases and processes (“Creating and updating documentation. Walkthrough onboarding process.” — Participant 375). This can reduce time-to-productivity and reliance on ad-hoc mentor bandwidth.

The code Training plans and troubleshooting describes desires for structured, role-specific training materials and troubleshooting aids that help newcomers learn technologies and find the right resources — “Auto-generated training plan for new onboardings.” (Participant 272). Respondents also expect AI to assist with search and summaries during onboarding, but many imply that AI should augment human-led mentoring rather than replace the personal connection essential to socialization.

**Sub-themes identified:**
- **Onboarding walkthroughs**: Envisions AI creating onboarding walkthroughs or interactive support to ease new developer entry.
- **Training plans and troubleshooting**: Calls for AI to generate training plans for newcomers and help troubleshoot documentation during onboarding.

**Representative quotes**:
- *“Creating and updating documentation. Walkthrough onboarding process.”* (Participant 375)
- *“Auto-generated training plan for new onboardings.”* (Participant 272)
- *“Assist in onboarding, documentation and learning new technologies.”* (Participant 157)

---

### B. Where AI is Not Wanted

#### Theme: Need for Human Oversight

Across responses participants insist AI-generated documentation must be reviewed by humans before being shared or used for critical communication. The research description emphasizes that outputs “must always be reviewed by humans before dissemination to avoid risks from errors or hallucinations.” Concerns are practical: AI can hallucinate, misstate facts, or act with inappropriate autonomy, so human gatekeeping is seen as essential. For example, one participant said “AI should definitely not be the primary factor in documentation, communication, or mentoring/onboarding. Its tendency to hallucinate is too great to risk in these areas without significant human oversight.” (Participant 17). Another asked for explicit approval steps: “I don't want it to send emails on my behalf without me proof reading first. Same applies to the documentation generated by the AI; I don't want it to send those documents, or share them, without my approval.” (Participant 72).

The context here is risk management: participants accept AI as an assistive tool but want firm human-in-the-loop controls, varying oversight by task sensitivity. There is also an implied need for workflow features that make review easy and auditable.

**Representative quotes**:
- *“AI should definitely not be the primary factor in documentation, communication, or mentoring/onboarding. Its tendency to hallucinate is too great to risk in these areas without significant human oversight.”* (Participant 17)
- *“I don't want it to send emails on my behalf without me proof reading first. Same applies to the documentation generated by the AI; I don't want it to send those documents, or share them, without my approval.”* (Participant 72)
- *“I believe AI can handle all of them to some extent, but I wouldn't want AI to be entirely autonomous. There should still be varying levels of human oversight depending on the task.”* (Participant 204)

---

#### Theme: Loss of Personalization

Some developers resist using AI to author documentation or communications that will be read by humans because they value their authentic voice and personal judgement. The research description notes developers “do not want AI to replace personal authorship in documentation.” This is reflected in statements like “I do not use AI to write emails or docs. If I expect a human to read it, I'm going to take the time to write it myself.” (Participant 167). Another reinforced the mentoring aspect: “Filling out details of documentation (I don't trust a stochastic parrot to be capable of getting it right, no matter how refined); mentoring and onboarding (building the personal connection is the point!!...” (Participant 385).

The concern is both stylistic and relational: documentation and onboarding often carry tacit knowledge, tone, and relationship-building that participants believe AI cannot replicate. They accept AI for boilerplate or support tasks but want human-authored outputs preserved where authenticity matters.

**Representative quotes**:
- *“I do not use AI to write emails or docs. If I expect a human to read it, I'm going to take the time to write it myself.”* (Participant 167)
- *“Filling out details of documentation (I don't trust a stochastic parrot to be capable of getting it right, no matter how refined); mentoring and onboarding (building the personal connection is the point!! ...”* (Participant 385)
- *“I don't want it to send those documents, or share them, without my approval.”* (Participant 72)

---

#### Theme: Contextual Limitations

Participants highlight that AI struggles with company-specific jargon, internal naming conventions, permissions, and incomplete internal knowledge, limiting its usefulness for internal documentation tasks. The description underscores these limitations: “AI struggles with company-specific jargon, organizational structures, permissions, and incomplete internal knowledge.” One participant explained how internal naming and permission barriers confuse AI: “Internal documentation retrieval, because in MS we love to give names to everything, and internal docs have a lot of permission barriers. AI cannot get all related information, and some terminology can be misleading for AI.” (Participant 232). Another noted the problem in onboarding: “Onboarding and documentation. When the related knowledge is not included, it can't handle it.” (Participant 327).

The implication is that AI needs integrated, permission-aware access to internal sources and must be trained or adapted to organizational vocabularies to be effective; otherwise, generated outputs may be incomplete or misleading.

**Representative quotes**:
- *“Internal documentation retrieval, because in MS we love to give names to everything, and internal docs have a lot of permission barriers. AI cannot get all related information, and some terminology can be misleading for AI.”* (Participant 232)
- *“Onboarding and documentation. When the related knowledge is not included, it can't handle it.”* (Participant 327)
- *“Customer communication for me is rare and precise enough that standard chatGPT AI is not that useful. Same goes for documentation.”* (Participant 189)

---

#### Theme: Quality and Trust Issues

Participants explicitly worry about hallucinations and the AI’s limited support for domain- or company-specific knowledge. Under the code Hallucinations / False Information, respondents flagged the risk of fabricated or misleading content: “AI should definitely not be the primary factor in documentation... Its tendency to hallucinate is too great to risk in these areas without significant human oversight.” (Participant 17). This undermines trust in AI-produced documentation unless there are strong verification and provenance mechanisms.

Under Limited Support with Domain/Company-Specific Knowledge, participants noted that generic models often lack the depth required for precise or specialized documentation: “Customer communication for me is rare and precise enough that standard chatGPT AI is not that useful. Same goes for documentation.” (Participant 189). Another worry was that subtle phrasing differences could introduce confusion: “Documentation or research where slightly different wording or phrasing may cause some confusion.” (Participant 379). Together these codes underscore that AI must be conservative about asserting facts and must surface confidence, sources, and limits in domain expertise.

**Sub-themes identified:**
- **Hallucinations / False Information**: Concerns about AI fabricating or inserting misleading content into documentation.
- **Limited Support with Domain/Company-Specific Knowledge**: AI lacks depth for specialized, domain-specific, or highly contextual documentation tasks.

**Representative quotes**:
- *“AI should definitely not be the primary factor in documentation, communication, or mentoring/onboarding. Its tendency to hallucinate is too great to risk in these areas without significant human oversight.”* (Participant 17)
- *“Filling out details of documentation (I don't trust a stochastic parrot to be capable of getting it right, no matter how refined)...”* (Participant 385)
- *“Customer communication for me is rare and precise enough that standard chatGPT AI is not that useful. Same goes for documentation.”* (Participant 189)

---

## 2) Cross-Cutting Patterns

- Complementary desires and concerns: The data show a strong complementarity — developers want AI to automate generation, synthesis, search, and onboarding, yet they simultaneously worry about hallucinations, loss of voice, and contextual errors. This creates a clear tension: AI is valued for labor-saving and surfacing context, but its outputs must be constrained by accuracy, provenance, and human validation.

- Conditional acceptance: Acceptance of AI is explicitly conditional. Developers want automation for repetitive, tedious, or structural tasks (boilerplate, indexing, summaries) but demand human control for distribution and final authorship. Several participants (e.g., Participant 72) both ask for automatic generation and insist on manual approval before sharing, illustrating the conditional nature of acceptance.

- Task-specific nuances: Documentation is uniquely sensitive because it encodes organizational knowledge, tone, and decision rationale. Unlike pure code generation, documentation requires stable provenance, organizational vocabulary understanding, and sensitivity to interpersonal context (e.g., onboarding). These nuances make documentation a borderline utility for AI: highly beneficial when used for synthesis or scaffolded drafting, risky when used as a final authoritative source without review.

- Trust and control dynamics: Trust is mediated by traceability, source linking, and human-in-the-loop controls. Participants repeatedly tie trust to the AI’s ability to cite authoritative sources and to be auditable. Control preferences range from mandatory review to role-based oversight depending on task criticality, indicating designers should support graduated autonomy with clear provenance and approval workflows.

---

## 3) Outliers and Edge Cases

- Minority perspectives: A small number of participants explicitly ask for higher-level automation such as automated architecture diagrams and cross-team alignment reports (e.g., Participants 272, 403), which goes beyond simple documentation generation and into strategic synthesis. These requests suggest opportunities for AI to support organizational meta-work if properly validated.

- Unique insights: Some participants explicitly frame AI as valuable for “keeping track of work and publish Arch diagrams and documentations” (Participant 272), pointing to a use case where AI links planning and technical documentation. This is rarer but indicates potential product differentiation.

- Ambivalent responses: Several participants express both optimism and caution in the same response — wanting AI to generate documentation but not to distribute it autonomously (Participant 72), or accepting AI for search yet mistrusting it for authoring (Participant 167). These ambivalences reflect pragmatic attitudes: adoption conditional on safeguards.

- Internal contradictions within individuals: Participant 72 appears in both the “want” (generate progress reports) and “don’t want” (no autonomous sending) sets, exemplifying the common view that AI can assist but must not be given full operational control. This internal tension is common across the dataset and highlights design needs for approval workflows.

---

## 4) Implications for AI Tool Design

Overall, developers want AI tools that save time on repetitive documentation tasks, synthesize dispersed context, improve discovery, and support onboarding — but only within robust guardrails that preserve accuracy, provenance, and human voice.

#### Key "Must Haves" (features designers should prioritize)

- **Auto-document generation and maintenance**
  - Capability: Generate initial documentation from code, PRs, and tests and propose updates when code changes are detected. Rationale: Participants asked for automatic production and updating to prevent stale docs (“Having AI help create and maintain documentation based on checked-in code, PRs, tests, etc would be a game changer...” — Participant 27).
  - Example: Detect API changes and suggest corresponding doc edits, with diffs for reviewer approval.

- **Contextual synthesis and summarization**
  - Capability: Summarize meetings, discussions, and cross-source artifacts and surface decision logs and rationale. Rationale: Participants want condensed records of ephemeral knowledge (“Summarizing meetings and communication, helping draft documentation.” — Participant 217).
  - Example: Produce meeting summaries linked to related PRs or tickets with suggested documentation updates.

- **Smart search with provenance**
  - Capability: Provide traceable, source-linked search results across docs, code, and communications; surface confidence and citations. Rationale: Trust requires traceability (“As long as the AI’s response is traceable to an authoritative source, I’m happy.” — Participant 167).
  - Example: Query “How does feature X work?” and return excerpts with links to implementing PRs and design docs.

- **Onboarding orchestration**
  - Capability: Auto-generate role-specific onboarding walkthroughs and training plans combining docs, examples, and prioritized learning paths. Rationale: Participants want structured onboarding materials to reduce mentor load (“Auto-generated training plan for new onboardings.” — Participant 272).
  - Example: New-hire checklist that adapts to team repositories and highlights required readings and code tours.

- **Permission-aware internal knowledge access**
  - Capability: Integrate with internal access controls and organizational vocabularies so AI can correctly interpret names, permissions, and internal references. Rationale: Contextual limitations hinder usefulness without permission-aware access (“Internal documentation retrieval... internal docs have a lot of permission barriers.” — Participant 232).
  - Example: Respect siloed docs and surface only accessible sources, indicating when knowledge is missing due to permissions.

#### Key "Must Not Haves" (design guardrails)

- **Autonomous publishing or distribution**
  - Risk: AI sending or publishing documentation without explicit human approval can propagate errors or misrepresentations. Rationale: Participants insisted on review before sharing (“I don't want it to send emails on my behalf without me proof reading first.” — Participant 72).
  - Guardrail: Require explicit user sign-off and provide a clear audit trail for any generated content.

- **Opaque, source-less assertions**
  - Risk: Outputs without citations or provenance increase hallucination risk and reduce trust. Rationale: Participants demand traceability to authoritative sources (“As long as the AI’s response is traceable to an authoritative source, I’m happy.” — Participant 167).
  - Guardrail: All factual claims must include source links and confidence indicators; avoid fabricating references.

- **Replacement of personal authorship for human-facing documentation**
  - Risk: Removing the human voice from docs and onboarding undermines personalization and trust. Rationale: Developers prefer to author materials that will be read by humans (“If I expect a human to read it, I'm going to take the time to write it myself.” — Participant 167).
  - Guardrail: Provide AI-assisted drafts and templates, but keep final author attribution and editing control with humans.

- **Assuming domain expertise where none exists**
  - Risk: AI asserting domain-specific details beyond its internalized knowledge causes errors. Rationale: Participants noted limited support for domain/company-specific knowledge (“standard chatGPT AI is not that useful” — Participant 189).
  - Guardrail: Signal knowledge gaps, surface confidence levels, and prompt users to supply missing internal context before generating authoritative content.
