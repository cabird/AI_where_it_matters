# Qualitative Analysis for Project Planning & Management
# Category: Design Planning

This report is an AI-generated synthesis of manually coded survey responses from software developers about AI usage in Project Planning & Management (Design Planning). I preserved the research team's thematic structure (codes, descriptions, and participant quotes) and synthesized the data into coherent narratives. My approach grouped related codes into readable themes, highlighted tensions and boundaries raised by participants, and derived implications and design guidance for AI tools in this domain.

---

## Executive Summary

- Developers want AI to automate repetitive planning tasks (task creation, board management, documentation) and synthesize dispersed knowledge so humans can focus on design and strategy.
- Developers do not want AI to make final strategic, empathetic, or customer-facing decisions; human accountability and intuition must be preserved.
- Critical design implications: prioritize integration with planning tools, provenance/traceability, explainability (rationale and trade-offs), and safe human-in-the-loop workflows.
- Guardrails required: prevent autonomous strategic actions, ensure reversibility and audit trails, and protect sensitive data and people-context decisions.
- Key tension: strong desire for automation of routine work versus deep skepticism about AI accuracy, hallucinations, and loss of human agency.
- Recommendation: build incremental, tightly-scoped AI features (synthesis, drafting, suggestion, automation of explicit operations) with transparent controls and clear escalation paths to humans.

---


## 1) Core Themes

### A. Where AI is Wanted

#### Theme: Context-aware planning, prioritization & forecasting

Participants want AI that understands project context—impact, dependencies, resources—and uses that grounding to sequence work, track burndown, and surface risks so human strategy remains central. The coded description emphasizes scheduling/ sequencing work and forecasting risks; participants envision AI freeing them to focus on creative and strategic thinking while keeping plans adaptive and grounded. In practice this looks like AI that can weigh dependencies and team capacity to propose realistic priorities and timelines, not replace human judgment: “I’d love to see AI … intelligently prioritizing tasks based on impact and dependencies… freeing time for creative and strategic thinking… while plans stay grounded and adaptive.” (Participant 403). Boundaries include the need for reliable grounding and human oversight when stakes are high.

**Representative quotes**:
- *"I’d love to see AI … intelligently prioritizing tasks based on impact and dependencies… freeing time for creative and strategic thinking…"* (Participant 403)
- *"Take a more active role… helping set deadlines for work items based on the context of the overall project."* (Participant 28)
- *"Project planning based on the available resources… assign tasks… optimal time and least burnout."* (Participant 299)

---

#### Theme: Work-item & coordination automation (agent PM)

This theme describes desire for an “agent PM” that performs repetitive coordination: create/update/move/assign tasks and bugs, tidy boards, chase status updates, schedule meetings, and produce status reports. Participants framed this as reducing coordination toil so teams can focus on engineering and design work. They expect practical actions—moving an old task into the current iteration, updating descriptions, assigning owners—or automating routine meeting notes and summaries: “Manage tasks, fetch/request updates from task owners, schedule meetings, and generate status reports… the north star.” (Participant 70). Conditions include correct access to tooling (e.g., ADO) and safeguards so AI actions remain reversible and transparent.

**Representative quotes**:
- *"Control my ADO workitems, tasks and bugs."* (Participant 93)
- *"Find that old task… move it to the current iteration, update the description… assign it to Sam… Done."* (Participant 205)
- *"Manage tasks and kanban boards, which is usually a chore nobody does."* (Participant 173)

---

#### Theme: Information synthesis & retrieval

Participants want AI to aggregate sprawling communications (emails, Teams history) into living, queryable summaries and to surface relevant historical context on demand. The coded description stresses making scattered historical data accessible so humans can focus on strategy and decision-making. This use is often framed as time-saving and trust-enhancing—reducing the manual effort of digging through archives to recall rationale or prior decisions: “Thousands of emails and Teams conversations… impossible to aggregate… expect this to be completely automated by AI.” (Participant 183). Users want accuracy and clear provenance for synthesized answers.

**Representative quotes**:
- *"Thousands of emails and Teams conversations… impossible to aggregate… expect this to be completely automated by AI."* (Participant 183)
- *"Surface relevant historical context… so I can focus more on strategy and decision-making."* (Participant 172)
- *"If AI can bring the massive knowledge for me when we do the design & planning. it will be very helpful."* (Participant 327)

---

#### Theme: Scoping, sizing & decomposition

Here AI is imagined as a tool to translate specs and designs into hierarchical work items, propose alternatives, and assist with effort sizing while leaving high-level design direction to humans. The coded description highlights decomposition into actionable tasks. Developers want help breaking epics into stories and identifying work chunks, with warnings that humans should retain control over design-led decisions: “Automatic ADO task creation (hierarchical) to help me split my goal into small tasks.” (Participant 72). They also expect AI to propose alternative architectures and support sizing discussions without unilaterally making decisions.

**Representative quotes**:
- *"Help with creating alternative architectures. Help with work/task sizing."* (Participant 148)
- *"Having AI take a spec or design and generate work items might be useful. Otherwise… should be driven by humans."* (Participant 149)
- *"Automatic ADO task creation (hierarchical) to help me split my goal into small tasks."* (Participant 72)

---

#### Theme: AI as intermediary between teams

