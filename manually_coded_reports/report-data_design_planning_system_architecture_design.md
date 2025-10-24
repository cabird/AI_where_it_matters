# Qualitative Analysis for System Design 
# Category: Design & Planning

This report is an AI-generated synthesis of manually coded survey responses from software developers about AI usage in System Design (Design & Planning). I preserved the research team's thematic structure and codes, and synthesized participants' quotes and researchers' descriptions into coherent narratives. The analysis highlights where developers want AI help, where they resist it, cross-cutting patterns and tensions, outliers, and actionable implications for AI tool design.

---

## Executive Summary

- Developers want AI to augment architecture work by tracing decisions, exploring alternatives, and generating actionable artifacts—while preserving human control over final decisions.
- The strongest use cases are design exploration, accurate system understanding, risk identification, and automation that bridges design to implementation (docs, tasks, diagrams).
- Tools must prioritize accuracy, context‑awareness (org rules and platform constraints), explainability, and provenance to build trust.
- Guardrails are essential: no autonomous final decision‑making, no context‑free end‑to‑end designs, and no reliance on outdated or clichéd patterns.
- A practical role for AI is an iterative design partner or co‑pilot—multi‑modal, steerable, and integrated into existing workflows—not a replacement for architects' long‑term vision and stakeholder work.
- Recommendation: Build AI features that (1) surface multiple options with trade‑offs, (2) attach provenance and confidence scores, (3) ingest organizational context, and (4) convert plans into execution artifacts—while requiring explicit human sign‑off for critical choices.

---

## 1) Core Themes

### A. Where AI is Wanted

#### Theme: Other

Participants expressed a set of pragmatic, operational desires that did not fit neatly into a single design activity but collectively point to AI as an enabler of clarity, efficiency, and creativity. The "Trace decisions" code captures a desire for AI to make design rationale explicit and navigable: one participant asked for "Creation of tracking design decisions through the architecture easier" and wants to "reason over the choices that I made, the impact they had, and how small changes to initial design decisions could have significant impact/improvement on the architecture" (Participant 2). This is about building traceability and enabling "what‑if" exploration after decisions are made.

Other codes in this theme emphasize workload balance and human flourishing. Developers want AI to "assist with tasks that require a lot of detailed technical knowledge thus giving the human more time to interact with customers and collaborators, and to be creative and innovative" (Participant 75), tying to the "Enhance/Allow developer creativity" code. They also want "suggestions for design and planning which are aligned with my goal and steerable according to my instructions" (Participant 253), reflecting a need for steerability and control. Some practical asks include "Help with work/task sizing" (Participant 148). A minority voice opposes AI entirely in this space because current models are insufficiently structured for architecture tasks (Participant 357).

Sub-themes identified:
- **Trace decisions**: Make design decisions and their downstream impacts explicit and explorable; support "what-if" reasoning about RPOs, cost, complexity, performance.
- **Divide work between AI and people**: Offload detailed, knowledge‑intensive tasks so humans can focus on customers and creativity.
- **Steerability**: AI outputs must be controllable and aligned to the architect's goals.
- **Reduce errors**: Track logic, highlight trade-offs, and reuse earlier reasoning to avoid circular debates and missed edge cases.
- **Enhance/Allow developer creativity**: Free cognitive space for ideation by handling routine, technical work.
- **Work/Task sizing**: Help estimate and size work.
- **No AI**: Rejection of AI when current capability is judged insufficient for the unstructured nature of architecture work.

Representative quotes:
- *"Creation of tracking design decisions through the architecture easier... I would like to reason over the choices that I made..."* (Participant 2)
- *"AI assists with tasks that require a lot of detailed technical knowledge thus giving the human more time to interact with customers and collaborators, and to be creative and innovative."* (Participant 75)
- *"suggestions for design and planning which are aligned with my goal and steerable according to my instructions."* (Participant 253)
- *"Iâ€™d love for AI to help me during design discussions by laying out the pros and cons of each option weâ€™re considering."* (Participant 301)
- *"If AI continues to look anything like what it looks like right now, none of these tasks are sufficiently structured for AI to be able to do."* (Participant 357)

