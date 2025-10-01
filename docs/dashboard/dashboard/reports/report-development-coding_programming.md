# Report: Coding/Programming

**Task Category:** development

**Generated:** 2025-09-30 22:30:23

**Number of Participants:** 178

---

# Thematic Analysis — Coding/Programming

This analysis synthesizes developer survey responses about where they want — and do not want — AI assistance specifically within coding/programming. I coded responses for recurring patterns, balancing task value (e.g., repetitive vs. creative work), identity and learning concerns, accountability, and cognitive demands (need for deep context, long-term reasoning). Themes emphasize both desired capabilities (e.g., boilerplate generation, large-codebase understanding) and firm boundaries (e.g., architecture, production ownership, security).

---

## 1) Core Themes


### A. Where AI is wanted

#### 1. Theme: Automating boilerplate and repetitive code work  
   - Description: Developers consistently ask for AI to take on low‑cognitive, high-volume programming tasks so humans can focus on higher‑value work. This includes generating boilerplate code, scaffolding components, writing repetitive configuration, and producing simple scripts. The motivation is efficiency and reduced toil; the desired outcome is accurate, context-aware templates and code skeletons that follow repo standards and are easy for humans to validate and extend. Many participants attach the condition that output be reviewable and not blindly merged — AI should speed the mundane parts of coding but not remove human oversight.  
   - Number of participants: ~120 participants  
   - Representative quotes:  
     - *"Generation & dealing with boiler-plate code."* (Participant 2)  
     - *"Automating repetitive tasks like boilerplate code generation...writing test cases."* (Participant 57)  
     - *"I would like to use it for generating boilerplate code which I know how to write, but which I don't want to take the time to write."* (Participant 353)  
   - Confidence: High

#### 2. Theme: Test generation, validation, and debugging assistance (but not final ownership)  
   - Description: Many developers want AI to create unit tests, suggest edge cases, and help with debugging investigations — especially by tracing issues across systems, suggesting fixes, or producing test scaffolding. The motivation is catching bugs earlier, improving coverage, and accelerating triage. Desired outcomes include higher automated test coverage, faster reproduction of issues, and AI-aided root-cause hints. Boundaries frequently appear: developers want AI to assist with debugging and propose fixes but retain human control over final fixes and ownership of production changes.  
   - Number of participants: ~90 participants  
   - Representative quotes:  
     - *"Automated test generation, and architectural decision support."* (Participant 9)  
     - *"Help write unit tests, ensure that changes will not break anything."* (Participant 206)  
     - *"Unit testing and discovering edge cases."* (Participant 371)  
   - Confidence: High

#### 3. Theme: Large-codebase comprehension, refactoring and cross-repo changes  
   - Description: Developers want AI that understands entire repositories and can find related files, suggest refactorings, and perform multi-file or multi-boundary edits reliably. The motivation is the difficulty of tracking cross-cutting concerns and making consistent changes at scale. Desired outcomes include intelligent suggestions for refactors, automated style/consistency updates, and assistance in multi-step changes while preserving behavior. Conditions include the need for accurate global context, strong traceability of edits, and cautious application to avoid breaking functionality.  
   - Number of participants: ~85 participants  
   - Representative quotes:  
     - *"More cross-codebase awareness...AI will help implement those changes across the rest of the codebase."* (Participant 2)  
     - *"Improvements in understanding large code bases and drawing architectural conclusions...Multi-step changes across boundaries."* (Participant 47)  
     - *"AI should know which files are related to the code...find the files that are used in context."* (Participant 332)  
   - Confidence: High

#### 4. Theme: Code quality, standards, and in‑editor review assistance  
   - Description: Participants want AI that enforces repo standards, flags bad practices, suggests stylistic and maintainability improvements, and provides in‑line feedback (e.g., code style checks, dependency implications, comments). The motivation is consistent quality, reduced review overhead, and developer learning. Desired outcomes are context-aware suggestions that align with local coding patterns and established standards; many stipulate that suggestions must be correct, explainable, and minimally intrusive in the editor.  
   - Number of participants: ~70 participants  
   - Representative quotes:  
     - *"Help identify bad coding practices."* (Participant 21)  
     - *"Ensure the code I'm writing meets repository standards..."* (Participant 39)  
     - *"I want AI to review my code and provide help/analysis with the mundane parts of my work."* (Participant 142)  
   - Confidence: High

#### 5. Theme: IDE-level productivity: autocomplete, pair-programming, and contextual suggestions  
   - Description: Developers appreciate AI that improves typing flow — predictive completions, local pair-programming, and contextual suggestions (naming, small refactors, quick lookups). Motivation is to reduce context-switching and increase coding velocity. Desired outcomes include seamless, accurate autocomplete and a “co‑pilot” that can offer multiple implementation options or point to relevant docs/examples. Conditions include reliability (not to be intrusive) and avoidance of incorrect inline changes that harm the flow.  
   - Number of participants: ~60 participants  
   - Representative quotes:  
     - *"If AI is involved at all, it should be in the background, adding only slight functionality to existing auto-complete tools."* (Participant 17)  
     - *"C an make the biggest impact...especially with autocomplete, code reviewing and to keep the code repository clean."* (Participant 387)  
     - *"Predicting what I want to do and helping me accomplish my goals. I want AI to be deeply embedded in the typing workflow."* (Participant 163)  
   - Confidence: High

