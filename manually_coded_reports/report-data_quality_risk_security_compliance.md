# Qualitative Analysis for Security & Compliance
# Category: Quality & Risk Management

This document is an AI-generated synthesis of manually coded survey responses from software developers about AI usage in Security & Compliance (Quality & Risk Management). The analysis preserves the research team's thematic structure and codes, integrates representative participant quotes, and draws practical implications for AI tool design. I synthesized the coded descriptions and quotes to highlight developers' desired AI capabilities, explicit limits, cross-cutting tensions, outliers, and concrete design guardrails.

---

## 1) Core Themes

### A. Where AI is Wanted

#### Theme: 1. Proactive Security Risk Detection

Developers consistently want AI to shift security and compliance work from reactive firefighting to proactive risk prediction. The manual code description—AI that "proactively detect and flag risks before merges/releases, using predictive analytics and telemetry"—captures a desire for real-time, continuous monitoring that surfaces vulnerabilities while they are still low severity. Respondents described wanting AI to scan code, telemetry, logs, configs, and workflow patterns to identify deviations from a known good baseline and surface trends across projects so teams can focus on root causes rather than recurring symptoms. For example, one participant articulated a broad vision: “I’d like AI to play a major role in real-time risk prediction, compliance monitoring, and automated root cause analysis. These capabilities can help catch issues early, ensure standards are met continuously, and reduce the time spent on post-incident investigations.” (Participant 9). Others emphasized preventative checks in pull requests: “I want AI to proactively evaluate contributions for potential security issues before I merge changes.” (Participant 41) and the need for telemetry at scale: “We need an at-scale telemetry platform that I can leverage AI for to detect security, compliance and reliability risks broadly.” (Participant 183).

Participants framed the motivation as time savings, fewer incidents, and earlier remediation. Boundaries mentioned include the need for accurate early warnings (to avoid noise) and visibility into trends across projects so teams can prioritize fixes. The desired outcomes are fewer regressions, faster incident prevention, and the ability to act on systematic risk signals rather than isolated tickets.

**Representative quotes**:
- *"I’d like AI to play a major role in real-time risk prediction, compliance monitoring, and automated root cause analysis…"* (Participant 9)  
- *"I want AI to proactively evaluate contributions for potential security issues before I merge changes."* (Participant 41)  
- *"We need an at-scale telemetry platform that I can leverage AI for to detect security, compliance and reliability risks broadly."* (Participant 183)  
- *"AI shows promise in detecting deviations from a known good baseline. I want these agents to alert us to potential issues while they're still low-sev..."* (Participant 167)

---

#### Theme: 2. Compliance Automation & Standard Enforcement (incl. Overhead & Accuracy)

Within this theme, developers want AI to take over repetitive compliance tasks, ensure standards are applied consistently, and reduce the drudgery of manual questionnaires and form-filling. The coded description—AI handling repetitive compliance tasks and enforcing standards while emphasizing accuracy/confidence—matches many responses calling for AI to produce first drafts of security-review artifacts, apply documented best practices (e.g., accessibility or cryptography), and reduce the tedious steps of audit readiness. One participant asked for AI to handle the "hundred question survey" that security reviews typically require: “AI should be able to handle a first-draft and information retrieval.” (Participant 203). Another highlighted the value of codified standards: “LLMs really shine when there is clear, robust documentation for the thing it is working on… ensure we apply best practices from lengthy documentation.” (Participant 140).

Developers emphasized two intertwined requirements: automation to reduce overhead, and high confidence/accuracy so that outputs are trusted. They want AI to flag compliance failures with an explicit confidence level and to leave final validation to humans. A design boundary repeatedly mentioned is minimizing false positives and making the AI’s scope of certainty clear so reviewers can prioritize human attention rather than re-do repetitive checks.

**Representative quotes**:
- *"Code review feedback including security and compliance checks."* (Participant 71)  
- *"AI should be able to handle a first-draft and information retrieval."* (Participant 203)  
- *"Having LLMs be able to ensure we apply best practices from lengthy documentation is very advantageous."* (Participant 140)  
- *"Handle S360 items on its own only asking for final confirmation from the user… and mention… the confidence of the review."* (Participant 410)

---

#### Theme: 3. Test Generation, Exploratory & Chaos Testing

Developers see substantial value in AI-generated tests, adversarial probing, and automated maintenance of test suites to surface hard-to-imagine failure modes. The coded description—AI generating robust tests, probing systems adversarially, and maintaining/refactoring test suites—matches frequent calls for AI to act as an "adversary" in chaos testing, to explore workflows like a user and find authentication/authorization gaps, and to propose targeted test coverage improvements. Several participants envisioned AI doing exhaustive or adversarial exploration: “I want AI to automatically detect security risks and create chaos testing environments, since many scenarios are unimaginable to us but could be discovered through random exploration.” (Participant 46). Others asked for unit-test generation and PR-level test suggestions: “AI should be able to generate tests automatically when given the context of the files to cover.” (Participant 332).

