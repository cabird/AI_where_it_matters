# Report: Security & Compliance

**Task Category:** quality_risk

**Generated:** 2025-09-30 22:38:27

**Number of Participants:** 57

---

# Thematic Analysis — Security & Compliance

This analysis synthesizes developer survey responses specifically about Security & Compliance. I read each participant’s “where they want AI” and “where they don’t want AI” answers and coded for recurring motives, tasks, constraints, and concerns. Themes prioritize task value (what AI can practically accelerate), identity and accountability (who remains responsible), and cognitive demands (where human judgment is needed). Counts are rounded to the nearest 5 per instructions.

---

## 1) Core Themes


### A. Where AI is wanted

#### 1. Theme: Automated detection and flagging of security vulnerabilities in code and PRs  
   - Description: Developers want AI to act as a proactive scanner in the development workflow—reviewing PRs, scanning code, and flagging potential vulnerabilities or adverse coding patterns before changes are merged. The motivation is to reduce human toil, catch issues earlier, and surface things human reviewers might miss. They expect AI to reliably point out probable security problems and annotate confidence so humans can triage quickly; however, many explicitly want these findings to be reviewable rather than automatically applied. This use is framed as augmenting human reviewers rather than replacing their judgment.  
   - Number of participants: ~35 participants  
   - Representative quotes:  
     - *"I want AI to proactively evaluate contributions for potential security issues before I merge changes."* (Participant 41)  
     - *"Flagging security bugs/risks in libraries, updating libraries, updating outdated code"* (Participant 217)  
     - *"I'd like AI to quickly detect security issues or adverse coding patterns, either in PRs or while I'm working."* (Participant 397)  
   - Confidence: High

#### 2. Theme: Test generation, QA automation and adversarial/chaos testing for security  
   - Description: Many developers want AI to generate tests, simulate attacker behavior, and create chaos or adversarial test environments that explore unforeseen failure modes. The motivation is to automate repetitive test creation, broaden test coverage, and find subtle auth/authz or workflow gaps. Desired outcomes include exhaustive test scenarios (UI, APIs, backend auth flows), automated unit tests, and simulated adversaries that reduce manual QA time. Participants expect AI-driven testing to be human-reviewable and context-aware rather than blindly applied.  
   - Number of participants: ~20 participants  
   - Representative quotes:  
     - *"Creating and maintaining software tests, along with catching software errors and security vulnerabilities before checking in code."* (Participant 47)  
     - *"I want the AI agent to explore my product as a user ... and find bugs before any of our customers find them."* (Participant 117)  
     - *"AI should be able to highlight any existing/possible security risks in the code."* (Participant 286)  
   - Confidence: High

#### 3. Theme: Continuous monitoring, real-time risk prediction and telemetry-assisted detection  
   - Description: Respondents see value in AI that ingests telemetry, logs, configs, and workflows to surface early, low-severity deviations and predictive risk signals before they escalate. The motivation is shifting from reactive incident handling to proactive mitigation, enabling teams to focus on root causes rather than symptom-patching. They expect integration with telemetry platforms and the ability to track risk trends across projects; some also want alerts prioritized by severity. This is positioned as an augmentation to human operators, not a replacement.  
   - Number of participants: ~10 participants  
   - Representative quotes:  
     - *"Iâ€™d like AI to play a major role in real-time risk prediction, compliance monitoring, and automated root cause analysis."* (Participant 9)  
     - *"I want AI to help most with automating quality checks and surfacing hidden risks early. If it can scan logs, configs, or workflow patterns and flag things that might break later..."* (Participant 301)  
     - *"We need an at-scale telemetry platform that I can leverage AI for to detect security, compliance and reliability risks broadly."* (Participant 183)  
   - Confidence: High

#### 4. Theme: Applying standards, compliance checks, documentation assistance and information retrieval  
   - Description: Developers want AI to help apply detailed standards (accessibility, cryptography, regulatory guidance), fill repetitive compliance forms, and fetch information for first-draft security reviews. The motivation is reducing drudgery, ensuring consistent application of lengthy standards, and speeding up manual survey-style reviews. Expected outcomes are draft checklists, pre-filled survey responses, and guidance tied to documented standards; again, humans want to verify and own final answers.  
   - Number of participants: ~10 participants  
   - Representative quotes:  
     - *"Having LLMs be able to ensure we apply best practices from lengthy documentation is very advantageous."* (Participant 140)  
     - *"AI should be able to handle a first-draft and information retrieval."* (Participant 203)  
     - *"when I deal with Compliance the AI can take on the guesswork and drudgery of form-filling?"* (Participant 385)  
   - Confidence: High

---

### B. Where AI is not wanted

