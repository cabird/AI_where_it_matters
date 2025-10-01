# Thematic Analysis: Task Project Planning Management

**Task Category:** Design Planning\n**Task Name:** Task Project Planning Management\n\n**Generated:** 2025-09-30 23:59:23\n**Number of Participants:** 0\n**Data Source:** `data-design_planning-task_project_planning_management.csv`\n\n---\n\n# Thematic Analysis — Task Project Planning Management (Design Planning)

This report synthesizes manually coded survey responses from software developers about AI usage in Task Project Planning Management within the Design Planning category. I preserved the research team’s theme and code labels, aggregated participant quotes, and analyzed patterns, tensions, and design implications across the coded responses. Counts below are derived from unique participant IDs (PIDs) present in the coded quotes and are rounded to the nearest 5 where requested; confidence levels use the raw participant counts (High = 10+, Medium = 5–9, Low = <5).

---

## 1) Core Themes

### A. Where AI is Wanted

#### Theme: Context-aware planning, prioritization & forecasting

Participants want AI that goes beyond static checklists to reason about project context — impact, dependencies, resources, and risks — so planning stays adaptive and strategically aligned. They imagine tools that can intelligently prioritize tasks and forecast risks (burndown, resource constraints) to free humans for creative and strategic work while ensuring plans remain grounded. Boundaries mentioned include keeping humans in control of final strategy and using AI outputs as recommendations rather than mandates.

Sub-themes identified:
- **Context-aware planning, prioritization & forecasting**: Use project context (impact, dependencies, resources) to schedule/sequence work, track burndown, and forecast risks so humans stay on strategy.

Number of participants: ~5 participants (actual unique PIDs = 4)

Representative quotes:
- "I’d love to see AI … intelligently prioritizing tasks based on impact and dependencies… freeing time for creative and strategic thinking… while plans stay grounded and adaptive." (Participant 403)
- "Take a more active role… helping set deadlines for work items based on the context of the overall project." (Participant 28)
- "Project planning based on the available resources… assign tasks… optimal time and least burnout." (Participant 299)

Confidence: Low

---

#### Theme: Work-item & coordination automation (agent PM)

Developers consistently request an "agent PM" that reduces coordination toil: create, update, move, and assign tasks and bugs; keep boards tidy; chase owner updates; schedule meetings; and generate status reports. The motivation is pragmatic — eliminate repetitive administrative work so teams can focus on engineering and design. Participants expect the agent to operate under human direction (e.g., “move it to the current iteration… assign it to Sam… Done.”) and to ask for confirmations rather than act with full autonomy.

Sub-themes identified:
- **Work-item & coordination automation (agent PM)**: Create/update/move/assign tasks and bugs; keep boards tidy; chase owner updates; schedule meetings; produce status—reducing coordination toil.

Number of participants: ~5 participants (actual unique PIDs = 6)

Representative quotes:
- "Control my ADO workitems, tasks and bugs." (Participant 93)
- "Create items, add time spent, and periodically ask if they were completed." (Participant 125)
- "Manage tasks, fetch/request updates from task owners, schedule meetings, and generate status reports… the north star." (Participant 70)

Confidence: Medium

---

#### Theme: Information synthesis & retrieval

Respondents want AI to aggregate sprawling histories — emails, Teams threads, meeting notes — into living, queryable summaries that surface relevant historical context on demand. This is motivated by the practical impossibility of manually consolidating scattered communications and the desire to reduce time spent hunting for context during planning and design discussions. Participants framed this as an augmentation: AI should surface context so humans can make quicker, better-informed decisions.

Sub-themes identified:
- **Information synthesis & retrieval**: Aggregate sprawling emails/Teams/history into living, queryable summaries; surface relevant historical context on demand.

Number of participants: ~0 participants (actual unique PIDs = 2)

Representative quotes:
- "Thousands of emails and Teams conversations… impossible to aggregate… expect this to be completely automated by AI." (Participant 183)
- "Surface relevant historical context… so I can focus more on strategy and decision-making." (Participant 172)

Confidence: Low

---

#### Theme: Scoping, sizing & decomposition

Developers want AI to help translate specs and designs into hierarchical work items, propose alternative decompositions, and assist with effort sizing. The stated motivation is to accelerate planning and make decomposition more consistent, while participants insist that humans retain design direction and final sizing judgment. AI is seen as a helper that offers candidate splits and size estimates that teams can refine.

Sub-themes identified:
- **Scoping, sizing & decomposition**: Turn specs/designs into hierarchical work items; propose alternatives; assist with sizing—while humans retain design direction.

