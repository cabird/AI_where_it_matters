# Report of Qualitative Analysis for Coding Programming (Category: Development)

This report is an AI-generated synthesis of manually coded survey responses from developers about AI usage in Coding Programming (Development). I preserved the research team's themes, codes, and code descriptions and integrated representative participant quotes to build coherent narratives. Analysis highlights patterns, tensions, and practical design implications for AI tools aimed at developers.

---

## 1) Core Themes

### A. Where AI is Wanted

#### Theme: Workflow Efficiency / Rote Task Automation

Participants want AI to relieve them of repetitive, low-value work so they can focus on higher-value design and decision-making. The coded sub-theme Boilerplate & Setup—described as "AI takes over repetitive scaffolding, setup, or boilerplate code so developers can focus on higher-value tasks"—captures repeated requests for generated scaffolding, unit tests, build configuration, and other routine coding activities. Developers imagine AI creating the predictable parts of a feature (e.g., model fields, nullability changes, test skeletons) and freeing them to tackle cross-team planning, architecture, and product decisions. They emphasize time savings and the mental relief of removing "mindless tasks" so human attention is available for complex, context-rich work.

Boundaries appear consistently: participants want delegation of tedious code but not full removal of human ownership. Some explicitly want agents to run background tasks while they steer higher-level outcomes, not make final architectural choices. The desired outcome is increased throughput and reduced friction (faster scaffolding, more unit tests), while retaining human oversight on correctness and trade-offs.

**Representative quotes**:
- *"Generation & dealing with boiler-plate code. More cross-codebase awareness, so I can make a single change... and AI will help implement those changes across the rest of the codebase."* (Participant 2)
- *"Taking away the lot of work of boiler plate coding and getting things ready to go with actual crux"* (Participant 55)
- *"Automating repetitive, time consuming, mindless tasks"* (Participant 375)

#### Theme: Multi-/Cross-Context Support

Developers expect AI to understand and operate across entire projects, not just isolated files. The code Cross-Codebase Awareness—"AI understands and operates across an entire codebase, applying consistent changes, avoiding duplication, and working across modules"—reflects needs such as making a single datatype or API change propagate safely across modules, performing multi-file refactors, and drawing architectural conclusions for large systems. Participants describe wanting agents that can "understand the codebase" and perform generic code changes or style migrations consistently.

The motivation is twofold: (1) reduce human error and tedious manual edits when a change spans the repository, and (2) enable higher-quality, consistent transformations (e.g., style, performance, or compliance-related changes). Conditions include accurate identification of related files and preserving intent—participants want AI to recommend and implement changes but remain sensitive to architecture and cross-cutting concerns so that multi-step changes don't introduce subtle bugs.

**Representative quotes**:
- *"Creating agents, that understand the codebase and make generic code changes."* (Participant 33)
- *"Improvements in understanding large code bases and drawing architectural conclusions will be necessary... Multi-step changes across boundaries for large code bases is necessary in our environment."* (Participant 47)
- *"AI should know which files are related to the code... find the files that are used in context to the currently open files."* (Participant 332)

#### Theme: Background Quality and Standards Check

Developers want AI to provide automated enforcement of coding standards and to act as a background reviewer for quality. The code Automated Code Review & Standards Enforcement—"AI enforces coding standards, repository guidelines, and best practices automatically during coding"—summarizes desires for tools that flag bad practices, ensure repository standards are met, surface performance constraints (e.g., data size considerations), and assist with debugging. Participants want AI to catch mundane mistakes (style, spelling) and help with mundane analysis so humans can focus on design.

Participants also requested better "understanding" of best coding practices from AI, noting current model limitations. The desired outcome is a consistent, automated safety net that reduces simple bugs and enforces team conventions, but participants expect the AI to be accurate enough to be trusted and for its suggestions to be explainable so developers can judge and adopt them.

**Representative quotes**:
- *"Help identify bad coding practices."* (Participant 21)
- *"I'd really like it if AI helps me make sure the code I'm writing meets repository standards... and helps me understand dependencies upstream and downstream."* (Participant 39)
- *"I want AI to review my code and provide help/analysis with the mundane parts of my work... ensuring I follow code style guidelines, I don't have bugs or spelling mistakes."* (Participant 142)

