# What’s Beyond Copilot?
22 AI Systems Developers Want Built

Rudrajit Choudhuri  
Oregon State University  
choudhru@oregonstate.edu

Carmen Badea  
Microsoft Research  
cabadea@microsoft.com

Christian Bird  
Microsoft Research  
cbird@microsoft.com

Anita Sarma  
Oregon State University  
anita.sarma@oregonstate.edu

## Abstract
Developers spend roughly one-tenth of their working day writing new code. The rest—debugging production incidents, navigating compliance, onboarding teammates, keeping documentation maintained, reviewing changes, translating technical decisions for non-technical stakeholders—has received far less attention from AI tooling research. We report a qualitative study of open-ended survey responses from 860 Microsoft developers, asking where they want AI support in their work and where they want it to stay out. Using a human-gated multi-model LLM council-based thematic analysis, we identify 22 systems across five software development task categories that developers want built. For each system, we describe the problem developers want solved, what makes it hard to build, and the constraints and guardrails that developers placed on what it should never do autonomously. Those constraints reveal aspects of a developer’s work where professional accountability, craft, and judgment are bound up together in ways that make complete automation inappropriate regardless of model capability.

The literature has been heavily concentrated on code generation and completion [?], while the majority of software work has been largely left where it was. The consequences of this are starting to show up in data. Developers using AI coding tools report more flow and higher satisfaction, but spend less time on the work they consider most meaningful [?]. Code review has emerged as a growing bottleneck as AI accelerates production velocity without touching review capacity [?]. Concerns about skill atrophy—long present as a worry in developer communities—are beginning to appear in longitudinal studies [?]. Accelerating one stage of a constrained system moves the constraint; it does not remove it.

A companion study [?] surveyed 860 Microsoft developers about how they appraise their work and what those appraisals predict about AI adoption. It established, with quantitative rigor, where developers want AI support and why. The present paper takes the 989 open-ended responses from that same study—what developers wrote when asked, in their own words, where AI would genuinely help and where they want it to stay out—and asks a different question: what, concretely, would those tools need to do?

Our analysis produces a catalog of 22 systems across five task categories, each described in terms of the problem it addresses, what makes it technically and organizationally hard, and the constraints developers placed on how it should behave. Those constraints are as diagnostic as the positive requests. Developers drew clear, consistent lines around professional accountability, craft, and judgment—lines that any system in that space has to respect, regardless of what it is technically capable of doing.

Research question: Given developers’ own accounts of where AI support is warranted and where it should stay out, what systems remain unbuilt, and what makes them hard to build well?

ACM Reference Format:  
Rudrajit Choudhuri, Christian Bird, Carmen Badea, and Anita Sarma. 2026. What’s Beyond Copilot? 22 AI Systems Developers Want Built. In . ACM, New York, NY, USA, 15 pages. https://doi.org/10.1145/nnnnnnn.nnnnnnn

## 1 Introduction
Work-week studies have documented, across organizations and roles, that developers spend roughly a third of their day writing new code [??]. The rest goes to debugging, reviewing, coordinating, documenting, keeping pipelines healthy, staying compliant, and growing teammates. AI tools for software engineering have arrived almost entirely for the third.

This concentration made sense early on. Code generation was technically tractable, productivity gains in controlled tasks were measurable [?], and the demos were hard to ignore. Over time, SE researchers followed the products. The AI-for-SE literature is now

## 2 Related Work
As AI increasingly absorbs routine coding work, developers are expected to engage with the broader software lifecycle (e.g., design, architecture, planning, compliance, operations)—work for which AI support remains sparse and poorly understood [2?]. Understanding where that support is most needed, and what it would take to build it, has become a practical priority.

Prior work has investigated developers’ adoption of AI for software engineering. Russo showed that workflow compatibility predicted early adoption; tools that did not fit how developers worked were abandoned regardless of capability [14]. Trust shaped use as well, driven by both tooling characteristics and individual AI

---

dispositions [5, 9]. Choudhuri et al. found that reliability, transparency, goal maintenance, and provenance were highly important for developers to trust AI, yet were underserved by current tools [6?].

Studies investigating task-level AI adoption revealed that developers used AI for well-bounded implementation tasks while retaining judgment in architecture and review [2]; that unmet demand concentrated in testing, debugging, documentation, and compliance [10]; and that toil-heavy work correlated with reduced satisfaction, marking it as a prime target for AI support [?]. Lambiase et al. [?] found that AI receptivity was higher for artifact manipulation and information retrieval tasks. Pereira et al. [13] observed lower AI adoption in collaborative and creative aspects.

The survey underlying this paper, reported in Choudhuri et al., provided the first empirically validated mapping of developers’ AI adoption patterns and Responsible AI (RAI) priorities to how they experienced their daily work [?]. Using cognitive appraisal theory across a large-scale survey of Microsoft developers, they established that developers’ perception of task value, accountability, and demand each increased both openness to and use of AI, while identity alignment showed a dual pattern — lower openness, higher use when AI complemented craft. RAI priorities also varied by task context: reliability, security, transparency, and steerability dominated systems-facing work; fairness and inclusiveness became more salient in human-facing contexts. The work also surfaced an openness-vs.-usage map revealing substantial gaps between developer desires and available tooling.

What this body of work established was the where and why of developer AI demand. What it left open was the what to build: given that developers wanted AI support across the software engineering lifecycle, what systems would meet those demands, and what constraints would those systems need to satisfy to be acceptable? We address that question here, reporting a parallel qualitative analysis of the same survey data focused on developers’ free-text descriptions of the systems they want built, and what it would take to build them responsibly.

## 3 Method

To address our RQ, we surveyed software developers at Microsoft. Microsoft employs over 60K developers across domains, roles, processes, stakeholder contexts, and geographies — a scale that made it possible to collect enough responses across the software engineering lifecycle to analyze meaningfully, and one where developers had sustained exposure to both mature and emerging AI tooling.

### 3.1 Source Survey

The data came from an IRB-approved survey of 860 Microsoft developers conducted in July 2025 [?]. That survey investigated how developers cognitively experience and appraise their work, and what those appraisals predict about developers’ AI adoption patterns and Responsible AI priorities across software engineering tasks. It also asked developers two open-ended questions per task category: where they most wanted AI support, and where they preferred to limit it. The companion paper analyzed those responses to explain why developers seek or limit AI, using cognitive appraisals as the explanatory frame.

