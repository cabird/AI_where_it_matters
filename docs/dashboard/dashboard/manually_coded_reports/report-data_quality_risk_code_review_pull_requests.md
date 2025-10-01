# Thematic Analysis: Code Review Pull Requests

**Task Category:** Quality Risk\n**Task Name:** Code Review Pull Requests\n\n**Generated:** 2025-10-01 00:16:35\n**Number of Participants:** 57\n**Data Source:** `data-quality_risk-code_review_pull_requests.csv`\n\n---\n\n# Thematic Analysis — Code Review Pull Requests (Quality Risk)

This report synthesizes manually coded survey responses from software developers about AI use in Code Review Pull Requests within the Quality Risk category. I preserved the research team's themes, codes, and descriptions and integrated participant quotes to build coherent narratives, highlight tensions, and draw design implications for AI tools used in PR review and related workflows.

---

## 1) Core Themes

### A. Where AI is Wanted

#### Theme: 1. Risk, Security, and Compliance Gates

Developers want AI to act as a dependable gatekeeper for security, compliance, accessibility, and localization concerns during PR review. Under the code Security/Compliance Checks, respondents envision AI that can systematically enforce checks tuned to the product and local context—surfacing accessibility or localization issues and pointing out security problems in PRs. One participant summarized this by asking for “Code review feedback including security and compliance checks. Specifically, accessibility, localization, and security issues” (Participant 71). Another described the need for local context: “There are lots of security requirements being pushed down to each team… It would be nice to have an AI understand the local context for a security issue, and make a PR, or other reviewable action to take” (Participant 205). Relatedly, Risk & Impact Assessment emphasizes the AI’s role in detecting high-risk changes and mapping their cross-codebase impact so reviewers can prioritize work: “Should be able to detect high risk changes & derisk them” (Participant 45).

Motivation here is pragmatic: reduce human oversight load on repetitive, rule-based safety checks and surface the parts of a change that truly need senior attention. Participants also set boundaries—AI should present confidence levels and still leave final judgment to humans, and it should be tuned to local product context instead of applying only generic rules.

Sub-themes identified:
- Security/Compliance Checks: AI should enforce security, compliance, accessibility, and localization requirements, tuned to local contexts.
- Risk & Impact Assessment: AI should detect high-risk changes and analyze their impact across the codebase to prioritize reviewer attention.

Number of participants: ~10 participants (unique PIDs: 71, 205, 314, 397, 410, 45, 329, 409 → 8 → rounded)

Representative quotes:
- "Code review feedback including security and compliance checks. Specifically, accessibility, localization, and security issues." (Participant 71)
- "There are lots of security requirements being pushed down to each team... It would be nice to have an AI understand the local context for a security issue, and make a PR, or other reviewable action to take." (Participant 205)
- "Handle S360 items on its own only asking for final confirmation from the user. Look for all common coding misses in Code reviews and mention in a comment that it has reviewed ‘xyz’ aspects of the change and the confidence of the review..." (Participant 410)
- "Should be able to detect high risk changes & derisk them." (Participant 45)
- "Automated PR review tool UT refactoring AI tool specifically for security." (Participant 314)

Confidence: Medium

---

#### Theme: 2. Context-Aware Reviewing

Participants want PR review AI to go beyond generic best-practice checks and incorporate product-specific, team-level, and company-internal knowledge. The code Context Integration captures this desire: developers want AI that can pull in internal documentation, product constraints, and coding conventions so feedback is context-sensitive. For example, one respondent said: “I want it to improve having context between Microsoft internal resources and my specific product info” (Participant 85). Another contrasted context-aware reviews with rule-only checks: “Doing code reviews in context based manner rather than simply looking for best practices” (Participant 256).

The motivation is clear: context reduces false positives and increases the relevance of suggestions. Boundaries include preserving team conventions and ensuring AI can access accurate internal resources without leaking sensitive information. Several respondents reiterated the desire that context enables maintainability and relevance, not replacement of human judgment.

Sub-themes identified:
- Context Integration: AI should bring in internal resources, product knowledge, and team conventions, ensuring reviews are context-sensitive rather than just rule-based.

Number of participants: ~5 participants (unique PIDs: 85, 256, 407, 205 → 4 → rounded)