#### Theme: Comprehension & Collaboration Support

Developers want AI as a tutor and navigator for large or unfamiliar codebases. The code Code Comprehension & Onboarding Support—"AI explains existing codebases, architectural insights, their dependencies, and provides walkthroughs for onboarding and learning"—captures needs for natural-language Q&A about a repository, guided walkthroughs for new hires, and discovery of analogous code patterns (e.g., finding coroutine implementations when converting Java to Kotlin). Beyond immediate task automation, AI is valued for knowledge transfer: surfacing missing concepts (like dependency injection), pointing to example files, and augmenting developer experience and productivity.

Motivation includes faster onboarding, reduced reliance on tribal knowledge, and preserving human understanding so teams can steer AI-generated changes. A clear boundary is that the AI should improve human comprehension, not produce code that only another AI can understand; participants want explanations and traceability to files and examples.

**Representative quotes**:
- *"I want it to be able to understand a full code base and be able to answer common language questions about it."* (Participant 85)
- *"To understand big codebases, e.g., Azure Storage, and provide a code walkthrough to new developers."* (Participant 314)
- *"Finding similar code chunks in the code repo... giving me suggestions for things along with the files where it has picked them up from."* (Participant 328)

---

### B. Where AI is Not Wanted

#### Theme: Domain, Context, or Knowledge Gaps

Developers are cautious about AI operating where it lacks deep, tacit, or system-level context. The code Missing project/system context—"AI lacks the necessary system-level, UX, or architectural context to make correct decisions"—reflects concerns that AI recommendations can miss implicit conventions, user experience expectations, compliance choices, and domain-specific trade-offs. Participants want AI to outline options but stop short of making final choices that depend on rich, non-explicit knowledge.

Context-sensitive tasks—core architecture decisions, complex debugging, or large multi-file changes without complete context—are flagged as risky. Participants prefer AI to assist with analysis and suggest steps, but keep decision authority and final implementations human-led, especially when outcomes affect UX, compliance, or long-term maintainability.

**Representative quotes**:
- *"I do not want AI to try and provide recommendations for data access patterns, as it does not have any understanding or context about my data."* (Participant 2)
- *"The multi turn AI tools... have often lacked that extra context that led to solving a bug, but not in the right way."* (Participant 10)
- *"I prefer not to use AI for tasks where I can't provide sufficient context... if the code change requires specialized domain knowledge or tribal knowledge... I'd rather handle it myself."* (Participant 204)

#### Theme: Quality & Trust Issues

Developers expressed distrust when AI produces incorrect, inefficient, or irrelevant code. The code Risk of incorrect/inferior code—"Concerns about AI generating incorrect, inefficient, or outdated code"—captures the experience that AI can hallucinate, produce non-compliant imports, or make incorrect assumptions (e.g., month lengths). Participants find AI tolerable for simple, well-known patterns but dangerous for complex or nuanced tasks. Bad suggestions can increase cognitive load—fixing AI output can take longer than coding from scratch—and reduce productivity.

This theme reveals a need for higher-quality, context-aware model behavior and clear signaling of confidence and provenance. Participants who have suffered from bad AI outputs ask for safeguards (testing, explanations) and the option to decline suggestions, rather than intrusive auto-completions that introduce errors.

**Representative quotes**:
- *"AI should not be relied on for complex tasks, as it is still very bad at them."* (Participant 17)
- *"I don't want to trust it fully with code because it gets it wrong often enough."* (Participant 130)
- *"A few months ago it wrote code that assumed that every month has 30 days. I wouldn't trust that AI."* (Participant 392)

#### Theme: Need for Accountability, Human Oversight, & Decision Control

Participants insist on human accountability for code changes. The code Need to preserve human accountability—"AI outputs must be checked by humans before use"—reflects the social and professional reality that approving code links responsibility to the approver. Developers want to remain the final reviewers and stewards of changes; many are uncomfortable delegating approval to an automated agent because approval carries reputation and legal/organizational responsibility.

This theme shapes workflows: AI can generate proposals, but humans must review, sign off, and take blame for released code. Participants emphasize integration with existing code review processes and retaining the human-in-the-loop for merges and approvals.