Participants see AI as a bridge between product and engineering—preparing alignment materials or acting as a collaborative facilitator that identifies blockers and inter-dependencies across teams. The description and quotes emphasize AI surfacing unknowns and continuously refining plans across organizational boundaries. This intermediary role reduces missed dependencies and improves handoffs but requires accurate cross-team context and sensitivity to organizational nuances: “Enabling product folks to align better with engineering, either as a prep step, or a collaborative function between them two.” (Participant 3). AI should surface the interdependencies for human negotiation rather than enforce solutions.

**Representative quotes**:
- *"Enabling product folks to align better with engineering, either as a prep step, or a collaborative function between then two."* (Participant 3)
- *"Help identify blockers, unknowns, inter-dependencies across teams/orgs and thereby help in a continuous refinement of the design and planning of features."* (Participant 182)
- *"Help identify blockers and inter-dependencies across teams."* (Participant 182)

---

#### Theme: Generate plans

Developers want AI to convert designs and architecture into full project plans with timelines, milestones, and agile tickets. The code indicates interest in end-to-end planning that remains realistic and actionable—turning design artifacts into a sequence of work that can be tracked: “Full project planning with timelines & agile tickets” (Participant 7) and “Being able to accurately turn a design + architecture into a project plan, with realistic timelines, and milestones.” (Participant 27). Users expect these plans to be editable and human-reviewed; they want the AI to suggest rather than enforce.

**Representative quotes**:
- *"Full project planning with timelines & agile tickets"* (Participant 7)
- *"Plan and keep track of schedules"* (Participant 14)
- *"Being able to accurately turn a design + architecture into a project plan, with realistic timelines, and milestones."* (Participant 27)

---

#### Theme: Analyze design

Participants asked for AI help in scenario simulation, effort estimation, design validation, and early risk detection—modeling outcomes and surfacing issues before they escalate. The coded description implies AI-driven predictive analytics and design review automation: “I’d like AI to play a key role in scenario simulation, effort estimation, and design validation during the planning phase.” (Participant 9). Developers want AI to report risks, suggest mitigations, and provide visual aids; again, outputs should be accompanied by rationale and uncertainty estimates.

**Representative quotes**:
- *"AI to play a key role in scenario simulation, effort estimation, and design validation during the planning phase."* (Participant 9)
- *"Be able to give a reasonable evaluation of the design and provide better suggestions for improvement."* (Participant 314)
- *"spotting issues before they escalate, especially in areas like audit readiness, regulatory compliance, and supplier quality monitoring."* (Participant 331)

---

#### Theme: onboarding

This theme highlights AI’s potential to accelerate ramp-up for engineers joining new codebases or projects. The description points to reducing the daunting time needed to understand unfamiliar systems; AI could summarize code structure, dependencies, and design rationale to shorten onboarding. A participant noted that analyzing new codebases would be “most useful” because it currently requires significant time and discipline (Participant 16). AI should deliver clear, verifiable summaries and pointers to relevant artifacts.

**Representative quotes**:
- *"I feel it will be most useful in analyzing new codebases that an engineer is jumping into."* (Participant 16)
- *"Bring the massive knowledge for me when we do the design & planning."* (Participant 327)
- *"Be able to give a reasonable evaluation of the design and provide better suggestions for improvement."* (Participant 314)

---

#### Theme: Knowledge synthesis

Participants want AI to collate and integrate information across internal and external sources to inform design and proofs-of-concept. The coded description centers on cross-platform aggregation for design decisions and POCs. This overlaps with Information synthesis & retrieval but emphasizes integrating multiple sources (docs, repositories, external references) to form a coherent knowledge base for planning: “Assist in collating information across external and internal sources.” (Participant 175). They expect AI to surface relevant prior decisions and reusable artifacts.

**Representative quotes**:
- *"integrating across platforms to gather information for design and POC"* (Participant 25)
- *"Assist in collating information across external and internal sources."* (Participant 175)
- *"This same feature would allow me to automate my own connect or provide feedback for folks I work with."* (Participant 183)

---

#### Theme: Manage work items

This code overlaps with Work-item automation but emphasizes day-to-day task lifecycle: setting deadlines, creating/updating ADO items, monitoring burndown, and assigning based on resource context. Participants want AIs that can find and modify existing tasks and manage the bookkeeping of iterations so engineers aren’t stuck on administrative work: “I most dislike managing tasks in ADO… I'd love something similar for finding old tasks in ADO.” (Participant 205). The expectation is for AI to be able to take explicit instructions and execute predictable task-management operations while surfacing decisions for human approval.

**Representative quotes**:
- *"I would like to see AI take a more active role in helping with project management - things like helping set deadlines for work items based on the context of the overall project."* (Participant 28)
- *"I’d like for AI to control my ADO workitems, tasks and bugs."* (Participant 93)
- *"Make the boring parts like scheduling meetings, taking notes… writing summary reports in a structured way."* (Participant 199)

---

#### Theme: Generate metrics

Participants expect AI to identify opportunities through metrics and help set instrumentation and KPIs before implementation to create a positive feedback loop. The description underscores metric-driven discovery and continuous improvement. One participant emphasized the AI role in setting metrics to detect opportunities and validate impact: “The role who can identify opportunities through metrics and setup metrics before implementation, forming a positive feedback loop.” (Participant 46). Accuracy and alignment to business goals are essential.