Representative quotes:
- "I want it to improve having context between Microsoft internal resources and my specific product info." (Participant 85)
- "Doing code reviews in context based manner rather than simply looking for best practices." (Participant 256)
- "Creating maintainable and clean code - with contextual relevance." (Participant 407)
- "There are lots of security requirements being pushed down to each team… It would be nice to have an AI understand the local context..." (Participant 205)

Confidence: Low

---

#### Theme: 3. Automated PR Workflows & Interactive Review

Developers imagine AI as both scale enabler and interactive copilot: automating routine PR tasks, surfacing company-wide fixes, and integrating into IDEs and version-control tooling. Under PR Automation & Copilot Review, respondents describe AI that can process many PRs, suggest changes, and act interactively as a sidekick during review and development. One participant asked for broader automation: “I hope it can automate pull request. currently there is but the review it provides is very limited. I also want a copilot on the side that help me interactively review PR” (Participant 114). Others want end-to-end integration—adding files to repositories, handling Perforce workflows, and aiding debugging—so that AI is part of established development flow: “Basically more integration when making larger additions to a codebase. Also more assistance in debugging would be huge” (Participant 103).

Developers want this automation to scale work, reduce repetitive chores, and help triage company-wide issues, but they expect it to remain integrated with human workflows and approvals (see "don't want" themes for strict limits).

Sub-themes identified:
- PR Automation & Copilot Review: AI should automate PR reviews, scale across company-wide PRs, and act as an interactive copilot integrated with IDEs and version control.

Number of participants: ~5 participants (unique PIDs: 114, 23, 314, 103, 205 → 5 → rounded)

Representative quotes:
- "I hope it can automate pull request... I also want a copilot on the side that help me interactively review PR." (Participant 114)
- "More pull requests to handle companywide issues." (Participant 23)
- "If the AI could do the task I previously described... Basically more integration when making larger additions to a codebase. Also more assistance in debugging would be huge." (Participant 103)

Confidence: Medium

---

#### Theme: 4. Test Generation & Refactoring Coupled to Review

Respondents expect AI to assist PR quality by generating and maintaining meaningful tests and refactoring existing test suites as part of the review process. The Test Generation & Refactor code captures requests for AI that writes robust, not excessive, unit tests, polishes comments, and acts as a pair programmer to pair-review and produce tests: “help with green field projects, help with code reviews, help with writing tests” (Participant 51). Another participant emphasized balanced test generation: “help generate qualified code logic generate qualified but not too many unit test cases” (Participant 246). AI is expected to sustain test coverage and improve test quality during PRs rather than adding noisy or redundant tests.

Boundaries include avoiding over-generation of low-value tests and ensuring generated tests reflect real-world scenarios and product context.

Sub-themes identified:
- Test Generation & Refactor: AI should generate robust, meaningful tests, refactor unit tests, and maintain appropriate test coverage during code reviews.

Number of participants: ~5 participants (unique PIDs: 51, 246, 283, 314, 372 → 5 → rounded)

Representative quotes:
- "help with green field projects, help with code reviews, help with writing tests." (Participant 51)
- "help generate qualified code logic generate qualified but not too many unit test cases." (Participant 246)
- "Automatically review PR and write high quality tests as a pair programmer." (Participant 283)
- "professional polish, spelling/grammar check, good rich comments, and writing tests that are meaningful and robust." (Participant 372)

Confidence: Medium

---

#### Theme: 5. Customizability

Some developers want to author custom agents and tightly integrate AI into team-specific workflows. Under Custom Agents & Integration, respondents asked for the ability to script repetitive review tasks and extend AI’s behaviour for their product: “Individual being able write their own Agents to do repetitive tasks to save time” (Participant 180). This desire overlaps with calls for deeper IDE and VCS integration: “Basically more integration when making larger additions to a codebase” (Participant 103).

Motivation is efficiency and adaptability: teams differ in coding standards and rules, and they want the ability to craft AI behavior that matches local processes. Limitations include secure access to internal data and maintaining human oversight.

Sub-themes identified:
- Custom Agents & Integration (PID 180, PID 103): Developers want to write their own review agents and have deep integration with existing workflows.

Number of participants: ~5 participants (unique PIDs: 180, 103 → 2 → rounded)

Representative quotes:
- "Individual being able write their own Agents to do repetitive tasks to save time." (Participant 180)
- "Basically more integration when making larger additions to a codebase. Also more assistance in debugging would be huge." (Participant 103)