Number of participants: ~5 participants (actual unique PIDs = 3)

Representative quotes:
- "Help with creating alternative architectures. Help with work/task sizing." (Participant 148)
- "Having AI take a spec or design and generate work items might be useful. Otherwise… should be driven by humans." (Participant 149)
- "Automatic ADO task creation (hierarchical) to help me split my goal into small tasks." (Participant 72)

Confidence: Low

---

#### Theme: AI as intermediary between teams

Some respondents see AI acting as an intermediary to translate between product and engineering — surfacing blockers, dependencies, and unknowns across teams to support continuous refinement of designs and plans. The core motivation is better cross-team alignment and faster identification of interdependencies that humans alone might miss. Participants expect the AI to assist in prep and collaborative functions rather than replace human negotiation.

Sub-themes identified:
- **AI as intermediary between teams**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 2)

Representative quotes:
- "Enabling product folks to align better with engineering, either as a prep step, or a collaborative function between the two." (Participant 3)
- "Help identify blockers, unknowns, inter-dependencies across teams/orgs and thereby help in a continuous refinement of the design and planning of features." (Participant 182)

Confidence: Low

---

#### Theme: Generate plans

Participants asked for AI that can turn a design + architecture into a full project plan (timelines, milestones, agile tickets) and keep schedules updated. The desired outcome is realistic, actionable plans that reduce manual effort in translating architecture into execution steps, with humans ultimately reviewing and approving delivered plans.

Sub-themes identified:
- **Generate plans**: (no description provided in manual coding beyond examples)

Number of participants: ~5 participants (actual unique PIDs = 3)

Representative quotes:
- "Full project planning with timelines & agile tickets." (Participant 7)
- "Being able to accurately turn a design + architecture into a project plan, with realistic timelines, and milestones." (Participant 27)
- "Plan and keep track of schedules." (Participant 14)

Confidence: Low

---

#### Theme: Analyze design

Developers want AI support for scenario simulation, effort estimation, design validation, and predictive risk detection (e.g., compliance or supplier quality monitoring). The value is early surfacing of risks and quantitative guidance to inform trade-offs. Again, participants emphasize AI as a tool to augment human judgment, providing simulations and suggestions rather than final decisions.

Sub-themes identified:
- **Analyze design**: (no description provided in manual coding beyond examples)

Number of participants: ~5 participants (actual unique PIDs = 4)

Representative quotes:
- "I’d like AI to play a key role in scenario simulation, effort estimation, and design validation during the planning phase." (Participant 9)
- "Be able to give a reasonable evaluation of the design and provide better suggestions for improvement." (Participant 314)
- "Real-time risk detection and predictive analytics, spotting issues before they escalate." (Participant 331)

Confidence: Low

---

#### Theme: onboarding

AI to assist engineers entering new codebases — analyzing architecture, summarizing code, and reducing the time and discipline required to become productive. This is framed as lowering onboarding friction and accelerating ramp-up.

Sub-themes identified:
- **onboarding**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "It will be most useful in analyzing new codebases that an engineer is jumping into… a very daunting step." (Participant 16)

Confidence: Low

---

#### Theme: Knowledge synthesis

Closely related to information synthesis, participants want AI to integrate information across platforms (internal and external) to collate requirements, design inputs, and proof-of-concept material into a single, actionable knowledge base for design and planning.

Sub-themes identified:
- **Knowledge synthesis**: (no description provided in manual coding beyond examples)

Number of participants: ~5 participants (actual unique PIDs = 4)

Representative quotes:
- "Integrating across platforms to gather information for design and POC." (Participant 25)
- "Assist in collating information across external and internal sources." (Participant 175)
- "If AI can bring the massive knowledge for me when we do the design & planning, it will be very helpful." (Participant 327)

Confidence: Low

---

#### Theme: Manage work items

This theme aggregates many concrete task-management wishes: AI-assisted deadline setting, automatic task creation and updates in ADO, Kanban management, finding and updating old tasks, and resource-aware scheduling to minimize burnout. It represents the clearest, highest-volume practical need — participants repeatedly ask for AI to reduce the friction and tedium of day-to-day task management, but they also want confirmations and human oversight for decisions that affect people and priorities.

Sub-themes identified:
- **Manage work items**: (no description provided in manual coding beyond examples)

Number of participants: ~15 participants (actual unique PIDs = 14)

