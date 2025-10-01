# Paper Key Details for Report Viewer Development

## Study Overview

**Title**: AI Where It Matters: Where, Why, and How Developers Want AI Support in Daily Work

**Authors**: Rudrajit Choudhuri, Carmen Badea, Christian Bird, Jenna L. Butler, Robert DeLine, Brian Houck

**Study Design**: Mixed-methods research combining quantitative survey data with qualitative thematic analysis

**Sample Size**: 860 professional software developers

**Data Collection**: Survey with both structured questions (Likert scales, rankings) and open-ended free-text responses

**Key Research Questions**:
1. Where do developers want AI support in their daily work?
2. Where do developers NOT want AI support?
3. Why do developers have these preferences?

---

## Task Categorization System

The study analyzed developer preferences across five major task categories:

### 1. Development
- Coding/Programming
- Bug Fixing/Debugging
- Performance Optimization
- Refactoring, Maintenance & Updates
- AI development/integration into products

### 2. Quality & Risk Management
- Testing & Quality Assurance
- Code Review/Pull Requests
- Security & Compliance

### 3. Design & Planning
- System Architecture & Design
- Requirements Gathering & Analysis
- Task/Project Planning & Management

### 4. Infrastructure & Operations
- DevOps (CI/CD)/Deployment
- Environment Setup & Maintenance
- Infrastructure Monitoring & Alerts
- Customer Support

### 5. Meta Work
- Documentation
- Client/Stakeholder Communication
- Mentoring & Onboarding
- Learning New Technologies
- Research & Brainstorming

---

## Report Structure and Interpretation

Each report follows a consistent thematic analysis structure:

### 1. Core Themes Section
Split into two subsections:
- **Where AI is wanted**: Themes describing tasks/contexts where developers desire AI support
- **Where AI is not wanted**: Themes describing tasks/contexts where developers reject or have concerns about AI

Each theme includes:
- **Description**: Detailed explanation of the theme including motivations, desired outcomes, and boundaries/conditions
- **Number of participants**: Approximate count (rounded to nearest 5) indicating how many developers mentioned this theme
- **Representative quotes**: 3-5 verbatim participant quotes with participant IDs
- **Confidence level**: Researcher's confidence in the theme (typically High, Medium, or Low)

### 2. Cross-Cutting Patterns
- Connections between "wants" and "don't wants"
- Tensions or contradictions in preferences
- Common conditions and boundaries developers specify
- Relationships to other task categories

### 3. Outliers and Edge Cases
- Extreme positions (pro-automation or anti-AI)
- Unique or novel suggestions
- Contradictory individual positions
- Unusual use cases or requirements

### 4. Implications for AI Tool Design
Actionable design guidance including:
- **Key "must haves"**: Features developers prioritize and expect
- **Key "must not haves"**: Design anti-patterns and guardrails
- Optional design patterns or recommendations

### 5. Executive Summary
- High-level overview of main findings
- Short summary with concrete recommendations

---

## Key Terminology and Concepts

### Human-in-the-Loop (HITL)
A recurring requirement where AI suggests actions but humans make final decisions. Critical for high-stakes tasks.

### Explainability and Provenance
Developers consistently demand that AI show its reasoning, cite evidence (logs, stack traces, code), and make outputs verifiable.

### Hallucinations
AI-generated outputs that are confidently incorrect—a major trust barrier mentioned frequently.

### Shift-Left
Catching issues earlier in development (e.g., real-time bug detection while coding vs. post-deployment debugging).

### Agentic AI
AI systems with autonomous capability to execute actions (not just suggest). Developers generally express caution about granting agents control over production systems.

### Toil Reduction
Automating repetitive, low-cognitive-load tasks to free developers for higher-value work.

---

## Understanding Participant Counts

**Important Note**: Participant counts are:
- Approximate (rounded to nearest 5)
- **Overlapping** - participants often mentioned multiple themes
- Not mutually exclusive between categories
- Indicators of theme prevalence, not statistical precision

Example: If Theme A shows ~95 participants and Theme B shows ~80 participants, there's likely significant overlap—many developers mentioned both themes.

---