---

### B. Where AI is not wanted

#### 1. Theme: Autonomous production authoring, committing, and approvals (no unchecked commits)  
   - Description: A dominant boundary is that AI must not be permitted to author and merge production code without human review. Developers fear loss of accountability, regressions, and unchecked hallucinations if AI can commit changes or approve pull requests autonomously. The feared outcome is broken production, untraceable responsibility, and maintenance headaches. Many accept AI suggestions but insist human review and final sign-off are mandatory; some want automated PR proposals but never auto-merge.  
   - Number of participants: ~110 participants  
   - Representative quotes:  
     - *"It shouldn't be checking in code that hasn't been viewed by anyone."* (Participant 102)  
     - *"I don't want AI to handle submitting or approving pull requests."* (Participant 122)  
     - *"Not running code on its own without a code review."* (Participant 298)  
   - Confidence: High

#### 2. Theme: High-level architecture, core design decisions, and business‑critical logic  
   - Description: Developers are reluctant to hand over architectural choices, core system design, or business-logic implementation to AI because those tasks require long‑term thinking, nuanced tradeoffs, and domain judgment. Concerns include poor long-term maintainability, misaligned tradeoffs, and absence of accountability. Acceptable AI roles are advisory — offering options or pros/cons — but final decisions and ownership should remain human.  
   - Number of participants: ~100 participants  
   - Representative quotes:  
     - *"I prefer AI not handle core architectural decisions or debugging tricky issues...I want to stay in control of those calls."* (Participant 57)  
     - *"I do not want AI to 'handle' any of it, given that I am accountable for it."* (Participant 167)  
     - *"I don’t want AI to handle core architecture design or security-critical code."* (Participant 284)  
   - Confidence: High

#### 3. Theme: Security-critical code, sensitive/confidential logic, and safety‑critical areas  
   - Description: Several participants explicitly exclude AI from writing or fully owning security-sensitive code and other high-risk areas. The concern is that hallucinations or subtle, security-relevant bugs would escape detection and cause serious impact. The boundary is strict: AI may assist in analysis or review but should not independently author or approve security-critical implementations.  
   - Number of participants: ~60 participants  
   - Representative quotes:  
     - *"Anything pertaining to security shouldn't be handled by AI (but perhaps reviewed by it)."* (Participant 188)  
     - *"Security-related code - Not trustworthy enough."* (Participant 219)  
     - *"Confidential information involved parts."* (Participant 253)  
   - Confidence: High

#### 4. Theme: Complex debugging, deep-root cause fixes, and large autonomous agentic tasks  
   - Description: While many want AI assistance in debugging, many explicitly do not trust AI to own complex debugging, critical performance optimizations, or fully agentic multi-step changes on live systems. The core worry is insufficient context, flaky correctness, and the high cost of incorrect automated changes. Developers want AI to aid investigation (trace analysis, suggestions) but not to be sole agent for complex fixes or deployments.  
   - Number of participants: ~90 participants  
   - Representative quotes:  
     - *"I prefer AI not handle...debugging tricky issues in my development work, because those need deep context."* (Participant 57)  
     - *"Agentic tasks - don't feel comfortable letting AI handle complex scenarios on existing platform."* (Participant 192)  
     - *"I do not want AI to handle writing code for me...that is the part I enjoy doing."* (Participant 110)  
   - Confidence: High

#### 5. Theme: Tasks that erode learning, developer skill development, or accountability  
   - Description: Some developers resist AI taking over tasks that contribute to professional growth (learning through coding) or that would shift accountability away from humans. The feared outcome is a reduction in developer competence and diminished ability to debug or understand systems later. Conditions include preserving opportunities for developers to perform challenging tasks and keeping human review tightly coupled to AI outputs.  
   - Number of participants: ~30 participants  
   - Representative quotes:  
     - *"AI should enhance human engineer's learning and development, not replace tasks that allow those engineers to become better engineers."* (Participant 16)  
     - *"I want AI to be a coach, not an author...help engineers learn, instead of doing the work for them."* (Participant 393)  
     - *"I want AI to stay out of learning. A big part of development is learning..."* (Participant 145)  
   - Confidence: Medium

---

## 2) Cross‑Cutting Patterns

