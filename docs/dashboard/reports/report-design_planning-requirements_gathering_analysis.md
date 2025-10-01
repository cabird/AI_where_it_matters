# Report: Requirements Gathering & Analysis

**Task Category:** design_planning

**Generated:** 2025-09-30 22:40:55

**Number of Participants:** 41

---

# Thematic Analysis — Requirements Gathering & Analysis

I reviewed participant responses and extracted statements that directly referenced Requirements Gathering & Analysis. I coded responses for recurring needs, concerns, and constraints, then grouped them into themes that reflect the facets of requirements work developers discussed (information aggregation, drafting, interactive elicitation, decision support) and the reasons they resist AI involvement (human communication, autonomy, trust, sensitivity). Counts are rounded to the nearest five and confidence levels reflect how many participants raised each idea.

---

## 1) Core Themes


### A. Where AI is wanted

#### 1. Theme: Aggregation, summarization and traceable capture of requirement sources  
- Description: Developers want AI to ingest and reconcile the many scattered sources that feed requirements—emails, meeting transcripts, chat logs, documents—and produce concise, traceable summaries and clusters so nothing gets lost over time. The motivation is reducing toil and human error when many topics and long time gaps exist between stakeholder mention and documented artifacts. The desired outcome is a reliable single view that consolidates duplicates, surfaces ambiguities and links statements back to original sources; participants expect this to be a productivity aid that preserves provenance rather than a replacement for human judgement.  
- Number of participants: ~30 participants  
- Representative quotes:  
  - *"it's really helpful to have AI keep track of the details to make sure that nothing gets lost."* (Participant 39)  
  - *"Be able to gather requirements from multiple sources, consolidate differences, identify ambiguities and inconsistencies"* (Participant 204)  
  - *"Gen AI could easily be used to cluster the same requirements together, extract the common topics, and summarize the content of multiple sources of requirements."* (Participant 345)  
- Confidence: High


#### 2. Theme: Drafting user stories, features, tasks and meeting-to-requirement conversion  
- Description: Several developers want AI to turn vetted inputs into polished artifacts—feature lists, user stories, tasks, and user-facing docs—saving manual writing time. The context is post-elicitation: after requirements are validated, AI should generate structured work items and documentation. Motivation is time savings and consistent formatting; desired outcome is ready-to-use, editable artefacts that accelerate planning and onboarding. Boundaries include the need for AI to "vet" inputs first and for human review of final artifacts.  
- Number of participants: ~15 participants  
- Representative quotes:  
  - *"generate my features, user stories, and tasks after fully vetting the requirements provided by the end user."* (Participant 154)  
  - *"Summarize and capture details of requirements by providing accurate summaries of meetings and discussions."* (Participant 157)  
  - *"Being an assistant - helping to draft docs, create diagrams, navigate Excel, turn meeting transcripts into requirements"* (Participant 401)  
- Confidence: High


#### 3. Theme: Interactive elicitation and iterative clarification with stakeholders  
- Description: Participants want AI to support the iterative parts of elicitation—prompting follow-up questions, running surveys, scheduling, and leading structured clarification rounds—so getting to the "real" requirements is faster and less error-prone. The motivation is accelerating iterative discovery while preserving final human validation; the desired outcome is AI-facilitated, user-led iterations that converge on correct requirements. Conditions include that AI-led interactions should be validateable by human stakeholders and avoid inventing requirements.  
- Number of participants: ~15 participants  
- Representative quotes:  
  - *"AI to help automate requirements via surveys and help with scheduling tasks."* (Participant 153)  
  - *"Capturing user requirements (without hallucinating)... that iteration could be more efficiently led by AI, and can still be validated by the user."* (Participant 198)  
  - *"During requirement gathering, for gathering more info it helps a lot."* (Participant 306)  
- Confidence: High


#### 4. Theme: Analysis and decision‑support (feasibility, trade-offs, NFRs, prioritization)  
- Description: Developers want AI to assist analytical work tied to requirements: breaking down requirements, producing pros/cons, feasibility evaluation, risk assessment, suggesting non‑functional requirements, and helping prioritize features. The motivation is faster, evidence-informed comparison of options and surfacing gaps or missing use-cases. Desired outcomes are structured trade-off analyses and prioritized backlogs; boundaries include guardrails (explicit constraints or org rules) and human accountability for final decisions.  
- Number of participants: ~15 participants  
- Representative quotes:  
  - *"Requirement breakdown and pros/cons analysis given a set of guardrails."* (Participant 111)  
  - *"I want AI to be able to help me compare different technologies and help me decide which one would be the best for my specific use-case"* (Participant 371)  
  - *"Provide suggestions for satisfying non-functional requirements such as scalability, reliability and so on. Risk assessment"* (Participant 272)  