#### 1. Theme: Final decision-making, accountability, and high‑stakes judgments  
   - Description: Across responses, developers emphasize that responsibility for risk trade-offs, shipping decisions, and high-stakes judgment calls must remain human. Their concern is that AI lacks contextual nuance, ethical reasoning, and accountability; letting AI decide would shift liability away from humans and risk unsafe outcomes. Boundaries include allowing AI to suggest or inform decisions but not to make final calls about rollouts, trust assessments, or risk acceptance.  
   - Number of participants: ~35 participants  
   - Representative quotes:  
     - *"I wouldnâ€™t want AI to handle final decision-making in high-stakes risk scenarios..."* (Participant 9)  
     - *"I want to make the final decision about what risks are worth taking"* (Participant 14)  
     - *"I donâ€™t want AI to make final decisions on critical production rollouts or override human judgment in incident triaging..."* (Participant 57)  
   - Confidence: High

#### 2. Theme: Autonomous modifications to production or automatic fixes without human review  
   - Description: Developers are strongly opposed to AI that acts with full autonomy to change live systems—auto-committing fixes, altering cloud configs, or applying security patches without explicit human approval. Their concerns include unintended downtime, misconfigurations, and loss of control; acceptable modes are suggestions, PRs, or reviewable actions that humans confirm. They favor human-in-the-loop workflows, restricted privileges, and explicit opt-in for any live changes.  
   - Number of participants: ~15 participants  
   - Representative quotes:  
     - *"Directly touching production without oversight"* (Participant 23)  
     - *"I don't want the AI to automatically take action in my Azure subscription, where it could incorrectly adjust configuration causing live site issues."* (Participant 205)  
     - *"Auto commit fixes for S360 item resolution. This may have production user facing implications."* (Participant 410)  
   - Confidence: High

#### 3. Theme: Handling of sensitive customer data and privacy tasks  
   - Description: Several developers explicitly do not want AI to process or directly handle customer or sensitive data, citing privacy and breach risk. The feared outcome is that data seen by AI might be exfiltrated or improperly exposed, so AI access should be curtailed, especially for production data and anything personally identifiable. Boundaries include local filtering, anonymization, or forbidding AI access to live customer data.  
   - Number of participants: ~5 participants  
   - Representative quotes:  
     - *"AI should not be allowed to handle User or customer's data as it could lead to a breach of confidential / privacy data."* (Participant 282)  
     - *"I don't want AI to directly handle sensitive information, as I don't trust that information it sees stays truly secure."* (Participant 397)  
     - *"Tasks which involve privacy, I feel individual needs to do on their own."* (Participant 180)  
   - Confidence: Medium

#### 4. Theme: Sole reliance for verification, threat modelling, or high‑quality security documentation  
   - Description: Developers distrust AI as the sole verifier for security correctness, verification, or producing high-quality threat models and design docs. They report poor AI-generated documentation and emphasize that humans must define verification criteria, requirements, and encode acceptance standards. The feared outcome is false assurance—AI declaring something secure when verification criteria were poorly specified or misunderstood. Acceptable uses are drafting and surfacing ideas, but the final verification and threat modelling must be human-led.  
   - Number of participants: ~10 participants  
   - Representative quotes:  
     - *"I dont want AI to say that something is secure without a very strict oversight."* (Participant 199)  
     - *"I do not want the AI to write threat models or security design documentation. Existing AI systems are too primitive to write high quality documentation."* (Participant 167)  
     - *"Security/compliance is hard ... I need to verify myself that security issues are present, and that a particular security fix resolves it."* (Participant 165)  
   - Confidence: High

---

## 2) Cross‑Cutting Patterns

- Connections between wants and don't wants: Developers consistently want AI to take on repetitive, broad‑coverage, and pattern‑matching tasks (scanning, test generation, telemetry analysis) but strongly insist on human control for final judgments, production actions, and responsibilities. The same participants often both request automated detection and simultaneously require human-in-the-loop confirmation for fixes or decisions.

- Tensions or contradictions: There is enthusiasm for AI-driven proactive mitigation (e.g., chaos testing, auto-generated PR fixes) but also strong resistance to granting AI enough privilege to actually make live changes. Some respondents push for extensive automation ("AI can handle all SFI") while others explicitly reject more AI tools; a few participants are outliers who want full automation and others who want none. This reflects divergent risk tolerances and trust in current AI reliability.

- Conditions or boundaries developers place on AI usage: Common constraints include: AI outputs must be reviewable, confidence and explainability indicators should accompany findings, AI must not auto‑commit to production, and it must avoid handling raw customer data. Additional conditions include ability to define verification criteria and to tailor AI behavior to local context.

