# Report of Qualitative Analysis for Customer Support (Category: Infrastructure Operations)

This report is an AI-generated synthesis of manually coded survey responses from software developers about AI usage in Customer Support within Infrastructure Operations. I preserved the research team's thematic structure and codes, summarized participant quotes, and analyzed patterns and implications. The approach was to integrate each code's description and representative quotes into coherent narratives, identify tensions across themes, and surface actionable design guidance for AI tools in this domain.

---

## 1) Core Themes

### A. Where AI is Wanted

#### Theme: Triage, deflection & rep co-pilot for known issues
Researchers coded this theme as: Use AI behind the scenes to reduce toil: parse tickets/logs, screen & bucket, detect patterns, auto-reply to FAQs/self-service, and assist reps.

Participants envision AI as a behind-the-scenes workhorse that reduces repetitive labor and speeds resolution of familiar issues. The core use is automated intake: an AI that "look[s] at customer support request text and logs and make [s] screening, bucketing, and triage decisions based on the content" (PID89). This is framed as a productivity and scale play — by detecting common patterns such as permission errors or recurring configuration problems, AI could route or even reply to well-known requests, freeing humans for more complex work. Boundaries are implicit: participants focus on known issues and repetitive questions where automation reduces toil rather than replacing human judgment.

The desired outcomes are faster first-response, more accurate ticket routing, and higher self-service deflection. One participant explicitly hoped AI "can detect common pattern of our customer request triaging and reply to customer directly" (PID114), emphasizing both detection and safe, limited automation. Participants expect the AI to be accurate enough to avoid harm but primarily to operate as a triage and deflection layer.

**Representative quotes**:
- *"If an AI agent could actually look at customer support request text and logs and make screening, bucketing, and triage decisions based on the content, that would be super helpful."* (Participant PID89)
- *"we got a lot of repetitive customer question, like permission issue. I hope AI can detect common pattern of our customer request triaging and reply to customer directly."* (Participant PID114)
- *"Customer service: Self-service for well-known issues; Be an assistant for customer service reps."* (Participant P195)

#### Theme: Process customer requests
Researchers' coding contains no separate description beyond included quotes; the emphasis in participant comments mirrors triage and deflection: AI that can process incoming customer requests end-to-end for routine cases.

This theme reinforces the desire for AI that can take structured action on customer requests — not merely label them. Participants imagine AI parsing free-text descriptions and associated logs to determine next steps, such as initiating routine fixes, providing targeted documentation links, or escalating appropriately. The motivation is operational efficiency: many tickets are repetitive and ripe for automation. The same participant rationale appears across codes: reduce manual triage effort and enable faster resolution.

Participants again limit the expectation to routine or patterned requests rather than bespoke engagements: the hope is for "screening, bucketing, and triage decisions based on the content" with the AI acting as a first-pass processor (PID89, PID114).

**Representative quotes**:
- *"If an AI agent could actually look at customer support request text and logs and make screening, bucketing, and triage decisions based on the content, that would be super helpful."* (Participant PID89)
- *"we got a lot of repetitive customer question, like permission issue. I hope AI can detect common pattern of our customer request triaging and reply to customer directly."* (Participant PID114)
- *"Customer service: Self-service for well-known issues; Be an assistant for customer service reps."* (Participant P195)

#### Theme: AI for customer reps
Researchers coded this as: (no separate description provided in the manual coding).

This theme focuses on AI as a knowledge and productivity assistant for human agents rather than a substitute. Examples include code-completion-like help ("Coding: Be a coding assistant" — PID195) and surfacing relevant knowledge-base entries or alerting reps to metric aberrations (PID401). The motivation is to enable human reps to work faster and more accurately: AI can suggest resolutions, draft responses, and highlight anomalies requiring attention.

Participants expect these tools to be augmentative — improving throughput and catching exceptions — while leaving judgment and customer-facing actions to humans. The desired outcomes are reduced context-switching for reps, quicker drafting of technically accurate responses, and proactive detection of service issues.