Representative quotes:
- "I would like to see AI take a more active role in helping with project management - things like helping set deadlines for work items based on the context of the overall project." (Participant 28)
- "I most dislike managing tasks in ADO. Finding and querying them is hard… can you move it to the current iteration, update the description… assign it to Sam… Done." (Participant 205)
- "Manage tasks and kanban boards, which is usually a chore nobody does." (Participant 173)

Confidence: High

---

#### Theme: Generate metrics

Participants want AI that can identify opportunities through metrics and set up measurement before implementation to create positive feedback loops. The utility is driving measurable improvements and surfacing opportunities that might be missed without analytic support.

Sub-themes identified:
- **Generate metrics**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "The role who can identify opportunities through metrics and setup metrics before implementation, forming a positive feedback loop." (Participant 46)

Confidence: Low

---

#### Theme: Suggest designs

AI is expected to assist in exploring optimal architectural patterns, analyze historical bottlenecks, and generate risk-aware design proposals. Participants want steerable, goal-aligned suggestions, code scaffolding, and environment/setup automation that can accelerate planning while maintaining control over design direction.

Sub-themes identified:
- **Suggest designs**: (no description provided in manual coding beyond examples)

Number of participants: ~5 participants (actual unique PIDs = 5)

Representative quotes:
- "I want AI to assist in exploring optimal architectural patterns, analyzing historical system bottlenecks, and generating risk aware design proposals." (Participant 57)
- "Being able to describe needs, then iterate with AI on output designs, all the way to environments being setup and repos with starter src generated." (Participant 109)
- "Suggestions for design and planning which are aligned with my goal and steerable." (Participant 253)

Confidence: Medium

---

#### Theme: Latent knowledge

Respondents want AI to surface latent, internal knowledge (historical decisions, past architectures) and make it actionable for design and task creation. The aim is to reduce rediscovery and leverage institutional memory when generating designs and work items.

Sub-themes identified:
- **Latent knowledge**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 2)

Representative quotes:
- "Help provide a design based on requirements looking at the internal context and also help create tasks in ADO." (Participant 65)
- "It should also act as a reliable collaborator that adapts to diverse team needs and evolving project constraints." (Participant 172)

Confidence: Low

---

#### Theme: Generate work items

A recurring practical ask: take high-level features or specs and break them into discrete implementation tasks (hierarchical), then plan those tasks out. Participants want automatic, repeatable decomposition to reduce planning overhead.

Sub-themes identified:
- **Generate work items**: (no description provided in manual coding beyond examples)

Number of participants: ~5 participants (actual unique PIDs = 3)

Representative quotes:
- "Help provide a design based on requirements looking at the internal context and also help create tasks in ADO." (Participant 65)
- "Automatic ADO task creation (hierarchical) to help me split my goal into small tasks." (Participant 72)
- "Take high level features and break them down into discrete implementation tasks." (Participant 365)

Confidence: Low

---

#### Theme: Toil

A cross-cutting justification: AI should remove trivial, repetitive work (documents, slides, notes, scheduling) so humans focus on higher-value design and customer work. Participants see automating mundane planning tasks as low-risk, high-return.

Sub-themes identified:
- **Toil**: (no description provided in manual coding beyond examples)

Number of participants: ~5 participants (actual unique PIDs = 5)

Representative quotes:
- "I want AI to cover trivial and repetitive work (creating documents, slides…) so that I can focus on what really matters." (Participant 72)
- "It should automate the project planning part which is kind of mundane task." (Participant 294)
- "Make the boring parts like scheduling meetings, taking notes… writing summary reports in a structured way." (Participant 199)

Confidence: Medium

---

#### Theme: Humans handle customers, AI handles implementation

Some participants framed a division of labor: humans focus on customer interactions and empathy; AI handles detailed technical implementation tasks that require repetitive, technical work. This preserves human-facing responsibilities while leveraging AI for backend execution.

Sub-themes identified:
- **Humans handle customers, AI handles implementation**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "AI assists with tasks that require a lot of detailed technical knowledge thus giving the human more time to interact with customers and collaborators." (Participant 75)

Confidence: Low

---

#### Theme: Hallucinations

Even among proponents, participants flagged hallucinations as a core technical limitation that undermines trust. Reducing hallucinations is a prerequisite for acceptance in planning contexts.

Sub-themes identified:
- **Hallucinations**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "Reducing hallucinations. That's my only complaint with AI today, but it's still a huge problem." (Participant 98)

Confidence: Low

---

#### Theme: AI as design partner

Participants want AI to be an active design copilot — participating in design conversations, iterating on outputs, scaffolding repositories and environments, and automating documentation. Voice-based or interactive agents were explicitly mentioned as desirable.

