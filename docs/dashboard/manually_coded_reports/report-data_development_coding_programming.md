# Thematic Analysis: Coding Programming

**Task Category:** Development\n**Task Name:** Coding Programming\n\n**Generated:** 2025-10-01 00:02:43\n**Number of Participants:** 41\n**Data Source:** `data-development-coding_programming.csv`\n\n---\n\n# Thematic Analysis — Coding Programming (Development)

This report synthesizes manually coded survey responses from software developers about AI usage in Coding Programming (Development). I preserved the research team's thematic structure and codes, then integrated and analyzed participant quotations to identify patterns, tensions, and design implications. The narrative below weaves researchers’ descriptions with representative participant voices and highlights concrete design directions for AI tools in developer workflows.

---

## 1) Core Themes

### A. Where AI is Wanted

#### Theme: Workflow Efficiency / Rote Task Automation

Developers want AI to remove low-value, repetitive work so they can focus on higher-level design and product decisions. The researchers labeled this code "Boilerplate & Setup" and described it as AI taking over repetitive scaffolding, setup, or boilerplate code so developers can focus on higher-value tasks. Participants repeatedly described scenarios where generating scaffolding, unit tests, build configurations, and generic boilerplate would save time. For example, one participant envisioned agents that “can create and write most of the boilerplate code that I'm used to writing today” (Participant 102). Others framed such automation as freeing them to handle product-level tradeoffs: “Ideally I could delegate most coding tasks... while I focus on the things which AI currently cannot do well (Cross team objective setting, product decision making, high level design, etc)” (Participant 54). Boundaries expressed here tend to be pragmatic: developers want AI to do routine, well-scoped chores but expect to retain control for design and nuanced decisions.

Sub-themes identified:
- **Boilerplate & Setup**: AI takes over repetitive scaffolding, setup, or boilerplate code so developers can focus on higher-value tasks.

Number of participants: ~10 participants (counted PIDs: 2, 54, 55, 57, 70, 102, 353, 375; rounded to nearest 5)

Representative quotes:
- *"Generation & dealing with boiler-plate code... AI will help implement those changes across the rest of the codebase."* (Participant 2)
- *"As much as I love coding, there is simply too much work to do to want to keep doing it myself. Ideally I could delegate most coding tasks..."* (Participant 54)
- *"Generating boilerplate code, and also unit tests."* (Participant 70)

Confidence: High

---

#### Theme: Multi-/Cross-Context Support

Developers want AI that understands and acts across entire repositories and system boundaries. Under the code "Cross-Codebase Awareness," participants expect AI to detect related files, propagate consistent changes, and support multi-step refactorings and re-architecture work. For example, one participant asked for an AI that can “make generic code changes” and create agents that “understand the codebase” (Participant 33). Another highlighted the need for “multi-step changes across boundaries for large code bases” to make sound architectural decisions (Participant 47). The motivation is to reduce duplication, avoid inconsistent edits, and enable reliable large-scale changes; the main condition is that AI must truly grasp relationships across modules rather than operating only in isolated files.

Sub-themes identified:
- **Cross-Codebase Awareness**: AI understands and operates across an entire codebase, applying consistent changes, avoiding duplication, and working across modules.

Number of participants: ~5 participants (counted PIDs: 2, 33, 47, 262, 332; rounded to nearest 5)

Representative quotes:
- *"Creating agents, that understand the codebase and make generic code changes."* (Participant 33)
- *"Improvements in understanding large code bases and drawing architectural conclusions will be necessary..."* (Participant 47)
- *"AI should know which files are related to the code... find the files that are used in context to the currently open files."* (Participant 332)

Confidence: Medium

---

#### Theme: Background Quality and Standards Check

