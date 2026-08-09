# TWW application wireframes

- **Status:** Low-fidelity draft for discussion
- **Phase:** Phase 0 — Foundation
- **Last updated:** 2026-08-08
- **Design brief:** [`interface-design-brief.md`](interface-design-brief.md)

## How to read this document

These wireframes describe screen structure, information priority, and user flow. They are not final visual designs and do not change Salesforce.

The words, fields, actions, categories, and relationship values remain subject to business approval. The clickable prototype should be created only after the structure is reviewed.

## Wireframe 1 — Overall application shell

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ TWW                     Search people, organizations...   + Create   Alerts │
├──────────────────────┬───────────────────────────────────────────────────────┤
│ Home                 │                                                       │
│ People &             │                 Current screen                        │
│ Organizations        │                                                       │
│ Donations            │  Breadcrumb / screen title          Page actions      │
│ Volunteers           │  ─────────────────────────────────────────────────    │
│ Programs & Projects  │                                                       │
│ Finance              │  Main content                                         │
│ Reports              │                                                       │
│ Administration*      │                                                       │
│                      │                                                       │
│ Help                 │                                                       │
│ User profile         │                                                       │
└──────────────────────┴───────────────────────────────────────────────────────┘
*Displayed only when authorized
```

### Intended behavior

- Search and **Create** remain available throughout the app.
- Navigation uses business language.
- The current area is visually clear.
- On mobile, the left navigation becomes a menu; primary actions remain easy to reach.
- Sensitive or unauthorized areas are not displayed.

## Wireframe 2 — Role-based home page

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Good morning, Priya                                      Friday, 8 August    │
│ Here is what needs your attention.                                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ [ New Account ] [ Record Donation ] [ Add Follow-up ] [ Assign Volunteer ]  │
├───────────────────────┬───────────────────────┬──────────────────────────────┤
│ Needs attention       │ My work today         │ Key numbers                  │
│                       │                       │                              │
│ 3 possible duplicates │ 6 follow-ups          │ Active volunteers       42   │
│ 2 missing documents   │ 2 approvals           │ New applications        08   │
│ 1 overdue receipt     │ 1 project visit       │ Open assignments        05   │
│                       │                       │                              │
│ View work queue →     │ View my tasks →       │ View report →                │
├───────────────────────┴───────────────────────┼──────────────────────────────┤
│ Recent people and organizations               │ Upcoming                     │
│                                               │                              │
│ Rahul Sharma      Donor · Volunteer            │ Today   Project orientation  │
│ ABC Foundation    Donor · CSR Partner          │ Mon     Donor follow-up       │
│ Sunrise School    School/NGO Partner            │ Tue     Expense approval      │
└────────────────────────────────────────────────┴──────────────────────────────┘
```

### Role variations

| User group | Needs-attention examples | Suggested quick actions |
| --- | --- | --- |
| Finance | Unmatched donations, missing PAN where required, pending receipts, expense approvals | Record donation, issue receipt, review commitment |
| Programs | Project risks, incomplete beneficiary information, overdue follow-ups | Open project, record visit, add outcome |
| Volunteer Coordination | New applications, pending verification, unfilled assignments | Review application, activate volunteer, assign project |
| Leadership | Exceptions, approvals, program and financial indicators | Review exception, open report, approve item |

The final content must be validated with representative users. Numbers shown here are illustrative, not production data.

## Wireframe 3 — People and organizations search

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ People & Organizations                                      + Create new    │
│ Search before creating a new record.                                         │
├──────────────────────────────────────────────────────────────────────────────┤
│ [ Name, email, phone, PAN or organization...                         ] Search │
│ Filters: [ Category ▾ ] [ Relationship ▾ ] [ Status ▾ ] [ Owner ▾ ]         │
├──────────────────────────────────────────────────────────────────────────────┤
│ 50 results                                                                   │
│                                                                              │
│ Rahul Sharma          Individual     Donor · Volunteer      Active     Open → │
│ ABC Foundation        Organization   Donor · CSR Partner    Active     Open → │
│ Sunrise School        Organization   School/NGO Partner     Active     Open → │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Duplicate-prevention state