This paper asks a different question of the responses: what, concretely, would those tools need to do? We analyzed what developers described wanting built, and what constraints they placed on how such systems should behave.

#### 3.1.1 Survey Design

The survey used a grounded taxonomy of SE tasks (Table 1), constructed by integrating work-week studies of developer activities [12?] with large-scale developer surveys on AI adoption [10?], and validated through pilot sessions with developers and SE researchers outside the team for clarity on tasks and category boundaries.

Table 1: Grounded taxonomy of SE tasks [6, 10–12]

![Table 1: Grounded taxonomy of SE tasks](page2_img_1.png)

Participants selected 2–3 task categories that best reflected their current work and answered questions for those categories. To reduce fatigue, the meta-work category (applicable to all developers) was excluded from the initial selection and shown only if a participant had selected two categories; thus, no participant completed more than three category blocks.

Within each selected category, they completed Likert-scale items on task appraisals, AI openness, and Responsible AI priorities (reported in the companion study [?]), and then answered two open-ended questions:

1. Opportunity: “Where do you want AI to play the biggest role in [task-category] activities?”
2. Constraint: “What aspects do you not want AI to handle in [task-category] activities and why?”

These two questions: one eliciting desired capabilities and unmet needs, the other eliciting guardrails, no-go zones, and boundary conditions — are the primary data for this paper. The unit of analysis is a single respondent’s answer to one question within a category; a single response could be assigned multiple codes.

#### 3.1.2 Data collection

The survey was distributed to 8,000 developers via email, sampled uniformly across product groups, roles, and geographies. One reminder was sent after one week. Participation was voluntary and anonymous. We received 1,193 responses (response rate: 14.86%), consistent with prior large-scale SE surveys [??]. We excluded incomplete responses (n = 152), patterned responses (straight-lined or repetitively alternating; n = 59), attention-check failures (n = 98), and participants who reported no AI experience (n = 24), retaining 860 valid responses spanning six continents.

---

![Analysis pipeline overview](page3_img_fig1.png)

Figure 1: Analysis pipeline overview. Three frontier models independently discover themes from developers’ open-ended survey responses across two tracks. A reconciliation step produces a unified codebook per track. Researchers validate and refine themes before systematic coding proceeds. All three models then code each response against the approved codebook, providing a rationale before assigning codes. Inter-rater reliability is computed per theme using Krippendorff’s α [8]; final assignments use 2-of-3 majority vote.

## 3.2 Data Analysis

We analyzed the 2,580 open-ended responses using a human-gated multi-model LLM council pipeline (see Fig. 1), following reflexive thematic analysis [3, 4]. We designed this approach to manage the inherent tension between scale and interpretive rigor in large-scale qualitative analysis. Both the opportunity (what developers wanted) and constraint (what they did not want) tracks followed an identical process with track-specific prompts and codebooks (see [1]).

### 3.2.1 Stage 1: Independent theme discovery

We used three frontier models for theme discovery: GPT-5.2 (OpenAI), Gemini 3.1 Pro (Google), and Claude Opus-4.6 (Anthropic). Each model received the complete set of survey responses for a given category (e.g., Infra & Ops) and was prompted to independently discover

Table 2: LLM-council configurations for thematic analysis

![LLM-council configurations table](page3_img_table_2.png)

effort: high coder

### 3.2.2 Stage 2: Codebook reconciliation

We passed the three independent theme sets to GPT-5.2 and directed it to: (1) identify

---

### 3.2.3 Stage 3: Author review and codebook approval

After reconciling unified codebooks per category, two researchers independently reviewed them before any coding began. Each read every proposed theme alongside every participant response cited as supporting evidence. For each theme, they assessed whether the label accurately captured what participants had described, whether the cited responses were genuinely on-point or edge cases the model had over-extended, and whether the theme’s boundaries were distinct enough from adjacent themes to code reliably. To clarify boundaries, each researcher documented positive examples: responses that clearly instantiated the theme, and negative examples: responses that fell outside it despite surface similarity.

The two researchers then met to compare their assessments, following a negotiated agreement protocol [?]. They split themes flagged as too broad, merged those with substantial overlap, added concepts the models had missed, removed those thinly grounded in the data, and resolved disagreements until reaching consensus. Systematic coding proceeded after researchers signed off on the finalized codebook.

### 3.2.4 Stage 4: Systematic coding

All three models independently coded every response against the finalized codebook. Each coding instance required the model to write a chain-of-thought rationale before assigning any codes [?], producing an audit trail of decisions for the research team to review. Each response was shown alongside the participant’s answer to the opposite question within the same category, enabling detection of misresponses (e.g., a participant who described a constraint in the want-support field and vice versa was detectable when both fields were visible).

Rather than dropping problematic responses, we instructed models to flag data quality problems using ISSUE_* codes. Approximately 11% of responses contained such problems: misplaced answers (ISSUE_WRONG_FIELD), back-references unintelligible on their own (ISSUE_BACK_REFERENCE), or terse non-responses such as “N/A” (ISSUE_NON_RESPONSE). Models could introduce additional ISSUE_* codes for problems the pre-specified set did not cover. Flagged responses were excluded from prevalence counts but remained in the dataset; where relevant, they served as contextual signals for interpreting other responses from the same participant.

Models were restricted to codes from the approved codebook and structured ISSUE_* codes; no novel codes were permitted. This prevented code drifts, which can occur when the same model processes hundreds of responses sequentially and begins inferring patterns that the codebook does not sanction. Multi-coding was permitted to capture the breadth of semantic content in each response.

### 3.2.5 Stage 5: Inter-Rater Reliability and Consensus

Inter-rater reliability among the three coders was assessed per theme using Krippendorff’s 𝛼 [8]. We additionally computed pairwise Cohen’s 𝜅 [7] for each model pair (GPT–Gemini, GPT–Opus, Gemini–Opus) and three-rater percent agreement per theme. 𝛼 captured overall agreement corrected for chance; 𝜅 revealed whether alignment was uniform across pairs or concentrated in one; percent agreement identified full consensus. Across the themes in the final codebook, IRR values ranged from 0.78 to 0.97, with most themes exceeding 0.88, well above the accepted threshold [8]. Themes below threshold were flagged for researcher review and either refined, merged, or excluded by team consensus.

