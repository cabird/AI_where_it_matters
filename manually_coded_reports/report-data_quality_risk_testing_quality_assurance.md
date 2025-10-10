# Report of Qualitative Analysis for Testing Quality Assurance (Category: Quality Risk)

This report is an AI-generated synthesis of manually coded survey responses from software developers about AI usage in Testing Quality Assurance within the Quality Risk category. I preserved the research team's thematic structure and codes, synthesized participant quotes and descriptions into coherent narratives, and analyzed patterns, tensions, and implications to produce actionable design guidance for AI tools in QA.

---

## 1) Core Themes

### A. Where AI is Wanted

#### Theme: 1. Intelligent Test Creation & Maintenance

Participants envision AI as an active partner that both generates new tests and keeps them useful over time. Under the code Context-aware test generation, respondents describe AI that can "write tests from code/specs/layouts or NL descriptions, extends happy-path tests with edge cases, and maintains them over time." The motivation is pragmatic: save developer time, increase thoroughness, and let non-specialists (e.g., PMs) specify tests that AI turns into executable checks. For example, one participant framed the role broadly—"Help develop and run quality testing and report the results" (Participant 14)—while others emphasized generating tests from layouts or code, or augmenting happy-paths with edge cases: "I would really like to have AI help with writing tests... extrapolate from a layout file and the code behind what tests to write" (Participant 126). Desired outcomes include higher coverage, fewer regressions, and faster iteration cycles; participants often caveat this with expectations about context-awareness and maintenance, wanting AI to "help generate qualified code logic generate qualified but not too many unit test cases" (Participant 246).

Coverage analysis & gap closure is a closely allied sub-goal: developers want AI to analyze existing coverage, flag missing scenarios, and create tests to close those gaps. The coded description—"AI analyzes test coverage, flags missing cases, and creates extra tests to reduce regression risk"—captures participants’ shift from reactive firefighting to proactive assurance. Representative aspirations include: "over the next 1–3 years, I want AI to play a major role in proactively detecting regressions, analyzing test coverage gaps, and predicting high-risk areas" (Participant 57) and "To improve code coverage and minimize risk of code regressions" (Participant 255). The boundary here is clear: AI should produce targeted, context-sensitive tests rather than spurious bulk generation; participants repeatedly ask for quality over quantity and the ability to prioritize high-risk gaps.

**Sub-themes identified:**
- **Context-aware test generation**: AI writes tests from code/specs/layouts or NL descriptions, extends happy-path tests with edge cases, and maintains them over time.
- **Coverage analysis & gap closure**: AI analyzes test coverage, flags missing cases, and creates extra tests to reduce regression risk.

**Representative quotes**:
- *"Help me designing good and thorough tests"* (Participant 18)
- *"More automated tests built by AI that even a PM could specify what they want to test and AI handles it"* (Participant 35)
- *"I would really like to have AI help with writing tests... extrapolate from a layout file and the code behind what tests to write"* (Participant 126)
- *"To improve code coverage and minimize risk of code regressions"* (Participant 255)
- *"To analyse missing test coverage and implement tests on its own"* (Participant 408)

---

#### Theme: 2. Early Risk Detection & Quality Gatekeeping

Developers want AI to act as an early-warning system that spots deviations, anticipates regressions, and augments CI/CD to prevent problems before they reach production. Under Proactive regression & anomaly detection, the coded description—"AI spots deviations from baselines, predicts high-risk areas, and surfaces hidden issues early"—matches comments about shifting from reactive firefighting to preventive assurance. Participants seek agents that "alert us to potential issues while they're still low-sev, before they've had a chance to blow up" (Participant 167) and can "scan logs, configs, or workflow patterns and flag things that might break later" (Participant 301). The desired context is continuous monitoring tied into developer workflows so risk trends can be tracked and root causes prioritized.

The CI/CD quality automation code captures more operational desires: AI that enhances pipelines via static analysis, fuzz testing, and automating repetitive QA tasks that are low cognitive load but high effort. Participants imagine this reducing manual toil—"Automated compilation, testing infra which can be relied on to cover most of the use cases" (Participant 336)—and augmenting existing pipelines with tools that are accurate and easy to use. Boundaries include minimizing false positives and ensuring automation integrates with existing CI/CD systems without becoming a black box.

**Sub-themes identified:**
- **Proactive regression & anomaly detection**: AI spots deviations from baselines, predicts high-risk areas, and surfaces hidden issues early.
- **CI/CD quality automation**: AI augments pipelines with static analysis, fuzz testing, and other QA automation.