Sub-themes identified:
- **AI as design partner**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 2)

Representative quotes:
- "Being able to describe needs, then iterate with AI on output designs, all the way to environments being setup and repos with starter src generated." (Participant 109)
- "A voice based design copilot agent which can actively take part in constructive design conversations while also automating the documentation." (Participant 318)

Confidence: Low

---

#### Theme: Explore alternatives

AI should help enumerate design alternatives, track pros/cons, surface trade-offs, and reuse earlier reasoning to avoid circular debates. This is motivated by saving time in discussions and improving decision quality via consistent tracking of reasoning.

Sub-themes identified:
- **Explore alternatives**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 2)

Representative quotes:
- "Help with creating alternative architectures. Help with work/task sizing." (Participant 148)
- "Help me during design discussions by laying out the pros and cons of each option we’re considering." (Participant 301)

Confidence: Low

---

#### Theme: Humans handle customers

Several participants emphasized that requirements gathering and stakeholder interpretation should remain human-led because they require empathy and nuanced questioning; AI can assist but should not replace human-led discovery.

Sub-themes identified:
- **Humans handle customers**: (no description provided in manual coding beyond examples)

Number of participants: ~5 participants (actual unique PIDs = 3)

Representative quotes:
- "Requirements Gathering should mostly be done by humans - so not expecting much here - but all other tasks AI should be able to do." (Participant 330)
- "Having AI take a spec or design and generate work items might be useful. Otherwise, these are tasks that are primarily aimed at creating human experiences and should therefore be driven by humans." (Participant 149)

Confidence: Low

---

#### Theme: Generate requirements

Participants want AI to help vet requirements (for example via surveys) and then generate features, user stories, and tasks after human-approved vetting. This is framed as a time-saver that still respects human judgment on what the product should be.

Sub-themes identified:
- **Generate requirements**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 2)

Representative quotes:
- "AI to help automate requirements via surveys and help with scheduling tasks." (Participant 153)
- "I want AI to be able to generate my features, user stories, and tasks after fully vetting the requirements provided by the end user." (Participant 154)

Confidence: Low

---

#### Theme: Documentation

Participants want AI to draft accurate documentation, progress reports, and structured summaries of meetings and work streams. Quality and correctness are central concerns; good documentation automations are seen as a high-value, low-risk area for AI.

Sub-themes identified:
- **Documentation**: (no description provided in manual coding beyond examples)

Number of participants: ~5 participants (actual unique PIDs = 6)

Representative quotes:
- "Writing documents and progress reports." (Participant 164)
- "Generating documentation that's correct would be phenomenally helpful." (Participant 220)
- "A voice based design copilot agent which can actively take part in constructive design conversations while also automating the documentation." (Participant 318)

Confidence: Medium

---

#### Theme: Recommend reuse

AI that can mine historical communications and artifacts to recommend reuse opportunities (patterns, past solutions) would reduce duplicated work and accelerate planning.

Sub-themes identified:
- **Recommend reuse**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "This same feature would allow me to automate my own connect or provide feedback for folks I work with - In the future, I would expect this to be completely automated by AI." (Participant 183)

Confidence: Low

---

#### Theme: Generate requirements, work items

A compact request for end-to-end functionality: accept goals and output tasks, stories, and requirements — essentially bridging from high-level goals to execution items.

Sub-themes identified:
- **Generate requirements, work items**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "I would like the AI to be more functional in terms of putting goals into it and outputting tasks, stories, etc." (Participant 188)

Confidence: Low

---

#### Theme: Thought partner

Developers want AI to act as a thoughtful collaborator—offering ideas, best practices, identifying edge cases, and aligning architecture with business goals—rather than only producing content. This emphasizes dialogue and reasoning transparency.

Sub-themes identified:
- **Thought partner**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 2)

Representative quotes:
- "Continue to provide ideas and best practices when designing and planning a project." (Participant 208)
- "I want AI to assist with exploring design alternatives, identifying edge cases, and helping align architecture with evolving business goals." (Participant 241)

Confidence: Low

---

#### Theme: Rationale

Participants want AI to provide clear rationale and trade-offs for suggested design choices to streamline decision-making. Explanations that show why a recommendation was made increase trust and enable faster human validation.

Sub-themes identified:
- **Rationale**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "Provide rationale and trade-offs for design choices, so I can focus more on creativity and less on validating or second-guessing AI outputs." (Participant 267)

Confidence: Low

---

#### Theme: No AI