- Desire vs. Trust: Developers overwhelmingly want AI to accelerate repetitive tasks (boilerplate, tests, refactors) but draw firm lines where trust, accountability, or domain nuance is required (production commits, architecture, security). The same respondents often ask for both strong automation and strong human oversight.
- Context and explainability as prerequisites: Themes about large-codebase understanding, cross-file refactors, and code quality tie back to the need for deep contextual awareness (repo history, tests, runtime logs) and transparent reasoning/explanations from AI to build trust.
- Learning and identity tension: Some developers value AI as a learning aid (coaching, docs, inline explanations); others worry that outsourcing core tasks will reduce skill acquisition. This creates a design tension between enabling productivity and preserving developer growth.
- Human-in-the-loop as a dominant boundary: Across wants and don't-wants, a recurring condition is human review and final decision-making — whether for PR approvals, architectural sign-off, or security-sensitive code.

Relation to other tasks
- Some participants contrasted coding with non-coding work (e.g., meetings, documentation) and suggested AI could own more of the latter; several explicitly said they are comfortable with AI taking over administrative/non-coding tasks while retaining control of code and architecture (Participant 54, 208).

---

## 3) Outliers and Edge Cases

- Full automation advocates: A minority envision AI as the primary coder or want AI to handle “everything” (e.g., Participants 245, 330, 7’s remark). These views contradict the common insistence on human review and indicate a small group eager to delegate end-to-end.
- Strong preference for subtle background help: A smaller set favor minimal AI intrusiveness (only background autocomplete or suggestions) and are resistant to more agentic roles (Participant 17).
- Agentic experimental uses: A few participants asked for AI that can iterate with real runtime feedback (make speculative changes, observe metrics, retry) — essentially autonomous improvement loops (Participant 195). This is a high‑risk, high‑reward edge case.
- Distrust rooted in specific failure modes: Several cited concrete hallucination examples (wrong imports, bad assumptions like "every month has 30 days"), highlighting that trust is not abstract but grounded in repeatable errors.

---

## 4) Implications for AI Tool Design

High-level takeaway: Developers want AI to remove repetitive work and augment thinking while preserving human ownership for decisions that require deep context, long-term judgment, or carry production risk. To be adopted, tools must be context‑aware, explainable, auditable, and integrate human review into workflows.

#### Key "must haves" (features designers should prioritize)
- Repository-scale context and traceability
  - Capability: Index code, tests, docs, PR history, and runtime signals so suggestions respect local patterns and dependencies; rationale: reduces incorrect/global-ignorant suggestions and supports safe multi-file refactors.
- Human-in-the-loop workflows with explicit gates
  - Capability: Generate editable PRs, require explicit approvals, and surface change diffs and rationale; rationale: preserves accountability and aligns with developer expectations about final sign-off.
- Robust test generation and validation tooling
  - Capability: Auto-generate unit/integration tests plus failure-mode analysis and test-run previews; rationale: increases confidence in AI-generated changes and reduces review burden.
- Explainability and provenance
  - Capability: For any suggested change, provide succinct reasoning, related source examples, and links to supporting files or docs; rationale: helps reviewers evaluate correctness and learn from suggestions.
- Safety filters and alignment with standards
  - Capability: Enforce org/language-specific style guides, dependency constraints, and security policies before presenting suggestions; rationale: prevents common low-quality or deprecated patterns.
- Non-disruptive editor ergonomics
  - Capability: Tunable intrusion levels for autocomplete and inline suggestions, with easy undo and acceptance controls; rationale: maintains developer flow and avoids frustrating false-accepts.

#### Key "must not haves" (design guardrails)
- Autonomous commit/merge without human approval
  - Rationale: Developers universally expect final responsibility to remain human.
- Ownership of architecture or business-critical logic
  - Rationale: These require nuanced tradeoffs and long-term accountability.
- Silent or opaque edits lacking provenance
  - Rationale: Breaks traceability and accountability; every AI change must be explainable.
- Unchecked handling of security/confidential code
  - Rationale: Sensitive areas require higher assurance and human oversight.

---

## Short Summary / Recommendations

- Prioritize AI features that eliminate repetitive work (boilerplate, scaffolding, test scaffolds) while always producing reviewable outputs.
- Build repository‑wide context ingestion and provenance so suggestions respect local practices and enable safe multi-file refactors.
- Require explicit human gates for PR approvals, production deployments, and architecture or security‑critical changes.
- Provide clear, concise explanations and links to supporting evidence for every suggested change to support reviewer trust and developer learning.
- Offer tunable editor intrusion levels and robust undo/accept controls to avoid disrupting developer flow and to prevent accidental acceptance of incorrect code.

---

## Executive Summary

- Developers welcome AI for repetitive coding tasks (boilerplate, tests, simple refactors) to reduce toil and speed delivery.
- Strong, consistent boundary: AI must not autonomously author, approve, or merge production changes without human review.
- Architecture, core business logic, and security‑critical code are off-limits for autonomous AI decision-making; AI should be advisory only.
- Trust depends on deep repo and runtime context, explainability of suggestions, and auditable provenance for every change.
- Design priorities: repo-scale context, human-in-the-loop workflows, test generation/validation, explainability, and conservative guardrails to prevent unsafe automation.