**Representative quotes**:
- *"Over the next 1–3 years, I want AI to play a major role in proactively detecting regressions... so we can shift from reactive firefighting to preventive quality assurance"* (Participant 57)
- *"AI shows promise in detecting deviations from a known good baseline... alert us to potential issues while they're still low-sev"* (Participant 167)
- *"If it can scan logs, configs, or workflow patterns and flag things that might break later... that would save me a ton of time"* (Participant 301)
- *"Automated compilation, testing infra which can be relied on to cover most of the use cases"* (Participant 336)
- *"Ideally AI could enhance existing CI/CD processes like static code analysis, fuzz testing..."* (Participant 365)

---

#### Theme: 3. Security, Compliance & Adversarial Testing

Within security and compliance, participants want AI to act like an adversary that finds vulnerabilities, checks regulatory alignment, and drives corrective tests. The code Security, vulnerability & compliance checks—"AI finds vulnerabilities, compliance issues, correctness problems, acting like an adversary"—captures requests for automated security scanning and compliance-aware test generation. Developers ask for AI that can "automatically detect security risks and create chaos testing environments" (Participant 46), "ACCURATELY make assessments about security issues or functional correctness of code" (Participant 53), and sniff out "authentication or authorization gaps" in backend APIs (Participant 117). The desired outcome is earlier discovery of security and compliance gaps and more exhaustive, adversarial-style testing than humans alone can practically perform.

Exploratory, chaos, & adversarial testing expands this to autonomous exploration and scenario generation. The coded description—"AI conducts autonomous exploratory/chaos testing and end-to-end regression runs"—matches calls for more aggressive, creative testing ("advanced form of Monkey Testing" — Participant 17). Respondents want AI to generate end-to-end scenarios and perform regression runs to uncover improbable but impactful faults: "generate scenarios to perform complete End-To-End functional and regression testing" (Participant 345). Boundaries include accuracy, reproducibility, and the need for audit trails so human teams can verify what the AI actually did.

**Sub-themes identified:**
- **Security, vulnerability & compliance checks**: AI finds vulnerabilities, compliance issues, correctness problems, acting like an adversary.
- **Exploratory, chaos, & adversarial testing**: AI conducts autonomous exploratory/chaos testing and end-to-end regression runs.

**Representative quotes**:
- *"I want AI to automatically detect security risks and create chaos testing environments"* (Participant 46)
- *"I wish it could ACCURATELY make assessments about security issues or functional correctness of code"* (Participant 53)
- *"AI can act as a great adversary"* (Participant 299)
- *"I think the best opportunity for AI in quality and risk management is to use it as a more advanced form of Monkey Testing"* (Participant 17)
- *"automagically build unit test... generate scenarios to perform complete End-To-End functional and regression testing"* (Participant 345)

---

### B. Where AI is Not Wanted

#### Theme: 1. Quality & Trust Concerns

Participants express significant concerns that AI outputs can be inaccurate, hallucinated, unverifiable, or even increase risk. The manual description succinctly captures this: "Developers worry that AI outputs in testing/QA are inaccurate, hallucinated, unverifiable, or introduce risk rather than reducing it." Multiple comments emphasize hallucination and overconfidence: "AI should absolutely not be the determining factor... it frequently hallucinates with absolute certainty" (Participant 17). Others note practical failures—AI-generated code or UI automation that is "really bad" or "difficult to verify" (Participants 51 and 71). Some have experienced loss of time due to inaccuracies and prefer manual control for KPIs or tasks that require precision: "It is not accurate and ends up taking longer than doing things manually" (Participant 85). The feared outcomes include false positives/negatives in test results, wasted developer time, and over-reliance on unreliable automation.

Participants propose limits: AI should fail loudly when it cannot confidently solve a problem ("abort with that information" rather than guessing—Participant 336), and it should avoid fabricating evidence of work or certainty where none exists. They expect transparency and verifiable artifacts to support trust.

**Representative quotes**:
- *"AI should absolutely not be the determining factor... it frequently hallucinates with absolute certainty"* (Participant 17)
- *"AI written code can be really bad, its necessary for a dev to test understand what AI wrote."* (Participant 51)
- *"UI automation might be difficult to verify if AI tries to do it and doesn't do it correctly."* (Participant 71)
- *"It is not accurate and ends up taking longer than doing things manually."* (Participant 85)
- *"If there is something that it is not capable of doing, abort with that information, rather than making some assumptions..."* (Participant 336)

---

#### Theme: 2. Human Oversight & Accountability

There is a strong, recurring insistence that humans remain accountable for testing outcomes and release decisions. The coded description—"Developers emphasize that humans must remain responsible for testing outcomes; AI should not self-evaluate, finalize quality/security checks, or commit code/tests without human review"—is echoed across responses. Participants want AI to assist but not replace human judgment: "a developer needs to validate the results of any generated code without leaning on it entirely" (Participant 41). They require auditability: "somebody has to be checking up on the AI agents and validating their actions" (Participant 117), and emphasize that "the result is owned by the person who committed and/or signed off on the code generated by an LLM" (Participant 140). Specific boundaries include not letting AI make final release-readiness or risk-acceptance decisions, and ensuring humans control criteria for tests and verification.