**Representative quotes**:
- *"Coding: Be a coding assistant"* (Participant PID195)
- *"Helping with Customer Service through knowledge bases and flagging aberrations in metrics"* (Participant PID401)
- *"Customer service: Self-service for well-known issues; Be an assistant for customer service reps."* (Participant P195)

#### Theme: Find patterns in metrics
Researchers coded this as: (no separate description provided in the manual coding).

Participants also want AI to operate on quantitative signals — detecting anomalies in support-related metrics or surfacing systemic problems from telemetry. PID401 described "flagging aberrations in metrics" as a support function, which complements text-based triage by revealing outages, regressions, or trends that warrant mass communication or prioritization. The motivation is proactive support: using AI to connect customer reports with operational metrics to reduce mean time to detection and resolution.

This capability is positioned as an enabling input for both automated triage and human decision-making: pattern detection can trigger bulk communications, create high-priority tickets, or provide evidence for escalation, but participants imply humans should validate major customer communications driven by metric-based triggers.

**Representative quotes**:
- *"Helping with Customer Service through knowledge bases and flagging aberrations in metrics"* (Participant PID401)
- *"Customer service: Self-service for well-known issues; Be an assistant for customer service reps."* (Participant P195)
- *"we got a lot of repetitive customer question, like permission issue. I hope AI can detect common pattern of our customer request triaging and reply to customer directly."* (Participant PID114)

---

### B. Where AI is Not Wanted

#### Theme: Human-led frontline support (empathy, control, brand)
Researchers coded this as: Customer-facing interactions should feel human; avoid friction and brand risk. AI can assist passively, but a human must retain final send/approval.

Participants strongly emphasize that customer-facing conversations are sensitive to tone, brand, and empathy. Multiple respondents find being forced into AI interactions frustrating and fear automated replies will degrade product support quality or damage brand trust. For example, one participant said, "As a customer, being forced to an AI is frustrating. I would prefer the AI tooling to be passive, but provide me ... prompts on suggested resolutions or ways forward" (PID2). Another warned that "AI should not be handling customer support. Pushing this role to AI will cause customers frustration via generated responses and reduce the quality of our product support" (PID41).

The boundary is clear: passive assistance (suggestions, drafts, or background triage) is acceptable, but AI-driven visible interactions must not replace human-fronted support. Participants demand human control over final communications — "AI cannot hit the ‘send message’ button: I as a human must pull the trigger" (PID62) — to protect customer experience and brand integrity.

**Representative quotes**:
- *"Customer support. As a customer, being forced to an AI is frustrating. I would prefer the AI tooling to be passive, but provide me ... prompts on suggested resolutions or ways forward."* (Participant PID2)
- *"AI should not be handling customer support. Pushing this role to AI will cause customers frustration via generated responses and reduce the quality of our product support."* (Participant PID41)
- *"AI cannot hit the ‘send message’ button: I as a human must pull the trigger (be it even to bulk messages)."* (Participant PID62)

#### Theme: Contextual customer engineering (not automatable)
Researchers coded this as: Deeply contextual, bespoke work with customer teams requires human expertise and judgment.

Participants draw a firm line around bespoke, high-touch support that involves deep engineering collaboration with customer teams. One respondent emphasized that their role is "hands-on-keyboard" and involves daily work with customer development teams and leadership, which "cannot be done by AI" (PID393). The concern is that these engagements require judgment, domain expertise, and human relationships that AI cannot replicate.

The feared outcome is misalignment or harm from offloading nuanced, context-rich work to automation. Participants want AI to assist with routine tasks but not to replace the human expertise needed for tailored implementations, escalations, or negotiated solutions.

**Representative quotes**:
- *"The customer support that I provide cannot be done by AI. I work directly with the customer's development team and leadership every day to develop the solutions that operate within their Azure environments. It's a hands-on-keyboard role."* (Participant PID393)
- *"Customer support. As a customer, being forced to an AI is frustrating. I would prefer the AI tooling to be passive..."* (Participant PID2)
- *"We need to work on its accuracy in the context of customer support as it is directly interacting with humans which can cause errors to negatively affect the product brand directly."* (Participant P269)