A small minority believe current AI is not yet capable of reliably performing planning tasks and caution against relying on it until errors are dramatically reduced.

Sub-themes identified:
- **No AI**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "If AI continues to look anything like what it looks like right now, none of these tasks are sufficiently structured for AI to be able to do." (Participant 357)

Confidence: Low

---

#### Theme: Generate design

Participants want AI to templatize and summarize notes/context into a high-accuracy skeleton design that incorporates sensible security and privacy defaults. This is an extension of "suggest designs" with emphasis on accuracy and standards.

Sub-themes identified:
- **Generate design**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "Templatization and summary from notes and meeting context into a skeleton design with high accuracy would be a major step forward." (Participant 372)

Confidence: Low

---

#### Theme: Analyze designs

Echoing "Analyze design," respondents want AI to automate design reviews, forecast project risks, and prioritize tasks based on impact and dependencies so teams can focus on higher-level creativity.

Sub-themes identified:
- **Analyze designs**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "I’d love to see AI play a bigger role in automating design reviews, forecasting project risks, and intelligently prioritizing tasks based on impact and dependencies." (Participant 403)

Confidence: Low

---

### B. Where AI is Not Wanted

#### Theme: Human judgment & accountability for strategic/ambiguous decisions

A clear boundary: participants do not want AI to make final decisions on strategy, trade-offs, or ambiguous/high-stakes choices. AI can suggest and explain but humans must retain ultimate responsibility and accountability. This is driven by concerns about trust, nuance, and moral/organizational responsibility.

Sub-themes identified:
- **Human judgment & accountability for strategic/ambiguous decisions**: Final calls on strategy, prioritization, trade-offs, and high-stakes/ambiguous choices stay human; AI can suggest, not decide.

Number of participants: ~5 participants (actual unique PIDs = 6)

Representative quotes:
- "I don't want AI to handle ‘interpretation’ … avoid making decisions of ‘taste’." (Participant 3)
- "The end decision and plan should be my responsibility." (Participant 10)
- "AI should always suggest things and let users make decisions. AI shouldn’t ‘handle’ anything." (Participant 352)

Confidence: Medium

---

#### Theme: No AI for empathy, vision & social coordination

Many participants said AI should not lead stakeholder alignment, creative vision-setting, or team-dynamics sensing because these require empathy and social nuance. The feared outcomes include misalignment, poor morale, and failure to sense when teammates are overloaded.

Sub-themes identified:
- **No AI for empathy, vision & social coordination**: Creative vision, stakeholder alignment, cross-team comms, and team-dynamics sensing require empathy and interpersonal nuance.

Number of participants: ~5 participants (actual unique PIDs = 6)

Representative quotes:
- "I wouldn’t want AI to handle creative vision-setting or stakeholder alignment… human empathy and strategic intuition." (Participant 9)
- "Deciding why an architecture feels right or sensing when a teammate is overwhelmed need human empathy and experience." (Participant 301)
- "I wouldn’t want AI to handle … team dynamics, because those require human judgment, empathy, and contextual understanding." (Participant 403)

Confidence: Medium

---

#### Theme: Capability & context limits undermine trust in AI-PM

Participants highlight concrete technical constraints: hallucinations, poor grounding, high overhead to explain complex problems, and brittleness in volatile environments. They want AI to identify missing details and escalate rather than produce confident but unsupported plans. This undermines trust and calls for clear escalation paths and human review.

Sub-themes identified:
- **Capability & context limits undermine trust in AI-PM**: Current AI struggles: hallucinations, weak grounding, high prompt overhead, brittleness under volatility/complexity; needs escalation and human review.

Number of participants: ~5 participants (actual unique PIDs = 6)

Representative quotes:
- "Results are too inaccurate and untrustworthy, or it doesn’t have access to the right grounding data." (Participant 53)
- "Reducing hallucinations… still a huge problem." (Participant 98)
- "Proposing designs or plans without specific details… should identify missing details and escalate." (Participant 182)

Confidence: Medium

---

#### Theme: Toil

Even in the "don't want" section, some participants lament lack of integration and want AI to help with monotony — but this sometimes appears as an unmet expectation rather than a rejection. The tension is that AI could help with toil but current tool integration is insufficient.

Sub-themes identified:
- **Toil**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "Lack of integration of AI with task/project planning & management tools means I don't get to use it as much as I would like." (Participant 2)

Confidence: Low

---

#### Theme: Humans handle customers

Parallel to "Humans handle customers" in the Want list, several participants insist that AI should not replace humans in interpreting customer priorities or drawing out nuanced requirements. They want AI to support, not own, the customer-facing aspects of planning.