Final theme assignments used majority vote: at least 2 of 3 models had to agree for a theme to be assigned to a response, applied independently per response and per theme. For ISSUE_* flags, a response was excluded from substantive analysis if 2 or more models flagged any issue code, regardless of which specific code. This prevented a single aggressive model from over-filtering valid responses while still catching systematic data-quality issues that multiple models independently flagged.

Following consensus, two researchers spot-checked model assignments against the supporting rationale to verify fidelity to the finalized codebook. Finally, for the prevalent themes per category, we synthesized system cards covering problem statement, system capability description, constraints, and supporting quotes.

> Reflexivity Note: We note that the analysis pipeline is designed to augment, not replace, qualitative research. Models surface candidate themes at scale; the researcher decides what they mean. The analytical products (themes, system descriptions) represent the authors’ interpretations of participant accounts, grounded in the verbatim quotes that readers can inspect throughout Sec. 4.

### 3.3 Limitations

Construct validity. We report stated preferences; we do not predict adoption. Developers may describe capabilities they would not actually use in practice. We treat this as motivation for future work: claims about system value should be falsifiable, and the constraints developers described provide the criteria for doing so.

The qualitative pipeline uses LLMs as coders, which risks plausible themes that miss what respondents meant. Our design addresses this threat. Three models from distinct providers, each operating with extended reasoning, independently discovered themes before reconciliation; two researchers then reviewed every proposed theme against every cited evidence before approving the codebook. Systematic coding required each model to produce a chain-of-thought rationale before assigning any code, creating an auditable decision trail for the research team. IRR agreement statistics provide further evidence that themes are reliably distinguishable, though reliability is necessary but not sufficient for validity. Verbatim quotes throughout allow readers to assess directly whether themes are grounded in what respondents said.

---

## 4 Systems Developers Want Built

We organized findings by task category. Each category opens with a summary table; the subsections report what developers described each system as doing to make their work easier, what they identified as hard about building it, and the constraints they placed on its behavior. Those constraints recur consistently enough across respondents that we treat them as requirements — they reflect deliberate choices about where developers considered their professional responsibility lay.

### 4.1 Development (N=353)

353 respondents answered the development-category questions. The majority of them wanted help with the backlog of technical debt that accumulates in every mature codebase. What was striking was how consistently enthusiasm and anxiety arrived together: even developers who most wanted AI to take on this work attached explicit scope boundaries, review gates, and requirements that the system stop and surface its limits rather than invent past them.

#### 4.1.1 Scoped-PR builder for tech debt removal. 
50.1% of development respondents wanted this, making it the most prevalent single want in this category. Mature codebases accumulate important maintenance work that everyone knows needs doing (e.g., framework migrations, API renames, dependency chain management), but that is hard to do carefully at scale and is risky to hand off without codebase understanding. “Refactoring would be the biggest help! It’s almost always tedious and well-defined tasks. Frequently, it needs more than just find-replace, though. Almost always, it is over large file and multi-file workflows” (P27).

Generating code that is contextualized is hard for current tools. Respondents wanted AI that followed the team’s actual conventions, error-handling, and testing styles, then package these changes as a sequence of diffs, each small enough to review with confidence, stopping at the authorized boundary even when it identified adjacent code worth cleaning up. Conciseness was a key requirement. “I want small PR’s with incremental steps” (P816). The worry was overreach: “I don’t want AI to make substantial refactoring changes without interaction/consultation first… next thing I know there are new classes and new files” (P40). When a change requires domain knowledge or touches core business logic, the system should recognize the boundary and stop: “If the code change requires specialized domain or tribal knowledge not found within the repository, I’d rather handle it myself” (P211).

#### 4.1.2 Embedded quality gate for code and tests. 
27.8% of respondents described wanting a quality gate embedded during authorship time: pre-commit bug-spotting, standards enforcement, vulnerability detection, and missing test identification. Current tools provide feedback that is generic, shallow, and often unanchored to the current diff: “Stop giving bad advice. So many of the PR automated comments are just plain wrong” (P609). Generic linter-like recommendations erode trust; what developers need is a quality pass anchored to the current diff, the nearby tests, and the specific interfaces touched — one that combines deterministic analyzers with targeted model reasoning to surface only what is genuinely worth developer attention. Getting this right had real upstream value: “you can avoid many on-call fixes if you leverage AI upstream and catch bugs during development or early test environment, before they affect any users” (P120).

The constraints were strict that the systems should not bypass human accountability: no automatic modifications, no auto-submitted or auto-approved artifacts. For test generation especially, respondents wanted the system to ask before writing: “AI should ask for a lot of input before writing unit tests… especially if we are writing a new feature from scratch” (P680). A test validating wrong behavior is worse than no test.

#### 4.1.3 Trace-to-Diff root cause workbench. 
19.5% described wanting help “assembling the case file” for live production incidents. The bottleneck is evidence collection: an engineer has to find the right logs, align the trace with the release that introduced the regression, and reconstruct enough runtime context to have something worth verifying before any debugging begins. “…there are lots of logistics that need to be done… If those are [done] by AI, it would be a great win” (P156).

Respondents described wanting a workbench that started from a bug report, stack trace, or incident alert and assembled a debug case file: correlated logs and traces, the most likely regression window, similar historical failures, and competing root-cause hypotheses. If a hypothesis survives verification, the system needs to propose a narrow patch and a regression test. The goal was to shift engineer effort from evidence gathering to judgment: “focus on ‘do we agree with the Agent’s assessment… and proposed fix?’ and we could collectively churn through our bugs much faster” (P120). Confidence calibration is what makes this hard. A wrong hypothesis stated confidently sends the team down the wrong path. “AI is very bad at understanding the context and throwing wrong answers without utmost confidence, makes us waste time instead of helping” (P223). No code changes should be applied without explicit human review, and proposed fixes had to be precisely scoped to the identified fault.

#### 4.1.4 Repository context graph for cross-file changes. 
18.4% of respondents described that current AI assistants lose the thread of a codebase after a few turns and produce edits that are locally plausible but globally wrong. “We want/need to do a MUCH better job of analyzing a current code base, architecture, and structure so it can understand how/where to add/extend. Today it loves to duplicate code, and even break existing functionality” (P208).