---

#### Theme: Design Exploration

This theme groups explicit requests for AI to help broaden, evaluate, and compare architectural options. Participants want tools that surface alternatives, analyze trade-offs, and scaffold decision-making so teams make faster, more informed choices. Several responses describe a practical scenario: evaluating a 1‑minute RPO and tracing its downstream consequences, or choosing between Azure Managed Redis and self‑hosted Redis and seeing "the detailed pros/cons of each approach" (Participant 111). The emphasis is on exploring the design space in a way that remains risk‑aware and contextually relevant.

"Compare alternatives" is a tightly related subtheme: developers want AI to lay out pros and cons, track the logic of discussions, highlight trade-offs, and reuse prior reasoning to prevent rework and errors (Participant 301). Participants expect AI to act as a thoughtful collaborator during planning—offering "various REALISTIC options... Analysing, putting thought and giving rich information without being very verbose" (Participant 380). They value suggestions that broaden thinking (Participant 387) but remain grounded and practical.

Sub-themes identified:
- **Explore alternatives/Design space exploration**: Generate multiple realistic architectural options, analyze historical bottlenecks and risks, support feasibility evaluation and alignment with business goals.
- **Compare alternatives**: Produce structured pros/cons, track rationale across discussions, and highlight trade-offs and edge cases.

Representative quotes:
- *"Creation of tracking design decisions... I would like to reason over the choices that I made..."* (Participant 2)
- *"Over the next 1-3 years, I want AI to assist in exploring optimal architectural patterns, analyzing historical system bottlenecks, and generating risk aware design proposals."* (Participant 57)
- *"Do I go with Azure Managed Redis, or do I self-host Redis OSS to save on costs? What are the detailed pros/cons of each approach?"* (Participant 111)
- *"I want AI to assist with exploring design alternatives, identifying edge cases, and helping align architecture with evolving business goals."* (Participant 241)
- *"Providing me various REALISTIC options in terms of design given the requirements. Analysing, putting thought and giving rich information without being very verbose."* (Participant 380)

---

#### Theme: System Understanding

Participants see considerable value in AI that can build or surface an accurate, usable model of existing systems. Under "System overview" they ask for AI that can analyze source code, create design documents and diagrams, find gaps, assess non‑functional requirements, and act as a conversational reference for system design. A critical constraint is accuracy: when AI hallucinates or misreads code it can mislead less experienced developers and introduce production risk (Participant 53). Several participants explicitly request the ability for AI to "fully understand the codebase and collect internal context" (Participant 135) and to "provide suggestions for satisfying non-functional requirements such as scalability, reliability" (Participant 272).

The "Accuracy/Accurate system understanding" code is a dominant concern—participants repeatedly demand reliable, context‑aware analysis because inaccurate guidance can cause costly mistakes (Participant 53, Participant 229). There's also a desire to leverage historical data ("Analyze historical data") to surface past bottlenecks and inform architectural proposals (Participant 57). Finally, AI is expected to support human understanding of customers and stakeholders by freeing developers to engage with them, while AI manages internal technical context (Participant 75).

Sub-themes identified:
- **System overview**: Generate accurate architecture documentation, diagrams, and design evaluations from code and meeting artifacts.
- **Accuracy/Accurate system understanding**: High priority on correctness to avoid misleading suggestions and production risk.
- **Analyze historical data**: Use historical system performance and incidents to inform design proposals.
- **Humans understand customers/stakeholders**: AI should augment developers' capacity to interact with customers rather than replace that human work.

Representative quotes:
- *"I wish AI could analyze source code for systems and help developers understand ACCURATELY how systems work."* (Participant 53)
- *"Help crafting design documents along with building architecture diagrams from the description of the features."* (Participant 55)
- *"Being able to fully understand the codebase and collect internal context."* (Participant 135)
- *"Provide suggestions for satisfying non-functional requirements such as scalability, reliability and so on. Risk assessment."* (Participant 272)
- *"Over the next 1-3 years, I want AI to assist in... analyzing historical system bottlenecks..."* (Participant 57)