The motivation is clear: augment human testers to increase coverage and discover edge cases quickly, thereby catching vulnerabilities before they reach production. A boundary implicit in responses is the need for tests that are contextually appropriate and maintainable, not just voluminous. Developers also want AI to help refactor and keep tests up-to-date so the test-suite remains useful over time.

**Representative quotes**:
- *"I want AI to automatically detect security risks and create chaos testing environments…"* (Participant 46)  
- *"Creating and maintaining software tests, along with catching software errors and security vulnerabilities before checking in code."* (Participant 47)  
- *"Security and Compliance … AI can play a huge role here and ease developers' life in writing exhaustive test cases. AI can act as a great adversary."* (Participant 299)  
- *"AI should be able to generate tests automatically when given the context of the files to cover."* (Participant 332)

---

#### Theme: 4. Context-Aware and Localized Fix Suggestions

Developers want AI that goes beyond generic suggestions and produces fixes tuned to local project context, team norms, and repository conventions. The description—AI suggesting or implementing fixes that account for local project context and team norms—reflects requests for AI to open PRs or produce patch suggestions that align with how a team structures code and handles security requirements. One participant summarized this need: “It would be nice to have an AI understand the local context for a security issue, and make a PR, or other reviewable action to take.” (Participant 205). Another asked for AI to annotate the scope and confidence of its review so humans can focus elsewhere: “Handle S360 items on its own only asking for final confirmation… mention… the confidence of the review so that human reviewers can look at other aspects.” (Participant 410).

The motivation is to reduce the manual burden of implementing known fixes and to make remediation faster and less error-prone. Conditions participants mentioned include retaining reviewability and requiring human sign-off for actual production changes; AI-generated fixes should be reviewable and conform to the team's standards rather than blindly applied.

**Representative quotes**:
- *"It would be nice to have an AI understand the local context for a security issue, and make a PR, or other reviewable action to take."* (Participant 205)  
- *"Handle S360 items on its own only asking for final confirmation from the user…"* (Participant 410)  
- *"There are lots of security requirements being pushed down to each team. They know the answer and how it should be fixed, but lack the local context."* (Participant 205)

---

### B. Where AI is Not Wanted

#### Theme: Final Accountability, Decision Control, and Ethical Judgment Must Stay Human

This theme aggregates strong developer resistance to ceding final responsibility, especially for high-stakes decisions, and an explicit prohibition on autonomous actions that change production without sign-off. The first coded sub-theme, "High-stakes, ethical, and nuanced decisions require humans," captures a recurring stance: AI can assist with analysis, but decisions involving trade-offs, customer communication, shipping known limitations, or incident triage require human judgment, empathy, and responsibility. Participant 9 framed this boundary succinctly: "I wouldn’t want AI to handle final decision-making in high-stakes risk scenarios, especially where ethical judgment, human intuition, or deep domain context is critical." Similarly, others stated: "I want to make the final decision about what risks are worth taking." (Participant 14) and “I don’t want AI to make final decisions on critical production rollouts or override human judgment in incident triaging…” (Participant 57).

The second coded sub-theme, "No autonomous AI actions or direct production/system changes without sign-off," reflects concrete operational constraints: developers oppose AI automatically committing code, applying fixes, changing cloud configuration, or resolving compliance items without explicit human approval. Participants worry about unintended production impacts: “I don't want the AI to automatically take action in my Azure subscription, where it could incorrectly adjust configuration causing live site issues.” (Participant 205). There is a consistent call that AI outputs be reviewable, that humans remain accountable, and that changes to production require explicit human authorization.

**Sub-themes identified:**
- **High-stakes, ethical, and nuanced decisions require humans**: Developers emphasize that final accountability, ethical trade-offs, and nuanced decisions (e.g., release readiness, incident triage, risk trade-offs) must remain human-led.
- **No autonomous AI actions or direct production/system changes without sign-off**: Developers strongly oppose AI automatically committing code, applying security fixes, updating configs, or handling S360 items without explicit human oversight and approval.

**Representative quotes**:
- *"I wouldn’t want AI to handle final decision-making in high-stakes risk scenarios…"* (Participant 9)  
- *"I want to make the final decision about what risks are worth taking."* (Participant 14)  
- *"Directly touching production without oversight."* (Participant 23)  
- *"I don't want the AI to automatically take action in my Azure subscription, where it could incorrectly adjust configuration causing live site issues."* (Participant 205)