Respondents described wanting a persistently maintained map of the code, tests, and historical discussions — one that survived across sessions — so an engineer could ask “where should this change go? and what breaks if I touch this?” before any edits are made. To do this, the system has to infer conventions from the existing codebase and attach rationale from PR discussions, ADRs, and linked bugs, recovering context that never made it into a commit message. Participants noted that this was harder than retrieval-augmented generation: the system needs structural understanding of the codebase, combined with historical reasoning about its design; the resulting impact analyses have to be specific enough to act on without being so exhaustive that they are ignored. Scope constraints followed directly: no modifications outside the approved task, no substantial structural changes without interactive scoping, and when evidence was insufficient, the system had to surface the gap and ask rather than invent context.

---

### Table 3: Systems developers want built: Development (N=353).

![Table: Systems developers want built: Development (N=353)](page6_img_table_1.png)

> Key insight. The common thread across the systems was a scope and context representation problem. Each system required the AI to assemble and maintain a different kind of local knowledge (e.g., repository conventions, diff intent, failure evidence) that current tools either lost between turns or never acquired.

## 4.2 Design and Planning (N=223)

223 developers answered the design and planning questions. They wanted AI to assist with the exploratory overhead surrounding design work while keeping the actual decisions firmly human to help be innovative in design: “AI’s system design solutions bias toward old known solutions rather than a modern solution that solves the problem better” (P188).

### 4.2.1 Design-To-Sprint workbench

30.5% of respondents wanted a full-cycle AI workbench that absorbs the planning and coordination overhead that follows after a design is settled. For example, P380 said: “It would be helpful if AI could take high-level features and break them down into discrete implementation tasks, and then plan those tasks out.” The system they wanted would take an approved plan and produce a first-pass execution package — hierarchical work items, dependency mapping, estimates inferred from comparable historical tasks, and a draft sprint sequence for human review — then, once the team edits and accepts it, sync approved deltas into the tracker and assemble recurring status digests from tracker activity, CI signals, and open blockers.

The constraint respondents drew most consistently was that the system should not own the plan: “I want to use AI to help distill and gather information... the end decision and plan should be my responsibility” (P11). It should not create or modify work items without preview and explicit approval, assign work to individual developers, contact colleagues, send status messages without explicit authorization, or invent missing requirements.

### 4.2.2 Architecture studio for Requirements-To-Design

“I want AI to assist with exploring design alternatives, identifying edge cases, and helping align architecture with evolving business goals. It should act as a thoughtful collaborator, not just a generator” (P249). 27.8% of participants wanted such an interactive design partner that maintained explicit design state — goals, constraints, open questions, history of exploration space — while generating multiple, materially different architectures grounded in local context (e.g., ADRs, API/infrastructure catalogs), asking clarifying questions when missing information affected the design, and tracking why each option was introduced or discarded.

The hardest part is grounded context. Participants observed that systems relying on generic patterns were of limited usefulness: “AI would probably fall back to using the same known pattern regardless of the design particularities. That makes the designs inefficient” (P359).

---

### Table 4: Systems developers want built: Design & Planning (N=223).

![Table: Systems developers want built — Design & Planning](page7_img_table_1.png)

More concerning were hallucinations, which undermined trust: “I don’t trust the AI to design anything; it hallucinates” (P93). Participants emphasized retaining agency in making architectural decisions should remain theirs. “AI should not settle the final decision. Because this is the part that people should be accountable for” (P774). They did not want systems to produce one-shot designs without sufficient context and guidance.

#### 4.2.3 Design analyzer for trade-off and risk
20.6% wanted AI to analyze a proposed design the way a careful reviewer would: “If it can understand complex system architectures, and provide insights into gaps in your design, that would be extremely helpful” (P312). They wanted AI to reconstruct component models from docs and diagrams, check requirements and NFR coverage, surface hidden dependencies, run what-if scenarios, and turn the result into a trade-off matrix, pointing back to evidence so the developer could judge whether it was correct.

P2 emphasized, “I’d like AI to reason over the choices that I made, the impact they had, and how small changes to initial design decisions could have a significant impact on the architecture—be it complexity, performance, or cost.” Participants wanted to retain decision control: “I don’t want AI to own critical decisions or trade-offs, as these require deep domain knowledge, long-term vision, and accountability that only experienced engineers can provide” (P249). When context was incomplete, they preferred the system to identify the decision point, explain the uncertainty, and request clarification rather than generate unsupported assessments.

#### 4.2.4 Decision context and provenance graph
19.7% described wanting a system that could recover the context behind past decisions: “there can be a substantial time gap between when a stakeholder mentions an important detail and the documentation is produced and

---

reviewed, and with the volume of topics discussed and documented, it’s very easy for crucial design decisions and context to get lost or overlooked.” (P40). They expected the system to ingest code history, docs, tickets, notes, and opt-in conversations as time-stamped facts and decisions, and answer questions like “why was this done?”, “what changed after the RPO target moved?”, and “which later components depend on that decision?” by presenting a traceable decision lineage linked to original artifacts.

This was seen as more challenging than simple retrieval. The system must reason over time, track provenance, indicate when sources may be stale, and surface gaps rather than gloss over them: “I don’t want AI to give me answers without context. If I can’t tell why it’s suggesting [something], then I also can’t tell if it’s hallucinating or not” (P483). Participants wanted final decisions and judgment to remain theirs.

### 4.2.5 Full-loop design doc and diagram workspace. 15.2%
15.2% described wanting a workspace to transform rough materials into consumable documentation. “Essentially, supplement my ability to get my ideas documented in a consumable way for others. This would really help and reduce a lot of time that feels wasted to me” (P214). The envisioned system would take notes, transcripts, rough outlines, and selected code diffs and turn them into structured design documents and editable diagrams, each carrying provenance so the author can trace its source and refine what needs work.

Participants noted that first-draft generation worked adequately for well-specified inputs. “Templatization and summary from notes and meeting context into a skeleton design with high accuracy would be a major step forward” (P387). A harder problem is iterative refinement with user steering: making targeted updates to specific sections without regenerating the entire document, updating diagrams without overwriting unchanged parts, and maintaining alignment between text and visuals as they both evolve. They rejected systems that assumed missing requirements or introduced unsupported choices, and instead wanted source context exposed for verification and control.

> Key insight. Across all five systems, the core challenge was generating grounded, stateful reasoning over evolving design context. Each system’s requirements include maintaining explicit design state, tracing decisions over time, and supporting iterative refinement, while ensuring outputs remained under human control.

