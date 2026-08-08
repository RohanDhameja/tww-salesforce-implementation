# Headless and website architecture

## Direction

Use React for end-user experiences where it materially improves usability, accessibility, performance, brand control, or cross-channel reuse. Keep Salesforce as the secure system of record and process engine.

React is not mandatory for every screen. Salesforce-native experiences remain appropriate for administrative configuration, complex native workflows, and internal tasks where the native platform provides the better operational experience.

## Architecture principles

- Mobile-first, responsive, accessible, and fast.
- Shared design tokens and reusable components in `packages/ui`.
- APIs enforce authentication, authorization, CRUD, field security, sharing, validation, and rate limits.
- Never expose Salesforce credentials or sensitive fields to browser code.
- Use a secure backend-for-frontend when direct browser-to-Salesforce access would weaken security or operational control.
- Preserve existing URLs, content, forms, analytics, and search behavior until an approved migration plan replaces them.

## Phase 0 assessment

- Inventory the current hosted website, Experience Cloud configuration, pages, domains, content, assets, forms, and integrations.
- Classify each journey as keep native, enhance, replace with React, or retire.
- Define hosting, deployment, caching, SEO, analytics, accessibility, and performance targets.
- Identify anonymous, authenticated external, and internal user journeys.
- Confirm licensing and identity implications before building authenticated external access.

## UX quality gates

- Keyboard accessibility and meaningful focus behavior
- Color contrast and semantic markup
- Responsive layouts at supported breakpoints
- Clear validation and recovery paths
- No sensitive information in client logs, URLs, or analytics
- Measured performance budgets for public pages
- Usability validation for priority journeys