---

#### Theme: Design Guidance

This theme captures expectations for prescriptive, context-sensitive recommendations that translate requirements into concrete architectures and tasks. Participants want AI to generate designs grounded in internal context (org standards, existing components), recommend patterns and infrastructure choices based on projected load and cost, suggest data types and structures for implementation, and produce design documents that fit team conventions (Participant 281). There is also appetite for AI to suggest ways to satisfy non‑functional requirements, call out dependencies, and reduce redundant code by recommending reuse (Participant 272).

The boundary here is clarity and relevance: suggestions must be "specific rather than generic" (Participant 343) and should reflect organizational practices ("Design documents should be in the context of the team’s org" — Participant 281). Participants envision AI moving from generic templates to actionable guidance that reduces costly rework and improves alignment with security and privacy standards (Participant 372).

Sub-themes identified:
- **Design suggestions**: Context-aware, actionable design recommendations including non-functional concerns, reuse suggestions, and dependency analysis.

Representative quotes:
- *"I wish AI could analyze source code... and make reasonable suggestions."* (Participant 53)
- *"Help provide a design based on requirements looking at the internal context and also help create tasks jn ADO."* (Participant 65)
- *"give suggestions on design or inspire new ideas."* (Participant 127)
- *"AI should understand the existing system and then make suggestions during requirement gathering and analysis."* (Participant 281)
- *"AI should be suggesting optimal architectural patterns and recommending infrastructure choices based on projected load and cost constraints."* (Participant 309)

---

#### Theme: Automation & Tooling

Developers expect AI to automate repetitive, structureable outputs that bridge design and implementation. Specific asks include generating work items (e.g., creating tasks in ADO from design outputs—Participant 65), generating design documentation from code (Participant 121), and performing higher‑level "Design Automation, Strategic Planning" tasks (Participant 258). The common thread is automating the translation of high‑level design into actionable artifacts that teams can execute against, reducing friction between planning and delivery.

Sub-themes identified:
- **Create work items**: Convert design outputs into tracking tasks and tickets to accelerate implementation.
- **Generate design document from code**: Produce design docs from proof‑of‑concepts or existing code.
- **Automation**: Automate strategic planning and repeatable design tasks.

Representative quotes:
- *"Help provide a design based on requirements looking at the internal context and also help create tasks jn ADO."* (Participant 65)
- *"Would love for AI to take a proof-of-concept code change and generate a design doc based on it."* (Participant 121)
- *"Design Automation, Strategic Planning."* (Participant 258)

---

#### Theme: Risk & Quality

AI is desired as a tool to surface risks, gaps, and quality issues early in planning. Participants want AI to "provide insights into gaps in your design" (Participant 80) and to perform "Risk assessment" and dependency analysis (Participant 272). There is a recurring expectation that AI can help ensure non‑functional requirements (scalability, reliability) are considered and that design reviews include actionable feedback (Participants 272, 329, 335). The goal is to reduce errors and rework by catching architectural blind spots before implementation.

Sub-themes identified:
- **Find gaps**: Detect missing components, failure modes, or unmet requirements.
- **Design feedback (risk)**: Assess non‑functional requirements, reusability, and dependencies.
- **Design feedback**: Provide architecture reviews against requirements.

Representative quotes:
- *"If it can understand complex system architectures, and provides insights into gaps in your design, that would be extremely helpful."* (Participant 80)
- *"Provide suggestions for satisfying non-functional requirements such as scalability, reliability... Risk assessment."* (Participant 272)
- *"Architecture review."* (Participant 329)

---

#### Theme: AI Collaboration