Developers want AI to act as a constant quality gate: enforcing style, flagging bad practices, and catching simple bugs. The code "Automated Code Review & Standards Enforcement" captures this desire for automated enforcement of coding standards, repository guidelines, and best practices. Participants cited wanting AI to help identify bad coding practices and ensure repository standards are met: “I’d really like it if AI helps me make sure the code I'm writing meets repository standards” (Participant 39). There is also demand for better understanding of best practices, because “current models are still producing bad code” (Participant 129). The desired outcome is reduced review overhead and more consistent code health; the boundary is that AI must be accurate and aligned to team-specific standards (one participant explicitly expected AI to check Azure/Microsoft standards, e.g., Participant 353).

Sub-themes identified:
- **Automated Code Review & Standards Enforcement**: AI enforces coding standards, repository guidelines, and best practices automatically during coding.

Number of participants: ~5 participants (counted PIDs: 21, 39, 129, 142, 353, 71; rounded to nearest 5)

Representative quotes:
- *"Help identify bad coding practices."* (Participant 21)
- *"Make sure the code I'm writing meets repository standards..."* (Participant 39)
- *"Better 'understanding' on best coding practices. Current models are still producing bad code."* (Participant 129)

Confidence: Medium

---

#### Theme: Comprehension & Collaboration Support

Developers want AI to help people understand codebases, onboard newcomers, and surface similar patterns and usages. The code "Code Comprehension & Onboarding Support" captures requests for AI to answer natural-language questions about a repository, provide walkthroughs, and point to similar code examples. Several participants highlighted onboarding and learning: “To understand big codebases... and provide a code walkthrough to new developers” (Participant 314), and “I want it to be able to understand a full code base and be able to answer common language questions about it” (Participant 85). Participants also want contextual linking—finding where particular patterns (e.g., encryption or coroutines) have been used somewhere else in the repo (Participant 328). The desired outcome is faster ramp-up, better knowledge transfer, and reduced tribal knowledge; the caveat is an emphasis on human-understandable explanations, not just AI-only introspection.

Sub-themes identified:
- **Code Comprehension & Onboarding Support**: AI explains existing codebases, architectural insights, their dependencies, and provides walkthroughs for onboarding and learning.

Number of participants: ~5 participants (counted PIDs: 85, 314, 345, 280, 328, 60; rounded to nearest 5)

Representative quotes:
- *"I want it to be able to understand a full code base and be able to answer common language questions about it."* (Participant 85)
- *"To understand big codebases... and provide a code walkthrough to new developers."* (Participant 314)
- *"Finding similar code chunks in the code repo... giving me suggestions for things along with the files where it has picked them up from."* (Participant 328)

Confidence: Medium

---

### B. Where AI is Not Wanted

#### Theme: Domain, Context, or Knowledge Gaps

Participants worry that AI lacks the deep, tacit system understanding necessary for many development decisions. The code "Missing project/system context" describes that AI does not have sufficient system-level, UX, or architectural context to reliably make correct choices. Respondents warned against letting AI autonomously change data access patterns or make design choices that depend on unstated constraints: “I do not want AI to try and provide recommendations for data access patterns, as it does not have any understanding or context about my data” (Participant 2). Others emphasized that multi-step and implicitly-informed decisions are risky when AI lacks tribal knowledge: “The multi turn AI tools... have often lacked that extra context that led to solving a bug, but not in the right way” (Participant 10). The boundary is clear: AI is acceptable for tightly scoped, verifiable tasks but not for decisions that require deep domain or organizational context.

Sub-themes identified:
- **Missing project/system context**: AI lacks the necessary system-level, UX, or architectural context to make correct decisions

Number of participants: ~5 participants (counted PIDs: 2, 10, 33, 57, 204; rounded to nearest 5)

Representative quotes:
- *"I do not want AI to try and provide recommendations for data access patterns... it does not have any understanding or context about my data."* (Participant 2)
- *"The multi turn AI tools... have often lacked that extra context that led to solving a bug, but not in the right way."* (Participant 10)
- *"Design related tasks, it may not know the full context."* (Participant 33)

Confidence: Medium

---

#### Theme: Quality & Trust Issues