Sub-themes identified:
- **Humans handle customers**: (no description provided in manual coding beyond examples)

Number of participants: ~5 participants (actual unique PIDs = 3)

Representative quotes:
- "I don't want AI to handle 'interpretation' of what we as humans think is more important when building a product." (Participant 3)
- "I don’t want AI to handle final decision-making or interpret nuanced stakeholder feedback." (Participant 172)

Confidence: Low

---

#### Theme: Retain agency

A cultural concern: teams want to avoid feeling like AI is running their agile processes or dictating work. Developers want AI that supports agency and collaboration rather than replacing human ownership of workflow and team decisions.

Sub-themes identified:
- **Retain agency**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "I don't want AI to 'operate' my Agile team. I like the feeling of agency when driving my work in collaboration with my colleagues." (Participant 39)

Confidence: Low

---

#### Theme: Task/Project Planning. Because my co-workers are not AI. There are so many sudden changes in daily life.

Participants flagged the unpredictable human element — sudden changes, interruptions, personal contexts — making fully automated planning fragile. This argues for flexible, human-in-the-loop systems that can adapt to real-world variability.

Sub-themes identified:
- **Task/Project Planning. Because my co-workers are not AI. There are so many sudden changes in daily life.**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "Important." (Participant 46)

Confidence: Low

---

#### Theme: Inter-team coordination

Some respondents expressed concern about AI handling coordination across teams; they worry that AI lacks the social judgment to navigate cross-team relationships and priorities.

Sub-themes identified:
- **Inter-team coordination**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 2)

Representative quotes:
- "Coordination of projects between different teams." (Participant 51)
- "Collaboration between teams." (Participant 79)

Confidence: Low

---

#### Theme: Accuracy

Multiple respondents cited accuracy and grounding as blockers to adoption. If AI outputs are untrustworthy, teams will not use AI for planning.

Sub-themes identified:
- **Accuracy**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "Its results are too inaccurate and untrustworthy, or it doesn't have access to the right grounding data." (Participant 53)

Confidence: Low

---

#### Theme: Context

Participants stressed that insufficient context (domain, inflection points, organizational nuance) limits AI usefulness and trust. They want AI to prompt for missing context and present inflection points clearly rather than making opaque recommendations.

Sub-themes identified:
- **Context**: (no description provided in manual coding beyond examples)

Number of participants: ~5 participants (actual unique PIDs = 3)

Representative quotes:
- "I want the AI to explain inflection points and let users choose… I cannot trust AI to make important decisions." (Participant 66)
- "Proposing designs or plans without specific details… should identify missing details and escalate." (Participant 182)

Confidence: Low

---

#### Theme: Business knowledge

Respondents worry AI lacks the deep business context and long-term goals awareness needed for strategic decision-making and product vision. This limits AI utility for high-level planning.

Sub-themes identified:
- **Business knowledge**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 2)

Representative quotes:
- "I don’t want AI to independently drive product vision or make strategic trade-off decisions, because these require deep understanding of user context, business priorities, and long-term goals." (Participant 57)
- "I don’t want AI to handle core decision-making or critical design logic, as it lacks full understanding of business context and long-term goals." (Participant 284)

Confidence: Low

---

#### Theme: Trust

Trust is a recurring constraint: developers want explanations, transparency, and control so they can trust but verify AI outputs. Without that, AI will be ignored or used only cautiously.

Sub-themes identified:
- **Trust**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 2)

Representative quotes:
- "At this point I cannot trust AI to make important decisions." (Participant 66)
- "Blindly creating tasks as I don't trust it fully." (Participant 130)

Confidence: Low

---

#### Theme: Hallucinations

Restated in the "don't want" set: hallucinations remain a top concern that can make AI dangerous in planning contexts where a single mistake is costly.

Sub-themes identified:
- **Hallucinations**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "Reducing hallucinations. That's my only complaint with AI today, but it's still a huge problem." (Participant 98)

Confidence: Low

---

#### Theme: People context

Participants emphasized that AI does not understand individual strengths, interpersonal dynamics, or when to flex assignments; they prefer people to manage those human-sensitive aspects.

Sub-themes identified:
- **People context**: (no description provided in manual coding beyond examples)

Number of participants: ~5 participants (actual unique PIDs = 3)

Representative quotes:
- "AI does not understand the strengths of individuals and where individuals can help another on a team." (Participant 140)
- "Task/Project Planning & Management does not seem like something that AI should handle, as there are many human-aspects the AI may not be equipped to take into account." (Participant 157)