- Confidence: High


### B. Where AI is not wanted

#### 1. Theme: Replacing human interpersonal work and ownership of elicitation  
- Description: Many developers reject AI as the primary actor for the human, dialog-driven parts of requirements work—initial stakeholder interviews, trust-building conversations and negotiation—because those tasks are identity‑loaded, require empathy and social judgement, and are central to accountability. Their concern is that AI would erode relationship‑based discovery and miss nuances that humans glean in person. Acceptable use is as an aide (note-taking, summarization), not as the owner of elicitation.  
- Number of participants: ~15 participants  
- Representative quotes:  
  - *"Requirements gathering requires a lot of person-to-person communication that seems better for people and not AI"* (Participant 27)  
  - *"Handling any kind of human-driven scenarios should be left to human beings. Things like requirements gathering... should be primarily driven by humans."* (Participant 149)  
  - *"I wouldn't want it to be coming up with the requirements"* (Participant 186)  
- Confidence: High


#### 2. Theme: No full autonomy — AI must not make final decisions or assume requirements  
- Description: Developers explicitly object to AI being allowed to autonomously decide on requirements, choose technologies, or make assumptions without clear human confirmation. The concern is loss of accountability and the risk of erroneous or unvalidated requirements being treated as definitive. The boundary is strong: AI can suggest or simulate, but final selection and acceptance must remain human-driven.  
- Number of participants: ~10 participants  
- Representative quotes:  
  - *"There is nothing where I don't want AI. The closest is... I don't want it to be fully autonomous."* (Participant 70)  
  - *"I don't want AI to take decisions. I don't want AI to do assume requirements. It should differentiate between guess and simulation."* (Participant 290)  
  - *"AI should not choose technologies for the user but ask the user which technology they prefer to use."* (Participant 371)  
- Confidence: High


#### 3. Theme: Trust, accuracy, and current capability limits (hallucination, correctness)  
- Description: Participants worry about hallucination, lack of technical correctness, and the present inability of AI to reliably perform complex, unstructured elicitation and design tasks. They fear AI-generated requirements or analyses will be wrong or misleading, undermining confidence and causing rework. The boundary is use only where provenance, verifiability, and human review are enforced. Several respondents described current tools as not yet adequate for these tasks.  
- Number of participants: ~15 participants  
- Representative quotes:  
  - *"Capturing user requirements (without hallucinating) could be particularly valuable..."* (Participant 198) — reflects concern that hallucination is a key risk to manage.  
  - *"The more technical the task is, the more I feel the need to have personal confidence in its correctness. I don't usually get that confidence when leaning heavily on Copilot."* (Participant 353)  
  - *"If AI continues to look anything like what it looks like right now, none of these tasks are sufficiently structured for AI to be able to do."* (Participant 357)  
- Confidence: High


#### 4. Theme: Sensitive data and high‑stakes correctness should be excluded or tightly controlled  
- Description: A subset of participants insisted that AI should be restricted or prevented from handling requirements that involve sensitive data or high-stakes correctness, due to privacy, compliance, and risk concerns. The condition is enforced access control, data handling guarantees, or simply keeping humans in the loop for those cases.  
- Number of participants: ~5 participants  
- Representative quotes:  
  - *"Anything with sensitive data"* (Participant 266)  
  - *"Where the accuracy is quite important."* (Participant 355)  
- Confidence: Medium

---

## 2) Cross‑Cutting Patterns

- Connections between wants and don't wants: Participants largely want AI to reduce mechanical burden—aggregating sources, drafting, and surfacing gaps—while simultaneously insisting AI not replace the human-centric, decision‑making and relationship aspects of elicitation. In practice this produces a human-in-the-loop model: AI as summarizer, assistant and analytic advisor, humans as owners and approvers.
- Tensions/contradictions: There is a clear tension between desires for AI-generated artifacts (user stories, prioritized lists) and a distrust of AI autonomously producing or choosing requirements. Designers must balance automation with explicit consent and review steps. Some participants welcome AI doing much of the heavy lifting; others say current capabilities are insufficient and worry about hallucination—both views can coexist if systems are explicit about uncertainty and provenance.
- Conditions/boundaries developers place on AI usage: common conditions include: (1) explicit human validation before adopting AI outputs; (2) provenance linking back to original stakeholder statements; (3) avoidance of autonomous decisions; (4) strict handling policies for sensitive data; and (5) ability to set org-specific guardrails and coding/design standards the AI should respect.
  
Relation to other tasks
- Several participants contrasted Requirements Gathering & Analysis with System Architecture & Design, noting they would accept AI help in summarization and analysis but not in making final design or architecture decisions without significant human oversight (Participants 70, 149, 371, 256). A few asked for AI suggestions contextualized by org rules (Participant 281), implying cross-task context awareness is important.