Developers expect AI to behave as an active collaborator rather than an autonomous authority. They describe a design "co‑pilot" that can join meetings, gather context, prepare specs, propose architectures, and iterate with humans (Participants 109, 237, 318). The "AI as design partner" code describes AI that can "propose some fruit for thoughts and work through design together" (Participant 376). Participants also want steerability—AI must be responsive to instructions and maintain alignment with project goals (Participant 253). Multi‑modal capabilities such as voice interaction and diagram generation are specifically requested to make collaboration more natural and to support meeting workflows (Participants 55, 318, 386).

Sub-themes identified:
- **AI as design partner**: An iterative collaborator that participates in design discussions and generates follow‑up artifacts.
- **Voice**: Voice-based copilot to participate in conversations and automate documentation.
- **Multi-modal input/output (voice, diagrams)**: Support diagrams, voice, and other modalities for natural collaboration.

Representative quotes:
- *"being able to describe needs, then iterate with AI on output designs, all the way to environments being setup and repos with starter src generated."* (Participant 109)
- *"Be part of the meetings and gather context, prepare specs and propose design and architecture if needed..all within the context of the current projects working style coding practices."* (Participant 237)
- *"A voice based design copilot agent which can actively take part in constructive design conversations while also automating the documentation of the same."* (Participant 318)
- *"Act as a thinking partner to survey existing infrastructure/design patterns. Propose some fruit for thoughts and work through design together."* (Participant 376)

---

#### Theme: Context & Knowledge

Accuracy and relevance of AI outputs depend heavily on capturing latent organizational knowledge and cross‑platform context. Participants want AI to identify blockers, inter‑dependencies across teams, and org‑specific rules (Participant 182, 281). They ask for systems that "understand the existing system and then make suggestions" and that can pull information across platforms to assemble POCs or designs (Participant 25). This reflects a need for tools that not only reason about abstract patterns but also incorporate local constraints and institutional knowledge.

Sub-themes identified:
- **Latent design knowledge**: Discover and use unwritten constraints, dependencies, and cross-team impacts.
- **Cross-platform context awareness**: Integrate information across platforms and repos to inform design and POCs.

Representative quotes:
- *"Help identify blockers, unknowns, inter-dependencies across teams/orgs and thereby help in a continuous refinement of the design and planning of features..."* (Participant 182)
- *"AI should understand the existing system and then make suggestions during requirement gathering and analysis."* (Participant 281)
- *"integrating across platforms to gather information for design and POC."* (Participant 25)

---

### B. Where AI is Not Wanted

#### Theme: Human Judgment

Developers consistently want humans to retain final authority over critical architectural decisions. Codes like "Human oversight," "Accountability," "Intuition," and "Team dynamics" emphasize that design trade-offs, long‑term vision, and social judgments require human experience and empathy. Participants said they "don't want AI to be fully autonomous" in System Architecture & Design and prefer to remain "in the loop and chose the direction of the design" (Participant 70, Participant 154). Several respondents stated that AI should be advisory: it can present options with pro/con callouts and guidance on who to engage, but not make final calls (Participant 372, Participant 241).

Concerns extend to team dynamics and sensing unspoken issues—areas where AI lacks empathy. One participant noted that AI should not "handle the parts of my design and planning work that involve intuition, judgment, or team dynamics" because those require human subtlety (Participant 301). Accountability is a major boundary: architects do not want AI to "own critical architectural decisions or trade-offs" because long‑term vision and responsibility rest with humans (Participant 241, Participant 267).

Sub-themes identified:
- **Human oversight**: Keep humans in control and prevent full autonomy of AI in design.
- **Humans handle customers**: Preserve human responsibility for customer interactions and requirements elicitation.
- **Accountability**: Do not let AI assume ownership of critical decisions.
- **Intuition**: Protect judgments that rely on tacit knowledge and experience.
- **Team dynamics**: Avoid delegating social, motivational, and interpersonal judgments to AI.
- **Final/critical decision-making on design trade-offs/team dynamics**: Explicit refusal to hand over final decisions to AI.

