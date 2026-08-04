import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cv } from './cv-data.ts'
import { contactHref } from './contact.ts'
import type { Entry as EntryData, RichText } from './types.ts'
import './landing.css'

/** Renders plain text, or rich segments as <strong>/<em>. */
function Rich({ children }: { children: RichText }) {
  if (typeof children === 'string') return <>{children}</>
  return (
    <>
      {children.map((seg, i) => {
        if (typeof seg === 'string') return <span key={i}>{seg}</span>
        if (seg.bold) return <strong key={i}>{seg.text}</strong>
        if (seg.medium) return <em key={i}>{seg.text}</em>
        if (seg.muted) return <span key={i} className="companySuffix">{seg.text}</span>
        return <span key={i}>{seg.text}</span>
      })}
    </>
  )
}

function SectionHeading({ children, ruled = true }: { children: ReactNode; ruled?: boolean }) {
  return <h2 className={ruled ? 'sectionHeading ruled' : 'sectionHeading'}>{children}</h2>
}

function Entry({ entry }: { entry: EntryData }) {
  // Dates sit next to the role when there is one; otherwise on the first row.
  const firstRowMeta = entry.location ?? (entry.role ? null : entry.dates)
  return (
    <article className="entry">
      <div className="entryTop">
        <span className="company">
          {entry.company}
          {entry.companySuffix && <span className="companySuffix">{entry.companySuffix}</span>}
        </span>
        {firstRowMeta && <span className="meta">{firstRowMeta}</span>}
      </div>
      {entry.role && (
        <div className="entryRole">
          <span className="role">{entry.role}</span>
          {entry.dates && <span className="meta">{entry.dates}</span>}
        </div>
      )}
      {entry.paragraphs?.map((p, i) => (
        <p key={i} className={entry.justify ? 'justify' : undefined}>
          <Rich>{p}</Rich>
        </p>
      ))}
      {entry.bullets && (
        <ul className="bullets">
          {entry.bullets.map((b, i) => (
            <li key={i}>
              <Rich>{b}</Rich>
            </li>
          ))}
        </ul>
      )}
      {entry.link && (
        <a className="link" href={`https://${entry.link}`} target="_blank" rel="noreferrer noopener">
          {entry.link}
        </a>
      )}
      {entry.tech && (
        <ul className="tech">
          {entry.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

/** Turns a bare contact line into the right kind of link. */
function ContactLink({ value }: { value: string }) {
  return (
    <a href={contactHref(value)} target="_blank" rel="noreferrer noopener">
      {value}
    </a>
  )
}

export default function Landing() {
  return (
    <div className="landing">
      <main className="sheet">
        <div className="actions">
          <Link className="btn primary" to="/pdf">
            View as PDF
          </Link>
          <a className="btn ghost" href="/Levan_Tediashvili_CV.pdf" download>
            Download CV
          </a>
        </div>

        <header className="header">
          <div>
            <h1 className="name">{cv.name}</h1>
            <div className="jobTitle">{cv.title}</div>
          </div>
          <address className="contact">
            {cv.contact.lines.map((line) => (
              <ContactLink key={line} value={line} />
            ))}
            <span className="location">{cv.contact.location}</span>
          </address>
        </header>

        <p className="summary">
          <Rich>{cv.summary}</Rich>
        </p>

        <section className="section">
          <SectionHeading>Experience</SectionHeading>
          {cv.experience.map((entry) => (
            <Entry key={entry.company} entry={entry} />
          ))}
        </section>

        <section className="section">
          <SectionHeading>Projects</SectionHeading>
          {cv.projects.map((entry) => (
            <Entry key={entry.company} entry={entry} />
          ))}
        </section>

        <div className="grid">
          <section>
            <SectionHeading ruled={false}>Education</SectionHeading>
            {cv.education.map((edu) => (
              <div key={edu.school} className="eduItem">
                <div className="eduSchool">{edu.school}</div>
                <div className="eduDegree">{edu.degree}</div>
                <div className="eduMeta">{edu.meta}</div>
              </div>
            ))}
          </section>

          <section>
            <SectionHeading ruled={false}>Languages</SectionHeading>
            <ul className="langList">
              {cv.languages.map((lang) => (
                <li key={lang.name} className="langRow">
                  <span className="langName">{lang.name}</span>
                  <span className="langLevel">{lang.level}</span>
                </li>
              ))}
            </ul>

            <SectionHeading ruled={false}>Other</SectionHeading>
            <ul className="chips">
              {cv.other.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} {cv.name}</span>
          <span className="spacer" />
          <Link className="link" to="/pdf">
            Open PDF version →
          </Link>
        </footer>
      </main>
    </div>
  )
}