Confidence: Low

---

#### Theme: Sensitive data

Some participants raised data-sensitivity concerns: planning artifacts and requirements can contain confidential information that must be protected, limiting what should be passed to AI.

Sub-themes identified:
- **Sensitive data**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 2)

Representative quotes:
- "Anything with sensitive data." (Participant 266)
- "I don't know, maybe something related to confidential informations." (Participant 253)

Confidence: Low

---

#### Theme: Intuition

Closely linked to human judgment and accountability: intuition about ambiguous situations and tacit knowledge should not be ceded to AI.

Sub-themes identified:
- **Intuition**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "I don’t want AI to handle final judgment calls on ambiguous or high-stakes decisions, because these often require human intuition." (Participant 267)

Confidence: Low

---

#### Theme: Accountability

Participants explicitly noted organizational accountability as a reason to keep final decisions human — AI cannot be held accountable in the same way.

Sub-themes identified:
- **Accountability**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "I don’t want AI to handle final judgment calls… because these often require human intuition, contextual awareness, and accountability that AI can’t fully replicate or own." (Participant 267)

Confidence: Low

---

#### Theme: Long-term

Some worry AI lacks long-term perspective on product strategy and goals, reducing utility for decisions that require multi-year thinking.

Sub-themes identified:
- **Long-term**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "I don’t want AI to handle core decision-making or critical design logic, as it lacks full understanding of business context and long-term goals." (Participant 284)

Confidence: Low

---

#### Theme: Job security

A minority voiced concern about AI replacing roles and causing layoffs, which colors acceptance for more autonomous AI in planning and management.

Sub-themes identified:
- **Job security**: (no description provided in manual coding beyond examples)

Number of participants: ~0 participants (actual unique PIDs = 1)

Representative quotes:
- "I don't want AI to replace me and get me laid off." (Participant 386)

Confidence: Low

---

## 2) Cross-Cutting Patterns

- Complementary desires and concerns: Developers want AI to remove coordination toil, synthesize information, decompose requirements, and propose designs — but they resist AI making final strategic or social decisions. The two sets of themes are complementary: participants want AI to handle repetitive, well-defined tasks and augment reasoning (generate work items, manage boards, synthesize documentation) while humans retain ownership of strategy, empathy-driven coordination, and accountability.

- Conditional acceptance: Acceptance is strongly conditional. Participants repeatedly ask that AI (1) operate with human-in-the-loop workflows, (2) provide clear rationales and trade-offs, (3) surface missing context and escalate, and (4) avoid operating autonomously on people-sensitive decisions (assignments, performance judgments, stakeholder negotiations).

- Task-specific nuances: Task Project Planning Management is especially sensitive to social context, people-related constraints (skills, burnout, availability), and rapidly changing priorities. That makes planning tasks different from pure code generation: plans must account for human variability, business strategy, and historical context, which increase the need for grounding, explainability, and flexible control.

- Trust and control dynamics: Trust hinges on accuracy, grounding, and explainability. Developers demand features that increase transparency (rationale, provenance, explicit uncertainty) and manual override/confirmation. The more AI is perceived as a tool that explains and asks, the more trust it earns. Conversely, hallucinations and lack of domain grounding erode trust quickly.

## 3) Outliers and Edge Cases

- No-AI skepticism: Participant 357 represents a strong outlier who believes current AI will not achieve these tasks at all. This is an important caution that some users will require demonstrable reliability before adoption.

- Job security fears: Participant 386 raises a socio-economic concern that can affect adoption and morale even when technical capability exists. Product teams should address this via transparency and role augmentation framing.

- Ambivalent responses: Some participants both request automation of task creation and emphasize humans must still handle requirements gathering — an ambivalence that suggests users want selective automation that preserves human judgment at key points.

- Contradictions within respondents: A few participants request fully automated ADO management yet also insist AI should not operate their Agile team — indicating that desired automation must include explicit boundaries and consent flows to avoid perceived loss of agency.

## 4) Implications for AI Tool Design

High-level synthesis: Developers want AI that reliably reduces planning toil, synthesizes context, proposes decompositions and plans, and explains rationale — but only under clear human oversight, strong grounding, and privacy protections. Tools should prioritize predictable, verifiable automations for administrative work and augmentative analysis for design/forecasting, while leaving final decisions, stakeholder negotiations, and people management to humans.

#### Key "Must Haves" (features designers should prioritize)