**Representative quotes**:
- *"Automatically change code without user review."* (Participant 21)
- *"I would like to remain a code-reviewer for my AI-generated code and basically steer it in the right direction."* (Participant 103)
- *"I cannot fully delegate... the final code review before a code change is merged, because marking my approval puts my name on it..."* (Participant 117)

#### Theme: Privacy, Security and Risk-Sensitive Areas

Participants do not want AI to autonomously handle security- or privacy-critical code. The code Avoid when privacy/security-critical code—"Avoid giving AI control over code with security/privacy implications"—captures fears that subtle security bugs could be introduced and go unnoticed if AI is trusted to write or modify sensitive code. Participants differentiate between using AI for review/advice versus letting it author core security logic or architectural security decisions.

They request conservative guardrails: AI can assist in reviewing security concerns but should not be the author or final decision-maker for sensitive areas (authentication, cryptography, data handling). The rationale is the high cost of subtle vulnerabilities and the need for human-domain expertise in risk management.

**Representative quotes**:
- *"Anything pertaining to security shouldn't be handled by AI (but perhaps reviewed by it) to avoid subtle bugs that go unnoticed."* (Participant 188)
- *"Security-related code - Not trustworthy enough."* (Participant 219)
- *"I don’t want AI to handle core architecture design or security-critical code, as these require deep business understanding and careful risk management."* (Participant 284)

#### Theme: Professional Identity & Craftsmanship/Skill Preservation

Some developers resist offloading core coding tasks because programming is their craft and a key learning pathway. The code Preserve Coding enjoyment/ learning preservation—"Developers don’t want AI to take away the parts of coding they enjoy or replace learning opportunities"—summarizes concerns that overly automated workflows will erode developers' skills, reduce learning opportunities for juniors, and remove the intrinsic enjoyment of problem-solving.

Participants want AI to augment learning rather than replace it. They worry that reliance on AI will produce engineers who cannot reason about the systems they maintain, leading to fragile teams that cannot debug or evolve systems without the tool.

**Representative quotes**:
- *"Programming. Because I enjoy a lot doing it myself"* (Participant 42)
- *"I do not want AI to handle writing code for me. that is the part I enjoy doing and is the core of my work"* (Participant 110)
- *"I want AI to stay out of learning. A big part of development is learning, and when folks rely on AI, they don't learn."* (Participant 145)

---

## 2) Cross-Cutting Patterns

- Complementary desires and concerns: Developers consistently want AI to automate repetitive, testable tasks (boilerplate, tests, linting) while they retain control over high-risk, high-context decisions (architecture, security). The "want" themes center on efficiency and comprehension; the "don't want" themes center on context, trust, and responsibility. These form complementary halves: AI as a productivity amplifier for routine work, human stewards for context-rich judgment.

- Conditional acceptance: Acceptance is highly conditional. Developers prefer AI for scoped tasks with clearly verifiable outcomes (generation of boilerplate, unit test skeletons, style changes). For multi-file or cross-cutting changes, they require the AI to demonstrate repository-level understanding and offer explainable changes. Human review and the ability to override or refuse AI changes are non-negotiable conditions.

- Task-specific nuances: Coding involves tacit knowledge, multi-step trade-offs, and implicit conventions. Unlike single-turn document generation, code is executed, tested, and maintained; errors have high operational costs. Therefore, AI features must prioritize provenance, traceability, and ability to locate similar implementation examples across the repo to support safe changes.

- Trust and control dynamics: Trust is incremental and fragile. Positive trust arises when AI suggestions are accurate, provably correct, and localizable to repository examples; distrust arises when AI hallucinates or makes unilateral changes. Control mechanisms—explicit approval steps, visible provenance, and clear separation of suggestion vs. automated action—are essential to maintain developer ownership and accountability.

---

## 3) Outliers and Edge Cases

- Minority perspectives: A few participants advocate for more radical delegation. For example, Participant 54 imagines delegating most coding tasks and analysis to agents while focusing on product-level decisions. This contrasts with the larger group’s preference for retaining final control.

- Unique insights: Some participants want AI to be organization-aware—e.g., verifying "azure, msft and coding standards" automatically (Participant 353). That suggests opportunities for enterprise-integrated models that include company-specific rules and compliance.