Developers are cautious because AI can produce incorrect, inefficient, or irrelevant code. The code "Risk of incorrect/inferior code" documents concerns that AI-generated outputs are sometimes wrong, outdated, or introduce subtle logic errors. Participants gave concrete examples: one warned that “a few months ago it wrote code that assumed that every month has 30 days. I wouldn't trust that AI” (Participant 392). Others found inline completions noisy or error-prone: “Inline code completions often cause me more pain than benefit as AI gets it wrong” (Participant 142). The feared outcome is increased debugging and review overhead that negates productivity gains; the condition for acceptance is substantially improved accuracy and contextual correctness.

Sub-themes identified:
- **Risk of incorrect/inferior code**: Concerns about AI generating incorrect, inefficient, or outdated code

Number of participants: ~5 participants (counted PIDs: 17, 60, 130, 142, 392; rounded to nearest 5)

Representative quotes:
- *"AI should not be relied on for complex tasks, as it is still very bad at them."* (Participant 17)
- *"Code complete is a mess... I would rather it write it, I fix it, or just let me write it and evaluate it later."* (Participant 60)
- *"I don't want to trust it fully with code because it gets it wrong often enough."* (Participant 130)

Confidence: Medium

---

#### Theme: Need for Accountability, Human Oversight, & Decision Control

Participants want human approval to remain central—especially for code that bears their name or legal responsibility. Under "Need to preserve human accountability," respondents insisted that AI outputs be human-reviewed and that final sign-off remain a human responsibility: “I would like to remain a code-reviewer for my AI-generated code and basically steer it in the right direction” (Participant 103). Another noted that approving a change places their name on it and carries responsibility, which cannot be handed entirely to AI (Participant 117). The implication is procedural: AI should assist, propose, and document changes, but not replace human reviewers or the accountability associated with code approval.

Sub-themes identified:
- **Need to preserve human accountability**: AI outputs must be checked by humans before use

Number of participants: ~5 participants (counted PIDs: 21, 103, 117; rounded to nearest 5)

Representative quotes:
- *"Automatically change code without user review."* (Participant 21)
- *"I would like to remain a code-reviewer for my AI-generated code and basically steer it in the right direction."* (Participant 103)
- *"...the final code review before a code change is merged, because marking my approval puts my name on it and makes me partially responsible..."* (Participant 117)

Confidence: Medium

---

#### Theme: Privacy, Security and Risk-Sensitive Areas

Developers explicitly exclude AI from sensitive domains where mistakes can have serious consequences. The "Avoid when privacy/security-critical code" code captures reluctance to let AI handle security, privacy, and critical production systems autonomously. Participants said “Anything pertaining to security shouldn't be handled by AI (but perhaps reviewed by it)” and that security-related code is “Not trustworthy enough” (Participants 188 and 219). Others noted that core architecture and security-critical code require business understanding and careful risk management (Participant 284). The clear boundary: AI may support review or suggest fixes, but it should not be the final decision-maker for security- or privacy-sensitive code.

Sub-themes identified:
- **Avoid when privacy/security-critical code**: Avoid giving AI control over code with security/privacy implications

Number of participants: ~5 participants (counted PIDs: 188, 219, 211, 284, 253; rounded to nearest 5)

Representative quotes:
- *"Anything pertaining to security shouldn't be handled by AI (but perhaps reviewed by it) to avoid subtle bugs..."* (Participant 188)
- *"Security-related code - Not trustworthy enough."* (Participant 219)
- *"I don’t want AI to handle core architecture design or security-critical code..."* (Participant 284)

Confidence: Medium

---

#### Theme: Professional Identity & Craftsmanship/Skill Preservation

Some developers resist AI encroaching on the parts of programming they find meaningful or essential for learning. The code "Preserve Coding enjoyment/ learning preservation" captures this desire to retain hands-on coding for personal satisfaction and professional development. Several participants explicitly stated they enjoy programming and do not want it entirely automated: “Programming. Because I enjoy a lot doing it myself” (Participant 42), and “I do not want to hand AI a design and have it write all the code because I enjoy coding” (Participant 169). Others warned that offloading learning tasks to AI could stunt skill growth: “AI should enhance human engineer's learning and development, not replace tasks that allow those engineers to become better engineers” (Participant 16). The boundary here is cultural: teams should preserve learning opportunities and the craftsmanship aspect of development.

