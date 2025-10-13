# Qualitative Analysis for Code Review/Pull Requests
# Category: Quality & Risk Management

This document is an AI-generated synthesis of manually coded survey responses from software developers about AI usage in Code Review/Pull Requests (Quality & Risk Management). I preserved the research team’s theme and code labels, integrated participant quotes, and analyzed patterns and tensions to produce actionable design implications for AI tools in this space.

---

## Executive Summary

- Developers want AI to act as a context-aware assistant for security/compliance checks, risk triage, test generation, and PR automation — not as an autonomous decision-maker.
- The primary refusal boundary is autonomy: teams reject AI that auto-commits, auto-merges, or takes final accountability for release readiness.
- Trust hinges on accuracy, explainability, and confidence signaling; hallucinations and false positives are key adoption blockers.
- Design implications: build context integration, confidence reporting, audit logs, and explicit human-approval gates; enable safe custom agents for team-specific automation.
- Notable tension: participants welcome AI preparing fixes or PR drafts but insist that humans retain final review and sign-off.
- Recommendation: prioritize conservative, explainable assistive features (security gates, impact analysis, test scaffolding) that augment reviewer capacity while enforcing strict human-in-the-loop controls.

---


## 1) Core Themes

### A. Where AI is Wanted

#### Theme: 1. Risk, Security, and Compliance Gates

Participants envision AI acting as an automated gatekeeper that enforces security, compliance, accessibility, and localization rules while remaining sensitive to local and product-specific contexts. The Security/Compliance Checks code describes this desire explicitly: AI should "enforce security, compliance, accessibility, and localization requirements, tuned to local contexts." Developers want AI to detect common security misses quickly and report its confidence so human reviewers can focus on higher-order concerns. For example, one participant summarized the need succinctly: “Code review feedback including security and compliance checks. Specifically, accessibility, localization, and security issues.” (Participant 71). Another asked for an AI that can "quickly detect security issues or adverse coding patterns, either in PRs or while I'm working." (Participant 397).

Closely related is the Risk & Impact Assessment code: AI should prioritize reviewer attention by flagging high-risk changes and analyzing cross-codebase impacts. Participants expect AI to not only surface violations but to contextualize the potential system-wide implications — reducing human error and helping teams derisk changes. As one put it, “Should be able to detect high risk changes & derisk them.” (Participant 45). Another noted the desired scope: “AI tools would need to determine the impact of certain changes in the scope of the entire codebase.” (Participant 409). Boundaries mentioned include the need for local context awareness and explicit confidence indicators so reviewers can triage AI findings.

**Sub-themes identified:**
- **Security/Compliance Checks**: AI should enforce security, compliance, accessibility, and localization requirements, tuned to local contexts.
- **Risk & Impact Assessment**: AI should detect high-risk changes and analyze their impact across the codebase to prioritize reviewer attention.

**Representative quotes**:
- *“Code review feedback including security and compliance checks. Specifically, accessibility, localization, and security issues.”* (Participant 71)  
- *“There are lots of security requirements being pushed down to each team... It would be nice to have an AI understand the local context for a security issue, and make a PR, or other reviewable action to take.”* (Participant 205)  
- *“Should be able to detect high risk changes & derisk them.”* (Participant 45)  
- *“It would be nice if AI tools could reduce the amount of human error... determine the impact of certain changes in the scope of the entire codebase.”* (Participant 409)

---

#### Theme: 2. Context-Aware Reviewing

Developers want AI reviews that go beyond generic linting or rule-checking and instead integrate internal resources, product knowledge, and team conventions. The Context Integration code captures this: AI should "bring in internal resources, product knowledge, and team conventions, ensuring reviews are context-sensitive rather than just rule-based." Respondents signaled frustration with context-less advice and asked for tools that understand product-specific patterns and local constraints. One participant described this need: “I want it to improve having context between Microsoft internal resources and my specific product info.” (Participant 85). Another emphasized doing “code reviews in context based manner rather than simply looking for best practices.” (Participant 256).

The motivation is to make AI suggestions actionable and aligned with team practices so they reduce review friction rather than create noise. Participants expect contextual relevance for maintainability and code cleanliness: “Creating maintainable and clean code - with contextual relevance.” (Participant 407). Boundaries include ensuring the AI’s context sources are accurate and up-to-date and that it avoids over-generalized advice that ignores local tradeoffs.

