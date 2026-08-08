# Project overview

## Purpose

Build and manage the Together We Will Foundation Salesforce implementation and its end-user experiences with an auditable, phased delivery process.

## Success measures

- Users can complete priority journeys without administrator privileges.
- Public and external experiences are responsive, accessible, secure, and consistent with the foundation's brand.
- The solution stays within 10 internal Salesforce user licenses unless a separately approved license plan changes that constraint.
- Sensitive information is available only to explicitly authorized personas.
- Requirements, metadata, tests, decisions, and deployments are traceable.

## Source inputs reviewed

- `role_hierarchy.xlsx`
- `TWW_Object_CRUD_Permissions_Matrix.xlsx`
- `User_Stories_Manually_Edited.xlsx`

The source workbooks are inputs, not automatically authoritative configuration. Conflicts and ambiguities must be resolved in decision records before implementation.

## Initial observations

- The user-story workbook contains 80 story rows and 436 assigned story points.
- Work is grouped across Phases 1–3, with one story marked `NA` and incomplete story records requiring backlog cleanup.
- Story personas outnumber the available internal licenses and the eight Salesforce roles.
- The CRUD workbook blends object permissions, field permissions, and record-visibility expectations that must be separated into Salesforce security mechanisms.