#### Theme: Humans handle customers
Researchers coded this as: (no separate description provided in the manual coding).

This theme reinforces the preference for humans as the primary face of support. Participants expressed that AI should be a background assistant offering prompts or suggested next steps, not the primary interlocutor. The recurring view is that human interaction preserves quality and prevents frustration; "I would prefer the AI tooling to be passive, but provide me ... prompts" (PID2) encapsulates this stance. The implied boundary is that AI-generated outputs should be mediated by humans before reaching customers.

**Representative quotes**:
- *"Customer support. As a customer, being forced to an AI is frustrating. I would prefer the AI tooling to be passive..."* (Participant PID2)
- *"AI should not be handling customer support. Pushing this role to AI will cause customers frustration..."* (Participant PID41)
- *"The customer sensitive interactions are always nice when it feels like you are still dealing with humans, I don't want AI to input here."* (Participant P170)

#### Theme: Human oversight
Researchers coded this as: (no separate description provided in the manual coding).

Participants explicitly call for human approval and final control over customer-facing actions. The clearest articulation is "AI cannot hit the 'send message' button: I as a human must pull the trigger" (PID62). This demand for human-in-the-loop governance stems from concerns about accuracy, brand risk, and accountability. Even when AI drafts replies or recommends actions, human oversight is non-negotiable for outbound communications, bulk messaging, or escalation decisions.

This theme codifies the operational constraint that AI may be empowered to propose but not to execute customer communications without explicit human consent.

**Representative quotes**:
- *"AI cannot hit the 'send message' button: I as a human must pull the trigger (be it even to bulk messages)."* (Participant PID62)
- *"I hate the idea of AI becoming another screen for customer support and adding friction there, but we also don't fund customer support enough..."* (Participant P89)
- *"We need to work on its accuracy in the context of customer support as it is directly interacting with humans which can cause errors to negatively affect the product brand directly."* (Participant P269)

---

## 2) Cross-Cutting Patterns

- Complementary desires and concerns: Participants consistently want AI to reduce repetitive toil (triage, deflection, knowledge surfacing, metric pattern detection) while simultaneously fearing AI-mediated customer-facing interactions that could harm brand or experience. The "want" side emphasizes backend automation and rep augmentation; the "don't want" side insists on human primacy for visible interactions.

- Conditional acceptance: Acceptance is strongly conditional. Developers prefer AI for routine, well-patterned tasks (screening, bucketing, auto-responding to FAQs) and for internal assistance (drafts, knowledge retrieval, anomaly detection). They reject full automation for nuanced, bespoke, or customer-facing tasks unless there is explicit human oversight and the AI's accuracy is proven.

- Task-specific nuances: Customer Support is a hybrid of text/telemetry analysis and social/empathic interaction. This duality explains why participants seek metric and log-driven automation (because those are objectively analyzable) but resist automated conversational replacements (because those require empathy, relationship management, and brand alignment).

- Trust and control dynamics: Trust is earned through predictable accuracy and human-in-the-loop controls. Participants repeatedly demand that humans retain the final "send" action and that AI be used as a suggestive layer. Control mechanisms (approval workflows, transparency about AI-sourced suggestions, clear provenance of recommendations) are central to any acceptable design.

---

## 3) Outliers and Edge Cases

- Minority perspectives: A few responses emphasize more optimistic automation — explicitly asking for AI that can reply directly to customers for common problems (PID114). This view is a minority relative to those insisting on human final approval.

- Unique insights: The combination of coding assistance and customer support augmentation (PID195) highlights crossover opportunities where AI that helps engineers could be repurposed to assist support agents with technical diagnostics and response drafting.

- Ambivalent responses: Some participants express tension in the same quote — they dislike AI as a customer-facing screen but also acknowledge under-resourced support teams (P89). This ambivalence suggests pragmatic openness to automation under strong guardrails.

- Internal contradictions: Several participants appear in both "want" and "don't want" lists — indicating that the same person may want AI for triage and internal assistance but not for outbound messaging. This is not contradictory but reflects nuanced, context-dependent acceptance.

