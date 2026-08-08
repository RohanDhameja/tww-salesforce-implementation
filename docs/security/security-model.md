# Security-model normalization

## Objectives

- Translate many story personas into a small set of canonical internal personas.
- Separate licenses, roles, profiles, permission sets, field security, and sharing.
- Protect sensitive data and avoid broad `Delete`, `View All`, and `Modify All` grants unless approved.

## Proposed canonical personas

- Executive Leadership
- Finance Leadership
- Finance Operations
- Operations Leadership
- Marketing & Partnerships
- Program Operations
- Volunteer Operations
- System & Data Administration
- Compliance as an additive permission bundle where feasible

## Mechanism ownership

| Mechanism | Responsibility |
|---|---|
| License | Available platform capabilities |
| Minimal profile | Login, application, tab, and baseline access |
| Permission set | Reusable feature, object, field, or system capability |
| Permission-set group | Job/persona access bundle |
| Role hierarchy | Upward record visibility |
| Organization-wide defaults | Default record boundary |
| Sharing rules and teams | Deliberate record-access expansion |
| Field-level security | Sensitive-field read/edit protection |
| Record type and page layout | Process and user-interface variation, not a security boundary |

## Required decisions

- PAN encryption, masking, and edit policy
- Bank-detail visibility and encryption
- Anonymous-donor identity visibility
- Employee and compensation access
- Beneficiary/student and Aadhar-document protection
- Data retention and deletion approvals
- External-user licensing and authentication
