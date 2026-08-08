# Project status

> Public dashboard: **[Together We Will implementation progress](https://rohandhameja.github.io/tww-salesforce-implementation/)**

Last updated: 2026-08-08

Current phase: **Phase 0 — Security and delivery foundation**
Status: **In progress**

## Done

- Connected and verified the `twwdev` sandbox.
- Reviewed the role hierarchy, CRUD matrix, user stories, license list, and change requests.
- Confirmed the 10-internal-license constraint.
- Verified the approved eight-role hierarchy.
- Audited the `twwdev` data model and existing automation, Apex, Lightning components, reports, and dashboards.
- Completed a read-only Account review covering record types, field usage, duplicate controls, PAN access, automation, layouts, and the Lightning record page.
- Published a business-friendly Account review and a tracked register of 12 open questions.
- Created a living data-model document with current relationships, proposed additions, conflicts, and pending decisions.
- Established the implementation repository, roadmap, worklogs, and decision templates.
- Agreed on UX-first and headless React principles.

## In progress

- Security-model normalization
- Named allocation of the 10 internal licenses
- Salesforce metadata retrieval and repository baseline
- Existing website and headless architecture assessment
- User-story and acceptance-criteria normalization
- Business validation of Account categories, status, monthly commitments, email, PAN, duplicates, ownership, and persona-based screens

## Next decisions

- Sensitive-data protection policy
- Approved answers to the [`Account open-question register`](docs/decisions/account-open-questions.md)
- Approved license allocation
- React versus Salesforce-native boundaries
- Final Phase 1 backlog

Detailed evidence is maintained in [`docs/worklog`](docs/worklog), and phase plans are maintained in [`docs/phases`](docs/phases).