Sub-themes identified:
- **Preserve Coding enjoyment/ learning preservation**: Developers don’t want AI to take away the parts of coding they enjoy or replace learning opportunities.

Number of participants: ~5 participants (counted PIDs: 42, 110, 169, 409, 16, 145; rounded to nearest 5)

Representative quotes:
- *"I do not want AI to handle writing code for me. that is the part I enjoy doing and is the core of my work."* (Participant 110)
- *"I do not want to hand AI a design and have it write all the code because I enjoy coding..."* (Participant 169)
- *"AI should enhance human engineer's learning and development, not replace tasks that allow those engineers to become better engineers."* (Participant 16)

Confidence: Medium

---

## 2) Cross-Cutting Patterns

- Complementary desires and concerns: Participants want routine, well-scoped automation (boilerplate, tests, standards enforcement) and richer comprehension tools, yet they simultaneously fear incorrect outputs and loss of control. The same respondents sometimes expressed both expectations and skepticism: they want AI to speed up mundane tasks but distrust it for domain-critical decisions. This complementarity shows up as a pragmatic split of labor: AI handles repetitive, verifiable tasks; humans keep responsibility for design, security, and nuanced trade-offs.

- Conditional acceptance: Acceptance of AI is strongly conditional. Developers favor AI when tasks are small, deterministic, and easily validated (e.g., scaffolding, formatting, search for similar code). They reject or limit AI where implicit knowledge, project context, or legal/accountability constraints matter (security code, architecture, or UX decisions). Many asked for explicit scopes, review steps, and provenance to be built into AI workflows.

- Task-specific nuances: Coding Programming is characterized by tightly coupled artifacts (code + tests + CI + architecture) and abundant implicit "tribal knowledge." This makes cross-file and cross-repo understanding especially valuable but also particularly challenging for AI. Tasks that are frequent, mechanical, and pattern-based (boilerplate, test skeletons, style fixes) are prime candidates for automation, while tasks needing system-level reasoning (data access patterns, architecture changes) remain human-centric.

- Trust and control dynamics: Trust hinges on correctness, explainability, and human involvement. Developers want AI to propose and document changes, but they insist on final human sign-off. They also want mechanisms to detect and prevent AI-driven regressions (provenance, testing, scope limits). Autonomy without clear audit trails and reversible actions undermines trust.

---

## 3) Outliers and Edge Cases

- Full delegation advocates: A minority (e.g., Participant 54) explicitly envisioned delegating “most coding tasks” to agents and focusing solely on higher-level responsibilities. This contrasts with the more common stance of selective automation plus human oversight.

- Strong craft preservation: Some participants emphatically reject AI for nearly any coding task because of enjoyment and learning (e.g., Participants 42, 110). These views resist even tightly-scoped automation, reflecting identity and career-development concerns.

- Ambivalent responses within participants: A few participants appear in both “want” and “don’t want” lists (e.g., Participant 2 wants boilerplate help but not AI recommendations for data access patterns). These mixed positions signal that developers differentiate types of tasks even within the same workflow.

- Unique tooling expectations: Some respondents asked for capabilities beyond current offerings, such as AI that can “find the files that are used in context to the currently open files” (Participant 332) or ensure alignment with platform-specific standards (Participant 353). These are actionable but not yet mainstream expectations.

---

## 4) Implications for AI Tool Design

Developers want practical AI that increases productivity without relinquishing control or risking correctness. Tools should prioritize scoped automation, cross-repo semantic awareness, standards enforcement, and onboarding assistance while embedding auditability, human-in-the-loop workflows, and explicit exclusions for sensitive areas.

#### Key "Must Haves" (features designers should prioritize)

