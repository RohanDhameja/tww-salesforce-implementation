# Account review for business validation

**Status:** Business review required  
**Reviewed:** 2026-08-08  
**Environment:** `twwdev` development sandbox  
**Related questions:** [`account-open-questions.md`](../decisions/account-open-questions.md)

## Purpose

We reviewed how donors, volunteers, vendors, partners, and other organizations are currently maintained in Salesforce.

The goal is to make Salesforce simpler for users, improve data quality, and protect sensitive information. This was a read-only review. No Salesforce records or configuration were changed.

## What we observed

### Information is sometimes captured in more than one place

This can make it difficult for users to know which field to update and which information should be trusted.

#### Account status example

There are currently two fields that can describe an Account's status.

A donor could have:

- `Active` in one field; and
- a blank value or `Inactive` in the other field.

One user may consider the donor active while another user may reach a different conclusion.

**Suggestion:** Use one Account Status field across Salesforce.

#### Monthly commitment example

Monthly contribution information is currently spread across several fields.

For example, a donor may promise to contribute INR 5,000 every month. Salesforce could show:

- Monthly Commitment: Yes
- Monthly Commitment Amount: INR 5,000
- Committed Amount: INR 5,000
- Commitment Date: 1 August 2026

It is not clear whether Committed Amount means INR 5,000 per month or INR 5,000 in total. A user may also update one field and forget another.

**Suggestion:** Create one Monthly Commitment section containing:

- monthly amount;
- start date;
- end date;
- payment method; and
- current status, such as Active, Paused, Completed, or Stopped.

#### Email example

Email is stored differently for individuals and organizations.

For example:

- Rahul Sharma's email belongs to his Individual Donor Account;
- ABC Foundation may have a general email such as `info@example.org`; and
- ABC Foundation may also have a primary contact person with a different email.

If the correct email is not clearly identified, a donation receipt or communication may be sent to the wrong address.

**Suggestion:** For an organization, clearly show the primary organization email, primary contact person, and primary contact email. For an individual, show one clearly labelled Primary Email.

#### PAN example

PAN is also stored differently for individuals and organizations.

For example:

- Rahul Sharma's personal PAN belongs to his Individual Donor Account; and
- ABC Foundation's organizational PAN belongs to its Organization Account.

If users do not know which PAN field to use, the PAN may be stored in the wrong place, missed during duplicate checking, or left off a receipt.

**Suggestion:** Show one clearly labelled PAN field based on the Account category. Most users should see a masked value such as `******1234`. Only specifically approved users should see the complete PAN.

### Account category and donor type do not always agree

Some records have conflicting classifications.

For example, ABC Supplies may have:

- Account Category: Vendor; and
- Donor Type: Individual.

This could cause the vendor to appear incorrectly in donor reports or donor communications.

**Suggestion:** Use Account Category as the main description of the relationship. Use Donor Type only when the Account is actually a donor.

### Sensitive PAN information needs stronger protection

PAN may look masked on the screen, but the complete value is still stored as normal text. More users than necessary currently have access to the underlying value.

**Suggestion:** Confirm which users genuinely need complete PAN access. Everyone else should see only a masked value.

### Duplicate checking is not consistent

Salesforce checks for some duplicate donors, volunteers, and organizations, but it does not use the same rules for every Account category.

For example:

- an individual may already exist with the same email or phone;
- an organization may already exist with a slightly different name but the same GSTIN or PAN; and
- a volunteer may already exist as a donor.

Creating another Account would split that person's donation and volunteer history between different records.

**Suggestion:** Users should search before creating an Account. Salesforce should also check the appropriate combination of email, phone, PAN, GSTIN, and name.

### The Account screen is not designed around each user's work

The current screen is largely a standard Salesforce page. A Finance user, Volunteer Coordinator, and Marketing user may see many of the same fields even though they perform different work.

**Suggestion:** Create simple, persona-based screens that show the most relevant information first and hide information that is unnecessary or sensitive.

## Questions for the business team

The detailed questions, suggested answers, owners, and decision status are maintained in the [`Account open-question register`](../decisions/account-open-questions.md).

The business team needs to confirm:

1. the Account categories TWW will use;
2. whether one person can be both a donor and a volunteer;
3. the approved Account status values;
4. the meaning and lifecycle of a monthly commitment;
5. which email receives organization communications and receipts;
6. when PAN is required and who may see or update it;
7. how Salesforce should respond to a possible duplicate; and
8. which team owns each Account category.

## Recommended next steps

1. Ask the named business owners to answer the open questions.
2. Agree on one definition for every important field.
3. Prepare a field-by-field Account design.
4. Decide who can view and update sensitive information.
5. Design the search-before-create process.
6. Create simple screens for each Account category.
7. Test the design with realistic business examples.
8. Clean existing data only after the rules are approved.