- Ambivalent responses: Multiple participants simultaneously want automation for boilerplate and tests but explicitly forbid AI from making core architecture decisions (Participant 57). This ambivalence shows nuanced acceptance: AI as a background worker, not a decision-maker.

- Contradictions within individuals: Some developers reported relying on AI for mundane tasks while complaining that AI often produces poor code (Participants 60, 142). These mixed experiences indicate opportunity: better quality and predictability would convert skeptics into stronger adopters.

---

## 4) Implications for AI Tool Design

Developers want AI that meaningfully reduces routine work, understands whole repositories, enforces standards, and improves onboarding—while preserving human oversight, accountability, and learning. Tools must balance automation with explainability, provenance, and fine-grained control. Integration with existing review workflows and enterprise policies is crucial.

#### Key "Must Haves" (features designers should prioritize)

- **Boilerplate & Setup Automation**
  - Capability: Generate scaffolding, unit-test skeletons, build configuration, and other repetitive code with high reliability and options for customization.
  - Rationale: Participants want routine work removed so they can focus on higher-value tasks. Example: "Automating repetitive, time consuming, mindless tasks" (Participant 375).

- **Cross-Codebase Awareness & Multi-file Refactoring**
  - Capability: Analyze repository-level structure to propose and apply consistent multi-file changes, find related files, and perform safe global renames or datatype changes.
  - Rationale: Developers need AI that can implement a single change across a codebase without breaking intent. Example: "make a single change... and AI will help implement those changes across the rest of the codebase." (Participant 2).

- **Automated Code Review & Standards Enforcement**
  - Capability: Enforce repo standards, detect bad practices, surface upstream/downstream dependency impacts, and flag efficiency or data-size issues with explainable recommendations.
  - Rationale: A background safety net reduces mundane errors and maintains consistency. Example: "helps me make sure the code I'm writing meets repository standards" (Participant 39).

- **Code Comprehension, Onboarding, and Traceability**
  - Capability: Answer natural language questions about the codebase, provide guided walkthroughs, locate similar code chunks, and link suggestions to concrete file examples and documentation.
  - Rationale: Improves onboarding and helps developers reason about AI suggestions. Example: "provide a code walkthrough to new developers." (Participant 314).

#### Key "Must Not Haves" (design guardrails)

- **Autonomous, Unreviewed Changes**
  - Risk: Automated edits without human review violate accountability and can introduce subtle errors.
  - Rationale: Developers insist on retaining final approval: "I would like to remain a code-reviewer for my AI-generated code..." (Participant 103).

- **Unsupervised Handling of Security/Privacy-Critical Code**
  - Risk: AI-written security logic can introduce subtle, high-impact vulnerabilities.
  - Rationale: Participants do not trust AI to author sensitive parts: "Anything pertaining to security shouldn't be handled by AI..." (Participant 188).

- **Domain-Blind Architectural Decisions**
  - Risk: AI lacks tribal and UX knowledge needed for architecture-level choices and can make incorrect trade-offs.
  - Rationale: Developers want AI to outline options but not decide on data access patterns or architecture: "I do not want AI to try and provide recommendations for data access patterns..." (Participant 2).

- **Replacing Learning Opportunities**
  - Risk: Over-automation can erode developer skill growth and enjoyment.
  - Rationale: Preserve tasks that are core to learning and craftsmanship: "I want AI to stay out of learning." (Participant 145).

---

## Executive Summary

- Developers broadly welcome AI for repetitive, verifiable tasks—boilerplate, unit tests, and background maintenance—to increase productivity.
- They want repository- and cross-file-aware AI that can perform consistent multi-file changes and surface related code examples.
- Trust is contingent: AI must provide explainable suggestions, provenance, and integrate with human code review; autonomous changes without review are unacceptable.
- Security, architecture, and privacy-sensitive code are off-limits for unsupervised AI authorship; at best AI can assist in review or flag risks.
- A key tension: developers want automation to save time but also want to preserve coding as a learning craft and keep final responsibility.
- Recommendation: Build tools that automate routine work, provide repository-level understanding and traceable suggestions, and enforce guardrails that require human approval for high-risk or context-dependent changes.