## 4.3 Quality and Risk Management (N=155)
155 developers answered quality and risk questions. They described a consistent gap between what automated tooling currently checks and what it would need to check to be useful: coverage at the point of authorship rather than post-merge, findings tied to the specific diff rather than the whole codebase, and risk signals calibrated to a service’s failure history rather than generic thresholds. What was notable was how firmly they held the line on accountability—no system in this category was permitted to make a judgment, approve an artifact, or attest to a result.

### 4.3.1 Change-aware test generation and quality gates. 44.5%
44.5% of quality and risk respondents wanted such a feature to help with the current systems, which, as P64 said, is: “Testing: tedious.” Writing meaningful tests for changed behavior is at a slower rate than shipping the changes, so test coverage gaps accumulate. The ask was figuring out which assertions mattered for a change, against behavior that was rarely documented, and/or where test coverage was already sparse.

They wanted AI to derive an impact map from the diff (changed functions, touched interfaces, downstream dependents), link requirements and existing coverage, generate the missing tests, run them, and publish a compact quality gate report highlighting modified behavior that remained untested. “Over the next 1–3 years, I want AI to play a major role in proactively detecting regressions, analyzing test coverage gaps, and predicting high-risk areas in code changes so we can shift from reactive firefighting to preventive quality assurance” (P59). Intent representation was what made this hard: which signals encode what a diff is supposed to do, and which of those signals actually exist in a typical development workflow? Without intent, a test generation system produces tests that pass trivially or validate the wrong behavior.

Accountability constraints were strict. “We always need a person to be accountable for verifying: ‘what testing did the AI do? Do we have a report with screenshots, proving that the AI actually did what it claims?’” (P120). The system must not decide what validation criteria should be, check in generated tests automatically, or be the arbiter of its own output: “you must not have a GenAI system to evaluate itself” (P359).

### 4.3.2 Context-aware pull request review assistant. 23.2%
23.2% of respondents wanted a first-pass analyst in the PR workflow who understood the codebase well enough to provide meaningful feedback on a diff, identify which modules and interfaces were most affected, and attach analysis findings (e.g., defects, readability, security-sensitive surfaces) with a rationale. The persistent problem participants noted was that in large pull requests, they spent most of their time reconstructing intent and tracing which interfaces were at risk before they could evaluate anything. Generic automated comments added noise and made it worse. Participants wanted the system to surface what aspects (e.g., security, maintainability) it had and had not checked: “mention in a comment that it has reviewed ‘xyz’ aspects of the change and the confidence of the review so that human reviewers can look at other aspects” (P312).

Participants placed firm limits on the system’s agency. It must not approve PRs, automatically modify code, or act as a final authority: “I don’t want AI to just act as a red-light / green-light. It should raise issues after/while humans are reviewing and still require human review” (P92). And when intent was ambiguous, it had to abort rather than guess: “If there is something that it is not capable of doing, abort with that information, rather than making some assumptions” (P350).

### 4.3.3 Pre-merge security advisor with patch suggestions.
21.9% of respondents described wanting security triage at the diff level with remediation tied to the actual code path. “I wish it could ACCURATELY make assessments about security issues and functional correctness of code” (P55). Existing tools already find the point-problems. The delay comes after the detection: developers have to determine whether the finding is real in their code context, whether the vulnerable change was reachable, and what a safe local fix looks like in their specific repository. “I wish it could ACCURATELY make

---

### Table 5: Systems developers want built: Quality & Risk (N=155).

![Table: Systems developers want built—Quality & Risk](page9_img_table_1.png)

assessments about security issues and functional correctness of code” (P55). A useful system had to tie findings to concrete artifacts—code, dependencies, configurations—and draft a plausible remediation the developer could review and accept or reject.

Accountability remains the governing constraint. Developers have to remain responsible for validating every finding: “I do not want AI to be solely responsible for quality and security; a developer needs to validate the results without leaning on it entirely” (P42).

#### 4.3.4 Compliance evidence compiler and interpreter. 14.2%

described compliance work as draining without requiring much engineering expertise: “A security review today requires a hundred-question survey, much of which is querying and fetching data through a time-consuming process.” (P210). The core activity was translation:

decode policy language into developer steps, determine which policies applied to this system, collect artifacts across dependency/supply-chain scanners and repositories, and restate the findings in auditor-readable form. “security and compliance is still a gigantic cluster [expletive], mostly because security folks think their vocab means a damn thing to us developers, and never leaving clear actionable steps to complying” (P331). Participants wanted AI to translate a selected policy set into an applicability matrix, fetch required artifacts from engineering systems, and draft policy questionnaire answers with references, timestamps, and explicit gaps already marked.

The constraint was firm: this was a workflow engine for evidence collection only. It could not declare a service compliant, auto-apply remediation changes, or handle raw customer data during evidence.

---

collection: “AI should not be allowed to handle user or customer’s data as it could lead to a breach of confidential/privacy data” (P292).

### 4.3.5 Change risk radar for proactive regression warning.
11.6% of respondents described wanting AI that used telemetry and change history to flag high-risk changes before they shipped: “Should be able to detect high-risk changes and de-risk them” (P47). The problem was that regression risk appeared as weak signals spread across rollout events, telemetry drift, and prior incident patterns, and looked harmless individually. Participants wanted AI to score recent deployments and config changes against service-specific baselines and historical failure patterns, then issue risk briefs explaining why a change looked risky, which signals were drifting, and what impact radius was most plausible. The hard questions are which signals are actually predictive, how to keep false-positive rates low enough that teams trust the alerts, and how to present risk scores in a way that supports judgment.

Respondents wanted the system to be explainable to be useful:
> “I do not think AI can be used to evaluate risk because humans cannot make sense of what the AI is doing ‘underneath the hood’ to produce its output” (P236).

The system must not make risk-acceptance decisions for high-risk changes or escalate incidents or trigger crisis communication autonomously:
> “I don’t want it making autonomous decisions about incident escalation or crisis communication without human approval” (P740).

> Key insight. Across all five systems, the core ask was moving quality signals earlier (e.g., catching defects/test gaps, security issues, regression risk) at the point where a change was still cheap to fix. In every case, the system needed to detect and propose, but could not approve, attest, or escalate.

## 4.4 Infrastructure and Operations (N=101)
101 developers answered infrastructure and operations questions. They wanted AI to absorb the toil of keeping systems running—alert triage, pipeline maintenance, support screening—while keeping production write access firmly behind human gates. “AI is not a system administrator. It does not get any permissions to do anything but read and alert.” (P476) — this constraint appeared across every system in this category.