**Representative quotes**:
- *“I want it to improve having context between Microsoft internal resources and my specific product info.”* (Participant 85)  
- *“Doing code reviews in context based manner rather than simply looking for best practices.”* (Participant 256)  
- *“Creating maintainable and clean code - with contextual relevance.”* (Participant 407)  
- *“There are lots of security requirements... It would be nice to have an AI understand the local context for a security issue, and make a PR, or other reviewable action to take.”* (Participant 205)

---

#### Theme: 3. Automated PR Workflows & Interactive Review

Participants want AI to automate repetitive PR tasks, scale reviews across many PRs, and act as an interactive copilot tightly integrated into IDEs and version control. The PR Automation & Copilot Review code expresses this: AI should "automate PR reviews, scale across company-wide PRs, and act as an interactive copilot integrated with IDEs and version control." Developers asked for AI that can handle bulk or company-wide fixes, suggest changes, and assist with larger codebase operations such as adding files or integrating with Perforce. For example, “I hope it can automate pull request... I also want a copilot on the side that help me interactively review PR.” (Participant 114). Another described broader integration needs: “Add new files to the solution, open for add in perforce... Basically more integration when making larger additions to a codebase. Also more assistance in debugging would be huge.” (Participant 103).

Motivation centers on scaling review throughput and reducing mundane reviewer overhead while keeping humans in the loop for strategic decisions. Participants expect such automation to be interactive — a sidekick that explains why it recommends changes and that can operate within existing workflows. Boundaries include the need for safe defaults and human approval for substantive changes.

**Representative quotes**:
- *“I hope it can automate pull request... I also want a copilot on the side that help me interactively review PR.”* (Participant 114)  
- *“More pull requests to handle companywide issues.”* (Participant 23)  
- *“Automated PR review tool UT refactoring AI tool specifically for security.”* (Participant 314)  
- *“Basically more integration when making larger additions to a codebase. Also more assistance in debugging would be huge.”* (Participant 103)

---

#### Theme: 4. Test Generation & Refactoring Coupled to Review

Developers want AI to generate meaningful tests and refactor unit tests in tandem with code changes to maintain or improve test coverage. The Test Generation & Refactor code frames this: AI should "generate robust, meaningful tests, refactor unit tests, and maintain appropriate test coverage during code reviews." Participants described use cases ranging from greenfield test scaffolding to writing qualified unit tests and polishing test quality. Examples include “help with green field projects, help with code reviews, help with writing tests.” (Participant 51) and “Automatically review PR and write high quality tests as a pair programmer.” (Participant 283).

The desired outcome is fewer brittle or trivial tests and more durable, meaningful coverage that supports later refactoring. Participants also expect AI to maintain professional polish in comments and docs alongside tests: “professional polish, spelling/grammar check, good rich comments, and writing tests that are meaningful and robust.” (Participant 372). Conditions include avoiding an explosion of low-value tests and ensuring tests capture real business logic and edge cases.

**Representative quotes**:
- *“help with green field projects, help with code reviews, help with writing tests.”* (Participant 51)  
- *“help generate qualified code logic generate qualified but not too many unit test cases.”* (Participant 246)  
- *“Automatically review PR and write high quality tests as a pair programmer.”* (Participant 283)  
- *“professional polish... writing tests that are meaningful and robust.”* (Participant 372)

---

#### Theme: 5. Customizability

Developers want the ability to author bespoke agents and deeply integrate AI into their existing workflows to handle repetitive, team-specific tasks. The Custom Agents & Integration code captures this: "Developers want to write their own review agents and have deep integration with existing workflows." Participants asked for the ability to script or configure agents to perform repetitive tasks and adapt to team conventions. For example: “Individual being able write their own Agents to do repetitive tasks to save time.” (Participant 180). Integration requests often overlapped with workflow automation desires: “Basically more integration when making larger additions to a codebase. Also more assistance in debugging would be huge.” (Participant 103).

The motivation is to make AI extensible so teams can capture tacit knowledge and tailor automation to their codebase’s idiosyncrasies. Boundaries include the need for safe defaults and mechanisms for teams to audit or constrain what custom agents can change.

**Representative quotes**:
- *“Individual being able write their own Agents to do repetitive tasks to save time.”* (Participant 180)  
- *“If the AI could do the task I previously described... Basically more integration when making larger additions to a codebase. Also more assistance in debugging would be huge.”* (Participant 103)  
- *“Automated PR review tool UT refactoring AI tool specifically for security.”* (Participant 314)