Relation to other tasks
- Several participants contrasted Security & Compliance with general QA and development tasks: they see AI as particularly strong at test generation and detecting low-level issues (similar to QA automation) but weaker at strategic, ethical, and design-level decisions that require human judgment. Some explicitly compared AI's usefulness in compliance form-filling and drudgery versus the need for human accountability in risk acceptance.

---

## 3) Outliers and Edge Cases

- Full automation advocates: Participant 299 explicitly stated "None, AI can definitely help in all of them," showing a pro-automation stance uncommon in the dataset.
- Total rejectionists: Participant 110 simply wrote "I don't want more AI tools," representing strong tool skepticism.
- Confident human filters: Participant 62 encouraged AI experimentation ("knock yourself out") but preferred to do their own filtering of AI feedback, showing trust in human curation rather than tool constraints.
- Documentation sceptics: Participant 167 strongly opposed AI-produced threat models and design docs, noting consistently poor quality—this is a specific, repeated concern about documentation outputs rather than detection.
- Mixed trust at scale: Some participants wanted AI to act on telemetry at scale while simultaneously warning that AI-derived verification cannot itself be trusted—emphasizing the need for human-defined baselines.

---

## 4) Implications for AI Tool Design

Developers want tools that materially reduce drudgery and surface issues early while preserving human accountability and limiting risk. Design should prioritize human-in-the-loop workflows, least-privilege operation, explainability, and explicit mechanisms for owners to accept/reject changes.

Key "must haves" (features designers should prioritize)
- Accurate, context-aware vulnerability detection
  - Capability: PR and in-editor scanning that highlights probable vulnerabilities and links to exact lines, examples, and remediation steps. Rationale: developers want fast, actionable findings they can triage.
- Test-generation and adversarial/chaos testing engines
  - Capability: Auto-generate unit/integration tests and adversarial workflows (UI/API/auth) that are reviewable and runnable in sandboxed environments. Rationale: reduces manual QA toil and uncovers hard-to-find security issues.
- Telemetry and log integration for predictive risk detection
  - Capability: Ingest logs/configs and surface early deviations with risk scoring and trend dashboards. Rationale: shifts teams from reactive to proactive risk management.
- Human-in-the-loop workflows with PRs and suggested fixes (no autopilot to prod)
  - Capability: Produce suggested PRs or patch files, never auto-apply to production without explicit authorization; include one-click review/rollback metadata. Rationale: prevents unintended production impact and preserves accountability.
- Explainability and confidence metadata
  - Capability: Each finding should include confidence scores, concise reasoning, and links to evidence or standards. Rationale: supports triage and builds trust.
- Privacy and data protection safeguards
  - Capability: Strict controls to prevent AI access to raw customer data, local-only analysis options, and automatic anonymization. Rationale: addresses explicit privacy concerns.

Key "must not haves" (design guardrails)
- Autonomous production changes without explicit human approval
  - Rationale: multiple respondents feared misconfigurations and user-facing outages.
- Sole reliance on AI for verification or to declare something “secure”
  - Rationale: false assurance risk and lack of accountable verification.
- Unrestricted access to customer or sensitive data
  - Rationale: privacy and breach risks.
- Claiming high-quality security design or threat models as final deliverables
  - Rationale: developers report poor AI-generated docs and want humans to create/verify strategic artifacts.

Design patterns to resolve tensions
- Least-privilege agents that can run experiments in sandboxes and propose patch PRs, combined with approval flows and audit logs.
- Confidence-filtered alerts that prioritize findings for human reviewers and allow tuning of false-positive thresholds.
- Template-driven compliance outputs (pre-filled drafts linked to standards) that require sign-off and include traceable evidence.

---

## Executive Summary

- Developers broadly welcome AI to detect vulnerabilities, review PRs, and generate tests, seeing it as a way to reduce manual toil and surface issues earlier.  
- They want AI to drive proactive monitoring (telemetry/log analysis) and to help apply long documentation-based standards and compliance checklists.  
- Strong, recurring constraint: AI must not make final decisions or take autonomous actions in production; human accountability and sign-off are required.  
- Privacy is a clear boundary—many do not want AI to handle raw customer or sensitive data.  
- Tools must provide explainability, confidence levels, sandboxed testing, and reviewable suggested fixes (e.g., PRs), not auto-applied changes.

---

Short Summary / Recommendations

- Prioritize building AI features that scan code/PRs for security issues and generate reviewable remediation (suggested PRs), not auto-applied fixes.  
- Include robust test-generation and adversarial/chaos testing capabilities, but run these in sandboxes and present human-reviewable outputs.  
- Integrate telemetry/log analysis for early, low-severity alerts with trend tracking and prioritization.  
- Always present confidence, evidence, and links to standards; require explicit human sign-off for any production changes or risk acceptances.  
- Implement strict privacy controls: disallow unfettered access to raw customer data and offer local/anonymized analysis modes.