If a user selects **Create new** and likely matches exist, the application should pause and show the matches before allowing creation.

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Possible existing records found                                              │
│                                                                              │
│ Rahul Sharma   rahul@example.org   •••••• 4421   Donor · Volunteer          │
│                                                                              │
│ [ Open existing record ]                    [ Continue only if not the same ] │
└──────────────────────────────────────────────────────────────────────────────┘
```

The exact identifiers, matching rules, and override permissions depend on the Account business decisions.

## Wireframe 4 — Account overview

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ ‹ People & Organizations                                                     │
│                                                                              │
│ [Photo]  Rahul Sharma          Individual     Active                         │
│          Donor · Volunteer     Owner: Program Team                           │
│          rahul@example.org · +91 ••••• 12345                                 │
│                                                                              │
│ [ Record donation ] [ Assign to project ] [ Add follow-up ] [ More ▾ ]       │
├──────────────────────────────────────────────────────────────────────────────┤
│ Overview | Relationships | Activity | Donations & Finance | Programs | Files │
├──────────────────────────────────────┬───────────────────────────────────────┤
│ Attention                            │ Contact                               │
│ • Volunteer document expires soon    │ Email   rahul@example.org             │
│ • Next donor follow-up due Friday     │ Phone   +91 ••••• 12345               │
│                                      │ City    Jaipur                         │
├──────────────────────────────────────┼───────────────────────────────────────┤
│ TWW relationships                    │ Next actions                          │
│ Donor       Active · Since Apr 2025  │ Friday  Donor follow-up               │
│ Volunteer   Active · Since Jan 2026  │ Monday  Project orientation           │
│                     View all →        │                    View tasks →        │
├──────────────────────────────────────┼───────────────────────────────────────┤
│ Donation summary                     │ Volunteer summary                     │
│ Total received            ₹24,000    │ Status                    Active      │
│ Monthly commitment          ₹2,000    │ Current assignment        Project A   │
│ Last donation           02 Aug 2026  │ Hours this year                  18   │
├──────────────────────────────────────┴───────────────────────────────────────┤
│ Recent activity                                                              │
│ 02 Aug   Donation recorded · ₹2,000                                          │
│ 29 Jul   Volunteer orientation scheduled                                     │
│ 25 Jul   Phone call · Follow-up requested                                     │
│                                                        View full activity →   │
└──────────────────────────────────────────────────────────────────────────────┘
```

The monetary values and dates are illustrative. Final summaries depend on approved definitions and reliable source fields.

## Wireframe 5 — Account relationships

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Rahul Sharma / Relationships                              + Add relationship │
├──────────────────────────────────────────────────────────────────────────────┤
│ Donor                                                       Active           │
│ Started 01 Apr 2025 · Responsible team: Finance                               │
│ Latest donation 02 Aug 2026 · Next review 01 Apr 2027                         │
│ [ View donation history ] [ Edit relationship ]                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ Volunteer                                                   Active           │
│ Started 15 Jan 2026 · Responsible team: Programs                               │
│ Current assignment: Project A                                                 │
│ [ View assignments ] [ Edit relationship ]                                   │
└──────────────────────────────────────────────────────────────────────────────┘
```

This wireframe assumes the proposed one-Account/multiple-relationships model only for discussion. It does not authorize a custom relationship object.

## Wireframe 6 — Organization variation

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ [Logo]  ABC Foundation         Organization    Active                        │
│         Donor · CSR Partner    Owner: Partnerships Team                      │
│                                                                              │
│ Primary contact: Meera Patel            Tax ID: •••••• 1234                  │
│ [ Record donation ] [ Add contact ] [ Add follow-up ] [ More ▾ ]             │
├──────────────────────────────────────┬───────────────────────────────────────┤
│ Relationship summary                 │ Key contacts                          │
│ Organization Donor        Active     │ Meera Patel       CSR Lead            │
│ CSR Partner               Active     │ Arun Shah         Finance             │
├──────────────────────────────────────┼───────────────────────────────────────┤
│ Contributions and commitments        │ Programs supported                    │
│ Total received       ₹500,000         │ Education Program                     │
│ Current commitment   ₹100,000         │ Community Health Project              │
└──────────────────────────────────────┴───────────────────────────────────────┘
```

The Account page should adapt to category without becoming a completely different product. Individual, Organization, and Household screens should use the same design system and predictable placement.

## Mobile Account view

On a small screen:

- the header becomes a compact identity card;
- the most relevant action remains visible;
- secondary actions move into **More**;
- tabs become a horizontally scrollable or menu-based section selector;
- summary cards appear in one column;
- phone numbers and email addresses support direct action where allowed; and
- sensitive values remain masked.

## Review checklist

Business reviewers should consider:

1. Can a new user understand the screen without Salesforce training?
2. Are the most common actions visible?
3. Is anything sensitive shown too prominently?
4. Is important information missing?
5. Is anything present that the user does not need?
6. Does each warning explain what to do next?
7. Would the screen work during a field visit on a phone?

## Next design step

After the design brief and these low-fidelity wireframes are reviewed:

1. incorporate business feedback;
2. confirm Account terminology and lifecycle decisions;
3. create a branded clickable prototype for the application shell, home page, search, and Account overview;
4. test representative Finance, Program, and Volunteer journeys; and
5. prepare a technical impact assessment before development begins.
