# TWW application interface design brief

- **Status:** Draft for internal and business review
- **Phase:** Phase 0 — Foundation
- **Last updated:** 2026-08-08
- **Related artifact:** [`wireframes.md`](wireframes.md)

## Purpose

This brief defines the intended experience for the Together We Will application before development begins. It gives the business team, designers, and developers a shared view of who the application serves, what users need to accomplish, and how the experience should behave.

This document does not approve the Account data model, change Salesforce, or replace any existing functionality. Open Account questions remain in the [`Account open-question register`](../decisions/account-open-questions.md).

## Experience outcome

The application should help a TWW team member answer three questions quickly:

1. What needs my attention?
2. Who is this person or organization, and how are they connected to TWW?
3. What is the next appropriate action?

The experience should use business language instead of Salesforce terminology. Users should not need to understand objects, record types, flows, or permission sets to complete their work.

## Confirmed design principles

- End-user experience is as important as functional completeness.
- Mobile, tablet, and desktop experiences must be usable and responsive.
- Accessibility, clear validation, and recovery from errors are required.
- Salesforce remains the secure system of record and process engine.
- React may be used where it materially improves usability, accessibility, performance, brand control, or reuse.
- Existing journeys remain available until an approved replacement reaches functional parity.
- Sensitive information is shown only to authorized users and is masked by default where appropriate.
- The solution must respect the limit of 10 internal Salesforce user licenses.

## Primary internal users

The role names below are already reflected in the approved role hierarchy. Their exact permissions and named-user assignments remain subject to the security and licensing work.

| User group | Primary needs from the interface |
| --- | --- |
| Chairman CEO | Organizational overview, exceptions, approvals, and outcome reporting |
| CFO | Donation, commitment, expense, reconciliation, receipt, and financial visibility |
| Finance Admin | Daily finance processing, data checks, follow-ups, and documentation |
| COO | Cross-program operations, workload, exceptions, and approvals |
| Marketing Admin | Partner and supporter engagement, communications, and campaign visibility |
| Program Director | Program delivery, projects, beneficiaries, volunteers, and operational follow-up |
| Security Admin | Access, audit, sensitive-data controls, and security exceptions |
| Volunteer Coordinator | Volunteer intake, onboarding, availability, assignment, and follow-up |

Not every employee requires a Salesforce login. An employee may have an Account and Employee record without consuming one of the 10 internal user licenses. A licensed User is required only when that employee must sign in.

## Priority user journeys

These journeys should guide the first interface designs and later usability testing.

### 1. Find a person or organization

The user searches by name, email, phone, PAN, organization name, or another approved identifier. The application should help prevent duplicate records and show likely matches before a new record is created.

### 2. Understand the complete TWW relationship

The user opens one Account and sees the person's or organization's category, active relationships, recent activity, financial summary, program participation, documents, and outstanding follow-ups in one place.

### 3. Record and follow up on a donation

An authorized user finds the donor, records the donation through the approved process, checks any commitment or receipt requirement, and sees the resulting history on the Account.

### 4. Register and onboard a volunteer

The user reviews an application, checks for an existing person, completes verification, activates the volunteer relationship, and records the next onboarding step.

### 5. Assign a volunteer to a project

The user sees availability and relevant history, selects a project or activity, records the assignment, and communicates the next step.

### 6. Review work requiring attention

Each user starts from a role-relevant work queue showing overdue follow-ups, pending approvals, missing information, exceptions, and upcoming commitments.

## Overall application structure

### Primary navigation

The proposed first-level navigation is:

- Home
- People & Organizations
- Donations
- Volunteers
- Programs & Projects
- Finance
- Reports
- Administration — visible only to authorized users

This is a UX proposal, not a commitment to create new Salesforce objects. Each area may use existing standard or custom objects and automation.

### Persistent application tools

- Global search
- Context-aware **Create** action
- Notifications and approvals
- Help and guidance
- Recently viewed records
- User profile

### Role-based home page

The home page should use a common layout but change its content according to the user's responsibilities and access. It should include:

- work requiring attention;
- key numbers relevant to the user;
- quick actions;
- recent people and organizations;
- upcoming work; and
- approvals or exceptions.

The application should not create completely separate products for each role. A shared shell and component system will reduce training, development, and support effort.

## Account experience

### Design intent

The Account page should tell one complete story about a person, organization, or household. It should avoid a long list of fields and surface the information most useful for the current user's task.

### Account header

The header should show:

- name and photograph or organization logo;
- category: Individual, Organization, or Household, subject to business approval;
- one or more TWW relationship badges, subject to business approval;
- Account status;
- owner or responsible team;
- primary phone and email; and
- important alerts.

### Main Account sections

1. **Overview** — key details, relationships, summaries, alerts, next actions, and recent activity.
2. **Relationships** — each TWW relationship with its own status, dates, responsibility, and history.
3. **Activity** — calls, emails, meetings, notes, and follow-ups.
4. **Donations & Finance** — commitments, donations, receipts, expenses, and relevant financial information.
5. **Programs & Volunteering** — applications, assignments, participation, availability, and outcomes.
6. **Documents** — agreements, receipts, identity or tax documents, and other approved files.

Only relevant sections and authorized information should be displayed. Empty or inaccessible sections should not distract the user.

### Context-aware actions

Actions should depend on both the Account and the logged-in user's permissions. Candidate actions include:

- Record donation
- Add relationship
- Assign to project
- Record interaction
- Create follow-up
- Upload document
- Edit approved details

The labels should describe the business action. The interface should not expose technical operation names.

## Representative example

If Rahul Sharma is an Individual who is both a Donor and a Volunteer, the proposed experience displays:

- one Account for Rahul Sharma;
- a Donor relationship summary;
- a Volunteer relationship summary;
- donation transactions in the financial area;
- volunteer applications and assignments in the volunteering area; and
- one combined activity timeline.

This example illustrates the current proposed direction. It does not resolve the open business decisions or authorize creation of a relationship object.

## Interface states that must be designed

Every priority screen must include more than the ideal success state:

- loading;
- no results or no activity;
- incomplete information;
- possible duplicate;
- missing permission;
- validation error;
- temporary service error; and
- successful completion with a clear next step.

## Existing-functionality boundary

The first designs and prototypes will not change the existing Salesforce implementation. Later working interfaces should be introduced alongside current screens and should reuse existing objects, automation, duplicate controls, validations, and approval processes where they remain suitable.

Before a new interface performs a create or update action, the team must document:

- the Salesforce records involved;
- existing automation and validation triggered;
- permission and sensitive-data requirements;
- duplicate behavior;
- error and recovery behavior;
- audit expectations; and
- parity tests against the current process.

## Information still needed

The following decisions affect final content but do not block low-fidelity design:

- approved Account categories and relationship model;
- Account status values and lifecycle rules;
- commitment fields and definitions;
- PAN and other sensitive-data requirements;
- duplicate matching and resolution behavior;
- Account ownership by team;
- exact information and actions required by each user group;
- final allocation of the 10 internal licenses; and
- final React, Salesforce-native, identity, API, and hosting boundaries.

## Proposed validation sequence

1. Review this brief with TWW leadership and representative users.
2. Review the low-fidelity wireframes.
3. Select one representative user from Finance, Programs, and Volunteer Coordination.
4. Walk through the priority journeys using realistic examples.
5. Record feedback and unresolved decisions.
6. Produce a clickable prototype after the structure is approved.
7. Complete a technical impact assessment before implementation.

## Approval record

| Review area | Business owner | Status | Notes |
| --- | --- | --- | --- |
| Overall navigation | COO | Pending | |
| Finance home-page needs | CFO / Finance Admin | Pending | |
| Program home-page needs | Program Director | Pending | |
| Volunteer home-page needs | Volunteer Coordinator | Pending | |
| Account overview structure | Cross-functional | Pending | Depends on Account decisions |
| Sensitive information presentation | CFO / Security Admin | Pending | |