---

## 3) Outliers and Edge Cases

- Strong skeptics: Participant 357 argued current AI is not structured enough to do these tasks at all—an outlier in tone but aligned with wider concerns about capability and trust.
- Maximalist automation desire: A small number envision fully automating follow-ups and communication (Participant 183 expects eventual full automation for coordinating partners); this contrasts with the majority who demand human sign-off.
- Sensitive-data-only restriction: Participant 266's short, categorical "Anything with sensitive data" highlights a strict policy that some organizations may require.
- Request for organization-specific knowledge: Participant 281 emphasized that AI must understand org-specific constraints (e.g., particular component libraries), indicating a need for customizable context beyond generic models.
- Explicit "don't want AI for requirements" declarations: Participant 302 and others bluntly excluded the activity entirely—useful as cautionary extremes for product design.

---

## 4) Implications for AI Tool Design

High-level takeaway: Developers want AI to be a context‑aware assistant that aggregates, summarizes, and analyzes requirement inputs while preserving provenance and requiring explicit human validation for decisions. Trust, provenance, and human ownership are the dominant design constraints.

#### Key "must haves" (features designers should prioritize)
- Meeting and multi-source capture with provenance
  - Capability: ingest transcripts, emails, chats and map statements back to sources and timestamps; highlight ambiguous or conflicting statements. Rationale: reduces loss of detail and enables auditability.
- Summarization and clustering with trace links
  - Capability: cluster semantically similar requirement statements across sources and produce concise summaries with links to original text. Rationale: reduces duplicate work and surfaces consensus/variability.
- Human-in-the-loop workflows and explicit acceptance steps
  - Capability: require user confirmation before turning AI suggestions into official requirements or tasks; provide an "accept/reject/edit" interface. Rationale: preserves accountability and prevents silent adoption of AI assumptions.
- Uncertainty, provenance, and "guess vs. fact" labeling
  - Capability: mark which outputs are inferred, which are directly quoted, and provide confidence estimates and source citations. Rationale: addresses hallucination and trust.
- Org- and context-aware guardrails
  - Capability: allow configuration of org rules, preferred components, compliance constraints, and forbidden data classes. Rationale: ensures AI recommendations respect local standards.
- Support for iterative elicitation (scripts, surveys, follow-ups)
  - Capability: generate follow-up question sets and structured surveys tailored to gaps and ambiguities, with an easy way for humans to run or review them. Rationale: accelerates clarification while giving humans control.

#### Key "must not haves" (design guardrails)
- No silent autonomous requirement creation
  - Anti-pattern: AI creating or changing official requirements without explicit human approval. Rationale: risks incorrect scope and accountability loss.
- No opaque outputs without provenance
  - Anti-pattern: producing "final" requirements without links to sources or confidence indicators. Rationale: lowers trust and increases verification cost.
- No unsupervised handling of sensitive data
  - Anti-pattern: routing private or regulated information through external models without clear safeguards. Rationale: compliance and privacy risk.
- No opaque decision-making on technology or architecture
  - Anti-pattern: AI selecting technologies or architectures as final choices without surfacing trade-offs and constraints. Rationale: human teams must retain design ownership.

(Optional) Design patterns to resolve tensions
- "Suggestion + Citation" pattern: always pair a recommendation with source excerpts and a confidence score.
- "Draft & Review" workflow: AI drafts artifacts into a draft workspace and enforces a mandatory human review cycle before export to official trackers.
- "Guardrail Profiles": admins define profiles (e.g., sensitive-data-prohibited) that change model behavior and available actions in requirement contexts.

---

## Executive Summary

- Developers welcome AI for aggregating and summarizing requirements from many dispersed sources to prevent lost details and reduce manual toil.
- There is strong interest in AI drafting user stories, tasks, and meeting-to-requirement conversions—provided human vetting is enforced.
- AI is valued as a decision‑support tool for feasibility, trade-offs, NFRs, and prioritization, but not as an autonomous decision maker.
- Major concerns are hallucination, technical correctness, loss of human-led stakeholder communication, and handling of sensitive data.
- Design must prioritize provenance, uncertainty labeling, configurable organizational guardrails, and explicit human-in-the-loop workflows.

---

Short Summary / Recommendations

- Build AI features that aggregate and summarize multi-source inputs and link outputs back to original statements.  
- Provide drafting tools (user stories, tasks, docs) but require explicit human acceptance before outputs are promoted.  
- Surface trade-offs and risks with guardrails and allow org-specific context to shape suggestions.  
- Always show provenance and uncertainty; mark inferred items clearly and avoid opaque assertions.  
- Restrict or tightly control handling of sensitive data and prevent fully autonomous requirement decisions.