Confidence: Low

---

### B. Where AI is Not Wanted

#### Theme: 1. Accountability & Oversight Must Remain Human

There is strong consensus that final responsibility for release readiness, risk acceptance, and ethical trade-offs must stay with humans. Under Final accountability must stay human, respondents stressed that AI should support but never replace human judgment: “I wouldn’t want AI to handle final decision-making in high-stakes risk scenarios... responsibility should remain with experienced professionals” (Participant 9). Multiple participants emphasized that the committer or sign-off owner must retain ownership: “At the end of the day, the result is owned by the person who committed and/or signed off… That validation needs to be clearly done by an individual” (Participant 140).

Coupled to this is a demand for Human oversight and override controls: developers want the power to filter, override, or abort AI actions and for AI to clearly indicate when it is uncertain: “There always has to be human oversight over AI actions and should be able to override its actions” (Participant 294). Boundaries are explicit: AI should not absolve humans of responsibility nor be an automatic authority in disputes.

Sub-themes identified:
- Final accountability must stay human: Engineers stress that release readiness, risk acceptance, ethical trade-offs, and final sign-off require human judgment, empathy, and responsibility.
- Human oversight and override controls: Developers want to retain filtering and override power; AI should abort gracefully when incapable.

Number of participants: ~15 participants (unique PIDs: 9, 14, 45, 103, 140, 241, 301, 317, 331, 372, 62, 89, 213, 294, 332, 336 → 16 → rounded)

Representative quotes:
- "I wouldn’t want AI to handle final decision-making in high-stakes risk scenarios... responsibility should remain with experienced professionals." (Participant 9)
- "I want to make the final decision about what risks are worth taking." (Participant 14)
- "I don't want AI to make final decisions on release readiness or risk acceptance, as these require human judgment, accountability, and a deeper understanding of business context and impact." (Participant 241)
- "There always has to be human oversight over AI actions and should be able to override its actions." (Participant 294)

Confidence: High

---

#### Theme: 2. No Autonomous Code Changes or Auto-Merging

Respondents strongly resist AI autonomously committing code, merging PRs, or making production changes without human sign-off. The code Auto-commits, production changes, unreviewed merges captures this rejection: participants explicitly opposed automatic check-ins and direct touches to production: “Automatically change code without user review” (Participant 21). Others fear bypassing review workflows: “Directly touching production without oversight” (Participant 23). Even when AI suggests fixes, developers want explicit review and permission before any code changes are persisted or merged.

This is a clear boundary: AI can propose or draft, but human approval is required before any change reaches version control or production.

Sub-themes identified:
- Auto-commits, production changes, unreviewed merges: Strong resistance to AI autonomously committing, merging, or altering code/tests without human approval.

Number of participants: ~5 participants (unique PIDs: 21, 23, 151, 189, 217, 365, 410 → 7 → rounded)

Representative quotes:
- "Automatically change code without user review." (Participant 21)
- "Directly touching production without oversight." (Participant 23)
- "Auto commit fixes… may have production user facing implications. Auto fix/resolve code review comments." (Participant 410)

Confidence: Medium

---

#### Theme: 3. Trust, Correctness, and Reliability Concerns

A dominant worry is AI hallucinations, false positives, and general unreliability in complex codebases. Under Inaccuracy, hallucinations, false positives, participants reported that current AI can assert incorrect fixes and generate verbose, low-value feedback: “AI should absolutely not be the determining factor in how to solve quality problems… it frequently hallucinates with absolute certainty” (Participant 17). Many said they would not rely on AI until it improves: “Based on my experience so far, I do not trust AI for my specific role. I want AI to handle nothing, until it gets significantly better at correctness” (Participant 53). Time and performance constraints also matter: long processing times and inaccuracy reduce usefulness (Participant 314).

Some responses expressed categorical rejection or deep skepticism toward using AI in reviews: “Final code review… [AI tools] are very bad at it and get in the way more than they help” (Participant 203). These concerns highlight the need for high precision, minimized false positives, and conservative behavior when uncertain.

Sub-themes identified:
- Inaccuracy, hallucinations, false positives: Developers distrust AI because of hallucinations, verbosity, missed context, and excessive false positives.
- Total rejection or skepticism: Some respondents categorically dismiss AI in reviews, either as useless or unwanted.