### 4.4.1 Telemetry correlation assistant for alert tuning and incident triage.
40.6% of respondents wanted help with the orientation phase of incident response: identifying which services were affected, which recent deployments or configuration changes were plausible contributors, and how the situation compared to similar past incidents. They wanted a system to assemble a compact evidence bundle—correlated logs, neighboring component signals, recent change events, similar fault history—and surface it as a structured brief before an engineer had to ask. Beyond triage, they also wanted the system to improve alert quality over time: learning service-specific baselines from historical data to propose threshold and deduplication changes, reducing noise without increasing missed detections. The goal was to shift engineer’s effort from evidence gathering to judgment. As P261 put it, _“Automating queries in logs, making alarms smarter, reducing manual intervention by getting to root cause faster.”_

Respondents did not want production-affecting remediation or recovery actions without explicit human oversight: “Executing operations against production resources to try and resolve incidents without human oversight... I would not expect an AI agent to have enough background/historical context to make the correct decision” (P639). Autonomous rollbacks and security policy changes were also out of scope, as “these actions carry high risk and require human judgment to weigh context, trade-offs, and potential impact” (P706).

### 4.4.2 CI/CD and infrastructure-as-code blueprint builder.
33.7% described CI/CD pipeline configuration as a source of disproportionate friction: repetitive enough to template, brittle enough that a wrong assumption could take down a deployment, and organization-specific enough that public examples often taught AI the wrong thing. P214 explained, “AI could be useful in helping set up [product-name] CI/CD pipelines, since the system is notoriously poorly documented and hard to figure out. Training an AI system on it could significantly reduce developer frustration.”

Two problems were described: (1) Generating CI/CD pipeline and infrastructure definitions from repository context while respecting organization-specific policy. (2) Diagnosing CI/CD problems since it requires tracing opaque build and deployment failures through layers of configuration few engineers fully understood. They wanted a system to read the repository’s build targets and workflow files, explain what the current pipeline actually did, generate a baseline configuration for new services, and diagnose failure logs with concrete diagnostic notes.

The constraints were tight around execution. The system must not hold production write permissions, automatically deploy or approve change requests without a human intermediary: “it’s important that a human familiar with the relevant services ensures that changes proposed by AI won’t introduce issues” (P125). Generated artifacts had to be fully reproducible and inspectable.

### 4.4.3 Maintenance backlog prioritizer.
16.8% respondents wanted support for service maintenance overhead: “Handling of [service compliance monitor] alerts with AI would be absolutely huge. That would significantly reduce the engineering demand of service ownership and increase the throughput for teams whose main job isn’t just service ownership” (P500). Deprecations, security findings, runtime drift, platform notices, and cost anomalies arrived from multiple scanners without a prioritized agenda—often as duplicated alerts, without saying what to fix, why it mattered now, or who owned the missing context. They wanted a system that consolidated these signals into a maintenance agenda already annotated with the context needed to act: “What to do / Why I’m doing it (short) / How to do it, in fine detail / Why I’m doing it (long) / Who to bother if something doesn’t line up.” (P527).

Respondents did not want AI to execute patches, upgrades, or configuration changes in production automatically, hold administrative permissions, or modify security configurations without human authority. Recommendations had to be reviewable with evidence: approval workflows that made it easier to click through than to push back undermined the human review they were requiring.

### 4.4.4 Customer Support Triage Assistant.
11.9% described that customer support teams lost time twice—first deciding which category a ticket belonged to, then repeating the same telemetry

---

### Table 6: Systems developers want built: Infrastructure & Ops (N=101).

![Table 6: Systems developers want built: Infrastructure & Ops (N=101).](page11_img_1.png)

lookups and knowledge-base searches for patterns they had already handled. “If an AI agent could actually look at support request text and logs and make screening, bucketing, and triage decisions based on the content, that would be super helpful” (P92). “We got a lot of repetitive customer questions, like permission issues. I hope AI can detect patterns of our customer request triaging” (P117).

They wanted a system to organize incoming tickets, match them to known issue patterns, run only pre-approved telemetry lookups, and produce a triage card plus a customer-safe response draft for the human to review and send.

Participants emphasized that customer data, internal code, and sensitive information required strict privacy protection and least-privilege access. Human escalation had to remain easy and immediate: “As a customer, being forced to an AI is frustrating. I would prefer the AI tooling to be passive, but provide me (as the person providing customer support) prompts on suggested resolutions or ways forward” (P2).

> **Key insight.** The four systems share a common mandate: aggregate fragmented signals, interpret them into actionable context, and stop. Production-affecting actions remain behind a human gate, not as a temporary constraint, but as a design requirement that holds across every system in this category.

## 4.5 Meta-Work: Documentation, Knowledge, Collaboration (N=157)

157 developers answered the meta-work questions. Their primary ask: a need for AI to absorb the overhead surrounding engineering work to mitigate documentation drift, reduce onboarding time and communication overhead, and help with early-stage research. The distinction respondents drew consistently was between logistics, which they were willing to hand over, and judgment, learning, and voice, which they were not.

---

### Table 7: Systems developers want built: Meta-Work (N=157).

![Table 7: Systems developers want built](page12_img_table_1.png)

### 4.5.1 DocSync: continuous documentation synchronizer. 45.9%

Of participants wanted help keeping documentation from drifting from the code it described. "I think the biggest role that AI can assist in is maintaining documentation to be accurate and up-to-date. Missing, incomplete, or outdated documentation is arguably the biggest pitfall of development" (P312).

They wanted systems that monitor code changes, detect which documentation was affected, and propose precise updates grounded in the modified code, tests, and schemas. As one noted, "Unfortunately, I think right now the focus is on just generating a bunch of AI slop that nobody will ever read or maintain, which just makes all the documentation problems we have now even worse" (P456).

Constraints required humans to maintain agency: systems should not publish or merge changes automatically; all outputs remain drafts pending explicit approval. They should not fabricate details when evidence is missing, or present inferred rationale as fact—instead leaving placeholders or requesting input: "Auto-documentation of 'what' would be great. AI models aren't smart enough to completely explain the 'why's yet" (P214).

### 4.5.2 Traceable personalized developer ramp-up coach. 30.6%