---

#### Theme: Quality and Trust Issues

Developers expressed deep concerns about AI’s transparency, correctness, and handling of sensitive data—issues that undermine trust in AI-driven security and compliance work. The first coded sub-theme, "Transparency, correctness, and verification limits," highlights a belief that current AI systems are opaque and cannot be used as authoritative verification tools without human-defined criteria. Participants insisted verification should remain human-led, noting that AI-generated documentation or threat models are often poor quality: “I do not want the AI to write threat models or security design documentation. Existing AI systems are too primitive to write high quality documentation.” (Participant 167). The risk is relying on AI outputs that look convincing but are incorrect: “I think letting current AI handle security and compliance work is risky and I wouldn't trust it. There's a very strong need for human oversight… unless we make tools that can guarantee correctness.” (Participant 1).

The second coded sub-theme, "Privacy and sensitive data handling," captures categorical boundaries around data access. Multiple participants stated that AI should not directly handle user/customer or other sensitive data, citing privacy and breach risk: “AI should not be allowed to handle User or customer's data as it could lead to a breach of confidential / privacy data.” (Participant 282) and “Tasks which involve privacy, I feel individual needs to do on their own.” (Participant 180). Concerns include both the security of data sent to AI services and legal/regulatory exposures.

**Sub-themes identified:**
- **Transparency, correctness, and verification limits**: Developers see AI as opaque and untrustworthy for verification and fear AI may give false assurances about security without human-verifiable proofs.
- **Privacy and sensitive data handling**: AI should not directly access or process sensitive information (user/customer data, confidential project data), as this could risk breaches and privacy violations.

**Representative quotes**:
- *"I think letting current AI handle security and compliance work is risky and I wouldn't trust it."* (Participant 1)  
- *"I do not want the AI to write threat models or security design documentation. Existing AI systems are too primitive…"* (Participant 167)  
- *"AI should not be allowed to handle User or customer's data as it could lead to a breach…"* (Participant 282)  
- *"I don't want AI to directly handle sensitive information, as I don't trust that information it sees stays truly secure."* (Participant 397)

---

## 2) Cross-Cutting Patterns

- Complementary desires and concerns: Developers want the analytic scale and automation of AI (proactive detection, test generation, compliance automation), but they simultaneously fear overreliance on AI for final decisions, verification, and handling of sensitive data. The "want" themes emphasize augmentation—AI surfacing risks, generating tests, drafting fixes—while the "don't want" themes remind designers that humans must retain accountability, especially where consequences are high. This creates a clear complement: AI as a high-value assistant, not an autonomous owner.

- Conditional acceptance: Acceptance of AI is highly conditional. Developers repeatedly call for reviewability, explicit confidence indicators, localized context-awareness, and human sign-off for production changes. They want AI to automate noise-prone tasks (checklists, boilerplate tests, draft remediation) but require transparency and guardrails—particularly no silent changes to production and no direct handling of customer-sensitive data.

- Task-specific nuances: Security Compliance tasks are uniquely sensitive because errors can lead to legal/regulatory exposure, customer data breaches, and systemic failure. This raises the bar for AI correctness and traceability compared with other software tasks. Developers highlight specifics—audit readiness, supplier monitoring, cryptography standards—that depend on up-to-date documentation and strict traceability, making explainability and provenance important.

- Trust and control dynamics: Trust is conditional and mediated by control features: provenance, confidence scores, the ability to inspect suggested fixes/tests, and strict gating for production actions. Developers want AI to reduce drudgery while preserving human oversight. The dynamic is conservative: use AI for detection and drafting, but route decisions and operational changes through humans.

## 3) Outliers and Edge Cases

- Minority perspectives contradicting dominant caution: A few responses lean toward stronger automation—suggesting AI “handle S360 items on its own only asking for final confirmation” (Participant 410) or create PRs automatically (Participant 205). These voices assume robust confidence reporting and human review gates, but imply a higher willingness to let AI act if review is streamlined.

- Unique insights: The telemetry-at-scale idea (Participant 183) points to integrating AI with organization-wide observability—beyond per-PR checks—to detect emergent risks across services. This is a systems-level application not emphasized in every response.

- Ambivalent responses: Several participants simultaneously express enthusiasm for AI's potential in test generation and proactive detection while warning against letting AI make final calls. For instance, Participant 301 praises automating quality checks and surfacing hidden risks but explicitly excludes areas involving human judgment and communications.

