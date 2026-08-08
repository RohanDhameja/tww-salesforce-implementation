# Account open-question register

**Status:** Open for business validation  
**Opened:** 2026-08-08  
**Phase:** Phase 0 — Foundation  
**Source review:** [`Account review for business validation`](../requirements/account-review.md)

## How to use this register

Each question remains here after it is answered so the project retains a clear decision history.

- `Open` — the business team has not provided an approved answer.
- `In review` — a named owner is reviewing the question.
- `Approved` — the answer and approval date have been recorded.
- `Implemented` — the approved answer has been built and verified.

Do not begin a related data migration or irreversible configuration change while its question is still open.

## Summary

| ID | Business question | Suggested approach | Proposed owner | Status |
|---|---|---|---|---|
| AQ-001 | Which Account categories should TWW use? | Use a small, approved list of person and organization categories | Program and Finance | Open |
| AQ-002 | Can one person be both a donor and a volunteer? | Keep one person and show both relationships | Program | Open |
| AQ-003 | Which Account status field and values should be used? | Keep one status field with a short approved list | Operations | Open |
| AQ-004 | What does a monthly commitment mean? | Record one monthly amount and a clear lifecycle | Finance | Open |
| AQ-005 | Which email should receive organization messages and receipts? | Identify an organization email and a primary contact | Finance and Marketing | Open |
| AQ-006 | Which Account categories require PAN? | Require PAN only where there is a legal or receipt need | Finance | Open |
| AQ-007 | Who may see and update the complete PAN? | Give complete access only to specifically approved Finance or Security users | Finance and Security | Open |
| AQ-008 | How should Salesforce identify a possible duplicate? | Use appropriate combinations of email, phone, PAN, GSTIN, and name | Operations | Open |
| AQ-009 | Should a clear duplicate be blocked? | Block clear matches and review uncertain matches | Operations | Open |
| AQ-010 | Which team owns each Account category? | Assign one responsible team for every category | Leadership | Open |
| AQ-011 | Should Donor Type remain separate from Account Category? | Use Donor Type only for actual donors | Finance and Program | Open |
| AQ-012 | Which fields should each user group see on the Account screen? | Use simple persona-based screens and least-privilege access | All business leads | Open |

## Question details

### AQ-001 — Account categories

**Question:** Are these the correct Account categories?

- Individual Donor
- Organization Donor
- Volunteer
- Vendor
- CSR Partner
- School/NGO Partner
- IT Partner
- Online Platform
- Household

**Example:** ABC Foundation should not be classified differently by Finance and the Program team.

**Suggestion:** Approve one list and provide a short definition and example for each category.

**Decision:** Pending  
**Approved by:** Pending  
**Decision date:** Pending  
**Development impact:** Record types, forms, reports, duplicate rules, and data cleanup.

### AQ-002 — A person with more than one relationship

**Question:** Can the same person be both a donor and a volunteer?

**Example:** Rahul volunteers at an event and also makes a monthly donation. Creating two records would split his history.

**Suggestion:** Keep one person record and show both relationships through the related donation and volunteer information.

**Decision:** Pending  
**Approved by:** Pending  
**Decision date:** Pending  
**Development impact:** Account design, volunteer conversion, duplicate checks, and reporting.

### AQ-003 — Account status

**Question:** Which status field and values should be used?

**Example:** A donor could appear Active in one field and blank or Inactive in another.

**Suggestion:** Keep one Account Status field. Candidate values are Active, Inactive, Pending Verification, On Hold, and Do Not Contact. The business must define when each value applies.

**Decision:** Pending  
**Approved by:** Pending  
**Decision date:** Pending  
**Development impact:** Field design, automation, forms, reporting, and data migration.

### AQ-004 — Monthly commitment

**Question:** Does Committed Amount mean a monthly amount or a total amount? Can a commitment be paused, ended, or connected to a project?

**Example:** A donor promises INR 5,000 per month for one year. Users need to know the amount, dates, payment status, and whether a missed payment needs follow-up.

**Suggestion:** Store one monthly amount, start date, optional end date, payment method, project where applicable, and Active/Paused/Completed/Stopped status.

**Decision:** Pending  
**Approved by:** Pending  
**Decision date:** Pending  
**Development impact:** Fields, scheduled reminders, reconciliation, reports, and donation journeys.