Wanted help reducing the time cost of onboarding. P380 described it: "It would be helpful if AI could take a new engineer’s goals and skill level and generate a structured onboarding path, rather than leaving them to piece it together from outdated docs." They wanted a system that captured the learner’s goal, skill level, and time constraints, then composed a role-specific ramp-up path from the actual repositories, docs, ADRs, setup scripts, and examples the learner would use. It would generate a codebase map, curated reading path, and hands-on exercises with source-linked explanations, adapting as work was completed and flagging explicit human touchpoints for mentoring and team integration. As one participant noted, "AI can help a lot in onboarding new people into a team, and help in speeding up the time for them to start contributing to the project" (P781).

---

The constraint respondents drew consistently was that the system could not replace human mentorship or team integration: “Onboarding requires human involvement to feel welcomed and a part of the team.” (P281). AI could structure the logistics of onboarding, but judgment, culture, and relationship-building had to remain with people.

### 4.5.3 Stakeholder communication drafting workbench. 12.7%
12.7% wanted help with the overhead of tailoring technical updates for different audiences. “I would like AI to help with tailoring stakeholder communications to different stakeholders. Right now so much team meta-effort goes into preparing tailored communications” (P214). Participants wanted a system that extracted facts, deltas, open risks, and asks from chosen artifacts and generated drafts at the right technical depth for the specified audience and channel — without flattening important nuance. For multilingual communication, they wanted targeted language coaching that preserved their own intent rather than replacing it.

Authenticity was the constraint respondents named most: “AI should not write communications to the customer, or anyone else — its writing style is so obvious, and it makes us look lazy” (P457). The system could not send messages automatically; every output remained a draft until approved, while sensitive and relationship-critical communications (those requiring empathy, trust-building, or nuanced trade-off discussion) stayed human.

### 4.5.4 Interactive Exploration Board For Tech Discovery
Before a team commits to an architecture, there is a fuzzier phase that looks more like technical research than design review: one instinct, a few constraints, and no structured way to widen the option set or test risky assumptions quickly. P457 noted, “AI as a brainstorming tool, or a first pass of ideas, is a great way to easily expand the number of ideas being considered. Too often we just have one idea — hey, I want people’s opinions, I’ll send out a meeting request, but that ends up being a big ordeal.” 11.7% wanted a system that started from a design question with explicit constraints and evaluation criteria, generated several materially different option cards, attaching local precedent and explicit assumptions to each, scoring competing approaches against user-chosen criteria, and spinning up disposable prototype spikes or diagrams for the options worth testing.

The constraints here were about the nature of creative work. The tool had to be pull-based — never injecting unsolicited ideas into an active thinking process — and had to explicitly encourage users to challenge initial options and add their own alternatives rather than treating AI-generated outputs as definitive. P18: “AI can be OK as a sounding board for research, as long as there is human validation of what it says and the user remembers that the AI can be wrong.”

> Key insight. Across all four systems, the core need was translating existing artifacts (code, docs, tickets, communication) into the right form for different moments — keeping them aligned, personalized, and actionable as work evolves. In every case, the system was expected to draft and adapt content grounded in source evidence, while preserving human ownership over interpretation, communication, and final decisions.

## 5 Discussion

### 5.1 What Makes These Hard Is Not Generation Quality
A common intuition is that the systems described here are waiting for models to get good enough. Looking at what actually makes each system hard, that intuition does not hold. In most of these 22 challenges, the bottleneck is that the model does not have the information needed to produce output that is correct for a specific setting.

The Incremental PR Builder needs to understand this codebase’s conventions. The Telemetry Correlation Assistant needs to understand this system’s failure history. DocSync needs to know when this documentation has diverged from this code. The Project Memory system needs to know why decisions were made in this project. In each case, the bottleneck is context: the internal, access-controlled, unevenly maintained, history-laden context of a specific system in a specific organization. Pretraining on public code does not provide this. It has to be retrieved, structured, and maintained — continuously, as the organization changes.

This is a different class of research problem from scaling language models. It is closer to knowledge engineering and systems design than to training-time choices, and it does not get easier with better models alone.

### 5.2 The Constraints Describe a Division of Labor, Not a Trust Deficit
When developers say they do not want AI to approve PRs, or send messages without review, or touch production without oversight, this is sometimes read as a temporary reluctance that will fade as AI capabilities improve. The data do not support that reading. There is a harder question underneath these challenges that the data surfaces, but cannot fully answer.

Several developers in this study described wanting AI to take the boring parts of their work — the documentation, the compliance forms, the status emails, the boilerplate refactors. The vision is that removing this toil frees them for the work that actually matters: design, architecture, debugging novel problems, growing their teammates. It is a compelling picture. And for individual developers who have already cleared the toil from their plates, the picture is starting to look real.

But the organizational version is murkier. If you gave every engineer on a team three AI agents with infinite coding capacity, the bottleneck would not disappear — it would move. It would move to the things that require judgment: deciding what to build, evaluating the output, recognizing when the agent has gone wrong, and understanding a system well enough to make a good decision about it [?]. Judgment is the skill that is hard to develop, hard to scale, and hardest to preserve when the work that builds it is automated away.

Some participants in this study were explicit about this: “Intellectual offloading can result in errors that eventually no one understands” (P409). “AI should not replace tasks that allow us to become better engineers” (P16). “I can’t fully delegate the final code review to AI — my approval puts my name on it” (P117). “Deciding whether to ship something with limitations or communicate a risk to leadership requires

---

"context, experience, and intuition that AI can’t fully grasp" (P301).
"I do not want AI to handle writing all code for me. That's the part I enjoy and is the core of my work" (P110).

Each of these is a reasonable position given current AI reliability and the real consequences of errors in high-stakes settings. What these responses also do is reflect how professional accountability works. Sign-offs carry weight because they represent human judgment applied by someone who will be held responsible for the outcome. An AI that approves a PR removes a human from that chain. Developers consistently said they do not want that, regardless of how capable the AI is.

The implication is that these systems should be designed with the division of labor as a feature, not as a constraint to be negotiated away over time. Building systems that respect this division from the start reflects an understanding of what makes software engineering consequential work.

## 6 Threats to Validity

### Internal validity