Representative quotes:
- *"There is nothing where I don't want AI. The closest is that for System Architecture & Design, and Requirements Gathering & Analysis, I don't want it to be fully autonomous."* (Participant 70)
- *"I want to still be in the loop and chose the direction of the design. Though I like recommendations."* (Participant 154)
- *"I don’t want AI to own critical architectural decisions or trade-offs, as these require deep domain knowledge, long-term vision, and accountability that only experienced engineers can provide."* (Participant 241)
- *"I wouldn’t want AI to handle the parts... that involve intuition, judgment, or team dynamics."* (Participant 301)
- *"I wouldn’t want AI to handle final decision-making on design trade-offs or team dynamics..."* (Participant 403)

---

#### Theme: Context & Knowledge

Some participants worry AI will design end‑to‑end systems without sufficient local context, producing solutions that don't fit team constraints or organizational rules. The "Context/Context-unaware (end-to-end system) design" code captures this: one respondent warned against "Designing systems end to end without context of the existing decisions that are unwritten" (Participant 90). Another noted that a proposed system "may not work for my team context" (Participant 185). Related is "Business context": AI lacks deep understanding of long‑term company goals and may therefore make suboptimal strategic recommendations (Participant 284).

Sub-themes identified:
- **Context/Context-unaware (end-to-end system) design**: AI should not autonomously produce full system designs without local constraints.
- **Business context**: AI lacks the nuance of business strategy and long-term goals.

Representative quotes:
- *"Designing systems end to end without context of the existing decisions that are unwritten."* (Participant 90)
- *"Context, there can be a system design that may not work for my team context."* (Participant 185)
- *"I don’t want AI to handle core decision-making or critical design logic, as it lacks full understanding of business context and long-term goals."* (Participant 284)

---

#### Theme: AI Limitations

Many objections center on current AI limitations: outdated knowledge, fallback to clichéd patterns, inability to handle constrained environments, and a lack of personal confidence in outputs. Participants fear that AI will "bias towards old known solutions rather than a more modern solution" (Participant 188) or "fallback to using the same known pattern regardless of the design particularities" (Participant 345). In constrained environments—such as corporate mandates on specific technologies—AI may suggest infeasible implementations ("AI can't handle constraints" — Participant 232). Several respondents expressed a lack of trust in correctness for technical tasks, preferring human effort to avoid costly rework (Participant 353, Participant 357).

Sub-themes identified:
- **AI out of date / Overreliance on known or old(er)/out-of-date solutions**: Fear that AI will recommend stale or obvious patterns.
- **AI can't handle constraints**: Difficulty accommodating org-specific tool choices and constraints.
- **AI provides cliché solutions**: Tendency to produce generic, overused patterns.
- **Personal confidence**: Developers lack confidence in AI‑generated technical solutions.

Representative quotes:
- *"System design is probably the thing I want it to handle the least because I would be worried it would bias towards old known solutions..."* (Participant 188)
- *"It might not be accurate or up to date when it comes to new technology or the latest versions of third-party libraries."* (Participant 204)
- *"Detailed implementation, because in Microsoft sometimes we're not free to choose what tools/technology to use."* (Participant 232)
- *"The more technical the task is, the more I feel the need to have personal confidence in its correctness."* (Participant 353)

---

#### Theme: Other

This theme captures additional reservations that do not fit elsewhere. Participants worry AI may induce excessive churn in architecture ("AI causes too much change" — Participant 198), or accelerate premature implementation before design is agreed ("Building implementation before system design fully agreed upon" — Participant 111). Many prefer AI to be a supportive companion rather than the primary architect ("Sole/Primary system architect (prefer supporting role)" — Participants 193, 209, 220, 376), emphasizing collaboration rather than replacement.

Sub-themes identified:
- **AI causes too much change**: Concern about instability from AI-driven shifts in architecture.
- **Building implementation before system design fully agreed upon**: Risk of committing to implementation before high-level design is validated.
- **Sole/Primary system architect (prefer supporting role)**: Preference for AI as assistant not primary architect.