**Representative quotes**:
- *"The role who can identify opportunities through metrics and setup metrics before implementation…"* (Participant 46)
- *"Generate documentation that's correct would be phenomenally helpful."* (Participant 220)
- *"AI to help automate requirements via surveys and help with scheduling tasks."* (Participant 153)

---

#### Theme: Suggest designs

Developers want AI to propose architectural patterns, analyze historical bottlenecks, and generate risk-aware design proposals that accelerate planning without replacing human judgement. The coded description focuses on exploration and generation of design suggestions aligned with goals and steerable by inputs: “Over the next 1-3 years, I want AI to assist in exploring optimal architectural patterns… generating risk aware design proposals.” (Participant 57). Participants expect iterative dialogs with AI and tooling that can spin up environments or starter code to validate ideas.

**Representative quotes**:
- *"Assist in exploring optimal architectural patterns, analyzing historical system bottlenecks, and generating risk aware design proposals."* (Participant 57)
- *"being able to describe needs, then iterate with AI on output designs, all the way to environments being setup and repos with starter src generated."* (Participant 109)
- *"suggestions for design and planning which are aligned with my goal and steerable according to my instructions."* (Participant 253)

---

#### Theme: Latent knowledge

This theme captures expectations that AI can surface latent organizational knowledge—internal context, past decisions, and unwritten practices—and use that to propose designs and tasks. The description points to leveraging institutional memory so planning aligns with historical constraints. Participants want AI to draft documentation and test scenarios while adapting to team needs: “Help provide a design based on requirements looking at the internal context and also help create tasks in ADO.” (Participant 65). Trust in the source of that latent knowledge is a recurring condition.

**Representative quotes**:
- *"Help provide a design based on requirements looking at the internal context and also help create tasks jn ADO."* (Participant 65)
- *"I’d like AI to play a bigger role in automating repetitive planning tasks…and surfacing relevant historical context."* (Participant 172)
- *"If AI can bring the massive knowledge for me when we do the design & planning. it will be very helpful."* (Participant 327)

---

#### Theme: Generate work items

Closely related to decomposition and manage work items, this theme specifically highlights generating discrete implementation tasks from high-level features and planning those tasks—automatically creating documents, tickets, and smaller tasks. Participants want AI to reduce trivial manual work and create hierarchical tasks to aid execution: “It would be helpful if AI could take high level features and break them down into discrete implementation tasks, and then plan those tasks out.” (Participant 365). They want this to be configurable and reviewable.

**Representative quotes**:
- *"Help provide a design based on requirements looking at the internal context and also help create tasks jn ADO."* (Participant 65)
- *"I want AI to cover trivial and repetitive work… I would also appreciate automatic ADO task creation (hierarchical)."* (Participant 72)
- *"It would be helpful if AI could take high level features and break them down into discrete implementation tasks."* (Participant 365)

---

#### Theme: Toil

Multiple participants emphasized that AI should eliminate mundane, repetitive planning tasks—documentation, scheduling, notes, and other administrative toil—so humans can focus on high-value activities. The coded description centers on automation of low-value repetitive chores: “It should automate the project planning part which is kind of mundane task.” (Participant 294). People expect reductions in time spent on meeting notes, scheduling, and repetitive documentation.

**Representative quotes**:
- *"I want AI to cover trivial and repetitive work (creating documents, slides, ....) so that I can focus on what really matters."* (Participant 72)
- *"If it could automatically keep track of all the mundane stuff like notes and scheduling so we can write less."* (Participant 186)
- *"I want it to make the boring parts like scheduling meetings, taking notes ... writing summary reports in a structured way."* (Participant 199)

---

#### Theme: Humans handle customers, AI handles implementation

Participants envision a division of labor where people focus on customer-facing interactions, requirements gathering, and empathy-driven decisions while AI handles technical implementation details like documentation, test generation, or task execution. The code captures the belief that AI’s technical assistance frees humans for collaboration and innovation: “AI assists with tasks that require a lot of detailed technical knowledge thus giving the human more time to interact with customers and collaborators.” (Participant 75). The boundary is clear: customer relationships and high-empathy activities remain human-led.

**Representative quotes**:
- *"AI assists with tasks that require a lot of detailed technical knowledge thus giving the human more time to interact with customers and collaborators."* (Participant 75)
- *"Having AI take a spec or design and generate work items might be useful."* (Participant 149)
- *"AI to help automate requirements via surveys and help with scheduling tasks."* (Participant 153)

---

#### Theme: Hallucinations

Even among proponents, participants flagged hallucinations as a primary concern. The code and quotes reflect a need for reducing incorrect or fabricated outputs before trusting AI in planning workflows: “Reducing hallucinations. That's my only complaint with AI today, but it's still a huge problem.” (Participant 98). Participants expect robust grounding, provenance, and mechanisms to detect or flag likely hallucinations.

**Representative quotes**:
- *"Reducing hallucinations. That's my only complaint with AI today, but it's still a huge problem."* (Participant 98)
- *"It should also act as a reliable collaborator that adapts to diverse team needs and evolving project constraints."* (Participant 172)
- *"Be able to give a reasonable evaluation of the design and provide better suggestions for improvement."* (Participant 314)

