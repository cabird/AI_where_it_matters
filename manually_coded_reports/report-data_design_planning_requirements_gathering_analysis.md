# Report of Qualitative Analysis for Requirements Gathering & Analysis (Category: Design & Planning)

This report is an AI-generated synthesis of manually coded survey responses from software developers about AI usage in Requirements Gathering & Analysis for Design & Planning. I preserve the research team’s original codes and quotes, merge highly overlapping items into fewer reportable themes, and add analytical commentary on patterns, tensions, and implications for tool design.

---

## 1) Core Themes

### A. Where AI is Wanted

#### Theme: Automate requirements gathering and analysis

Participants consistently envision AI helping with the heavy lift of capturing, consolidating, and refining requirements, especially across heterogeneous sources and long project timelines. Developers want AI to "be part of the meetings," summarize discussions, and keep track of details that risk being dropped when documentation lags real-time conversation. Several respondents emphasize that iteration with users is unavoidable; they want AI to facilitate that iteration (e.g., surveys, scheduling, transcript synthesis) while keeping human validation in the loop.

This theme also includes a strong desire for context awareness—AI should understand the project's working style and org-specific conventions to avoid generic advice. Beyond capture, developers want AI to reconcile differences, identify ambiguities and inconsistencies, and produce concise, consumable summaries that reduce cognitive load.

**Sub-themes identified:**

* **Automate requirements gathering and analysis**: Automated capture, consolidation, and refinement of requirements.
* **Iterative and accurate requirements gathering w/ users**: AI supports iterative clarification without hallucination.
* **Context-aware requirements gathering**: Org- and team-aware collection aligned to coding/design practices.
* **Aggregate heterogenous requirements data streams (emails, Teams chats, documents, meeting transcripts)**: Pulling signals from scattered sources.
* **Synthesize large amounts of relevant information into easy-to-consume form**: Accurate summarization and noise filtering.

**Representative quotes**:

* *“There can be a substantial time gap… Having AI help keep track of things would be really helpful.”* (Participant 39)
* *“Be able to gather requirements from multiple sources, consolidate differences, identify ambiguities and inconsistencies…”* (Participant 204)
* *“Capturing user requirements (without hallucinating)… that iteration could be more efficiently led by AI, and can still be validated by the user.”* (Participant 198)
* *“Be part of the meetings and gather context…”* (Participant 237)
* *“I have thousands of emails and Teams conversations… impossible to aggregate into a summary and reference.”* (Participant 183)

---

#### Theme: Automate workflow artifacts generation (features, tasks, user stories) from requirements

Developers want AI to transform vetted requirements into ready-to-use workflow assets—features, user stories, and task breakdowns—while preserving accuracy and traceability back to stakeholder intent. The goal is to compress the handoff between requirements analysis and execution by reducing administrative overhead and ensuring nothing gets lost in translation.

This theme extends to documentation: participants want AI to generate user-facing documentation aligned with the captured requirements and the organization's style, again with human oversight for correctness and tone. The expected outcome is faster planning cycles and more time for higher-value technical work.

**Sub-themes identified:**

* **Automate workflow artifacts generation (features, tasks, user stories) from requirements**: Turn validated requirements into actionable backlogs.
* **Automate user-facing documentation generation**: Produce externally consumable docs tied to the same source of truth.

**Representative quotes**:

* *“I want AI to be able to generate my features, user stories, and tasks after fully vetting the requirements…”* (Participant 154)
* *“Summarize and capture details of requirements by providing accurate summaries of meetings and discussions.”* (Participant 157)
* *“Writing user-facing documentation.”* (Participant 159)

---

#### Theme: Accurate and contextual system/architecture design space exploration (trade-offs, feasibility)

Respondents want AI to analyze design alternatives and expose trade-offs across cost, performance, and feasibility—especially for platform choices in Design & Planning (e.g., managed services vs. self-hosted). They also want guardrail-aware suggestions for non-functional requirements (scalability, reliability), risk assessment, calling out dependencies, and reusability (e.g., pointing to standard libraries to reduce redundant code and security risk). The desired outcome is decision acceleration—not AI choosing for them, but helping teams see implications sooner.