Representative quotes:
- *"System architecture... you want an entity who is invested in getting it right, keeping things stable and figuring out how to evolve the architecture where necessary. In my experience, AI tools are too ready to completely change tack in a solution."* (Participant 198)
- *"Detailed implementation without having fully agreed on an actual high-level design."* (Participant 111)
- *"I don't want it as the primary creator of system architecture. I think humans with experience are still the best for that, though AI can assist and be a sounding board for the humans."* (Participant 193)

---

#### Theme: Strategy & Vision

Architectural work is about long‑term direction and stakeholder alignment; participants do not want AI to assume leadership in these areas. The "Long-term vision" code underscores reluctance to cede strategic trade-offs and multi‑year planning to AI (Participant 241, Participant 284). The "Creative vision‑setting/stakeholder alignment" code further clarifies that stakeholder negotiations and vision work rely on empathy and strategic intuition—areas AI can support but should not lead (Participant 9).

Sub-themes identified:
- **Long-term vision**: Keep strategic architectural ownership with experienced humans.
- **Creative vision-setting/stakeholder alignment**: Human-led stakeholder alignment and vision work, with AI in a supporting role.

Representative quotes:
- *"I don’t want AI to own critical architectural decisions or trade-offs, as these require deep domain knowledge, long-term vision, and accountability..."* (Participant 241)
- *"I wouldn’t want AI to handle creative vision-setting or stakeholder alignment in design and planning activities."* (Participant 9)

---

#### Theme: System Understanding

A final, narrow category reiterates that AI must be accurate in system understanding; otherwise it should not be relied upon. Participants voiced blunt rejections when accuracy is essential: "Where the accuracy is quite important" and "I do not want to do any of it because as it stands right now, it makes incredible amount of mistakes..." (Participants 355, 357). This underscores a core constraint—when correctness is paramount, developers prefer human ownership.

Representative quotes:
- *"Where the accuracy is quite important."* (Participant 355)
- *"I do not want to do any of it because as it stands right now, it makes incredible amount of mistakes in this space."* (Participant 357)

---

## 2) Cross-Cutting Patterns

- Complementary desires and concerns: Developers want AI to amplify cognitive bandwidth—exploring alternatives, tracing decisions, generating artifacts—while retaining human control over judgment, accountability, and strategy. The "want" themes consistently seek support for analysis, documentation, and structured guidance; the "don't want" themes resist ceding authority, especially for ambiguous, high‑stakes, or context‑sensitive decisions.

- Conditional acceptance: Acceptance of AI is highly conditional. Participants repeatedly require (a) accuracy and context awareness, (b) steerability and the ability to trace reasoning, (c) alignment with org rules and constraints, and (d) human oversight on final decisions. Tools that fail these conditions risk rejection or limited adoption.

- Task-specific nuances: Architecture is uniquely sensitive to long‑lived consequences, non‑functional requirements, and organizational constraints. Unlike short‑lived code edits, architectural mistakes can cascade into years of rework; this amplifies demand for traceability, risk assessment, and historical analysis. Developers therefore emphasize outputs that are conservative, explainable, and integrable into team workflows.

- Trust and control dynamics: Trust is anchored in correctness, provenance, and the ability to contest and steer AI output. Participants want AI that "tracks logic" and "reuses earlier reasoning" (Participant 301) while they retain veto power. Tools that present justifications, identify assumptions, and surface dependencies will be better trusted than black‑box recommendations.

---

## 3) Outliers and Edge Cases

- Minority rejections: A few participants are categorical skeptics—declaring architecture tasks "not sufficiently structured" for current AI and preferring zero AI involvement (Participant 357). These views stress risk tolerance and current technical limits.

- Unique insights: The "Trace decisions" code (Participant 2) and requests to derive design docs from proof‑of‑concept code (Participant 121) point to innovative use cases: using AI as a decision provenance and reverse‑engineering assistant, not just a forward generator. These are less commonly discussed but offer high leverage.