### AQ-005 — Organization email

**Question:** For an organization, which email should receive general communication and which should receive donation receipts?

**Example:** ABC Foundation has `info@example.org`, while its Finance Manager has a separate work email.

**Suggestion:** Identify the primary organization email, primary contact person, and receipt email. They may be the same, but the purpose must be clear.

**Decision:** Pending  
**Approved by:** Pending  
**Decision date:** Pending  
**Development impact:** Account and Contact forms, receipts, campaigns, and communication preferences.

### AQ-006 — When PAN is required

**Question:** Which Account categories and business events require PAN? Is PAN required before issuing an 80G receipt?

**Example:** An individual donor and a vendor may have different legal and receipt requirements.

**Suggestion:** Document the business or legal reason for PAN by Account category and make it required only at the correct point in the process.

**Decision:** Pending  
**Approved by:** Pending  
**Decision date:** Pending  
**Development impact:** Forms, validation, receipts, duplicate checking, and data cleanup.

### AQ-007 — Complete PAN access

**Question:** Who may enter, update, and view the complete PAN?

**Example:** A Volunteer Coordinator may need to know that PAN has been collected but may not need to see the complete value.

**Suggestion:** Most users see a masked value such as `******1234`. Complete access is granted only through a specifically approved permission set, likely for limited Finance and Security users.

**Decision:** Pending  
**Approved by:** Pending  
**Decision date:** Pending  
**Development impact:** Field security, permission sets, screens, auditing, and data protection.

### AQ-008 — Duplicate identification

**Question:** Which information should Salesforce use to identify an existing person or organization?

**Example:** ABC Foundation and ABC Foundation Trust may be the same organization if they share a GSTIN or PAN. Two people with the same name may still be different people.

**Suggestion:** Use different checks by category. Individuals can use email, phone, and PAN. Organizations can use name, GSTIN, PAN, phone, and address.

**Decision:** Pending  
**Approved by:** Pending  
**Decision date:** Pending  
**Development impact:** Search, matching rules, public forms, imports, and data cleanup.

### AQ-009 — What happens when a duplicate is found

**Question:** Should Salesforce block creation or allow a user to continue?

**Example:** An exact PAN match is strong evidence, while a similar organization name may need human review.

**Suggestion:** Block clear matches. Show possible matches for review and allow only an approved user to continue when appropriate.

**Decision:** Pending  
**Approved by:** Pending  
**Decision date:** Pending  
**Development impact:** User experience, approvals, imports, integrations, and duplicate reporting.

### AQ-010 — Account ownership

**Question:** Which team is responsible for maintaining each Account category?

**Example:** Finance may maintain donors and vendors, while the Program team maintains NGO partners and the Volunteer Coordinator maintains volunteers.

**Suggestion:** Name one responsible team for every category and define when ownership changes.

**Decision:** Pending  
**Approved by:** Pending  
**Decision date:** Pending  
**Development impact:** Ownership rules, sharing, queues, reports, and operating procedures.

### AQ-011 — Donor Type

**Question:** Should Donor Type remain separate from Account Category?

**Example:** A Vendor marked as an Individual donor may appear in the wrong report or communication.

**Suggestion:** Use Account Category to describe the main relationship. Keep Donor Type only if Finance needs a separate classification for actual donors.

**Decision:** Pending  
**Approved by:** Pending  
**Decision date:** Pending  
**Development impact:** Field retirement, record types, reports, automation, and data migration.

### AQ-012 — Account screen by user group

**Question:** What should Finance, Program, Marketing, Security, and Volunteer users see and update?

**Example:** A Finance user needs receipt and tax information. A Volunteer Coordinator needs availability and interests. Neither should search through unrelated fields.

**Suggestion:** Design simple persona-based screens. Sensitive fields remain hidden unless the user's work requires them.

**Decision:** Pending  
**Approved by:** Pending  
**Decision date:** Pending  
**Development impact:** Lightning pages, guided experiences, field security, permission sets, and acceptance testing.

## Decision log

| Date | ID | Change | Approved by | Evidence |
|---|---|---|---|---|
| 2026-08-08 | AQ-001–AQ-012 | Questions opened following the read-only Account review | Pending | [`Account review`](../requirements/account-review.md) |