The feared outcomes if oversight is lax are clear: incorrect security or compliance decisions, unverified test coverage claims, and loss of accountability when things go wrong. Respondents expect tooling to make human review straightforward and to provide transparent records of AI activity.

**Representative quotes**:
- *"I do not want AI to be solely responsible for quality and security; a developer needs to validate the results..."* (Participant 41)
- *"It's fine to delegate many tasks to AI agents... but we always need a person to be accountable for verifying: 'what testing did the AI do?'"* (Participant 117)
- *"At the end of the day, the result is owned by the person who committed and/or signed off on the code generated by an LLM."* (Participant 140)
- *"Actually checking in code or tests."* (Participant 189)
- *"I don't want AI to make final decisions on release readiness or risk acceptance..."* (Participant 241)

---

#### Theme: 3. Context & Risk-Sensitive Judgment

Participants stress that AI lacks the contextual, business, ethical, and domain judgment required for high-stakes decisions. The coded description—"Developers stress that high-stakes decisions (e.g., release readiness, triaging, compliance) require contextual, business, and ethical judgment that AI cannot provide"—captures this concern. Respondents note that while AI can help generate tests or surface issues, humans must define success criteria and make nuanced trade-offs: "Deciding what the requirements should be... I want to be the one controlling the criteria we're testing for" (Participant 165). They worry that AI outputs can’t be used as verification because teams cannot always understand "what the AI is doing 'underneath the hood'" (Participant 228). Consequently, AI is viewed as a decision-support tool rather than a decision-maker for matters like triaging incidents or releasing to production.

Participants ask for explicit design constraints: AI should not be allowed to override human decision-making in incident triage or final release acceptance, and outputs should be framed as recommendations with traceable rationale.

**Representative quotes**:
- *"I don’t want AI to make final decisions on critical production rollouts or override human judgment in incident triaging..."* (Participant 57)
- *"The validation needs to be clearly done by an individual."* (Participant 140)
- *"I need to verify myself that security issues are present, and that a particular security fix resolves it."* (Participant 165)
- *"Without the ability to understand the underlying process of our tool (AI), it cannot be used as a verification tool itself."* (Participant 228)
- *"I don't want AI to make final decisions on release readiness or risk acceptance..."* (Participant 241)

---

## 2) Cross-Cutting Patterns

- Complementary desires and concerns: The data show a clear complementarity — developers want AI to take on repetitive, coverage-driven, and adversarial testing tasks (reducing manual toil and improving breadth), while simultaneously fearing the accuracy and accountability gaps AI can introduce. For example, participants request AI to "analyze missing test coverage and implement tests on its own" (Participant 408) but also warn that AI "frequently hallucinates with absolute certainty" (Participant 17), revealing tension between automation benefits and trustworthiness risks.

- Conditional acceptance: Acceptance of AI is highly conditional. Developers are willing to delegate test generation, exploratory testing, and CI/CD augmentation provided AI systems are context-aware, produce verifiable artifacts (logs, screenshots, reproducible traces), minimize false positives, and defer final judgments to humans. Conditions include aborting when uncertain (Participant 336) and enabling human control over testing criteria (Participant 165).

- Task-specific nuances: Testing QA is distinct because it requires reproducibility, traceability, and a clear audit trail—especially in security and compliance contexts. Unlike code drafting or documentation, QA outputs must be verifiable (e.g., passing tests, logs, recorded runs). Participants repeatedly stress needs for reproducible evidence that AI executed tests, not mere assertions that tests exist (Participant 117).

- Trust and control dynamics: Trust is tightly coupled with explainability and human control. Developers want AI to be an assistant that augments human judgment while providing transparent reasoning and artifacts. Autonomy without auditability is unacceptable; autonomy paired with robust evidence of action (screenshots, logs, test artifacts) and human-in-the-loop signoff is the preferred model.

---

## 3) Outliers and Edge Cases

- Minority perspectives favoring more autonomy: A few participants express stronger faith in AI's capacity to automate much of QA, suggesting AI "should be able to generate tests automatically when given the context of the files to cover" (Participant 332) or that "everything can be done by AI" in some areas (Participant 330). These views are less common but highlight an aspiration for near-full automation in non-critical contexts.

- Contradictory voices within individuals: Participant 17 appears in both supportive and skeptical roles—advocating advanced monkey testing as a use of AI while warning AI should not be the determining factor due to hallucinations. This ambivalence illustrates that developers may accept specific AI uses while rejecting broader decision-making authority.

