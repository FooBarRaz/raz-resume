import React from 'react';
import { raz } from './raz-resume';
import './App.css';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Profile {
  network: string;
  username: string;
  url: string;
}

interface Basics {
  name: string;
  label: string;
  picture?: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  location: { postalCode?: string; city?: string; countryCode?: string; region?: string };
  profiles: Profile[];
}

interface WorkItem {
  company: string;
  position: string;
  website?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
}

interface Skill {
  name: string;
  level: number;
  keywords: string[];
}

interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

interface VolunteerItem {
  organization: string;
  position: string;
  website?: string;
  summary?: string;
  highlights?: string[];
}

interface Language {
  name: string;
  level: string;
}

interface Interest {
  name: string;
  keywords: string[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(d: string): string {
  if (!d) return '';
  const parts = d.split('-');
  if (parts.length < 2) return parts[0];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[parseInt(parts[1], 10) - 1]} ${parts[0]}`;
}

function getYear(d: string): string {
  return d ? d.split('-')[0] : '';
}

function isCurrent(endDate?: string): boolean {
  return !endDate;
}

// Heuristic: highlights with ≤3 spaces are tags (short phrases/tech names)
function isTag(s: string): boolean {
  return (s.match(/ /g) || []).length <= 3;
}

function levelLabel(n: number): string {
  if (n >= 90) return 'Master';
  if (n >= 80) return 'Expert';
  if (n >= 70) return 'Advanced';
  if (n >= 60) return 'Proficient';
  if (n >= 50) return 'Intermediate';
  if (n >= 40) return 'Competent';
  return 'Foundational';
}

function levelClass(n: number): string {
  return levelLabel(n).toLowerCase();
}

function groupBy<T>(arr: T[], key: (item: T) => string): { [k: string]: T[] } {
  return arr.reduce((acc, item) => {
    const k = key(item);
    if (!acc[k]) acc[k] = [];
    acc[k].push(item);
    return acc;
  }, {} as { [k: string]: T[] });
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconGitHub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconTwitter = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const IconEmail = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const IconPhone = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const IconLocation = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
);

const IconLink = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
  </svg>
);

function NetworkIcon({ network }: { network: string }) {
  switch (network.toLowerCase()) {
    case 'github': return <IconGitHub />;
    case 'linkedin': return <IconLinkedIn />;
    case 'twitter': return <IconTwitter />;
    default: return <IconLink />;
  }
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({ basics, languages, interests }: {
  basics: Basics;
  languages: Language[];
  interests: Interest[];
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        {basics.picture && (
          <div className="avatar">
            <img src={basics.picture} alt={basics.name} />
          </div>
        )}
        <h1 className="sidebar__name">{basics.name}</h1>
        <p className="sidebar__label">{basics.label}</p>
      </div>

      <div className="sidebar__block">
        <a href={`mailto:${basics.email}`} className="contact-row">
          <IconEmail /><span>{basics.email}</span>
        </a>
        <a href={`tel:${basics.phone}`} className="contact-row">
          <IconPhone /><span>{basics.phone}</span>
        </a>
        <div className="contact-row">
          <IconLocation /><span>{basics.location.city}, {basics.location.region}</span>
        </div>
        <a href={basics.website} className="contact-row" target="_blank" rel="noopener noreferrer">
          <IconLink /><span>{basics.website.replace(/^https?:\/\//, '')}</span>
        </a>
      </div>

      <div className="sidebar__block">
        {basics.profiles.map(p => (
          <a key={p.network} href={p.url} className="profile-row" target="_blank" rel="noopener noreferrer">
            <NetworkIcon network={p.network} />
            <span>{p.username}</span>
          </a>
        ))}
      </div>

      <nav className="sidebar__nav">
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#volunteer" className="nav-link">Volunteer</a>
      </nav>

      <div className="sidebar__block">
        <p className="sidebar__label--section">Languages</p>
        <div className="lang-list">
          {languages.map(l => (
            <div key={l.name} className="lang-row">
              <span className="lang-name">{l.name}</span>
              <span className="lang-level">{l.level}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar__block">
        <p className="sidebar__label--section">Interests</p>
        <div className="interest-cloud">
          {interests.map(i => (
            <span key={i.name} className="interest-pill">{i.name}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHead({ num, title, id }: { num: string; title: string; id: string }) {
  return (
    <div className="section-head" id={id}>
      <span className="section-num">{num}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-rule" />
    </div>
  );
}

// ─── Work Card ────────────────────────────────────────────────────────────────

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const tags = item.highlights.filter(isTag);
  const bullets = item.highlights.filter(h => !isTag(h));
  const current = isCurrent(item.endDate);

  return (
    <article className={`work-card${current ? ' work-card--active' : ''}`} style={{ animationDelay: `${index * 50}ms` }}>
      <div className="work-card__rail">
        <div className="work-card__dot" />
        <div className="work-card__stem" />
      </div>
      <div className="work-card__content">
        <div className="work-card__meta">
          <span className="work-card__dates">
            {formatDate(item.startDate)}
            {' '}—{' '}
            {current ? <span className="date-now">Present</span> : formatDate(item.endDate!)}
          </span>
          {current && <span className="badge-active">Active</span>}
        </div>
        <h3 className="work-card__position">{item.position}</h3>
        {item.website ? (
          <a className="work-card__company" href={item.website} target="_blank" rel="noopener noreferrer">
            {item.company}&nbsp;↗
          </a>
        ) : (
          <span className="work-card__company work-card__company--plain">{item.company}</span>
        )}
        <p className="work-card__summary">{item.summary}</p>
        {bullets.length > 0 && (
          <ul className="work-card__bullets">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
        {tags.length > 0 && (
          <div className="tag-row">
            {tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
          </div>
        )}
      </div>
    </article>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function TechSkillCloud({ skills }: { skills: Skill[] }) {
  const sorted = [...skills].sort((a, b) => b.level - a.level);
  return (
    <div className="tech-cloud">
      {sorted.map(s => (
        <span key={s.name} className={`tech-pill tech-pill--${levelClass(s.level)}`} title={`${levelLabel(s.level)} (${s.level}%)`}>
          {s.name}
        </span>
      ))}
    </div>
  );
}

function SkillBars({ skills }: { skills: Skill[] }) {
  const sorted = [...skills].sort((a, b) => b.level - a.level);
  return (
    <div className="skill-bars">
      {sorted.map(s => (
        <div key={s.name} className="skill-bar">
          <div className="skill-bar__label">
            <span className="skill-bar__name">{s.name}</span>
            <span className={`skill-bar__badge skill-bar__badge--${levelClass(s.level)}`}>{levelLabel(s.level)}</span>
          </div>
          <div className="skill-bar__track">
            <div className="skill-bar__fill" style={{ width: `${s.level}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────

function EduCard({ edu }: { edu: Education }) {
  return (
    <div className="edu-card">
      <div className="edu-card__years">{getYear(edu.startDate)} — {getYear(edu.endDate)}</div>
      <div className="edu-card__body">
        <h3 className="edu-card__institution">{edu.institution}</h3>
        <p className="edu-card__degree">{edu.studyType}</p>
        <p className="edu-card__area">{edu.area}</p>
        {edu.gpa && <p className="edu-card__gpa">GPA {edu.gpa}</p>}
      </div>
    </div>
  );
}

// ─── Volunteer ────────────────────────────────────────────────────────────────

function VolCard({ item }: { item: VolunteerItem }) {
  return (
    <div className="vol-card">
      <h4 className="vol-card__org">
        {item.website
          ? <a href={item.website} target="_blank" rel="noopener noreferrer">{item.organization}</a>
          : item.organization}
      </h4>
      <span className="vol-card__role">{item.position}</span>
      {item.summary && <p className="vol-card__summary">{item.summary}</p>}
      {item.highlights && item.highlights.filter(Boolean).map((h, i) => (
        <p key={i} className="vol-card__note">{h}</p>
      ))}
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

class App extends React.Component<{}, {}> {
  render() {
    const data = raz as any;
    const basics = data.basics as Basics;
    const work = data.work as WorkItem[];
    const skills = data.skills as Skill[];
    const education = data.education as Education[];
    const volunteer = data.volunteer as VolunteerItem[];
    const languages = data.languages as Language[];
    const interests = data.interests as Interest[];

    const skillsByCategory = groupBy(skills, s => (s.keywords && s.keywords[0]) || 'Other');
    const techSkills = skillsByCategory['Technical'] || [];
    const consultingSkills = skillsByCategory['Consulting'] || [];
    const testingSkills = skillsByCategory['Testing'] || [];
    const domainSkills = skillsByCategory['Domain'] || [];

    return (
      <div className="resume">
        <Sidebar basics={basics} languages={languages} interests={interests} />

        <main className="main">

          {/* Summary */}
          <section className="section section--intro">
            <div className="intro-summary">
              <p>{basics.summary}</p>
            </div>
          </section>

          {/* Experience */}
          <section className="section" id="experience">
            <SectionHead num="01" title="Experience" id="experience-head" />
            <div className="work-timeline">
              {work.map((item, i) => <WorkCard key={i} item={item} index={i} />)}
            </div>
          </section>

          {/* Skills */}
          <section className="section" id="skills">
            <SectionHead num="02" title="Skills" id="skills-head" />

            {techSkills.length > 0 && (
              <div className="skills-block">
                <p className="skills-block__label">Technical</p>
                <TechSkillCloud skills={techSkills} />
              </div>
            )}

            <div className="skills-columns">
              {consultingSkills.length > 0 && (
                <div className="skills-column">
                  <p className="skills-block__label">Leadership &amp; Consulting</p>
                  <SkillBars skills={consultingSkills} />
                </div>
              )}
              {testingSkills.length > 0 && (
                <div className="skills-column">
                  <p className="skills-block__label">Quality &amp; Testing</p>
                  <SkillBars skills={testingSkills} />
                </div>
              )}
              {domainSkills.length > 0 && (
                <div className="skills-column">
                  <p className="skills-block__label">Domain Expertise</p>
                  <SkillBars skills={domainSkills} />
                </div>
              )}
            </div>
          </section>

          {/* Education */}
          <section className="section" id="education">
            <SectionHead num="03" title="Education" id="education-head" />
            <div className="edu-list">
              {education.map((e, i) => <EduCard key={i} edu={e} />)}
            </div>
          </section>

          {/* Volunteer */}
          <section className="section" id="volunteer">
            <SectionHead num="04" title="Community" id="volunteer-head" />
            <div className="vol-grid">
              {volunteer.map((v, i) => <VolCard key={i} item={v} />)}
            </div>
          </section>

        </main>
      </div>
    );
  }
}

export default App;