A complementary need is requirement breakdown: using AI to decompose top-level goals into evaluable options and highlight pros/cons with project-specific context. This demand is strongest when choices have large cost or operational impact and when institutional knowledge (e.g., "use the standard library") can reduce errors.

**Sub-themes identified:**

* **Accurate and contextual system/architecture design space exploration (trade-offs, potential impact re: performance or cost, feasibility)**: Structured comparison across options.
* **Initial requirements refinement/breakdown**: Translate high-level goals into concrete design choices.
* **Provide suggestions for satisfying non-functional requirements; Risk assessment; Suggestions on reusability; Calling out dependencies**: NFRs and operational concerns embedded in evaluation.

**Representative quotes**:

* *“Do I go with Azure Managed Redis, or do I self-host Redis OSS… What are the detailed pros/cons of each approach?”* (Participant 111)
* *“I want AI to be able to help me compare different technologies and help me decide…”* (Participant 371)
* *“Provide suggestions for satisfying non-functional requirements… Risk assessment… reusability… dependencies.”* (Participant 272)
* *“Accurate and contextual… design space exploration.”* (Participants 12, 111)

---

#### Theme: Automate context-aware design generation from gathered requirements

While several respondents caution that AI design isn't yet "a strong forte," many still want AI to generate draft designs—but only when grounded in validated requirements and org-specific constraints (e.g., mandated UI component systems). Developers expect AI to propose design and architecture aligned to the team's coding practices and to continuously reflect updates in requirements.

This theme ties design generation to validation against requirements: beyond creating designs, AI should help confirm that proposed solutions actually satisfy the stated requirements, reducing the risk of mismatch.

**Sub-themes identified:**

* **Automate context-aware design generation from gathered requirements**: Draft design/architecture driven by captured requirements.
* **Validate design against requirements**: Requirements-to-design traceability and checks.
* **Designing systems… in future**: Aspirational improvements in AI design capability.
* **Context-aware requirements gathering** (org alignment): Ensure generated designs fit local standards (e.g., SCC vs. Fluent).

**Representative quotes**:

* *“Design documents should be in the context of the team’s org… use SCC Components and not just Fluent.”* (Participant 281)
* *“Validate the design against the requirement.”* (Participant 335)
* *“Designing systems is not a strong forte for AI right now but in future it should be able to generate designs…”* (Participant 256)
* *“Prepare specs and propose design and architecture if needed… within the context of the current project’s working style.”* (Participant 237)

---

#### Theme: Validate gathered requirements (completeness and accuracy/correctness) and pinpoint gaps

Many developers see AI's value in quality control: ensuring captured requirements are complete, accurate/correct, and free of omissions. They specifically want help pinpointing missing requirements or design gaps and surfacing well-known missing use cases (e.g., security concerns). This completes the loop from capture → analysis → validation, creating higher confidence before committing to design or implementation.

**Sub-themes identified:**

* **Validate gathered requirements for completeness**: Close gaps between discussion and documented artifacts.
* **Validate gathered requirements for accuracy/correctness**: Prevent drift and misinterpretation.
* **Pinpoint missing requirements or design gaps**: Expose omissions and common mistakes.

**Representative quotes**:

* *“Keep track of the details to make sure that nothing gets lost.”* (Participant 39)
* *“Helping to propose gaps, missing use cases, security and other well known missing requirements…”* (Participant 352)
* *“It should guide in missing requirement, any common mistakes.”* (Participant 354)
* *“Validate gathered requirements for accuracy/correctness.”* (Participants 154, 204)

---

#### Theme: Automatic feature prioritization and insight generation

Participants want help prioritizing features using data-informed analysis and synthesizing large volumes of relevant material into actionable insights. The focus is on accelerating decision-making by connecting the dots across requirements, telemetry, and historical artifacts while filtering noise. Some respondents also highlight understanding the codebase and internal context as a precursor to higher-quality prioritization.

**Sub-themes identified:**

* **Automatic feature prioritization**: Data-supported ranking of what to build.
* **Provide me with insights from large quantity of documents**: Insight extraction from corpora.
* *(Related)* **Being able to fully understand the codebase and collect internal context**: Context foundation for better analysis.

**Representative quotes**:

* *“I think it will become extremely helpful in creating requirements and analyzing data to prioritize features.”* (Participant 193)
* *“Provide me with insights from large quantity of documents.”* (Participant 355)
* *“Being able to fully understand the codebase and collect internal context.”* (Participant 135)

---

### B. Where AI is Not Wanted

#### Theme: Requirements gathering (human-driven) and accuracy-sensitive work

A strong contingent asserts that requirements gathering is fundamentally human, rooted in person-to-person communication, empathy, and shared understanding. They fear losing essential nuance if AI intermediates too much, and they want direct involvement to ensure they fully comprehend customer needs and remain accountable for outcomes. Relatedly, some developers are wary of relying on AI where accuracy is paramount, noting current tools do not inspire sufficient confidence.

These concerns are not outright rejections of AI, but they set clear boundaries: AI may assist with organization and drafting once humans understand the ask, but it shouldn't originate requirements or be depended on for high-stakes correctness without rigorous oversight.

**Sub-themes identified:**

* **Requirements gathering**: Human-led engagement to preserve context and accountability.
* **Highly technical tasks where AI correctness cannot be fully trusted**: Reluctance where precision is non-negotiable.
* **Where the accuracy is quite important**: General accuracy concerns.

**Representative quotes**:

* *“Requirements gathering requires a lot of person-to-person communication that seems better for people and not AI.”* (Participant 27)
* *“I would prefer doing requirement gathering myself. After I understand I would use AI to make it better.”* (Participant 272)
* *“The more technical the task is, the more I feel the need to have personal confidence in its correctness.”* (Participant 330)
* *“Where the accuracy is quite important.”* (Participant 353)

---

#### Theme: Full automation (prefer human-AI hybrid) and sole decision making

Several respondents reject full autonomy in Requirements and Design. They prefer human-AI hybrid workflows where AI supports exploration, synthesis, and documentation, but humans retain judgment and make decisions. There's discomfort with AI assuming requirements or choosing technologies without explicit input; some note that trade-offs involve context beyond AI's reach.

The boundary is explicit: assist, don't decide. Participants want AI to differentiate between guess and simulation, offer options with clear rationale, and prompt users for preferences rather than silently selecting paths.

**Sub-themes identified:**

* **Full automation (prefer human-AI hybrid)**: No full autonomy for Requirements/Design.
* **Sole decision making**: AI should not make unilateral choices.

**Representative quotes**:

* *“I don’t want it to be fully autonomous.”* (Participant 70)
* *“I don’t want AI to take decisions… It should differentiate between guess and simulation.”* (Participant 290)
* *“AI should not choose technologies… ask the user which technology they prefer.”* (Participant 371)

---

#### Theme: Sensitive data handling

Some developers draw a clear line around sensitive data: if the task requires handling confidential or regulated information, they would not want AI to process it—or they would require strong assurances on privacy, security, and data governance. This is especially relevant to Design & Planning, where requirements often embed production details.

**Representative quotes**:

* *“Anything with sensitive data.”* (Participant 266)

---

## 2) Cross-Cutting Patterns

* **Complementary desires and concerns**: Many "want AI" themes seek automation of capture, consolidation, and analysis, while the "not want AI" themes warn against autonomy in requirements origination and final decisions. The synthesis is a copilot posture: AI accelerates and augments; humans validate and decide.

* **Conditional acceptance**: Acceptance hinges on context awareness, accuracy, and traceability. Developers welcome AI that respects org conventions (e.g., mandated component libraries), cites sources, and connects decisions to requirements. They resist tools that hallucinate, assume unstated constraints, or hide uncertainty.

* **Task-specific nuances**: Requirements in Design & Planning often involve platform choices, operational constraints, and non-functional requirements. Developers especially want help comparing managed vs. self-hosted options, calling out dependencies, and steering toward standard libraries—all to minimize cost, risk, and redundancy.

* **Trust and control dynamics**: Trust is built when AI surfaces pros/cons, exposes uncertainty, and invites user choice. It erodes when AI chooses for users, assumes requirements, or processes sensitive data without clear governance. The preferred center of gravity is human oversight with AI acceleration.

---

## 3) Outliers and Edge Cases