---

#### Theme: AI as design partner

Developers want AI to be an active, conversational collaborator in design—iterating on outputs, automating documentation of discussions, and even creating starter code or environments. The code frames AI as a copilot that participates in design conversations and documents outcomes: “being able to describe needs, then iterate with AI on output designs, all the way to environments being setup and repos with starter src generated.” (Participant 109). Participants expect the AI to preserve rationale and traceability across iterations.

**Representative quotes**:
- *"being able to describe needs, then iterate with AI on output designs, all the way to environments being setup and repos with starter src generated."* (Participant 109)
- *"A voice based design copilot agent which can actively take part in constructive design conversations while also automating the documentation."* (Participant 318)
- *"Continue to provide ideas and best practices when designing and planning a project."* (Participant 208)

---

#### Theme: Explore alternatives

Participants want AI to explicitly enumerate pros/cons, edge cases, and trade-offs during design discussions so teams can avoid circular debates and missed considerations. The code emphasizes tracking logic, reusing prior reasoning, and clarifying trade-offs: “I’d love for AI to help me during design discussions by laying out the pros and cons of each option we’re considering.” (Participant 301). The expectation is a deliberative AI that augments human thinking rather than pushing a single “best” solution.

**Representative quotes**:
- *"Help with creating alternative architectures. Help with work/task sizing."* (Participant 148)
- *"laying out the pros and cons of each option we’re considering… highlight trade-offs."* (Participant 301)
- *"I want AI to assist with exploring design alternatives, identifying edge cases."* (Participant 241)

---

#### Theme: Generate requirements

This theme describes AI assisting in generating user stories, features, and tasks after vetting requirements—automating surveys and initial requirements analysis. The code suggests AI can draft and structure requirements to accelerate planning: “AI to help automate requirements via surveys and help with scheduling tasks.” (Participant 153) and “generate my features, user stories, and tasks after fully vetting the requirements provided by the end user.” (Participant 154). Participants expect human validation of these generated artifacts.

**Representative quotes**:
- *"AI to help automate requirements via surveys and help with scheduling tasks."* (Participant 153)
- *"I want AI to be able to generate my features, user stories, and tasks after fully vetting the requirements provided by the end user."* (Participant 154)
- *"putting goals into it and outputting tasks, stories, etc."* (Participant 188)

---

#### Theme: Documentation

Participants repeatedly asked for AI to write accurate, structured documentation and progress reports—automating the mundane but high-value work of capturing decisions and clarifying ambiguities. The code highlights document generation across work streams and in-meeting documentation: “writing documents and progress reports” (Participant 164) and “Generating documentation that's correct would be phenomenally helpful.” (Participant 220). They expect correctness, links to source artifacts, and versioning.

**Representative quotes**:
- *"writing documents and progress reports"* (Participant 164)
- *"Generating documentation that's correct would be phenomenally helpful."* (Participant 220)
- *"A voice based design copilot agent… automating the documentation of the same."* (Participant 318)

---

#### Theme: Recommend reuse

Participants want AI to recommend reuse of prior artifacts—code, designs, decisions—by surfacing relevant historical context from communications and repositories. The coded description ties back to synthesis: extracting past knowledge to reduce duplicated work. For instance, participants imagine AI that can point to prior conversations or artifacts relevant to current planning: “This same feature would allow me to automate my own connect or provide feedback for folks I work with.” (Participant 183). Reuse recommendations need clear provenance.

**Representative quotes**:
- *"Communications I have thousands of emails and teams conversations that have information… This is currently impossible to aggregate into a summary and reference."* (Participant 183)
- *"If AI can bring the massive knowledge for me when we do the design & planning. it will be very helpful."* (Participant 327)
- *"Help identify blockers, unknowns, inter-dependencies across teams/orgs."* (Participant 182)

---

#### Theme: Generate requirements, work items

This combined code reflects a desire for AI that accepts goals and outputs structured artefacts—requirements, tasks, and stories—ready for planning systems. The description explicitly targets turning high-level goals into executable items: “I would like the AI to be more functional in terms of putting goals into it and outputting tasks, stories, etc.” (Participant 188). Users still expect to review and adapt the AI’s outputs.

**Representative quotes**:
- *"I would like the AI to be more functional in terms of putting goals into it and outputting tasks, stories, etc."* (Participant 188)
- *"Help provide a design based on requirements looking at the internal context and also help create tasks jn ADO."* (Participant 65)
- *"It would be helpful if AI could take high level features and break them down into discrete implementation tasks."* (Participant 365)

---

#### Theme: Thought partner

Developers want AI to act as a reflective collaborator—bringing best practices, surfacing edge cases, and aligning architecture with business goals in an iterative conversation. The code frames AI as an augmentation to human thinking, not a replacement: “I want AI to assist with exploring design alternatives, identifying edge cases, and helping align architecture with evolving business goals.” (Participant 241). This requires explainability and traceable rationale.

**Representative quotes**:
- *"Continue to provide ideas and best practices when designing and planning a project."* (Participant 208)
- *"I want AI to assist with exploring design alternatives, identifying edge cases."* (Participant 241)
- *"I want AI to help most in streamlining decision-making by providing rationale and trade-offs."* (Participant 267)

---