- Contradictions within individuals: Some participants wanted AI to "make a PR" for a fix (Participant 205) but also warned against AI making autonomous production changes. This suggests conditional automation: suggestions and draft PRs are acceptable, but automatic merges or deployments are not.

## 4) Implications for AI Tool Design

Developers want AI that amplifies defensive coverage, reduces repetitive work, and produces context-aware suggestions—while enforcing human responsibility, transparency, and data protection.

#### Key "Must Haves" (features designers should prioritize)

- **Proactive Risk Detection and Telemetry Integration**
  - Capability: Continuous analysis of code, logs, configs, and telemetry to surface early, low-severity anomalies and trend-based risk signals across projects.
  - Rationale: Participants asked for real-time risk prediction and cross-project trend tracking to focus on root causes (Participant 9, 183, 167).
  - Example: “I’d like AI to play a major role in real-time risk prediction…” (Participant 9)

- **Automated Compliance Workflows with Confidence Indicators**
  - Capability: Auto-fill compliance forms, produce first-draft security reviews, and enforce documented standards with explicit confidence scores and provenance for each check.
  - Rationale: Developers want reduced overhead but need clear signal quality to decide what to trust (Participant 203, 410, 140).
  - Example: “AI should be able to handle a first-draft…” (Participant 203)

- **Context-Aware Fix Suggestions and Reviewable PRs**
  - Capability: Generate localized code fixes or patch suggestions that respect repo conventions and include human-reviewable PRs with rationale and confidence metadata.
  - Rationale: Teams want fixes that fit local norms and can be accepted or modified by humans (Participant 205, 410).
  - Example: “It would be nice to have an AI understand the local context… and make a PR…” (Participant 205)

- **Test Generation and Adversarial/Chaos Testing Automation**
  - Capability: Produce unit/integration tests, adversarial exploration plans, and chaos tests derived from repository context, with traceable mappings from tests to risks.
  - Rationale: Many participants believed AI could expand coverage and act as an adversary to find hard-to-imagine issues (Participant 46, 299, 332).
  - Example: “AI can act as a great adversary.” (Participant 299)

- **Explainability and Verification Tools**
  - Capability: Provide human-readable rationales, traceable evidence, and links to standards/docs used—so humans can verify AI findings and fixes.
  - Rationale: Lack of transparency undermines trust; developers want to understand why AI flagged an issue (Participant 1, 165, 228).
  - Example: “You can't reliably depend on an AI system for the verification criteria; a human has to define that…” (Participant 165)

#### Key "Must Not Haves" (design guardrails)

- **No Autonomous Production Changes**
  - Risk: Automatic commits, configuration changes, or direct cloud edits can break systems or introduce regressions.
  - Rationale: Participants explicitly opposed AI touching production without sign-off (Participant 23, 205, 410).
  - Example: "Directly touching production without oversight." (Participant 23)

- **No Final Decision Authority in High-Stakes Scenarios**
  - Risk: Ceding ethical trade-offs, release choices, or incident triage to AI removes human accountability and context-sensitive judgment.
  - Rationale: Participants insisted on retaining final decision power for nuanced scenarios (Participant 9, 14, 57).
  - Example: "I want to make the final decision about what risks are worth taking." (Participant 14)

- **No Unverified Handling of Sensitive Data**
  - Risk: Feeding user/customer data into AI pipelines without controls may cause privacy breaches and legal exposure.
  - Rationale: Multiple participants refused AI access to sensitive datasets (Participant 282, 180, 397).
  - Example: "AI should not be allowed to handle User or customer's data…" (Participant 282)

- **No Opaque Verification Claims**
  - Risk: AI producing confident but unverifiable security/compliance assertions can create false assurance.
  - Rationale: Developers rejected using AI as a black-box verifier without transparent evidence (Participant 1, 228).
  - Example: "I do not think AI can be used for verification of quality or to evaluate risk because humans cannot make sense of what the AI is doing…" (Participant 228)

---

## Executive Summary

- Developers want AI to proactively detect security risks, generate tests, and automate routine compliance tasks—provided outputs are accurate, contextualized, and reviewable.
- They strongly oppose AI making autonomous production changes or taking final responsibility for high‑stakes, ethical, or nuanced decisions.
- Critical design implications: prioritize explainability, provenance, confidence indicators, and human-in-the-loop review gates for any remediation or production-impacting actions.
- Build features that integrate telemetry and cross-project trend analysis, automated test generation, and context-aware patch suggestions while preserving reviewability.
- Major tension: appetite for automation (speed, coverage) vs. need for human accountability and privacy protections.
- Recommendation: deliver AI as an assistive, auditable layer—automate drafting and detection, but require explicit human authorization for verification and production changes.