This is a cross-sectional study [?]. The 22 systems we describe are ones developers wanted and did not have. If some now exist in nascent form, the catalog becomes a benchmark for evaluating how well current tools address the gaps developers identified. Further, the challenges described here are motivated by developer accounts, not by controlled experiments showing that current tools fail on these tasks. Self-selection is a plausible confound: respondents may hold stronger views about AI support than the broader population. We distributed to 8,000 developers sampled uniformly across product groups, roles, and geographies; the 14.9% response rate is consistent with prior large-scale SE surveys [?] but leaves open the possibility that non-respondents differ systematically from respondents. The alignment between our qualitative themes and the quantitative patterns in the companion study [?] provides mitigation: themes concentrated in task categories showing the largest stated-versus-actual use gaps, suggesting they are not an artifact of which developers chose to write at length.

The 22-system catalog translates open-ended survey responses into named, scoped system concepts; reasonable researchers might have drawn different boundaries from the same data. We do not claim the catalog is exhaustive or theory-neutral.

### External validity

All 860 participants are software developers at Microsoft — a large, mature organization with significant internal tooling, enterprise compliance requirements, and globally distributed teams. Several systems may be more salient in enterprise contexts than in smaller teams, startups, or open-source projects. At the same time, the systems that dominate the study — mechanical refactoring, documentation drift, debugging as evidence collection, onboarding, the demand for AI that respects accountability — reflect aspects of software work present across organizational sizes. The companion paper’s findings that task appraisals (value, identity, accountability, cognitive demands) shape AI adoption patterns were consistent across experience levels, geographies, and product groups [?], which gives reason to expect the core challenges to generalize, even if their relative prevalence differs. Replication in other contexts remains a necessary next step.

## 7 Conclusion

The catalog is grounded in a single large organization. The systems and constraints described reflect recurring problems in professional software engineering, but their relative salience and the specific constraints developers impose may differ in smaller organizations, open-source settings, or heavily regulated industries. We argue for the transferability of the design obligations, not for the universality of each system’s priority ranking.

The AI in software engineering conversation has been dominated by code generation for long enough that it risks missing most of the work. 860 developers told us where they actually want help: incident triage, documentation drift, compliance evidence, test intent inference, repo-scale refactoring, design history, onboarding — the list goes on. They also told us what they want to protect: the craft, the architecture decisions, the mentoring, the accountability that comes with signing off on things that matter.

The 22 systems described here are grounded in those accounts. All of them involve context, accountability, or trust in ways that make them harder than they look from the outside — and more important than their current absence from the literature suggests. Getting them right means building AI that makes developers better at the work worth doing, while respecting which parts of the work are worth doing precisely because they require human judgment. That distinction is harder to maintain than it sounds. Getting it wrong at scale is how you end up with a lot of throughput, and no one left who understands the system.

### Data availability

An interactive version of this challenge catalog, including the full codebook, challenge cards, and supporting quotes are available at https://aka.ms/AI-Where-It-Matters.

## References

[1] [n.d.]. Supplemental Package. https://zenodo.org/record/17224961.

[2] Christian Bird, Denae Ford, Thomas Zimmermann, Nicole Forsgren, Eirini Kalliamvakou, Travis Lowdermilk, and Idan Gazit. 2022. Taking Flight with Copilot: Early insights and opportunities of AI-powered pair-programming tools. Queue 20, 6 (2022), 35–57.

[3] Virginia Braun and Victoria Clark. 2006. Using thematic analysis in psychology. Qualitative Research in Psychology 3, 2 (2006), 77–101.

[4] Virginia Braun and Victoria Clarke. 2022. Conceptual and design thinking for thematic analysis. Qualitative Psychology 9, 1 (2022), 3.

[5] Jenna Butler, Jina Suh, Sankeerti Haniyur, and Constance Hadley. 2025. Dear Diary: A randomized controlled trial of Generative AI coding tools in the workplace. In 2025 IEEE/ACM 47th International Conference on Software Engineering: Software Engineering in Practice (ICSE-SEIP). IEEE, 319–329.

[6] Rudrajit Choudhuri, Bianca Trinkenreich, Rahul Pandita, Eirini Kalliamvakou, Igor Steinmacher, Marco Gerosa, Christopher Sanchez, and Anita Sarma. 2025. What Guides Our Choices? Modeling Developers’ Trust and Behavioral Intentions Towards GenAI. In 2025 IEEE/ACM 47th International Conference on Software Engineering (ICSE). IEEE, 1691–1703.

[7] Natasa Gisev, J Simon Bell, and Timothy F Chen. 2013. Interrater agreement and interrater reliability: key concepts, approaches, and applications. Research in Social and Administrative Pharmacy 9, 3 (2013), 330–338.

[8] Kilem L. Gwet. 2014. Handbook of inter-rater reliability: The definitive guide to measuring the extent of agreement among raters. Advanced Analytics, LLC.

[9] Brittany Johnson, Christian Bird, Denae Ford, Nicole Forsgren, and Thomas Zimmermann. 2023. Make Your Tools Sparkle with Trust: The PICSE Framework for Trust in Software Tools. In 2023 IEEE/ACM 45th International Conference on Software Engineering: Software Engineering in Practice (ICSE-SEIP). IEEE, 409–419.

[10] Mansi Khemka and Brian Houck. 2024. Toward Effective AI Support for Developers: A survey of desires and concerns. Commun. ACM 67, 11 (2024), 42–49.

[11] Sukrit Kumar, Drishti Goel, Thomas Zimmermann, Brian Houck, B. Ashok, and Chetan Bansal. 2025. Time Warp: The Gap Between Developers’ Ideal vs Actual Workweeks in an AI-Driven Era. arXiv preprint arXiv:2502.15287 (2025).

---

[12] André N. Meyer, Earl T. Barr, Christian Bird, and Thomas Zimmermann. 2019. Today was a good day: The daily life of software developers. IEEE Transactions on Software Engineering 47, 5 (2019), 863–880.

[13] Guilherme Vaz Pereira, Victoria Jackson, Rafael Prikladnicki, André van der Hoek, Luciane Fortes, Carolina Araújo, André Coelho, Lígia Chelli, and Diego Ramos. 2025. Exploring GenAI in Software Development: Insights from a Case Study in a Large Brazilian Company. In 2025 IEEE/ACM 47th International Conference on Software Engineering: Software Engineering in Practice (ICSE-SEIP). IEEE, 330–341.

[14] Daniel Russo. 2024. Navigating the complexity of generative AI adoption in software engineering. ACM Transactions on Software Engineering and Methodology (2024).