---

## 4) Implications for AI Tool Design

High-level synthesis: Developers want AI tools that automate routine analysis and augment human agents, but they require strong human-in-the-loop controls for any customer-facing output. Tools should prioritize reliability, provenance, and explicit approval paths; they should operate as background copilots that increase throughput without replacing human judgment in sensitive interactions.

#### Key "Must Haves" (features designers should prioritize)

- **Triage & deflection automation**
  - Capability: Automated parsing of request text and attached logs to screen, bucket, and prioritize tickets; suggested auto-responses for well-known FAQs.
  - Rationale: Participants explicitly want AI that can "make screening, bucketing, and triage decisions" to reduce toil (PID89, PID114).
  - Example: Provide a suggested resolution and confidence score for routine permission issues so agents can accept or edit before sending.

- **Rep co-pilot for drafting & knowledge retrieval**
  - Capability: Draft response suggestions, surface relevant KB articles and configuration steps, and offer code or command snippets for technical replies.
  - Rationale: Participants asked for "Be an assistant for customer service reps" and coding-style assistance (PID195, PID401).
  - Example: When a ticket mentions a specific error, surface matching KB articles and a draft reply that the agent can edit.

- **Metric and anomaly detection integration**
  - Capability: Correlate tickets with telemetry and flag aberrations in metrics to prioritize incidents and recommend mass communications or escalations.
  - Rationale: "Flagging aberrations in metrics" was cited as useful for proactive customer support (PID401).
  - Example: Link spike in errors to a reported outage and surface suggested triage steps.

- **Human-in-the-loop workflow controls**
  - Capability: Require explicit human approval for outbound messages, bulk sends, or escalation decisions; show provenance and confidence scores.
  - Rationale: Participants insisted "AI cannot hit the 'send message' button" and wanted passive assistance (PID62, PID2).
  - Example: Provide an "approve and send" step where the agent reviews suggested text and related evidence before dispatch.

#### Key "Must Not Haves" (design guardrails)

- **No fully autonomous customer-facing replies**
  - Risk: Automated visible replies can frustrate customers and damage brand trust.
  - Rationale: Multiple participants warned against AI handling customer support end-to-end (PID41, P269).
  - Example: Disallow systems that automatically reply to customer tickets without human approval.

- **Do not replace contextual customer engineering**
  - Risk: Loss of domain expertise and relationship management in bespoke engagements.
  - Rationale: Complex, hands-on engineering work "cannot be done by AI" (PID393).
  - Example: Prevent routing of high-touch, account-specific technical engagements to automated flows.

- **Avoid opaque decision-making**
  - Risk: Agents won't trust or use AI if recommendations lack provenance or confidence metrics.
  - Rationale: Participants want accuracy and control; opacity undermines both (P269, PID62).
  - Example: Include clear citations to KB articles, logs, or metric anomalies that informed a suggestion.

- **Do not introduce extra friction in the agent UX**
  - Risk: AI as "another screen" that increases workload rather than reduces it.
  - Rationale: One participant warned against AI adding a new layer of friction (P89).
  - Example: Integrate suggestions into existing agent workflows rather than forcing context switches.

---

## Executive Summary

- Developers want AI to automate triage, deflection, and behind-the-scenes processing of routine customer requests to reduce repetitive work and speed resolution.
- Developers do not want AI to replace human-fronted support or to autonomously send customer-facing messages; human approval and empathy are essential.
- Critical design implication: prioritize human-in-the-loop workflows, transparency (provenance/confidence), and augmentation features (drafting, KB surfacing, metric correlation).
- Critical design implication: disallow fully autonomous outbound messaging and avoid automating bespoke, contextual engineering engagements.
- Notable tension: teams are resource-constrained and pragmatic — they welcome automation for scale but only under strict guardrails to protect brand and customer experience.
- Forward-looking recommendation: build modular AI copilots that operate on logs and metrics to propose actions, surface evidence, and require explicit human approval before any customer-facing execution.