---

### B. Where AI is Not Wanted

#### Theme: 1. Accountability & Oversight Must Remain Human

Participants consistently insisted that final release readiness, risk acceptance, and ethical trade-offs remain human responsibilities. The Final accountability must stay human code summarizes this stance: “Engineers stress that release readiness, risk acceptance, ethical trade-offs, and final sign-off require human judgment, empathy, and responsibility.” Many respondents explicitly rejected AI handling high-stakes decisions: “I wouldn’t want AI to handle final decision-making in high-stakes risk scenarios, especially where ethical judgment, human intuition, or deep domain context is critical… responsibility should remain with experienced professionals.” (Participant 9). Others reinforced that the person who signs off must own the decision: “At the end of the day, the result is owned by the person who committed and/or signed off… That validation needs to be clearly done by an individual.” (Participant 140).

Alongside that, developers demanded persistent human oversight and simple override controls. The Human oversight and override controls code reflects: “Developers want to retain filtering and override power; AI should abort gracefully when incapable.” Participants want AI to surface issues and suggest fixes but not to carry authority to enact them without reviewers’ consent. For instance: “I don't want AI to just act as a red-light / green-light. It should raise issues… and still require human review.” (Participant 89). Many asked for the ability to abort and receive explicit failure reasons when AI cannot perform safely: “If there is something that it is not capable of doing, abort with that information, rather than making some assumptions…” (Participant 336).

**Sub-themes identified:**
- **Final accountability must stay human**: Engineers stress that release readiness, risk acceptance, ethical trade-offs, and final sign-off require human judgment, empathy, and responsibility.
- **Human oversight and override controls**: Developers want to retain filtering and override power; AI should abort gracefully when incapable.

**Representative quotes**:
- *“I wouldn’t want AI to handle final decision-making in high-stakes risk scenarios... responsibility should remain with experienced professionals.”* (Participant 9)  
- *“I want to make the final decision about what risks are worth taking.”* (Participant 14)  
- *“I don't want AI to just act as a red-light / green-light. It should raise issues... and still require human review.”* (Participant 89)  
- *“There always has to be human oversight over AI actions and should be able to override its actions.”* (Participant 294)

---

#### Theme: 2. No Autonomous Code Changes or Auto-Merging

There is strong resistance to AI autonomously committing, merging, or altering code/tests without human approval. The Auto-commits, production changes, unreviewed merges code captures this: "Strong resistance to AI autonomously committing, merging, or altering code/tests without human approval." Participants feared production impact, unexpected regressions, and loss of ownership. Examples of direct concerns include: “Automatically change code without user review.” (Participant 21) and “Directly touching production without oversight.” (Participant 23). Multiple respondents explicitly opposed auto-approvals and auto-commits: “Approving PRs.” (Participant 365) and “Auto commit fixes… may have production user facing implications. Auto fix/resolve code review comments.” (Participant 410).

Developers want AI to propose changes, prepare PRs, or create suggested commits, but always require a human to review and authorize any merge into production branches. This boundary is non-negotiable for many respondents, who view autonomous code edits as an unacceptable risk.

**Representative quotes**:
- *“Automatically change code without user review.”* (Participant 21)  
- *“Directly touching production without oversight.”* (Participant 23)  
- *“Actually checking in code or tests.”* (Participant 189)  
- *“Approving PRs.”* (Participant 365)

---

#### Theme: 3. Trust, Correctness, and Reliability Concerns

Developers expressed pervasive concerns about AI inaccuracies, hallucinations, false positives, and excessive verbosity. The Inaccuracy, hallucinations, false positives code states: "Developers distrust AI because of hallucinations, verbosity, missed context, and excessive false positives." Multiple participants emphasized that current models are not yet trustworthy for determining quality or making final calls. One said bluntly, “AI should absolutely not be the determining factor in how to solve quality problems… it frequently hallucinates with absolute certainty.” (Participant 17), while another noted, “Based on my experience so far, I do not trust AI for my specific role. I want AI to handle nothing, until it gets significantly better at correctness.” (Participant 53).

