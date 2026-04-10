// 22 AI Systems Developers Want Built
// Source: "To Copilot and Beyond: 22 AI Systems Developers Want Built"
// Choudhuri, Bird, Badea, Sarma (2026)

window.systemsData = [
  // === Development (N=353) ===
  {
    id: "scoped-pr-builder",
    name: "Scoped-PR Builder for Tech-Debt Removal",
    shortName: "Scoped-PR Builder",
    category: "Development",
    prevalence: 50.1,
    respondents: 353,
    problem: "Technical debt accumulates in mature codebases because careful maintenance at scale produces no visible feature and tools that have scope overreach produce diffs nobody can review.",
    capabilities: "Accept refactoring intent with explicit scope boundaries; inspect analogous implementations to learn repo naming and structure; produce atomic diffs with a configurable size threshold; halt with diagnostics when a step fails or confidence drops.",
    constraints: "No one-shot refactoring changes that are too large to review; no new classes, files, or out-of-scope restructuring without approval; surface missing domain knowledge rather than inventing it.",
    quote: "Refactoring would be the biggest help! It's almost always tedious and well-defined tasks. Frequently, it needs more than just find-replace, though. Almost always, it is over large file and multi-file workflows.",
    quoteAuthor: "P27"
  },
  {
    id: "quality-gate",
    name: "Embedded Quality Gate for Code & Tests",
    shortName: "Proactive QA Gate",
    category: "Development",
    prevalence: 27.8,
    respondents: 353,
    problem: "Quality gates are missing during authorship because there's no real-time error detection or test coverage feedback anchored to current diffs and codebase conventions.",
    capabilities: "Compute the minimal impacted area during a save or stage; run deterministic checks first and synthesize findings into a common model; publish a concise quality summary before the PR is opened.",
    constraints: "Suggestions staged for explicit human approval, never silently applied; ask clarifying questions rather than guessing intent.",
    quote: "You can avoid many on-call fixes if you leverage AI upstream and catch bugs during development or early test environment, before they affect any users.",
    quoteAuthor: "P120"
  },
  {
    id: "root-cause-workbench",
    name: "Trace-to-Diff Root Cause Workbench",
    shortName: "Root Cause Workbench",
    category: "Development",
    prevalence: 19.5,
    respondents: 353,
    problem: "Debugging time goes mostly to evidence collection—finding the right logs, aligning traces with the regression window, reconstructing runtime context from scattered systems—before a theory can even be tested.",
    capabilities: "Standardize the trigger into a failure signature and derive a minimal data-collection plan; create a failure timeline by collecting correlated signals; generate root-cause hypotheses with causal stories and explicit confidence estimates; produce a patch and regression test.",
    constraints: "No code changes applied without explicit human review; reproduction must default to isolated sandboxed environments; uncertainty must be explicit, never hidden behind confident language.",
    quote: "Focus on 'do we agree with the Agent's assessment… and proposed fix?' and we could collectively churn through our bugs much faster.",
    quoteAuthor: "P120"
  },
  {
    id: "repo-context-graph",
    name: "Repository Context Graph for Cross-File Changes",
    shortName: "Repo Context Graph",
    category: "Development",
    prevalence: 18.4,
    respondents: 353,
    problem: "Current AI assistants lose the thread of a codebase after a few turns and produce edits that are locally plausible but globally wrong, duplicating code and breaking existing functionality.",
    capabilities: "Parse source and build metadata into a persistent code graph updated as code changes; attach rationale from PR discussions, design decisions, and linked bugs; compute an impact report for any proposed change before drafting a patch.",
    constraints: "All proposed diffs shown for explicit human review; no substantial refactoring or out-of-scope edits without interactive scoping; surface missing context instead of inventing it.",
    quote: "We want/need to do a MUCH better job of analyzing a current code base, architecture, and structure so it can understand how/where to add/extend.",
    quoteAuthor: "P208"
  },

  // === Design & Planning (N=223) ===
  {
    id: "design-to-sprint",
    name: "Design-To-Sprint Workbench",
    shortName: "Design-To-Sprint Workbench",
    category: "Design-Planning",
    prevalence: 30.5,
    respondents: 223,
    problem: "Turning an accepted design plan into a structured backlog, dependency map, and sprint sequence is repetitive work that consumes time without requiring much human judgment.",
    capabilities: "Start from the user-selected scope, marking assumptions and out-of-scope items explicitly; generate a work breakdown tied to the team's planning template; infer dependencies and estimate ranges from comparable historical tasks; draft milestone sequencing from estimates/capacity, surfacing trade-offs.",
    constraints: "All changes require explicit human approval; must not autonomously replan or direct the team's process; must not assign work to individuals automatically or contact colleagues without authorization; must not invent missing requirements.",
    quote: "I want to use AI to help distill and gather information... the end decision and plan should be my responsibility.",
    quoteAuthor: "P11"
  },
  {
    id: "architecture-studio",
    name: "Architecture Studio for Requirements-To-Design",
    shortName: "Architecture Studio",
    category: "Design-Planning",
    prevalence: 27.8,
    respondents: 223,
    problem: "Design sessions often produce alternatives without a structured comparison; teams lack a tool that maintains design state (goals, constraints, exploration space) and tracks rationale for choices.",
    capabilities: "Create a design state by retrieving local context from ADRs and API/infrastructure catalogs; generate distinct architecture candidates with explicit trade-off comparisons.",
    constraints: "Must not make or settle the final architectural decision; must not silently invent requirements, assumptions, or generic patterns; must not produce a one-shot design without gathering context and allowing user steering.",
    quote: "I want AI to assist with exploring design alternatives, identifying edge cases, and helping align architecture with evolving business goals. It should act as a thoughtful collaborator, not just a generator.",
    quoteAuthor: "P249"
  },
  {
    id: "design-analyzer",
    name: "Design Analyzer for Trade-off & Risk",
    shortName: "Design Analyzer",
    category: "Design-Planning",
    prevalence: 20.6,
    respondents: 223,
    problem: "Design reviews surface obvious issues but miss hidden dependencies, non-functional requirements gaps, and failure modes that require systematic cross-checking.",
    capabilities: "Organize the review around system components, data flows, trust boundaries, and open questions; map the design to requirements; cross-check against infrastructure catalogs to expose hidden dependencies; generate what-if scenarios and trade-offs with provenance.",
    constraints: "Must not present or settle the final design decision; must provide transparent reasoning and provenance for every critique and inflection point; never unsupported assessments.",
    quote: "I'd like AI to reason over the choices that I made, the impact they had, and how small changes to initial design decisions could have a significant impact on the architecture.",
    quoteAuthor: "P2"
  },
  {
    id: "decision-provenance",
    name: "Decision Context & Provenance Graph",
    shortName: "Decision Provenance Graph",
    category: "Design-Planning",
    prevalence: 19.7,
    respondents: 223,
    problem: "Design rationale and its provenance live in the heads of engineers who may have moved on; decisions made months ago cannot be traced, and their downstream consequences are invisible.",
    capabilities: "Standardize artifact corpus as time-stamped records with stable links and freshness metadata; extract decisions, alternatives, owners, and rationale; link parent and child decisions so upstream choices can be traced to their consequences.",
    constraints: "Must not make final decisions or own the plan; must not fabricate context—distinguish evidence from guesses and surface temporal provenance; every answer must expose its source; respect sensitive data boundaries.",
    quote: "I don't want AI to give me answers without context. If I can't tell why it's suggesting something, then I also can't tell if it's hallucinating or not.",
    quoteAuthor: "P483"
  },
  {
    id: "design-doc-workspace",
    name: "Full-Loop Design Doc & Diagram Workbench",
    shortName: "Design Doc Workbench",
    category: "Design-Planning",
    prevalence: 15.2,
    respondents: 223,
    problem: "Engineers, even with clear technical ideas, struggle to produce consumable documentation; the gap between understanding something and writing it up well consumes time without adding insight.",
    capabilities: "Let the author select which inputs shape the draft and map them to required sections; generate diagrams in both rendered and structured text form to afford in-situ editing; support targeted regeneration of sections without rewriting the whole.",
    constraints: "Must not make final design decisions or silently assume missing requirements; must not produce a one-shot unsteerable document; must expose source context for every suggestion so users can verify and control output.",
    quote: "Essentially, supplement my ability to get my ideas documented in a consumable way for others. This would really help and reduce a lot of time that feels wasted to me.",
    quoteAuthor: "P214"
  },

  // === Quality & Risk Management (N=155) ===
  {
    id: "change-aware-testing",
    name: "Change-Aware Test Generation & Quality Gates",
    shortName: "Change-Aware Test Generator",
    category: "Quality-Risk",
    prevalence: 44.5,
    respondents: 155,
    problem: "Test suites lag behind code, leaving coverage gaps as behavior changes outpace test authoring.",
    capabilities: "Ingest diffs to build an impact map of changed artifacts; recover expected behavior from requirements and tests, requesting input when intent cannot be inferred; generate repository-style tests using existing helpers; publish a quality report highlighting untested changes.",
    constraints: "Must not self-certify the correctness or completeness of its own tests and output; must not automatically commit generated tests or code; must provide auditable evidence for all activities; must ask and not infer missing context.",
    quote: "Over the next 1–3 years, I want AI to play a major role in proactively detecting regressions, analyzing test coverage gaps, and predicting high-risk areas in code changes.",
    quoteAuthor: "P59"
  },
  {
    id: "pr-review-assistant",
    name: "Context-Aware Pull Request Review Assistant",
    shortName: "PR Review Assistant",
    category: "Quality-Risk",
    prevalence: 23.2,
    respondents: 155,
    problem: "Large PRs are hard to review: intent is unclear, risk boundaries are implicit, and mechanical churn obscures meaningful changes. Generic automated comments add noise.",
    capabilities: "Ingest PRs to build a layered summary of intent, affected modules and dependencies; analyze changes for performance and maintainability using repo norms; attach findings to exact files or lines with severity and rationale.",
    constraints: "Must not replace human review or act as the final authority or pass/fail gate for PRs; must not automatically change code without explicit human review; must make uncertainty explicit and abort rather than inferring intent.",
    quote: "I don't want AI to just act as a red-light / green-light. It should raise issues after/while humans are reviewing and still require human review.",
    quoteAuthor: "P92"
  },
  {
    id: "security-advisor",
    name: "Pre-Merge Security Advisor with Patch Suggestions",
    shortName: "Security Advisor",
    category: "Quality-Risk",
    prevalence: 21.9,
    respondents: 155,
    problem: "Current tools flag issues, but vulnerability findings arrive late, lack context and actionable fixes, requiring significant effort in validation and remediation.",
    capabilities: "Triage at the diff level with remediation options tied to the relevant security-sensitive surfaces; run static, taint-style, and dependency advisory checks; generate remediation options with a conservative patch; stop and surface uncertainty when confidence is low.",
    constraints: "Must never auto-merge or auto-commit security fixes; must not become the sole authority for security decisions; must provide verifiable evidence of what was analyzed; must not expose sensitive information in outputs.",
    quote: "I wish it could ACCURATELY make assessments about security issues and functional correctness of code.",
    quoteAuthor: "P55"
  },
  {
    id: "compliance-compiler",
    name: "Compliance Evidence Compiler & Interpreter",
    shortName: "Compliance Processor",
    category: "Quality-Risk",
    prevalence: 14.2,
    respondents: 155,
    problem: "Compliance work is dominated by evidence chase and translation: decode policy language, determine applicability, hunt down artifacts across supply-chain scanners and repos.",
    capabilities: "Parse the selected policy set into required evidence types and applicability rules; collect scoping facts that determine which policies apply; harvest artifacts into an evidence ledger with provenance; stop and request human input when evidence is missing.",
    constraints: "Must not handle raw customer or user data during evidence collection; must not provide compliance/remediation attestations without explicit human approval; must not make changes to production systems.",
    quote: "Security and compliance is still a gigantic cluster... mostly because security folks think their vocab means a damn thing to us developers, and never leaving clear actionable steps to complying.",
    quoteAuthor: "P331"
  },
  {
    id: "change-risk-radar",
    name: "Change Risk Radar for Proactive Regression Warning",
    shortName: "Change Risk Radar",
    category: "Quality-Risk",
    prevalence: 11.6,
    respondents: 155,
    problem: "Regression risks hide in signals fragmented across systems, rollout events, and prior incidents. They look harmless individually; problems surface only when signals are combined.",
    capabilities: "Assign a canonical ID to each deployment or config event; learn service-specific baselines and detect low-severity deviations; correlate deviations to recent changes using timing and historical incident similarity; generate a short risk analysis brief.",
    constraints: "Must not make final ship/no-ship or risk-acceptance decisions; must not autonomously escalate incidents or trigger crisis communication; must remain read-only with respect to production environments; risk scores must be explainable and auditable.",
    quote: "Should be able to detect high-risk changes and de-risk them.",
    quoteAuthor: "P47"
  },

  // === Infrastructure & Operations (N=101) ===
  {
    id: "telemetry-assistant",
    name: "Telemetry Correlation Assistant",
    shortName: "Telemetry Assistant",
    category: "Infra-Ops",
    prevalence: 40.6,
    respondents: 101,
    problem: "Alert fatigue and incident orientation overwhelm on-call engineers; the first hour of an incident goes to assembling context that should already be assembled.",
    capabilities: "For each alert, assemble a compact evidence bundle from correlated telemetry, neighboring services, and recent changes; use historical alert data to propose threshold, deduplication, and coverage improvements; generate a structured incident brief.",
    constraints: "Read-only by default; no production-affecting actions without explicit human oversight; no autonomous emergency decisions, rollbacks, or security policy changes; exclude irreversible or data-loss-inducing actions from automated workflows.",
    quote: "Automating queries in logs, making alarms smarter, reducing manual intervention by getting to root cause faster.",
    quoteAuthor: "P261"
  },
  {
    id: "cicd-blueprint",
    name: "CI/CD & Infrastructure-as-Code Blueprint Builder",
    shortName: "CI/CD Blueprint Builder",
    category: "Infra-Ops",
    prevalence: 33.7,
    respondents: 101,
    problem: "Pipeline definitions are hard to author and harder to debug; engineers waste hours on configuration that is poorly documented and produces opaque errors.",
    capabilities: "Parse the repository into a delivery profile identifying build, test, packaging, and deployment targets; construct a topology map of CI/CD stages, jobs, gates, and dependencies; generate CI/CD skeletons compliant with project and organization templates.",
    constraints: "Read-only against infrastructure; no auto-deploy, auto-approve, or live write permissions; all changes output as reviewable artifacts, not execution; generated artifacts must be reproducible and fully inspectable.",
    quote: "AI could be useful in helping set up CI/CD pipelines, since the system is notoriously poorly documented and hard to figure out.",
    quoteAuthor: "P214"
  },
  {
    id: "maintenance-prioritizer",
    name: "Maintenance Backlog Prioritizer",
    shortName: "Maintenance Prioritizer",
    category: "Infra-Ops",
    prevalence: 16.8,
    respondents: 101,
    problem: "Deprecations, security findings, and runtime drift accumulate across services without a prioritized, actionable agenda; engineers don't know what to fix first or why it matters.",
    capabilities: "Map each service to its environments, owners, and deployed artifacts; normalize upkeep signals into a common remediation queue; deduplicate repeated alerts by collapsing them into root remediation actions; prioritize using severity, impact radius, and estimated effort.",
    constraints: "Read-only with no default administrative permissions; no autonomous patches, upgrades, or security config changes in production.",
    quote: "Handling of service compliance alerts with AI would be absolutely huge. That would significantly reduce the engineering demand of service ownership.",
    quoteAuthor: "P500"
  },
  {
    id: "support-triage",
    name: "Customer Support Triage Assistant",
    shortName: "Support Triage",
    category: "Infra-Ops",
    prevalence: 11.9,
    respondents: 101,
    problem: "Repetitive tickets drain time because each case requires telemetry collection and repository searches before teams can confirm whether it's an already existing problem or a fixed issue.",
    capabilities: "Organize the request, redact sensitive fields, and attach relevant privacy policies before retrieval begins; classify the ticket by product area, issue type, and severity with rationale; retrieve similar resolved cases; draft a triage card and a customer-safe reply for human review.",
    constraints: "Must not send messages autonomously or position AI as the primary customer interface; human escalation must remain easy and immediate; must not expose customer data or internal/production code or have write-access to these artifacts.",
    quote: "If an AI agent could actually look at support request text and logs and make screening, bucketing, and triage decisions based on the content, that would be super helpful.",
    quoteAuthor: "P92"
  },

  // === Meta-Work (N=157) ===
  {
    id: "docsync",
    name: "DocSync: Continuous Documentation Synchronizer",
    shortName: "DocSync",
    category: "Meta-work",
    prevalence: 45.9,
    respondents: 157,
    problem: "Documentation drifts unnoticed from the code it describes; engineers rarely update docs when they ship changes, and the gap compounds until documentation is actively misleading.",
    capabilities: "Inventory the repository's documentation surfaces and conventions; identify docs susceptible to drift based on history; compute an impact map linking changed interfaces and behaviors to docs; generate patches for affected sections rather than rewriting documents.",
    constraints: "All outputs remain drafts until explicitly approved; prefer minimal targeted patches over bulk generation; must not fabricate details or present inferred rationale as fact; leave placeholders or request input when source is absent.",
    quote: "I think the biggest role that AI can assist in is maintaining documentation to be accurate and up-to-date. Missing, incomplete, or outdated documentation is arguably the biggest pitfall of development.",
    quoteAuthor: "P312"
  },
  {
    id: "ramp-up-coach",
    name: "Contextualized Developer Ramp-Up Coach",
    shortName: "Ramp-Up Coach",
    category: "Meta-work",
    prevalence: 30.6,
    respondents: 157,
    problem: "Onboarding engineers spend weeks orienting to a new codebase with documentation that is generic, outdated, or inaccessible; the time cost falls on both the new engineer and the team members they interrupt.",
    capabilities: "Capture the learner's goal, skill level, and constraints; generate an onboarding playbook with explicit human touchpoints for mentoring; produce a codebase map and curated reading path in the order that matters for the learner's goal; create hands-on exercises tied to the actual target repo.",
    constraints: "Must not replace human-led mentoring or team integration—technical ramp-up is its scope; guidance must carry citations and surface uncertainty; must acknowledge missing context rather than inferring; generated materials require human review.",
    quote: "It would be helpful if AI could take a new engineer's goals and skill level and generate a structured onboarding path, rather than leaving them to piece it together from outdated docs.",
    quoteAuthor: "P380"
  },
  {
    id: "stakeholder-drafts",
    name: "Stakeholder Communication Draft Workbench",
    shortName: "Stakeholder Draft Workbench",
    category: "Meta-work",
    prevalence: 12.7,
    respondents: 157,
    problem: "Tailoring technical updates for different audiences is repetitive work; engineers with clear information still spend significant time on phrasing, audience adaptation, and register.",
    capabilities: "Start from a drafting action where the user specifies the audience, intent, technical fluency, language, and formality expectations; extract facts, deltas, open risks, and requirements from the chosen artifacts; generate drafts at the right technical depth without flattening important nuance.",
    constraints: "Must never send messages or share generated communications automatically; must not handle sensitive or relationship-critical communications; must enforce strong privacy boundaries, especially when external recipients are involved.",
    quote: "AI should not write communications to the customer, or anyone else—its writing style is so obvious, and it makes us look lazy.",
    quoteAuthor: "P457"
  },
  {
    id: "exploration-board",
    name: "Interactive Exploration Board for Early Tech Discovery",
    shortName: "Tech Exploration Board",
    category: "Meta-work",
    prevalence: 11.7,
    respondents: 157,
    problem: "Before architecture begins, there is a fuzzier phase that does not yet look like design: someone has a problem, an instinct, and maybe one favored approach. Current tools arrive too late, after the option space has already narrowed.",
    capabilities: "Start from a research question and capture constraints, assumptions, and evaluation criteria; generate multiple option cards with context and explicit assumptions; score competing approaches against user-chosen criteria; let the user reweight criteria, add candidates, or challenge the current set.",
    constraints: "Must not make design decisions or inject unsolicited ideas into an active thinking process; must not treat the first option set as exhaustive; all claims must carry explicit uncertainty markers and require human validation before acting on them.",
    quote: "AI as a brainstorming tool, or a first pass of ideas, is a great way to easily expand the number of ideas being considered.",
    quoteAuthor: "P457"
  }
];

// Category metadata shared across both papers
window.categoryMeta = {
  'Development': { color: '#2563EB', light: '#DBEAFE', label: 'Development', respondents: 353, icon: '⚙' },
  'Quality-Risk': { color: '#059669', light: '#D1FAE5', label: 'Quality & Risk', respondents: 155, icon: '🛡' },
  'Design-Planning': { color: '#D97706', light: '#FEF3C7', label: 'Design & Planning', respondents: 223, icon: '△' },
  'Infra-Ops': { color: '#7C3AED', light: '#EDE9FE', label: 'Infra & Operations', respondents: 101, icon: '◇' },
  'Meta-work': { color: '#DC2626', light: '#FEE2E2', label: 'Meta-Work', respondents: 157, icon: '◎' }
};