#### Theme: Rationale

A frequent request is that AI provide clear rationale and trade-offs for its suggestions so humans can make faster, more reliable decisions. The code highlights the need for explanation to reduce validation overhead: “I want AI to help most in streamlining decision-making by providing rationale and trade-offs for design choices.” (Participant 267). Participants want explicit inflection points and reasoning chains that they can interrogate.

**Representative quotes**:
- *"I want AI to help most in streamlining decision-making by providing rationale and trade-offs for design choices."* (Participant 267)
- *"Explain inflection points and let users choose… I cannot trust AI to make important decisions."* (Participant 66)
- *"AI should always suggest things and let users make decisions."* (Participant 352)

---

#### Theme: No AI

A minority expressed total rejection of AI for planning, believing current systems are too immature or error-prone to be useful for these unstructured tasks. The code captures skepticism and lack of trust: “If AI continues to look anything like what it looks like right now, none of these tasks are sufficiently structured for AI to be able to do.” (Participant 357). This viewpoint sets an important lower bound: until hallucinations and grounding improve, some users will refuse to hand planning responsibilities to AI.

**Representative quotes**:
- *"If AI continues to look anything like what it looks like right now, none of these tasks are sufficiently structured for AI to be able to do."* (Participant 357)
- *"It has demonstrated absolutely no promise of being able to do these things right now."* (Participant 357)
- *"Results are too inaccurate and untrustworthy, or it doesn’t have access to the right grounding data."* (Participant 53)

---

#### Theme: Generate design

Participants expect AI to help create skeleton designs and templatize notes and meeting context into accurate design beginnings that incorporate security/privacy defaults. The code stresses high-accuracy skeletons that are easy to refine: “templatization and summary from notes and meeting context into a skeleton design with high accuracy would be a major step forward.” (Participant 372). They want designs that are secure-by-default and annotated so humans can iterate quickly.

**Representative quotes**:
- *"templatization and summary from notes and meeting context into a skeleton design with high accuracy would be a major step forward."* (Participant 372)
- *"Intuitive application of security and privacy standards in this phase would be ideal."* (Participant 372)
- *"Suggest designs aligned with my goal and steerable according to my instructions."* (Participant 253)

---

#### Theme: Analyze designs

This mirror of earlier analysis themes reiterates desire for AI to automate design reviews, forecast project risks, and prioritize work based on impact and dependencies—freeing humans for higher-level creative work. The code underscores real-time risk detection and predictive analytics: “I’d love to see AI play a bigger role in automating design reviews, forecasting project risks, and intelligently prioritizing tasks based on impact and dependencies.” (Participant 403). Participants want actionable, explainable alerts about risks and trade-offs.

**Representative quotes**:
- *"Play a bigger role in automating design reviews, forecasting project risks, and intelligently prioritizing tasks based on impact and dependencies."* (Participant 403)
- *"Spotting issues before they escalate, especially in areas like audit readiness, regulatory compliance."* (Participant 331)
- *"Creating templates or providing insights into possible roadblocks and solutions."* (Participant 379)

---

### B. Where AI is Not Wanted

#### Theme: Human judgment & accountability for strategic/ambiguous decisions

Participants uniformly insisted that final calls on strategy, prioritization, trade-offs, and high-stakes or ambiguous choices remain human responsibilities. The code highlights that AI can suggest but should not decide: “The end decision and plan should be my responsibility.” (Participant 10). Concerns include AI’s inability to fully capture taste, nuanced stakeholder meaning, or long-term business impacts; participants want AI to explain inflection points and let humans make the final selection.

**Representative quotes**:
- *"I don't want AI to handle ‘interpretation’ … avoid making decisions of ‘taste’."* (Participant 3)
- *"The end decision and plan should be my responsibility."* (Participant 10)
- *"AI shouldn’t ‘handle’ anything."* (Participant 352)

---

#### Theme: No AI for empathy, vision & social coordination

The coded description emphasizes that creative vision, stakeholder alignment, and sensing team dynamics require human empathy and interpersonal nuance that AI cannot replicate. Participants want humans to lead vision-setting and cross-team coordination: “I wouldn’t want AI to handle creative vision-setting or stakeholder alignment… human empathy and strategic intuition.” (Participant 9). They also worry AI could worsen misalignment if it lacks social sensitivity.

**Representative quotes**:
- *"I wouldn’t want AI to handle creative vision-setting or stakeholder alignment… human empathy and strategic intuition."* (Participant 9)
- *"Coordination of projects between different teams."* (Participant 51)
- *"Deciding why an architecture feels right or sensing when a teammate is overwhelmed need human empathy and experience."* (Participant 301)

---

#### Theme: Capability & context limits undermine trust in AI-PM

Many participants flagged current AI limitations—hallucinations, weak grounding, brittleness, and high effort to fully explain complex problems—as blockers to trusting AI as a project manager. The description notes that AI should identify missing details and escalate instead of producing unsupported plans. Participants emphasized the cost of mistakes: “It makes an incredible amount of mistakes… the cost of one mistake can far outweigh any value.” (Participant 357). They expect clear provenance, error detection, and human escalation paths.

