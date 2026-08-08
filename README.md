# Together We Will Salesforce Implementation

This private repository is the source of truth for planning, building, securing, testing, and releasing the Together We Will Foundation Salesforce solution and its end-user web experiences.

## Guiding principles

- End-user experience is as important as functional completeness.
- Use a headless React experience where it materially improves usability, accessibility, performance, or brand consistency.
- Keep Salesforce as the secure system of record and process engine.
- Preserve and deliberately evolve the existing hosted website.
- Design around the hard constraint of 10 internal Salesforce user licenses.
- Apply least privilege and protect sensitive donor, bank, employee, beneficiary, PAN, Aadhar, and anonymous-identity data.
- Record every material decision and org change with date, phase, validation, and rollback notes.

## Environments

| Environment | Alias | Purpose |
|---|---|---|
| Development sandbox | `twwdev` | Configuration, development, integration, and validation |

Do not commit authentication URLs, access tokens, passwords, personal data, production exports, or unredacted sensitive documents.

## Repository map

- `docs/` — roadmap, decisions, security model, requirements, worklogs, and tests.
- `apps/web/` — future React end-user application.
- `packages/ui/` — future reusable design system.
- `salesforce/force-app/` — Salesforce metadata after the baseline and retrieval plan are approved.

## Working agreement

1. Associate work with a phase and user story, requirement, or decision.
2. Record the intended change before implementation.
3. Make the smallest reviewable change.
4. Validate positive and negative behavior.
5. Update the worklog and changelog.
6. Use pull requests for future Salesforce metadata and application changes.

## Current status

- Role hierarchy reviewed and corrected in `twwdev`.
- Security normalization and 10-license allocation remain in planning.
- Headless React and existing-site architecture require a current-state assessment.
- No Salesforce metadata has been retrieved into this repository yet.