Some respondents went further and rejected AI tools outright or sarcastically dismissed them. The Total rejection or skepticism code captures these positions: "Some respondents categorically dismiss AI in reviews, either as useless or unwanted." For example: “I don't want more AI tools.” (Participant 110) and “Final code review… [AI tools] are very bad at it and get in the way more than they help.” (Participant 203). These views underscore a trust gap: even where AI could provide value, many teams will not adopt it until accuracy, precision, and consistency improve substantially.

**Sub-themes identified:**
- **Inaccuracy, hallucinations, false positives**: Developers distrust AI because of hallucinations, verbosity, missed context, and excessive false positives.
- **Total rejection or skepticism**: Some respondents categorically dismiss AI in reviews, either as useless or unwanted.

**Representative quotes**:
- *“AI should absolutely not be the determining factor in how to solve quality problems… it frequently hallucinates with absolute certainty.”* (Participant 17)  
- *“Based on my experience so far, I do not trust AI for my specific role. I want AI to handle nothing, until it gets significantly better at correctness.”* (Participant 53)  
- *“Final code review… [AI tools] are very bad at it and get in the way more than they help.”* (Participant 203)  
- *“Try to decrease false positives as much as possible.”* (Participant 336)

---

#### Theme: 4. Context, Innovation, and Complex Problem-Solving Limits

Developers worry that AI cannot handle high-level architectural reasoning, human intention, or nuanced business logic. The Missing domain/business context, poor architecture/design reasoning code captures: "AI cannot handle architecture-level reasoning, human intention, or domain-specific business needs." Participants pointed out that while AI can help with syntactic or pattern-based checks, it struggles with software integration, deciding tradeoffs, and system-level performance characteristics. For instance: “The current models seem to have problems with architectural and software integration problems…” (Participant 47) and “May fail to have the necessary context for complex business requirements.” (Participant 140).

The feared outcome is AI making recommendations that are technically plausible but misaligned with product goals or architectural constraints, causing rework or latency in decision processes. Participants therefore want AI to avoid sole responsibility for architectural decisions or communicating risk to leadership: “I wouldn’t want AI… deciding whether to ship something with known limitations or how to communicate a risk to leadership…” (Participant 301).

**Representative quotes**:
- *“Not 100% code review. Because some business logic are special.”* (Participant 46)  
- *“The current models seem to have problems with architectural and software integration problems…”* (Participant 47)  
- *“May fail to have the necessary context for complex business requirements.”* (Participant 140)  
- *“AI probably should not be in charge of making changes to secure code or carry the sole responsibility of ensuring secure, high quality code.”* (Participant 409)

---

## 2) Cross-Cutting Patterns

- Complementary desires and concerns: Participants want AI to perform routine, high-volume, and safety-critical checks (security/compliance, risk triage, test generation) while explicitly rejecting AI autonomy for final decisions and production changes. The “want” themes focus on augmentation (gatekeeping, context-aware suggestions, test scaffolding), while the “don’t want” themes emphasize human ownership, oversight, and mistrust of autonomy. This produces a clear division: AI as assistant, not as decider.

- Conditional acceptance: Acceptance of AI is strongly conditional. Developers require context-awareness, confidence indicators, auditability, and the ability to override or abort AI actions. Many requests tied acceptance to measurable reliability improvements (“handle nothing until it gets significantly better at correctness”) and to the AI’s ability to explain its reasoning and scope.

- Task-specific nuances: Code Review Pull Requests are uniquely sensitive because they directly affect production readiness, cross-module dependencies, and team norms. Unlike isolated coding tasks, PRs require knowledge of system-wide impacts, integration details, and organizational policies. This raises the bar for the AI’s contextual understanding and increases resistance to autonomous edits.

- Trust and control dynamics: Trust is the central axis. Developers want precise, actionable outputs and worry most about hallucinations, false positives, and silent autonomous changes. They prefer tools that amplify human reviewers’ capacity (e.g., triage high-risk diffs, auto-suggest tests) but retain final authority. Control mechanisms (explicit approvals, aborts, override buttons, and audit logs) are considered essential for adoption.

---

## 3) Outliers and Edge Cases

- Minority perspectives that contradict dominant themes: A small number of respondents expressed outright enthusiasm or sarcasm in opposing directions (e.g., “None, AI can definitely help in all of them.” Participant 299 — used here as a sarcastic/contradictory rejection). Some respondents suggested full automation in isolated contexts, but these were rare.