**Representative quotes**:
- *"Results are too inaccurate and untrustworthy, or it doesn’t have access to the right grounding data."* (Participant 53)
- *"Reducing hallucinations… still a huge problem."* (Participant 98)
- *"Proposing designs or plans without specific details… should identify missing details and escalate."* (Participant 182)

---

#### Theme: Toil

Even when participants want AI to remove toil, some point to lack of integration with existing tools as a barrier—AI that can't connect to planning systems remains unusable. The coded description highlights integration gaps that reduce adoption: “lack of integration of AI with task/project planning & management tools means i dont get to use it as much as i would like to.” (Participant 2). Participants want seamless toolchain integration for AI to meaningfully reduce toil.

**Representative quotes**:
- *"lack of integration of AI with task/project planning & managemnet tools means i dont get to use it as much as i would like to."* (Participant 2)
- *"It should automate the project planning part which is kind of mundane task."* (Participant 294)
- *"Make the boring parts like scheduling meetings, taking notes… writing summary reports in a structured way."* (Participant 199)

---

#### Theme: Humans handle customers

Participants were explicit that requirements gathering and customer interpretation are human domains—AI should not substitute for interviewing, empathizing, or interpreting nuanced stakeholder signals. The code emphasizes that customer-facing responsibilities are best handled by people: “I don't want AI to handle 'interpretation' of what we as humans think is more important when building a product.” (Participant 3). AI can support but not replace these functions.

**Representative quotes**:
- *"I don't want AI to handle 'interpretation' of what we as humans think is more important when building a product."* (Participant 3)
- *"Requirements Gathering should mostly be done by humans."* (Participant 330)
- *"I don’t want AI to handle final decision-making or interpret nuanced stakeholder feedback."* (Participant 172)

---

#### Theme: Retain agency

Participants want to retain human agency over team operations and planning; AI should assist without making owners feel overridden. The code stresses that teams should not feel the AI is operating their Agile processes or dictating actions: “I don't want AI to 'operate' my Agile team… I like the feeling of agency when driving my work.” (Participant 39). Transparency, reversibility, and clear opt-in behavior were implied as necessary conditions.

**Representative quotes**:
- *"I don't want AI to 'operate' my Agile team. It's great having AI help organize materials..."* (Participant 39)
- *"AI should always suggest things and let users make decisions."* (Participant 352)
- *"I don't want AI to replace me and get me laid off."* (Participant 386)

---

#### Theme: Task/Project Planning. Because my co-workers are not AI. There are so many sudden changes in daily life.

Participants emphasized that human unpredictability and daily changes make strict, automated plans brittle; planning tools must account for human variability. The code and quote (Participant 46: "Important") point to the need for flexible planning that tolerates sudden changes in availability and priorities. AI must be able to incorporate human variability and real-world interruptions.

**Representative quotes**:
- *"Important"* (Participant 46)
- *"There are so many sudden changes in daily life."* (implicit in context) 
- *"There should be flexibility for unforeseen issues… AI might be too nice or too strict."* (Participant 281)

---

#### Theme: Inter-team coordination

Some participants worry AI cannot fully manage the social and operational complexity of coordinating across teams. The code stresses that cross-team collaboration is nuanced and that AI may risk making incorrect assumptions about responsibilities or priorities: “coordination of projects between different teams” (Participant 51). AI can assist with surfacing dependencies but should avoid unilateral actions across organizational boundaries.

**Representative quotes**:
- *"coordination of projects between different teams"* (Participant 51)
- *"Collaboration between teams."* (Participant 79)
- *"Help identify blockers, unknowns, inter-dependencies across teams/orgs."* (Participant 182)

---

#### Theme: Accuracy

Accuracy is a hard requirement—if outputs are untrustworthy or insufficiently grounded, participants will not adopt AI for planning. The code and quotes explicitly state that in some roles, inaccuracy makes AI unusable: “In my specific role, I cannot realistically use AI for work -- its results are too inaccurate and untrustworthy.” (Participant 53). This drives demand for provenance, testable outputs, and human validation workflows.

**Representative quotes**:
- *"Results are too inaccurate and untrustworthy, or it doesn`t have access to the right grounding data."* (Participant 53)
- *"Reducing hallucinations… still a huge problem."* (Participant 98)
- *"It makes an incredible amount of mistakes…"* (Participant 357)

---

#### Theme: Context

Participants frequently emphasized that incomplete or missing context undermines AI recommendations; AI must surface missing information and allow humans to supply context rather than produce final judgments. The code highlights inflection-point explanations and human choice: “I want the AI to explain inflection points and let users choose… At this point I cannot trust AI to make important decisions.” (Participant 66). Accurate grounding and context capture are recurring requirements.

**Representative quotes**:
- *"I want the AI to explain inflection points and let users choose… I cannot trust AI to make important decisions."* (Participant 66)
- *"Proposing designs or plans without specific details… should identify missing details and escalate."* (Participant 182)
- *"I don’t want AI to handle final judgment calls on ambiguous or high-stakes decisions…"* (Participant 267)

---

#### Theme: Business knowledge

Participants worry AI lacks deep business context and long-term strategic understanding necessary for core decision-making, trade-offs, and product vision. The code underscores that product vision and strategic trade-offs require human intuition and deep user and business knowledge: “I don’t want AI to independently drive product vision or make strategic trade-off decisions…” (Participant 57). AI must be constrained or augmented with business-context models if it is to propose strategic recommendations.