- **Work-item & coordination automation**
  - Capability: Create/update/move/assign tasks and bugs, maintain Kanban/ADO boards, schedule meetings, and generate status reports with human confirmation options.
  - Rationale: Repeated requests to reduce coordination toil and "the north star" agent PM (e.g., "Manage tasks... generate status reports." — Participant 70).

- **Context-aware planning, prioritization & forecasting**
  - Capability: Use project context (impact, dependencies, resources) to recommend priorities, deadlines, burndown forecasts, and resource-aware assignment suggestions.
  - Rationale: Participants value AI that grounds prioritization in project-level context (e.g., "intelligently prioritizing tasks based on impact and dependencies" — Participant 403).

- **Information & knowledge synthesis**
  - Capability: Aggregate emails, Teams, docs, and historical decisions into searchable summaries and surface relevant historical context on demand.
  - Rationale: Reduces time spent hunting context and supports consistent planning (e.g., "Thousands of emails and Teams conversations… impossible to aggregate." — Participant 183).

- **Explainability & rationale**
  - Capability: Every recommendation should include concise rationale, trade-offs, confidence/uncertainty, and provenance links to source artifacts.
  - Rationale: Builds trust and enables rapid human validation (e.g., "Provide rationale and trade-offs for design choices." — Participant 267).

- **Safe decomposition & templated planning**
  - Capability: Convert specs/designs into hierarchical work items, propose alternative decompositions and size estimates, and generate starter templates/repos with clear human review steps.
  - Rationale: Accelerates planning while keeping humans in control (e.g., "Automatic ADO task creation (hierarchical)" — Participant 72).

#### Key "Must Not Haves" (design guardrails)

- **Full autonomous decision-making in strategy and people management**
  - Risk: Losing human accountability and mishandling empathy-driven tasks.
  - Rationale: Participants refuse AI final authority on strategic decisions and team dynamics (e.g., "The end decision and plan should be my responsibility." — Participant 10).

- **Opaque outputs without grounding or provenance**
  - Risk: Hallucinations and untrustworthy plans.
  - Rationale: Participants repeatedly flagged hallucinations and lack of grounding as blockers (e.g., "Results are too inaccurate and untrustworthy." — Participant 53).

- **Automations that ignore people context**
  - Risk: Misassignments, burnout, and team friction.
  - Rationale: AI must not assign or manage people-sensitive tasks without explicit human oversight (e.g., "AI does not understand the strengths of individuals." — Participant 140).

- **Processing or exposing sensitive data without safeguards**
  - Risk: Confidentiality breaches and compliance violations.
  - Rationale: Participants flagged sensitive data concerns (e.g., "Anything with sensitive data." — Participant 266).

- **Replacing customer-facing requirements gathering**
  - Risk: Loss of nuance, empathy, and stakeholder trust.
  - Rationale: Requirements gathering should largely remain human-led (e.g., "Requirements Gathering should mostly be done by humans." — Participant 330).

#### Design Patterns to Resolve Tensions

- Human-in-the-loop recommendation pattern: AI proposes plans, tasks, and assignments with justifications and a simple "Approve / Tweak / Reject" workflow. This preserves agency and accountability while automating low-friction steps.

- Confidence-scored, provenance-linked outputs: Each recommendation includes a confidence score, links to source artifacts (emails, specs, metrics), and clearly labeled assumptions; if confidence is low, AI prompts for missing context and escalates.

- Role-aware automation: Allow teams to configure the AI’s scope per lane (e.g., auto-create docs and tickets in "backlog grooming" but require human approval for assignments or stakeholder-facing artifacts).

- Privacy-first design: Built-in redaction, on-prem or enterprise-grounding options, and UI warnings for any content flagged as sensitive.

---

## Executive Summary

- Developers want AI to reduce coordination toil, synthesize scattered context, create and manage work items, and generate actionable plan skeletons — but only as augmentations with human oversight.
- They do not want AI to make final strategic choices, manage stakeholder alignment/empathy, or replace human-led requirements gathering and people-sensitive decisions.
- Critical design needs: human-in-the-loop workflows, explainability/provenance, role-aware controls, and strong privacy safeguards.
- Technical prerequisites for adoption: accuracy and grounding to prevent hallucinations; the AI should surface missing context and escalate rather than guess.
- Notable tension: desire for automated task management vs. fear of losing agency and mishandling human factors — resolvable via configurable approvals and clear rationale.
- Recommendation: prioritize reliable, bounded automations (task creation, synthesis, documentation, metrics) with transparent explanations and easy manual overrides before expanding into more autonomous planning features.