- Ambivalent responses on verification: Some participants both want AI to generate tests and simultaneously doubt its capacity to verify correctness. For example, a respondent wanted AI to "build unit test to achieve high code coverage" (Participant 345) but also argued a GenAI system should not "evaluate itself" (Participant 345). This underscores a demand for separate verification mechanisms or human review even when AI writes tests.

- Unique emphasis on business/context judgment: While many comments focus on technical accuracy, some data specifically emphasize ethical and business impact judgment (Participant 57, 165, 241). These are less frequent but critical for designs in regulated domains.

---

## 4) Implications for AI Tool Design

Overall, developers want AI tools that reliably automate test generation, coverage analysis, anomaly detection, and adversarial testing, but only within a framework that ensures transparency, human oversight, and context sensitivity. Tools should prioritize reproducible artifacts, clear confidence signaling, and easy human-in-the-loop workflows so accountability is preserved.

#### Key "Must Haves" (features designers should prioritize)

- **Context-aware test generation**
  - Capability: Generate tests from code, specs, layouts, or natural language prompts and extend happy-paths with edge cases. Must be able to update tests as code changes and avoid over-generation.
  - Rationale/Example: Participants requested AI that can "extrapolate from a layout file and the code behind what tests to write" (Participant 126) and "create additional tests for edge cases" (Participant 276).

- **Coverage analysis & gap identification**
  - Capability: Analyze current coverage, flag high-risk gaps, and prioritize test generation to reduce regression risk.
  - Rationale/Example: Developers want AI to "proactively detect regressions, analyze test coverage gaps, and predict high-risk areas" (Participant 57).

- **Proactive anomaly detection integrated into CI/CD**
  - Capability: Monitor baselines, scan logs/configs, and integrate into pipelines for static analysis and fuzz testing; surface prioritized alerts and trend views.
  - Rationale/Example: Participants asked for AI that can "scan logs, configs, or workflow patterns and flag things that might break later" (Participant 301) and augment CI/CD (Participant 365).

- **Adversarial / exploratory testing automation**
  - Capability: Run autonomous exploratory or chaos tests, simulate adversary behavior, and generate reproducible scenarios and artifacts for human review.
  - Rationale/Example: Requests include AI that can act as a "great adversary" and perform "complete End-To-End functional and regression testing" (Participants 299, 345).

- **Evidence and explainability outputs**
  - Capability: Produce verifiable artifacts (screenshots, logs, traces), confidence scores, and concise explanations for each test or finding to support human validation.
  - Rationale/Example: Several participants demanded proof that "the AI actually did what it claims" and traceability to support accountability (Participant 117).

#### Key "Must Not Haves" (design guardrails)

- **Autonomous final decision-making**
  - Risk: Allowing AI to make release-readiness, triage, or risk-acceptance decisions removes human accountability and risks poor context-sensitive judgment.
  - Example: "I don't want AI to make final decisions on release readiness or risk acceptance" (Participant 241).

- **Opaque self-evaluation or self-approval**
  - Risk: Systems should not both generate tests and assert their own sufficiency without human-verifiable evidence; AI should not "evaluate itself" (Participant 345).
  - Example: Participants demanded human review of AI-generated results (Participant 140, 117).

- **Hallucination without fail-fast behavior**
  - Risk: AI that fabricates results or overconfidently asserts findings undermines trust.
  - Requirement: If uncertain, AI must abort or explicitly state uncertainty rather than guessing ("abort with that information" — Participant 336).

- **Untraceable modifications or commits**
  - Risk: AI that checks in code/tests without human signoff or without clear provenance creates accountability and security problems ("Actually checking in code or tests." — Participant 189).

- **Unverified UI automation or brittle test generation**
  - Risk: AI that produces UI automation or tests that are difficult to validate increases maintenance burden ("UI automation might be difficult to verify" — Participant 71).

---

## Executive Summary

- Developers want AI to automate context-aware test generation, improve coverage, and perform adversarial/exploratory testing to catch regressions and security issues earlier.
- At the same time, they worry AI can hallucinate, be inaccurate, and produce unverifiable outputs that increase risk rather than reduce it.
- Design implication: Build AI tools that produce verifiable artifacts (logs, screenshots, traces), confidence scores, and human-review workflows so accountability and traceability are preserved.
- Design implication: Integrate AI into CI/CD pipelines for proactive scanning and anomaly detection while ensuring it defers final release and triage decisions to humans.
- Notable tension: Developers simultaneously ask for high degrees of automation (including autonomous exploration) and insist on tight human oversight and explainability.
- Recommendation: Prioritize context-aware test generation, coverage-gap prioritization, adversarial testing features, and strong fail-fast/uncertainty signaling; explicitly forbid autonomous final decision-making and require human signoff for check-ins or release decisions.