Number of participants: ~20 participants (unique PIDs: 17, 20, 51, 53, 79, 91, 126, 276, 314, 336, 345, 361, 385, 110, 114, 203, 299, 325, 326, 354 → 20 → rounded)

Representative quotes:
- "AI should absolutely not be the determining factor in how to solve quality problems… it frequently hallucinates with absolute certainty." (Participant 17)
- "Based on my experience so far, I do not trust AI for my specific role. I want AI to handle nothing, until it gets significantly better at correctness." (Participant 53)
- "AI written code can be really bad, its necessary for a dev to test [and] understand what AI wrote." (Participant 51)
- "Improving AI performance is important, I don't want AI to take too long to process." (Participant 314)

Confidence: High

---

#### Theme: 4. Context, Innovation, and Complex Problem-Solving Limits

Respondents doubt AI’s capacity for architecture-level reasoning, deep business logic, and design trade-offs. Under Missing domain/business context, poor architecture/design reasoning, participants said AI struggles with architectural integration or inferring human intent: “The current models seem to have problems with architectural and software integration problems…” (Participant 47). Others flagged business-logic subtleties: “Not 100% code review. Because some business logic are special” (Participant 46). This theme captures the idea that AI can assist with mechanical or pattern-level tasks but is not ready to make decisions that require product strategy, complex trade-offs, or communication about risk to leadership.

Sub-themes identified:
- Missing domain/business context, poor architecture/design reasoning: AI cannot handle architecture-level reasoning, human intention, or domain-specific business needs.

Number of participants: ~10 participants (unique PIDs: 46, 47, 90, 140, 301, 346, 361, 409 → 8 → rounded)

Representative quotes:
- "Not 100% code review. Because some business logic are special." (Participant 46)
- "The current models seem to have problems with architectural and software integration problems…" (Participant 47)
- "May fail to have the necessary context for complex business requirements." (Participant 140)
- "AI probably should not be in charge of making changes to secure code or carry the sole responsibility of ensuring secure, high quality code." (Participant 409)

Confidence: Medium

---

## 2) Cross-Cutting Patterns

- Complementary desires and concerns: Participants want AI to automate deterministic, rule-based work (security checks, test generation, PR formatting) while preserving human control for judgment tasks. This creates a clear division of labor: AI for scale and routine quality gating; humans for risk acceptance, architecture, and ethical decisions.

- Conditional acceptance: Acceptance is conditional on context-awareness, accuracy, and integration. Developers repeatedly require AI to present confidence metadata, explain its reasoning, and be configurable to local conventions. Many said AI is acceptable when it reduces routine toil but must be conservative in uncertain situations.

- Task-specific nuances: Code Review Pull Requests are judged differently from general coding assistance because PRs represent asynchronous, auditable decisions that affect release readiness and user-facing behavior. That makes developers more sensitive to autonomous changes, provenance, and the need for traceable approvals.

- Trust and control dynamics: Trust hinges on verifiable correctness, low false-positive rates, and clear human override mechanisms. Developers favor “suggest and explain” patterns over “act autonomously.” They want AI to be an aid that amplifies human reviewers’ capability, not a replacement.

## 3) Outliers and Edge Cases

- Categorical rejection: A minority of participants (e.g., PID 53, 203, 110) expressed near-total distrust or boredom with current AI tools, insisting AI should handle nothing until correctness improves. These voices show a floor of skepticism that designers must overcome with demonstrable reliability.

- Ambivalent participants: Several respondents combined enthusiasm for automation with strict constraints—wanting AI to generate tests or propose PR edits but forbidding auto-commits. These mixed positions highlight the importance of granular user controls.

- Contradictory quotes within individuals: Some participants asked for AI that "make a PR" for local fixes (PID 205) yet also insisted on human final sign-off (common across responses). This is not contradiction but nuance: they want AI to prepare or propose changes while humans retain final commit authority.

- Unaddressed edge case: Very few responses explicitly discussed data privacy or access controls for AI using internal resources—while context integration is desired, the operational security implications were not elaborated in depth, representing a design area that needs explicit attention.

## 4) Implications for AI Tool Design

Developers want AI that augments review throughput and quality while maintaining human responsibility and control. Tools must be reliable, context-aware, configurable, explainable, and integrated into existing workflows. They must also default to conservative actions when uncertain.

