import { useState } from 'react'
import resume from '../data/resume.json'

export default function Experience() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <h2 className="section-header">EXPERIENCE</h2>
      <button
        className="experience__toggle"
        id="expToggle"
        aria-expanded={expanded}
        aria-controls="expContainer"
        onClick={() => setExpanded((e) => !e)}
      >
        <span className="experience__toggle-chevron">{'\u2193'}</span>
      </button>
      <div
        className={`experience__container${expanded ? ' experience__container--open' : ''}`}
        id="expContainer"
      >
        <div className="timeline">
          {resume.experience.map((job, i) => (
            <article
              key={job.title}
              className={`job reveal-stagger${expanded ? ' reveal--visible' : ''}`}
              style={{ transitionDelay: expanded ? `${i * 120}ms` : '0ms' }}
            >
              <div className="job__title">{job.title}</div>
              <div className="job__meta">
                <span className="job__company">{job.company}</span>
                <span className="job__date">{job.start} — {job.end}</span>
              </div>
              <ul className="job__desc">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
