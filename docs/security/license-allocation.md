# License allocation

## Hard constraint

The solution currently has 10 internal Salesforce user licenses available for business and administrative users.

## Rules

- Do not create one licensed user for every user-story persona.
- Consolidate compatible personas through permission-set groups.
- Reserve administration access for the minimum number of users.
- Treat donors, volunteers, partners, and beneficiaries as records unless authenticated access is explicitly approved.
- Evaluate Experience Cloud or other external licensing separately; do not assume availability.
- Document the actual named-user allocation before user provisioning or access hardening.

## Allocation register

| Slot | Named user | Canonical persona | Salesforce role | Permission-set groups | Status |
|---:|---|---|---|---|---|
| 1 | TBD | Executive Leadership | Chairman CEO | TBD | Planning |
| 2 | TBD | Finance Leadership | CFO | TBD | Planning |
| 3 | TBD | Finance Operations | Finance Admin | TBD | Planning |
| 4 | TBD | Finance Operations | Finance Admin | TBD | Planning |
| 5 | TBD | Operations Leadership | COO | TBD | Planning |
| 6 | TBD | Marketing & Partnerships | Marketing Admin | TBD | Planning |
| 7 | TBD | Program Operations | Program Director | TBD | Planning |
| 8 | TBD | Program Operations | Program Director | TBD | Planning |
| 9 | TBD | Volunteer Operations | Volunteer Coordinator | TBD | Planning |
| 10 | TBD | System & Data Administration | Security Admin | TBD | Planning |

This table is a planning baseline, not an approved user assignment.
