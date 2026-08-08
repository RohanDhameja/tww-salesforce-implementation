# Salesforce role hierarchy

## Approved hierarchy

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

Salesforce automatically displays the organization name, `Together We Will Foundation`, above the actual role hierarchy. It is not represented by an additional Salesforce role.

## Verified `twwdev` state

Verified on 2026-08-08:

| Role | Parent role |
|---|---|
| Chairman CEO | None |
| CFO | Chairman CEO |
| Finance Admin | CFO |
| COO | Chairman CEO |
| Marketing Admin | COO |
| Program Director | Marketing Admin |
| Security Admin | COO |
| Volunteer Coordinator | Program Director |

## Important distinction

Roles primarily influence record visibility through the hierarchy. Object CRUD and field-level security must be delivered through profiles, permission sets, and permission-set groups. Organization-wide defaults and sharing mechanisms control the baseline and exceptions for record access.
