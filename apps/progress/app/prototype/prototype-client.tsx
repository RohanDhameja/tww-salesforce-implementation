"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import styles from "./prototype.module.css";

type Screen = "home" | "people" | "account";
type AccountTab = "overview" | "relationships" | "activity" | "finance";
type Persona = "Volunteer Coordinator" | "Finance Admin" | "Program Director";

const personaContent: Record<
  Persona,
  {
    name: string;
    primaryAction: string;
    attention: Array<[string, string]>;
    work: Array<[string, string]>;
    summaryTitle: string;
    summary: Array<[string, string]>;
  }
> = {
  "Volunteer Coordinator": {
    name: "Priya",
    primaryAction: "Assign volunteer",
    attention: [["Possible duplicates", "3"], ["Missing documents", "2"], ["Unfilled assignments", "5"]],
    work: [["Follow-ups", "6"], ["Applications", "4"], ["Project orientation", "2:00 PM"]],
    summaryTitle: "Volunteer overview",
    summary: [["Active volunteers", "42"], ["New applications", "8"], ["Open assignments", "5"]],
  },
  "Finance Admin": {
    name: "Aman",
    primaryAction: "Record donation",
    attention: [["Unmatched donations", "4"], ["Pending receipts", "3"], ["Missing documents", "2"]],
    work: [["Reconciliations", "5"], ["Follow-ups", "3"], ["Expense review", "1:30 PM"]],
    summaryTitle: "Finance overview",
    summary: [["Donations this month", "28"], ["Open commitments", "12"], ["Pending expenses", "6"]],
  },
  "Program Director": {
    name: "Neha",
    primaryAction: "Open project",
    attention: [["Project risks", "2"], ["Missing outcomes", "4"], ["Overdue follow-ups", "3"]],
    work: [["Project reviews", "4"], ["Site visits", "2"], ["Team check-in", "3:00 PM"]],
    summaryTitle: "Program overview",
    summary: [["Active projects", "9"], ["Participants", "184"], ["Open actions", "11"]],
  },
};

const people = [
  { name: "Rahul Sharma", category: "Individual", relationships: ["Donor", "Volunteer"] },
  { name: "Rahul Verma", category: "Individual", relationships: ["Volunteer"] },
  { name: "ABC Foundation", category: "Organization", relationships: ["Donor", "CSR Partner"] },
  { name: "Sunrise School", category: "Organization", relationships: ["School/NGO Partner"] },
];

function Badge({ children }: { children: React.ReactNode }) {
  return <span className={styles.badge}>{children}</span>;
}