**Representative quotes**:
- *"I don’t want AI to independently drive product vision or make strategic trade-off decisions…"* (Participant 57)
- *"I don’t want AI to handle core decision-making or critical design logic, as it lacks full understanding of business context and long-term goals."* (Participant 284)
- *"The end decision and plan should be my responsibility."* (Participant 10)

---

#### Theme: Trust

Trust is foundational—participants only accept AI when it is explainable, auditable, and demonstrably reliable. The code captures skepticism and the desire for AI to be a suggestive, not directive, collaborator: “At this point I cannot trust AI to make important decisions.” (Participant 66). Without trust, AI will be used only for low-stakes tasks.

**Representative quotes**:
- *"At this point I cannot trust AI to make important decisions."* (Participant 66)
- *"Blindly creating tasks as I don't trust it fully."* (Participant 130)
- *"It makes an incredible amount of mistakes…"* (Participant 357)

---

#### Theme: Hallucinations

Repeated as a concern in the “don’t want” set, hallucinations undermine trust and can introduce dangerous errors in planning. Participants want reduction or detection of hallucination risk before AI is allowed to create plans or move tasks: “Reducing hallucinations. That's my only complaint with AI today, but it's still a huge problem.” (Participant 98). This theme ties directly to demands for provenance and human validation.

**Representative quotes**:
- *"Reducing hallucinations. That's my only complaint with AI today, but it's still a huge problem."* (Participant 98)
- *"Results are too inaccurate and untrustworthy…"* (Participant 53)
- *"It makes an incredible amount of mistakes…"* (Participant 357)

---

#### Theme: People context

Participants caution that AI lacks awareness of individual strengths, interpersonal dynamics, and informal team practices; managing people and their capabilities should remain human-led. The code notes that AI-generated task assignments may fail to account for personal strengths, mentoring needs, or unofficial responsibilities: “I do not want AI to support the Task Planning and/or Management because it does not understand the strengths of individuals.” (Participant 140). AI should not be given exclusive control over people assignments.

**Representative quotes**:
- *"AI does not understand the strengths of individuals and where individuals can help another on a team."* (Participant 140)
- *"Task/Project Planning & Management does not seem like something that AI should handle, as there are many human-aspects."* (Participant 157)
- *"There should be some flexibility for unforeseen issues… AI might either be too nice or too strict."* (Participant 281)

---

#### Theme: Sensitive data

Some participants worried AI handling of confidential or sensitive information—plans, designs, or customer data—could introduce privacy or leakage risks. The code flags the need for strict controls on what AI can process and where: “Anything with sensitive data” (Participant 266). Design must include data governance and access controls.

**Representative quotes**:
- *"I don't know, maybe something related to confidential informations."* (Participant 253)
- *"Anything with sensitive data."* (Participant 266)
- *"It doesn't have access to the right grounding data."* (Participant 53)

---

#### Theme: Intuition

Participants emphasized that human intuition—experienced-based judgment in ambiguous or high-stakes scenarios—cannot be replaced by AI. The code articulates that intuition and tacit knowledge inform final judgments that must remain human: “I don’t want AI to handle final judgment calls on ambiguous or high-stakes decisions, because these often require human intuition.” (Participant 267). AI should present alternatives but not override intuition.

**Representative quotes**:
- *"I don’t want AI to handle final judgment calls on ambiguous or high-stakes decisions…"* (Participant 267)
- *"Deciding why an architecture feels right … need human empathy and experience."* (Participant 301)
- *"The end decision and plan should be my responsibility."* (Participant 10)

---

#### Theme: Accountability

Closely tied to intuition and judgment, participants insisted humans must retain accountability for decisions. AI should support documentation and rationale but not be an accountable actor in place of humans: “I don’t want AI to handle final judgment calls … because these often require … accountability that AI can’t fully replicate or own.” (Participant 267). Accountability mechanisms and audit trails are required.

**Representative quotes**:
- *"…these often require human intuition, contextual awareness, and accountability that AI can’t fully replicate or own."* (Participant 267)
- *"AI shouldn’t ‘handle’ anything."* (Participant 352)
- *"The end decision and plan should be my responsibility."* (Participant 10)

---

#### Theme: Long-term

Participants worry AI cannot reliably reason about long-term business goals and strategic trade-offs; thus core decision-making and critical design logic should remain human-led. The code notes limited AI understanding of long-term implications: “I don’t want AI to handle core decision-making or critical design logic, as it lacks full understanding of business context and long-term goals.” (Participant 284). Design tools should expose long-horizon assumptions.

**Representative quotes**:
- *"I don’t want AI to handle core decision-making or critical design logic… lacks full understanding of business context and long-term goals."* (Participant 284)
- *"I don’t want AI to independently drive product vision…"* (Participant 57)
- *"The end decision and plan should be my responsibility."* (Participant 10)

---

#### Theme: Job security

A minority expressed concern about job displacement or layoffs if AI takes over planning or execution tasks. The code captures personal stakes: “I don't want AI to replace me and get me laid off.” (Participant 386). Designers should address job security anxieties via transparent role augmentation and upskilling pathways.