* **Skeptical minority**: A few respondents express blanket skepticism about AI's current ability to perform these tasks effectively (e.g., *"absolutely no promise"*). (Participant 357)

* **Optimistic minority**: Conversely, a small group is broadly positive, indicating AI can contribute "in any capacity" if it helps them be more effective. (Participants 369, 387)

* **Ambivalence within individuals**: Some want robust AI support in design exploration and documentation but reject AI as an originator of requirements or a final decision maker. (Participants 70, 371)

* **Temporal aspirations**: A few frame design generation as a future capability—desired but not yet reliable—signaling openness to progress with ongoing caution. (Participant 256)

---

## 4) Implications for AI Tool Design

AI for Requirements Gathering & Analysis in Design & Planning should capture and organize multi-source input, analyze trade-offs with NFRs and dependencies in mind, generate downstream artifacts, and validate completeness and correctness—without taking over human judgment, originating unstated requirements, or mishandling sensitive data. The winning pattern is assistive, contextual, transparent, and controllable.

#### Key "Must Haves" (features designers should prioritize)

* **Multi-source aggregation & synthesis**

  * Pull from emails, chats, docs, and transcripts; de-duplicate, cluster, and summarize; flag ambiguities. Rationale: *Aggregate heterogenous requirements data streams*; *Synthesize large amounts of information*.
  * Example: Participants 183, 204, 280, 401.

* **Requirements validation & gap detection**

  * Check completeness and correctness; highlight missing requirements, security use cases, and contradictions. Rationale: *Validate gathered requirements for completeness/accuracy*; *Pinpoint missing requirements or design gaps*.
  * Example: Participants 39, 352, 354.

* **Context-aware design exploration with NFRs**

  * Compare options (cost/perf/operability), call out dependencies, suggest reuse of standard libraries, and align to org standards. Rationale: *Design space exploration*; *NFR suggestions, risk, dependencies, reusability*.
  * Example: Participants 12, 111, 272, 281, 371.

* **Artifact generation from vetted requirements**

  * Produce features, user stories, tasks, and user-facing documentation with back-references to source requirements. Rationale: *Automate workflow artifacts*; *Automate user-facing documentation*.
  * Example: Participants 154, 157, 159.

* **Meeting-aware capture and iterative assistance**

  * Attend meetings (record/transcribe), extract requirements, propose clarifying questions/surveys, and support scheduling for follow-ups. Rationale: *Automate requirements gathering*; *Iterative and accurate gathering w/ users*.
  * Example: Participants 153, 198, 237.

#### Key "Must Not Haves" (design guardrails)

* **No autonomous requirements origination or unilateral decisions**

  * AI must not infer unstated requirements or choose technologies without user confirmation. Rationale: *Full automation (prefer hybrid)*; *Sole decision making*.
  * Example: Participants 70, 290, 371.

* **No opacity about uncertainty or assumptions**

  * The system must clearly differentiate guess vs. simulation, present confidence, and show evidence trails. Rationale: *Differentiate between guess and simulation*.
  * Example: Participant 290.

* **No mishandling of sensitive data**

  * Respect data boundaries; provide governance controls and on-prem/tenant-isolated options. Rationale: *Sensitive data handling*.
  * Example: Participant 266.

* **No overreach into high-stakes correctness without checks**

  * Require human review for accuracy-critical outputs, with verification workflows. Rationale: *Accuracy is important*; *Technical correctness concerns*.
  * Example: Participants 330, 353.

---

## Executive Summary

* Developers want AI to capture, consolidate, and synthesize requirements from many sources, keep details from being lost, and support iterative clarification.
* Developers don't want AI to originate requirements or make unilateral decisions; human-AI hybrid workflows are preferred.
* Tools must provide context-aware design exploration (NFRs, dependencies, reuse) and generate artifacts (stories/tasks/docs) from vetted requirements.
* Validation and gap detection are critical: AI should check completeness, correctness, and missing security/use cases.
* Trust hinges on transparency show evidence, highlight uncertainty, align to org conventions, and respect sensitive data constraints.
* Design for assistive autonomy accelerate decisions without replacing human judgment; make it easy to confirm, override, and trace AI outputs.