- Unique insights not fitting main themes: Requests for AI to create PRs or perform “open for add in perforce” operations (Participant 103) indicate a desire for deep SCM integration that falls between automation and autonomy—AI prepares but humans finalize. Another unique point: participants asked AI to state the confidence of its review explicitly (Participant 410), a concrete UX pattern not emphasized elsewhere.

- Ambivalent responses showing both positive and negative views: Several participants appear in both "want" and "don't want" lists (e.g., Participant 314 featured in both security automation desires and concerns about performance), demonstrating conditional enthusiasm: they want AI capabilities but remain cautious about reliability, speed, and scope.

- Contradictions within individuals: Some respondents demanded autonomous fixes (e.g., "make a PR, or other reviewable action to take" — Participant 205) while also insisting that final decisions remain human. This suggests acceptance of AI-generated draft changes so long as humans provide the final review and sign-off.

---

## 4) Implications for AI Tool Design

Developers want AI that amplifies human reviewers by automating repetitive, well-scoped tasks (security/compliance checks, risky-change triage, test scaffolding) while preserving human accountability for decisions, merges, and architecture-level choices. Design must prioritize context integration, explainability, confidence reporting, and robust override/audit mechanisms. Tools should be extensible so teams can author custom agents, but constrained so agents cannot autonomously alter production without explicit human sign-off.

#### Key "Must Haves" (features designers should prioritize)

- **Security/Compliance Gatekeeper**
  - Capability: Automated detection of accessibility, localization, and security issues with local-context tuning and explicit confidence scores.
  - Rationale: Participants repeatedly asked for AI to surface security/compliance issues and state confidence so humans can triage (e.g., “Code review feedback including security and compliance checks...” — Participant 71; “Handle S360 items on its own only asking for final confirmation...” — Participant 410).

- **Risk & Impact Assessment**
  - Capability: Analyze diffs to flag high-risk changes and estimate cross-codebase impact to prioritize reviewer attention.
  - Rationale: Developers want risk triage to reduce human error and focus limited reviewer bandwidth (“Should be able to detect high risk changes & derisk them.” — Participant 45).

- **Context Integration & Explainability**
  - Capability: Ingest internal docs, product specs, and team conventions; explain why a suggestion applies and surface source references.
  - Rationale: Context-sensitive advice was a strong request to avoid irrelevant or harmful suggestions (“I want it to improve having context between Microsoft internal resources and my specific product info.” — Participant 85).

- **Test Generation & Refactor Assistant**
  - Capability: Produce meaningful unit/integration tests and suggest refactors to tests in line with code changes, with options to tune test scope.
  - Rationale: Test generation tied to PR review reduces churn and increases coverage (“Automatically review PR and write high quality tests as a pair programmer.” — Participant 283).

- **Custom Agents & Workflow Integration**
  - Capability: Allow teams to author and safely sandbox custom agents that perform repetitive review tasks and integrate with SCM/IDEs, with clear permission controls.
  - Rationale: Teams want extensibility to encode local conventions and save time (“Individual being able write their own Agents to do repetitive tasks to save time.” — Participant 180).

#### Key "Must Not Haves" (design guardrails)

- **No Autonomous Commits or Auto-Merges**
  - Risk: Unreviewed code changes can introduce regressions and violate ownership; participants expressly rejected AI that “Automatically change code without user review.” (Participant 21).
  - Guardrail: Require explicit human approval for any commit, merge, or production-facing action.

- **No Transfer of Final Accountability**
  - Risk: Ethical and business trade-offs require human judgment (“I want to make the final decision about what risks are worth taking.” — Participant 14).
  - Guardrail: Design workflows so humans retain final sign-off and the system logs AI recommendations and decision paths.

- **Avoid Opaque, Overconfident Outputs (Hallucination mitigation)**
  - Risk: Hallucinations and false positives erode trust (“AI should absolutely not be the determining factor... it frequently hallucinates with absolute certainty.” — Participant 17).
  - Guardrail: Provide provenance, confidence scores, and fail-closed behavior when uncertain; avoid presenting speculative fixes as facts.

- **No Self-Approval or Self-Evaluation**
  - Risk: Automated systems approving their own changes or evaluating their outputs creates feedback loop risks (“You must not have a Gen AI system evaluate itself.” — Participant 345).
  - Guardrail: Require independent human or separate system validation for any AI-suggested change before acceptance.