#### Key "Must Haves" (features designers should prioritize)

- Security & Compliance Gate Enforcement
  - Capability: Automated, policy-driven checks for security, accessibility, and localization that are tunable to team and product contexts. Provide prioritized findings and confidence scores so reviewers can triage high-risk items quickly.
  - Example: “Code review feedback including security and compliance checks... accessibility, localization, and security issues.” (Participant 71)

- Context Integration & Customization
  - Capability: Connectors to internal documentation, product requirements, and team coding standards; allow teams to author or configure rules/agents so suggestions align with local norms.
  - Example: “I want it to improve having context between Microsoft internal resources and my specific product info.” (Participant 85)

- PR Copilot with Workflow Integration (non-autonomous)
  - Capability: Draft suggested changes, generate tests, and create reviewable PRs or patches, but never auto-commit—integrate into IDE and VCS workflows with clear checkpoints for human approval.
  - Example: “I also want a copilot on the side that help me interactively review PR.” (Participant 114)

- Test Generation & Refactoring Assistance
  - Capability: Generate meaningful unit/integration tests and propose refactors for tests to keep coverage healthy—prioritize quality over quantity and avoid redundant tests.
  - Example: “Automatically review PR and write high quality tests as a pair programmer.” (Participant 283)

- Explainability & Uncertainty Signaling
  - Capability: For each suggestion, provide concise rationale, references to code paths or policy, and confidence levels. When uncertain, decline or flag for human review.
  - Example: “Look for all common coding misses in Code reviews and mention in a comment that it has reviewed ‘xyz’ aspects... and the confidence of the review” (Participant 410)

#### Key "Must Not Haves" (design guardrails)

- Autonomous Commits or Auto-Merging
  - Risk: Unreviewed changes can introduce user-facing regressions or violate business rules.
  - Rationale/Quote: “Automatically change code without user review.” (Participant 21) and “Directly touching production without oversight.” (Participant 23)

- Replacing Human Accountability
  - Risk: Offloading final sign-off erodes responsibility and increases organizational risk.
  - Rationale/Quote: “I don’t want AI to make final decisions on release readiness or risk acceptance...” (Participant 241)

- High-Frequency False Positives / Verbose, Low-Value Feedback
  - Risk: Erosion of trust and reviewer fatigue.
  - Rationale/Quote: “Try to decrease false positives as much as possible.” (Participant 336) and “It frequently hallucinates with absolute certainty.” (Participant 17)

- Opaque Reasoning Without Context
  - Risk: Suggestions lacking product or domain context lead to incorrect architectural or business-logic changes.
  - Rationale/Quote: “The current models seem to have problems with architectural and software integration problems…” (Participant 47)

#### Design Patterns to Resolve Tensions

- Suggest-and-Prepare Pattern: AI drafts proposed changes, test code, or PRs but requires explicit human approval to commit. This satisfies desires for automation while enforcing human accountability.

- Confidence-First Feedback: Attach confidence scores and brief rationales to each recommendation; automatically suppress low-confidence or high-noise suggestions, addressing false-positive concerns.

- Configurable Agents with Safeguards: Provide per-team agents that can be authored and tuned, with central guardrails (e.g., cannot auto-merge; require sign-off for security-critical files). This balances customizability and safety.

- Contextual Triage Dashboard: Aggregate risk and compliance findings across PRs, rank by impact, and signal which items need senior reviewer attention—helps prioritize scarce human oversight.

---

## Executive Summary

- Developers want AI to handle repeatable, rule-based PR tasks such as security/compliance checks, test generation, and triage of high-risk changes—when tools are context-aware and accurate.
- Developers do not want AI to make autonomous commits, approve merges, or assume final accountability—humans must retain release and risk sign-off.
- Critical design implication: AI must be explainable, indicate confidence, and integrate with existing IDE and VCS workflows while defaulting to conservative behaviors.
- Critical design implication: Provide configurable agents and team-level context integration, but enforce hard guardrails (no auto-merges, mandatory human sign-off for high-risk changes).
- Notable tension: Teams want automation to reduce toil but insist on strict oversight and human accountability, especially for architecture, business logic, and production changes.
- Recommendation: Build "suggest-and-prepare" workflows—AI drafts or flags changes, presents rationale and confidence, and requires explicit human approval before any persistent change.