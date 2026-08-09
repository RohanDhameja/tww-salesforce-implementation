import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Together We Will — Implementation Progress",
  description:
    "A clear, public view of what is complete, what is in progress, and what comes next for the Together We Will Salesforce implementation.",
};

const completed = [
  {
    title: "Development org connected",
    detail: "The twwdev sandbox is authenticated and ready for controlled work.",
  },
  {
    title: "Requirements reviewed",
    detail: "Role hierarchy, CRUD matrix, user stories, licenses, and change requests were assessed.",
  },
  {
    title: "Role hierarchy verified",
    detail: "Eight operating roles and their approved reporting relationships are confirmed.",
  },
  {
    title: "Delivery repository established",
    detail: "Roadmap, worklogs, decisions, architecture, security, and testing now have one home.",
  },
  {
    title: "Experience principles agreed",
    detail: "UX-first, accessible, mobile-ready, and headless React where it adds real value.",
  },
  {
    title: "Account model reviewed",
    detail: "Account categories, overlapping fields, duplicate controls, PAN access, automation, and current screens were reviewed read-only.",
  },
];

const inProgress = [
  {
    title: "Security model normalization",
    detail: "Separating roles, permissions, field security, sharing, and sensitive-data rules.",
    label: "Security",
  },
  {
    title: "10-license allocation",
    detail: "Mapping named internal users to canonical personas without over-provisioning access.",
    label: "Licensing",
  },
  {
    title: "Current-state baseline",
    detail: "Preparing an audit of profiles, permission sets, objects, fields, automation, and sharing.",
    label: "Discovery",
  },
  {
    title: "Website architecture assessment",
    detail: "Classifying journeys as Salesforce-native, React-enhanced, replaced, or retained.",
    label: "Experience",
  },
  {
    title: "Backlog cleanup",
    detail: "Normalizing personas, incomplete stories, open comments, scope, and acceptance criteria.",
    label: "Planning",
  },
  {
    title: "Account business validation",
    detail: "Twelve open questions now track categories, status, commitments, email, PAN, duplicates, ownership, and user screens.",
    label: "Account",
  },
  {
    title: "Application interface design",
    detail: "A business-friendly interface brief and low-fidelity application and Account wireframes are ready for review.",
    label: "UX design",
  },
];

const phases = [
  {
    number: "00",
    title: "Foundation",
    status: "In progress",
    description:
      "Security architecture, license allocation, current-state baseline, website assessment, and delivery controls.",
    tone: "active",
  },
  {
    number: "01",
    title: "Core operations",
    status: "Planned",
    description:
      "Priority donation, expense, project, volunteer, beneficiary, student, and reporting journeys.",
    tone: "planned",
  },
  {
    number: "02",
    title: "Extended workflows",
    status: "Planned",
    description:
      "Approved compliance, engagement, documents, portals, reporting, and workflow enhancements.",
    tone: "planned",
  },
  {
    number: "03",
    title: "Future capabilities",
    status: "Optional",
    description:
      "Advanced integrations and experiences with separately approved value, cost, license, and security cases.",
    tone: "future",
  },
];