- **Boilerplate & Setup automation**
  - Capability: Generate scaffolding, configuration, and unit-test skeletons quickly and accurately, with configurable templates aligned to team standards.
  - Rationale: Participants repeatedly asked for time savings on repetitive tasks (e.g., “Generating boilerplate code, and also unit tests.” — Participant 70).
  
- **Cross-Codebase Awareness**
  - Capability: Global repository indexing and semantic mapping so AI can find related files, propagate consistent changes, and propose multi-file refactor plans.
  - Rationale: Developers want agents that “understand the codebase and make generic code changes” (Participant 33) and can “find files that are used in context” (Participant 332).

- **Automated Code Review & Standards Enforcement**
  - Capability: Automated linting, style enforcement, and best-practice checks that can be tuned to repository-specific rules and integrated into CI.
  - Rationale: Participants asked for AI that ensures code meets repository standards and flags bad practices (Participant 39; Participant 21).

- **Code Comprehension & Onboarding Support**
  - Capability: Natural-language Q&A over the codebase, guided walkthroughs, and examples linking to actual files showing patterns and usages.
  - Rationale: New developer ramp and cross-team knowledge transfer were explicit needs (“provide a code walkthrough to new developers” — Participant 314).

- **Explainability, Provenance, and Reversible Changes**
  - Capability: Every suggested or applied change should include rationale, provenance (which patterns or examples guided it), and an easy rollback path.
  - Rationale: Trust depends on understanding and attribution; participants insisted on human review and responsibility (Participant 103; Participant 117).

#### Key "Must Not Haves" (design guardrails)

- **Autonomous edits without human approval**
  - Risk: Unreviewed changes can introduce subtle bugs and accountability issues.
  - Evidence: Participants explicitly opposed “Automatically change code without user review.” (Participant 21)

- **Autonomous handling of security/privacy-critical code**
  - Risk: Security and privacy errors have outsized consequences.
  - Evidence: Multiple participants stated security-related code is “Not trustworthy enough” for AI to handle (Participant 219; Participant 188).

- **Making core architectural decisions**
  - Risk: Architecture requires deep business and system-level context that AI lacks.
  - Evidence: Participants disallowed AI over architecture and domain-sensitive choices (Participant 57; Participant 284).

- **Replacing learning opportunities or craftsmanship**
  - Risk: Over-automation can erode developer skills and job satisfaction.
  - Evidence: Several participants emphasized keeping learning tasks human (Participant 16; Participant 169).

#### Design Patterns to Resolve Tensions

- Human-in-the-loop Proposals: AI proposes multi-file changes as reviewable diffs with explanations and test suggestions; humans approve and merge. This satisfies automation desires while preserving accountability.

- Scoped, Permissioned Agents: Allow teams to grant agents limited capabilities (e.g., "generate tests" or "apply style fixes") and explicitly disallow agents from touching sensitive modules (security, production config).

- Contextual Confidence Signals: Tools should surface confidence scores and provenance for suggestions (e.g., “this refactoring is based on 3 similar patterns in the repo”), enabling reviewers to prioritize checks.

- Learning-as-a-Service Mode: Offer a “mentor” mode where AI explains steps and asks probing questions instead of fully automating, balancing craft preservation and efficiency.

---

## Executive Summary

- Developers want AI to automate routine coding tasks—boilerplate, test skeletons, and build setup—to free them for higher-level design and product work.
- They also want AI that understands cross-codebase relationships, enforces team standards, and assists with onboarding by explaining code and finding analogous patterns.
- Trust is conditional: acceptance depends on accuracy, explainability, and human-in-the-loop control; autonomous edits—especially in security, architecture, or privacy-sensitive code—are widely rejected.
- AI tools must provide provenance, reversible changes, and configurable scopes/permissions to preserve human accountability and reduce risk.
- A major tension exists between productivity gains from automation and the desire to preserve learning, craftsmanship, and control—designs must support both.
- Recommendation: Build scoped agents that propose changes with clear explanations, confidence scores, and review workflows, while explicitly excluding sensitive modules and supporting a mentor mode for learning.