- Ambivalent responses: Several participants expressed both enthusiasm for AI assistance (e.g., generating alternatives, reducing drudgery) and caution about handoff of responsibility—illustrating conditional trust rather than polarized positions (e.g., Participant 241, Participant 267).

- Contradictions within individuals: Some participants want AI to take over exploratory tasks but simultaneously say they won't trust AI for final judgment. This demonstrates a practical division of labor: AI for ideation and analysis, humans for selection and accountability.

---

## 4) Implications for AI Tool Design

Developers want AI that augments architectural work by making decisions traceable, surfacing realistic alternatives, and generating actionable artifacts—while explicitly avoiding replacement of human judgment and strategic ownership. Tools should prioritize accuracy, contextualization (org rules, constraints, cross‑repo data), explainability, and integration into existing workflows (tickets, diagrams, meetings). Multi‑modal interaction (voice + diagrams) and capabilities to analyze historical incidents and source code will increase utility. Conversely, AI must be constrained from making unilateral, unverifiable decisions or suggesting implementations that ignore organizational constraints.

#### Key "Must Haves" (features designers should prioritize)

- **Trace decisions & Explainability**
  - Capability: Capture design decisions, show provenance, and enable "what‑if" analysis of upstream choices (e.g., RPO impacts).
  - Rationale: Participants want to "reason over the choices that I made, the impact they had" to avoid downstream surprises (Participant 2).

- **Design Exploration & Compare alternatives**
  - Capability: Generate multiple realistic architecture options with structured pros/cons and trade‑off analyses; reuse prior reasoning across discussions.
  - Rationale: Developers want help "exploring design alternatives" and "laying out the pros and cons of each option" to accelerate decision‑making (Participants 241, 301).

- **Accurate system understanding**
  - Capability: Analyze source code and system artifacts to produce accurate system overviews, diagrams, and non‑functional requirement checks; surface assumptions and confidence levels.
  - Rationale: Accuracy is repeatedly cited as essential to avoid leading teams down non‑viable paths (Participant 53).

- **Context & Knowledge integration**
  - Capability: Ingest org‑specific rules, cross‑repo context, historical incidents, and platform constraints to tailor recommendations.
  - Rationale: Participants want recommendations that respect team conventions and constraints (Participant 281, Participant 182).

- **Integration & Automation (Artifacts + Tasks)**
  - Capability: Convert designs into actionable artifacts—design docs, DFDs, work items (ADO), and starter repos—to reduce friction between planning and execution.
  - Rationale: Requests to "create tasks jn ADO" and "generate a design doc from a proof‑of‑concept code change" signal high value in this translation (Participants 65, 121).

#### Key "Must Not Haves" (design guardrails)

- **No autonomous final decision-making**
  - Risk: AI making irreversible architectural choices without human sign-off.
  - Rationale: Developers do not want AI to "own critical architectural decisions or trade‑offs" (Participant 241). AI should present options, not decide.

- **No context-unaware end-to-end designs**
  - Risk: Blanket solutions that ignore unwritten team constraints or business strategy.
  - Rationale: Participants warn against "Designing systems end to end without context of the existing decisions that are unwritten" (Participant 90).

- **No reliance on stale or cliché solutions**
  - Risk: AI defaulting to well‑known patterns that are out of date or unsuitable.
  - Rationale: Concern that systems will "bias towards old known solutions" or "fallback to using the same known pattern" (Participants 188, 345).

- **No replacement of human stakeholder interactions**
  - Risk: Delegating requirements gathering, stakeholder alignment, and team dynamics to AI.
  - Rationale: Participants insist humans should handle customers and creative vision‑setting (Participant 149, Participant 9).

- **No black‑box outputs without confidence or provenance**
  - Risk: Unverifiable recommendations that developers cannot confidently act upon.
  - Rationale: Multiple participants emphasized lack of confidence and the high cost of mistakes (Participant 353, Participant 357).