function SummaryPanel({
  title,
  rows,
  alertFirst = false,
}: {
  title: string;
  rows: Array<[string, string]>;
  alertFirst?: boolean;
}) {
  return (
    <section className={styles.panel}>
      <h3>{title}</h3>
      <ul>
        {rows.map(([label, value], index) => (
          <li key={label}>
            <span className={alertFirst && index === 0 ? styles.alert : undefined}>{label}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default function PrototypeClient() {
  const [screen, setScreen] = useState<Screen>("home");
  const [persona, setPersona] = useState<Persona>("Volunteer Coordinator");
  const [accountTab, setAccountTab] = useState<AccountTab>("overview");
  const [search, setSearch] = useState("Rahul");
  const [duplicateOpen, setDuplicateOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const currentPersona = personaContent[persona];
  const filteredPeople = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return people;
    return people.filter((person) =>
      [person.name, person.category, ...person.relationships].some((value) => value.toLowerCase().includes(term)),
    );
  }, [search]);

  const changeScreen = (nextScreen: Screen) => {
    setScreen(nextScreen);
    setNotice("");
  };

  const openRahul = () => {
    setScreen("account");
    setAccountTab("overview");
    setNotice("");
  };

  const submitGlobalSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setScreen("people");
  };

  const prototypeAction = (action: string) => {
    setNotice(`${action} is shown for journey review. The working transaction will be designed after approval.`);
  };

  return (
    <main className={styles.prototypePage}>
      <div className={styles.prototypeBanner}>
        <Link href="/">← Project progress</Link>
        <p><strong>Clickable UX prototype</strong> · Mock data only · No Salesforce changes</p>
      </div>

      <div className={styles.appWindow}>
        <header className={styles.topbar}>
          <div className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">TWW</span>
            <span className={styles.brandCopy}><strong>Together We Will</strong><small>Operations</small></span>
          </div>
          <form className={styles.globalSearchForm} onSubmit={submitGlobalSearch}>
            <label className={styles.srOnly} htmlFor="global-search">Search people or organizations</label>
            <input
              id="global-search"
              className={styles.globalSearch}
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search people or organizations"
            />
          </form>
          <label className={styles.roleLabel}>
            <span className={styles.srOnly}>Preview as role</span>
            <select value={persona} onChange={(event) => setPersona(event.target.value as Persona)}>
              {Object.keys(personaContent).map((role) => <option key={role}>{role}</option>)}
            </select>
          </label>
        </header>

        <nav className={styles.mobileNav} aria-label="Mobile application navigation">
          <button type="button" onClick={() => changeScreen("home")} aria-current={screen === "home" ? "page" : undefined}>Home</button>
          <button type="button" onClick={() => changeScreen("people")} aria-current={screen === "people" ? "page" : undefined}>People</button>
          <button type="button" onClick={openRahul} aria-current={screen === "account" ? "page" : undefined}>Account</button>
        </nav>

        <div className={styles.shell}>
          <aside className={styles.sidebar}>
            <nav className={styles.sideNav} aria-label="Application navigation">
              <button type="button" onClick={() => changeScreen("home")} aria-current={screen === "home" ? "page" : undefined}>Home</button>
              <button type="button" onClick={() => changeScreen("people")} aria-current={screen === "people" ? "page" : undefined}>People &amp; Organizations</button>
              <button type="button" onClick={() => prototypeAction("Donations")}>Donations</button>
              <button type="button" onClick={() => prototypeAction("Volunteers")}>Volunteers</button>
              <button type="button" onClick={() => prototypeAction("Programs & Projects")}>Programs &amp; Projects</button>
              <button type="button" onClick={() => prototypeAction("Finance")}>Finance</button>
              <button type="button" onClick={() => prototypeAction("Reports")}>Reports</button>
            </nav>
            <p className={styles.sidebarNote}>Phase 0 prototype<br />UX validation only</p>
          </aside>

          <div className={styles.mainContent}>
            {notice && <div className={styles.notice} role="status">{notice}<button type="button" onClick={() => setNotice("")} aria-label="Dismiss message">×</button></div>}

            {screen === "home" && (
              <section aria-labelledby="home-title">
                <div className={styles.pageHead}>
                  <div><h1 id="home-title">Good morning, {currentPersona.name}</h1><p>Here is what needs your attention today.</p></div>
                  <div className={styles.actions}>
                    <button className={styles.primaryButton} type="button" onClick={() => prototypeAction(currentPersona.primaryAction)}>{currentPersona.primaryAction}</button>
                    <button className={styles.secondaryButton} type="button" onClick={() => setDuplicateOpen(true)}>+ Create</button>
                  </div>
                </div>
                <div className={styles.gridThree}>
                  <SummaryPanel title="Needs attention" rows={currentPersona.attention} alertFirst />
                  <SummaryPanel title="My work today" rows={currentPersona.work} />
                  <SummaryPanel title={currentPersona.summaryTitle} rows={currentPersona.summary} />
                </div>
                <section className={`${styles.panel} ${styles.sectionSpace}`}>
                  <h3>Recent people and organizations</h3>
                  {people.slice(0, 3).map((person) => (
                    <button className={styles.personRow} type="button" key={person.name} onClick={person.name === "Rahul Sharma" ? openRahul : () => prototypeAction(`Open ${person.name}`)}>
                      <strong>{person.name}</strong>
                      <span>{person.category}</span>
                      <span className={styles.badges}>{person.relationships.map((relationship) => <Badge key={relationship}>{relationship}</Badge>)}</span>
                      <span>Open →</span>
                    </button>
                  ))}
                </section>
              </section>
            )}

            {screen === "people" && (
              <section aria-labelledby="people-title">
                <div className={styles.pageHead}>
                  <div><h1 id="people-title">People &amp; Organizations</h1><p>Search before creating a new record.</p></div>
                  <button className={styles.primaryButton} type="button" onClick={() => setDuplicateOpen(true)}>+ Create new</button>
                </div>
                <div className={styles.searchRow}>
                  <label className={styles.srOnly} htmlFor="people-search">Search people and organizations</label>
                  <input id="people-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Name, email, phone or organization" />
                  <button className={styles.secondaryButton} type="button">Search</button>
                </div>
                <section className={styles.panel} aria-live="polite">
                  <p className={styles.resultCount}>{filteredPeople.length} possible {filteredPeople.length === 1 ? "match" : "matches"}</p>
                  {filteredPeople.length ? filteredPeople.map((person) => (
                    <button className={styles.personRow} type="button" key={person.name} onClick={person.name === "Rahul Sharma" ? openRahul : () => prototypeAction(`Open ${person.name}`)}>
                      <strong>{person.name}</strong>
                      <span>{person.category}</span>
                      <span className={styles.badges}>{person.relationships.map((relationship) => <Badge key={relationship}>{relationship}</Badge>)}</span>
                      <span>Open →</span>
                    </button>
                  )) : <p className={styles.emptyState}>No matches found. Check the search or start a carefully reviewed new record.</p>}
                </section>
              </section>
            )}

            {screen === "account" && (
              <section aria-labelledby="account-title">
                <button className={styles.backButton} type="button" onClick={() => changeScreen("people")}>← People &amp; Organizations</button>
                <div className={styles.accountHead}>
                  <div className={styles.accountIdentity}>
                    <span className={styles.avatar} aria-hidden="true">RS</span>
                    <div className={styles.accountTitle}>
                      <h1 id="account-title">Rahul Sharma</h1>
                      <span className={styles.badges}><Badge>Individual</Badge><Badge>Donor</Badge><Badge>Volunteer</Badge></span>
                      <span className={styles.muted}>Active · rahul@example.org · +91 ••••• 12345</span>
                    </div>
                  </div>
                  <div className={styles.actions}>
                    <button className={styles.primaryButton} type="button" onClick={() => prototypeAction("Assign to project")}>Assign to project</button>
                    <button className={styles.secondaryButton} type="button" onClick={() => prototypeAction("Add follow-up")}>Add follow-up</button>
                    <button className={styles.secondaryButton} type="button" onClick={() => prototypeAction("More actions")}>More</button>
                  </div>
                </div>

                <div className={styles.tabs} role="tablist" aria-label="Rahul Sharma sections">
                  {([
                    ["overview", "Overview"],
                    ["relationships", "Relationships"],
                    ["activity", "Activity"],
                    ["finance", "Donations & Finance"],
                  ] as Array<[AccountTab, string]>).map(([value, label]) => (
                    <button key={value} type="button" role="tab" aria-selected={accountTab === value} onClick={() => setAccountTab(value)}>{label}</button>
                  ))}
                </div>

                {accountTab === "overview" && (
                  <div className={styles.gridTwo} role="tabpanel">
                    <SummaryPanel title="Attention" rows={[["Volunteer document expires soon", "Review →"], ["Donor follow-up", "Friday"]]} alertFirst />
                    <SummaryPanel title="Contact" rows={[["Email", "rahul@example.org"], ["Phone", "+91 ••••• 12345"], ["City", "Jaipur"]]} />
                    <SummaryPanel title="TWW relationships" rows={[["Donor", "Active · Apr 2025"], ["Volunteer", "Active · Jan 2026"]]} />
                    <SummaryPanel title="Next actions" rows={[["Donor follow-up", "Friday"], ["Project orientation", "Monday"]]} />
                    <SummaryPanel title="Donation summary" rows={[["Total received", "₹24,000"], ["Monthly commitment", "₹2,000"], ["Last donation", "02 Aug"]]} />
                    <SummaryPanel title="Volunteer summary" rows={[["Status", "Active"], ["Assignment", "Project A"], ["Hours this year", "18"]]} />
                  </div>
                )}
                {accountTab === "relationships" && (
                  <div className={styles.gridTwo} role="tabpanel">
                    <SummaryPanel title="Donor · Active" rows={[["Started", "01 Apr 2025"], ["Responsible team", "Finance"], ["Latest donation", "02 Aug 2026"]]} />
                    <SummaryPanel title="Volunteer · Active" rows={[["Started", "15 Jan 2026"], ["Responsible team", "Programs"], ["Current assignment", "Project A"]]} />
                  </div>
                )}
                {accountTab === "activity" && (
                  <section className={styles.panel} role="tabpanel">
                    <h3>Recent activity</h3>
                    <div className={styles.activity}><div><span>02 Aug</span><p>Donation recorded · ₹2,000</p></div><div><span>29 Jul</span><p>Volunteer orientation scheduled</p></div><div><span>25 Jul</span><p>Phone call · Follow-up requested</p></div></div>
                  </section>
                )}
                {accountTab === "finance" && (
                  <SummaryPanel title="Donations & Finance" rows={[["02 Aug 2026 · Donation", "₹2,000"], ["02 Jul 2026 · Donation", "₹2,000"], ["02 Jun 2026 · Donation", "₹2,000"]]} />
                )}
              </section>
            )}
          </div>
        </div>
      </div>

      {duplicateOpen && (
        <div className={styles.overlay} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setDuplicateOpen(false); }}>
          <section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="duplicate-title">
            <h2 id="duplicate-title">Possible existing record found</h2>
            <p>Review the likely match before creating another person.</p>
            <div className={styles.match}><strong>Rahul Sharma</strong><span>rahul@example.org · +91 ••••• 12345 · Donor · Volunteer</span></div>
            <div className={styles.dialogActions}>
              <button className={styles.secondaryButton} type="button" onClick={() => setDuplicateOpen(false)}>Cancel</button>
              <button className={styles.secondaryButton} type="button" onClick={() => { setDuplicateOpen(false); setNotice("A reviewed new-record path would continue here."); }}>Continue only if different</button>
              <button className={styles.primaryButton} type="button" onClick={() => { setDuplicateOpen(false); openRahul(); }}>Open existing record</button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
