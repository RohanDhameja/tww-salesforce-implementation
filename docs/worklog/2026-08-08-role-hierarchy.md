# Worklog — Role hierarchy review and correction

## Date

2026-08-08

## Phase

Phase 0 — Security and delivery foundation

## Environment

`twwdev` development sandbox

## Objective

Compare the requested organizational hierarchy with the configured Salesforce roles and correct approved parent relationships.

## Work performed

1. Queried all `UserRole` records read-only.
2. Confirmed eight operating roles existed.
3. Initially interpreted the workbook's `Together We Will Foundation` organization-root row as a requested Salesforce role and created a role with that name.
4. Identified that Salesforce already displays the organization name as the hierarchy heading, making the new role unnecessary.
5. Verified that the added role had no assigned users and only `Chairman CEO` as a child.
6. Restored `Chairman CEO` as the highest actual role and removed only the unnecessary role.
7. Changed `Program Director` to report to `Marketing Admin`.
8. Verified `Volunteer Coordinator` remained under `Program Director`.
9. Audited all eight role names and parent relationships.

## Final verified hierarchy

```text
Chairman CEO
├── CFO
│   └── Finance Admin
└── COO
    ├── Marketing Admin
    │   └── Program Director
    │       └── Volunteer Coordinator
    └── Security Admin
```

## Impact

- Role hierarchy only.
- No user assignments, profiles, permission sets, object permissions, field permissions, or sharing rules were changed.

## Validation

- Queried `UserRole` names, IDs, and parent roles after correction.
- Confirmed eight roles with no duplicate foundation role.
- Confirmed the requested Program Director and Volunteer Coordinator chain.

## Follow-up

- Audit current user-to-role assignments.
- Normalize CRUD, field security, sharing, and permission-set design.
- Complete the 10-license allocation.