## Common Patterns Across Reports

### Where Developers Want AI
1. **Repetitive, low-risk tasks**: Test generation, boilerplate code, routine configurations
2. **Information synthesis**: Log analysis, documentation search, code explanation
3. **Accelerating existing workflows**: Faster PR creation, automated triage, initial draft generation
4. **Learning and discovery**: Understanding unfamiliar code, exploring new technologies

### Where Developers Don't Want AI
1. **Critical/high-stakes decisions**: Security fixes, production incidents, architectural choices
2. **Complex reasoning requiring tacit knowledge**: Deep debugging, system design, performance optimization
3. **Tasks involving accountability**: Customer-facing decisions, compliance, legal implications
4. **Learning opportunities**: Tasks that build developer skills and understanding

### Cross-Cutting Concerns
1. **Trust and reliability**: AI must be accurate and honest about uncertainty
2. **Control and agency**: Developers want final decision-making power
3. **Transparency**: Understand how AI reached conclusions
4. **Context awareness**: AI must understand project-specific conventions and constraints
5. **Security and privacy**: Protect sensitive code and data

---

## Methodological Context

### Survey Questions
Developers were asked three open-ended questions:
1. **want_AI**: "Where do you want AI support in your daily work?"
2. **not_want_AI**: "Where do you NOT want AI support?"
3. **why_top_features**: "Why did you rank those features as most important?"

### Analysis Process
1. Responses were read and coded for recurring ideas
2. Codes were grouped into coherent themes
3. Themes were validated with participant counts and confidence assessments
4. Representative quotes were selected to illustrate each theme
5. Cross-cutting patterns and design implications were synthesized

### Qualitative Nature
These reports represent **qualitative analysis**, not statistical findings:
- Themes emerge from patterns in text, not predefined categories
- Confidence levels reflect researcher judgment
- Quotes are illustrative, not exhaustive
- Findings are interpretive, grounded in data but involving analytical judgment

---

## Design Implications for the Report Viewer

### Navigation Context
Reports are organized hierarchically:
- **Category** (e.g., Development, Quality & Risk Management)
- **Task** (e.g., Bug Fixing/Debugging, Testing & QA)
- **Report** (qualitative analysis for that specific task)

This matches how developers conceptualize their work—by task type and domain.

### Reading Experience Considerations
1. **Long-form content**: Reports are substantial documents requiring good typography and readability
2. **Quote emphasis**: Participant quotes are crucial evidence—format clearly with attribution
3. **Hierarchy navigation**: Table of contents essential for scanning and jumping between sections
4. **Cross-referencing**: Readers may want to compare similar themes across different task reports

### Audience
- Researchers analyzing developer preferences
- AI tool designers seeking user requirements
- Product managers planning AI features
- Developers curious about peer attitudes toward AI

---

## Report Metadata

Each report includes:
- **Task name**: The specific task being analyzed
- **Task category**: Parent category (development, quality_risk, etc.)
- **Generation date**: When the analysis was completed
- **Number of participants**: Total participants who provided responses for this task

This metadata helps readers assess recency and sample representation.

---

## Key Takeaways for Implementation

1. **Preserve structure**: The consistent report structure (Core Themes → Cross-Cutting → Outliers → Implications → Summary) is intentional and aids comprehension
2. **Emphasize quotes**: Participant voice is central—ensure blockquotes are visually prominent
3. **Support deep reading**: Reports are meant to be read thoroughly, not skimmed—optimize for sustained reading
4. **Enable comparison**: Researchers may want to view multiple reports—consider how navigation supports comparative analysis
5. **Maintain academic tone**: Clean, professional design befitting research publication
6. **Accessibility**: Reports contain valuable insights for practitioners—make navigation intuitive for non-researchers

---

## Additional Context

The reports serve multiple purposes:
1. **Academic publication**: Supporting evidence for research claims
2. **Tool design guidance**: Actionable requirements for AI tool builders
3. **Industry insights**: Understanding developer attitudes at scale
4. **Policy and strategy**: Informing organizational AI adoption decisions

The viewer should support all these use cases while maintaining the integrity and richness of the qualitative analysis.