const decisions = [
  "Account categories, status, commitments, email, PAN, duplicate handling, ownership, and user screens",
  "Named allocation of the 10 internal Salesforce licenses",
  "PAN, bank-detail, anonymous-donor, and beneficiary data policy",
  "React, Salesforce-native, identity, API, and hosting boundaries",
  "Final Phase 1 backlog and acceptance criteria",
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Together We Will progress home">
          <span className="brand-mark" aria-hidden="true">TWW</span>
          <span className="brand-copy">
            <strong>Together We Will</strong>
            <small>Implementation progress</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#now">Now</a>
          <a href="#phases">Phases</a>
          <a href="#decisions">Decisions</a>
          <a href="#latest">Latest</a>
          <a
            className="nav-cta"
            href="https://github.com/RohanDhameja/tww-salesforce-implementation"
            target="_blank"
            rel="noreferrer"
          >
            View repository <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span className="live-dot" /> Phase 0 is active</div>
          <h1>Building the foundation for <em>lasting impact.</em></h1>
          <p className="hero-lead">
            A transparent view of the Together We Will Salesforce transformation—what is complete,
            what the team is shaping now, and what comes next.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#now">See current work <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="#phases">Explore the roadmap</a>
          </div>
        </div>

        <aside className="hero-status" aria-label="Project snapshot">
          <div className="status-topline">
            <span>Project snapshot</span>
            <span className="status-date">08 Aug 2026</span>
          </div>
          <div className="status-phase">
            <span className="status-number">00</span>
            <div>
              <small>Current phase</small>
              <strong>Security & delivery foundation</strong>
            </div>
          </div>
          <div className="status-meter" aria-label="Phase 0 foundation work is in progress">
            <span className="meter-segment complete" />
            <span className="meter-segment complete" />
            <span className="meter-segment active" />
            <span className="meter-segment" />
          </div>
          <dl className="status-facts">
            <div><dt>Internal licenses</dt><dd>10</dd></div>
            <div><dt>Verified roles</dt><dd>8</dd></div>
            <div><dt>Story rows reviewed</dt><dd>80</dd></div>
          </dl>
          <p className="status-note">Progress is reported by verified outcomes—not invented percentages.</p>
        </aside>
      </section>

      <section className="trust-strip" aria-label="Project principles">
        <span>UX-first delivery</span>
        <i aria-hidden="true" />
        <span>Least-privilege security</span>
        <i aria-hidden="true" />
        <span>Headless React where valuable</span>
        <i aria-hidden="true" />
        <span>Auditable by design</span>
      </section>

      <section className="work-section" id="now">
        <div className="section-intro">
          <div>
            <p className="section-kicker">Work in view</p>
            <h2>Clear progress.<br />No black box.</h2>
          </div>
          <p>
            Every material change is tied to a phase, documented in a worklog, validated,
            and reflected here for the team.
          </p>
        </div>

        <div className="work-columns">
          <article className="work-column done-column">
            <header>
              <span className="column-icon done-icon" aria-hidden="true">✓</span>
              <div><h3>Done</h3><p>Verified foundations</p></div>
              <span className="column-count">{completed.length}</span>
            </header>
            <div className="work-list">
              {completed.map((item) => (
                <div className="work-item" key={item.title}>
                  <span className="item-check" aria-hidden="true">✓</span>
                  <div><h4>{item.title}</h4><p>{item.detail}</p></div>
                </div>
              ))}
            </div>
          </article>

          <article className="work-column active-column">
            <header>
              <span className="column-icon active-icon" aria-hidden="true"><i /></span>
              <div><h3>In progress</h3><p>Active Phase 0 work</p></div>
              <span className="column-count">{inProgress.length}</span>
            </header>
            <div className="work-list">
              {inProgress.map((item) => (
                <div className="work-item" key={item.title}>
                  <span className="item-pulse" aria-hidden="true" />
                  <div><span className="item-label">{item.label}</span><h4>{item.title}</h4><p>{item.detail}</p></div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="phase-section" id="phases">
        <div className="section-intro phase-intro">
          <div>
            <p className="section-kicker">Delivery roadmap</p>
            <h2>Four deliberate phases.</h2>
          </div>
          <p>Security and experience are built into every phase—not bolted on at the end.</p>
        </div>

        <div className="phase-track">
          {phases.map((phase, index) => (
            <article className={`phase-card ${phase.tone}`} key={phase.number}>
              <div className="phase-rail" aria-hidden="true">
                <span className="phase-node">{phase.number}</span>
                {index < phases.length - 1 && <span className="phase-line" />}
              </div>
              <div className="phase-body">
                <span className="phase-status">{phase.status}</span>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
                {phase.number === "00" && (
                  <div className="phase-now"><span /> Current focus</div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="decision-section" id="decisions">
        <div className="decision-card">
          <div className="decision-copy">
            <p className="section-kicker light">Decisions before build-out</p>
            <h2>The next gates are business decisions.</h2>
            <p>
              Phase 1 starts only after security, licensing, sensitive data, and experience boundaries
              are explicit and approved.
            </p>
            <a
              href="https://github.com/RohanDhameja/tww-salesforce-implementation/blob/main/docs/decisions/account-open-questions.md"
              target="_blank"
              rel="noreferrer"
            >
              Review the open questions <span aria-hidden="true">↗</span>
            </a>
          </div>
          <ol className="decision-list">
            {decisions.map((decision, index) => (
              <li key={decision}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{decision}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="latest-section" id="latest">
        <div className="section-intro compact-intro">
          <div><p className="section-kicker">Latest project activity</p><h2>Interface design is underway.</h2></div>
          <p>Two Phase 0 design documents are ready for structured review. No Salesforce functionality has been changed.</p>
        </div>

        <div className="artifact-grid">
          <a
            className="artifact-card"
            href="https://github.com/RohanDhameja/tww-salesforce-implementation/blob/main/docs/ux/interface-design-brief.md"
            target="_blank"
            rel="noreferrer"
          >
            <span className="artifact-status">Draft for review</span>
            <h3>Application interface design brief</h3>
            <p>Users, priority journeys, navigation, Account experience, design principles, boundaries, and review sequence.</p>
            <strong>Read the brief <span aria-hidden="true">↗</span></strong>
          </a>
          <a
            className="artifact-card"
            href="https://github.com/RohanDhameja/tww-salesforce-implementation/blob/main/docs/ux/wireframes.md"
            target="_blank"
            rel="noreferrer"
          >
            <span className="artifact-status">Low-fidelity draft</span>
            <h3>Application and Account wireframes</h3>
            <p>Proposed application shell, role-based home, search, duplicate warning, Account overview, and relationship screens.</p>
            <strong>Review the wireframes <span aria-hidden="true">↗</span></strong>
          </a>
        </div>

        <div className="previous-milestone">
          <p className="section-kicker">Previously verified foundation</p>
          <h3>Role hierarchy aligned.</h3>
          <p>Recorded August 8, 2026 in the `twwdev` development sandbox.</p>
        </div>
        <div className="hierarchy-card">
          <div className="hierarchy-level level-one"><span>Chairman CEO</span></div>
          <div className="hierarchy-connector connector-main" aria-hidden="true" />
          <div className="hierarchy-level level-two">
            <span>CFO</span><span>COO</span>
          </div>
          <div className="hierarchy-branches" aria-hidden="true" />
          <div className="hierarchy-level level-three">
            <span>Finance Admin</span><span>Marketing Admin</span><span>Security Admin</span>
          </div>
          <div className="hierarchy-connector connector-program" aria-hidden="true" />
          <div className="hierarchy-level level-four"><span>Program Director</span></div>
          <div className="hierarchy-connector" aria-hidden="true" />
          <div className="hierarchy-level level-five"><span>Volunteer Coordinator</span></div>
        </div>
        <p className="hierarchy-note">
          Salesforce displays “Together We Will Foundation” as the organization heading. Chairman CEO is the highest actual role.
        </p>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">TWW</span><div><strong>Together We Will</strong><small>Salesforce implementation</small></div></div>
        <p>Progress made visible. Decisions made deliberately.</p>
        <div className="footer-links">
          <a href="#top">Back to top ↑</a>
          <a href="https://github.com/RohanDhameja/tww-salesforce-implementation" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </footer>
    </main>
  );
}