**Representative quotes**:
- *"I don't want AI to replace me and get me laid off."* (Participant 386)
- *"AI shouldn’t ‘handle’ anything."* (Participant 352)
- *"I don't want AI to 'operate' my Agile team."* (Participant 39)

---

## 2) Cross-Cutting Patterns

- Complementary desires and concerns: Developers want AI to automate repetitive, well-scoped tasks (toil, task creation, documentation, synthesis) and assist with analysis (design validation, forecasting) while they retain ownership of strategic, empathetic, and customer-facing decisions. This creates a clear complementarity: AI as execution and synthesis engine, humans as vision-setters and accountable owners.

- Conditional acceptance: Acceptance of AI hinges on specific conditions—grounding/provenance, accuracy, integration with existing tools (ADO/Teams), reversible actions, clear rationale for suggestions, and human-in-the-loop controls. Many requests were conditional: use AI for drafting and automation but require human review and the ability to override.

- Task-specific nuances: Task Project Planning Management involves both structured (tickets, burndown, assignment) and unstructured (stakeholder interpretation, team dynamics, long-term trade-offs) elements. AI is seen as appropriate for structured, repeatable subtasks (generate work items, manage boards, synthesize history) and as a helpful augment for structured portions of unstructured tasks (e.g., listing pros/cons), but not for replacing ambiguous social judgments.

- Trust and control dynamics: Trust is central. Developers want AI to be an advising agent—transparent, explainable, and auditable. They fear hallucinations and opaque automation that removes human agency. Preferred design dynamics emphasize suggestion + explanation + easy human override, with provenance and escalation paths when context is missing.

## 3) Outliers and Edge Cases

- Total rejection: A minority (e.g., Participant 357) expressed categorical rejection of AI for these tasks today, arguing current models are too unreliable. This contrasts with the majority who are cautiously optimistic.

- Mixed attitudes within individuals: Some participants simultaneously asked for AI to automate task creation while warning AI shouldn't drive product vision—showing ambivalence where users want both automation and strong human control.

- Sensitive-data and job-security fears: A smaller group raised concerns about confidentiality and displacement. These outlier concerns require governance and organizational policy responses but do not dominate the dataset.

- High-expectation edge cases: A few participants expect near-fully autonomous agents (agent PM) that can move tasks and assign owners end-to-end. These represent aspirational scenarios that many others qualify with human-in-the-loop caveats.

## 4) Implications for AI Tool Design

Developers want AI that reliably reduces administrative burden, synthesizes dispersed knowledge, and aids design analysis while preserving human ownership of strategy, customer engagement, and accountability. Tools must be built with strong integration, provenance, explainability, and human override mechanisms to earn trust.

#### Key "Must Haves" (features designers should prioritize)

- **Context-aware planning, prioritization & forecasting**
  - Capability: Use project-level context (dependencies, impact, resources) to propose prioritized backlogs, realistic timelines, and risk forecasts.
  - Rationale: Participants want AI to free them for strategic work while keeping plans grounded (Participants 403, 28, 299).

- **Work-item & coordination automation (agent PM)**
  - Capability: Create/update/move/assign tasks, tidy boards, schedule meetings, and generate status reports with explicit human approval flows and audit logs.
  - Rationale: Reduces coordination toil and manual ADO work (Participants 70, 205, 173).

- **Information synthesis & retrieval with provenance**
  - Capability: Aggregate emails, Teams history, docs, and repo traces into queryable summaries that cite sources and allow drill-down.
  - Rationale: Developers need living summaries and historical context with provenance (Participants 183, 172, 327).

- **Explainable design analysis & rationale**
  - Capability: Provide scenario simulations, design trade-offs, uncertainty estimates, and clear rationale chains for recommendations.
  - Rationale: Facilitates faster decisions and trust: participants asked for rationale and trade-offs (Participants 9, 267, 301).

- **Seamless integration and secure data handling**
  - Capability: Deep integration with planning tools (ADO, Jira), access controls, and sensitive-data safeguards.
  - Rationale: Without integration and governance, AI cannot meaningfully reduce toil or be trusted (Participants 2, 266, 53).

#### Key "Must Not Haves" (design guardrails)

- **Autonomous decision-making on strategic/ambiguous issues**
  - Risk: Letting AI make final calls on vision, prioritization, or ambiguous trade-offs.
  - Rationale: Participants insist on human accountability for strategic choices (Participants 10, 57, 267).

- **Opaque actions without provenance or easy reversal**
  - Risk: AI moving tasks, changing assignments, or modifying plans without clear audit trails or rollback.
  - Rationale: Users demand explainability and reversibility to retain agency (Participants 39, 66, 130).

- **Assignment/people-management without human context**
  - Risk: AI assigning work based solely on surface metrics ignoring strengths, workloads, and interpersonal dynamics.
  - Rationale: People context and team dynamics must remain human-led (Participants 140, 281).

- **Processing or exposing sensitive data without controls**
  - Risk: AI handling confidential information without governance, leading to leakage or policy breaches.
  - Rationale: Participants flagged sensitive data as a no-go without strict safeguards (Participants 266, 253).

- **Deploying AI before hallucination and grounding issues are addressed**
  - Risk: Using AI-generated plans or designs that include fabricated facts or unsupported assumptions.
  - Rationale: Hallucinations undermine trust and can cause costly mistakes (Participants 98, 53, 357).
