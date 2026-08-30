import resume from '../data/resume.json'

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export default function Contact() {
  const phoneHref = `tel:${resume.contact.phone.replace(/[-\s]/g, '')}`

  return (
    <>
      <h2 className="contact__headline">Let's Connect</h2>
      <div className="contact__underline"></div>
      <div className="contact__items">
        <a className="contact__item" href={`mailto:${resume.contact.email}`}>
          <span className="contact__icon">
            <svg {...svgProps}>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </span>
          <span className="contact__text">{resume.contact.email}</span>
        </a>
        <a className="contact__item" href={phoneHref}>
          <span className="contact__icon">
            <svg {...svgProps}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          <span className="contact__text">{resume.contact.phone}</span>
        </a>
        <a
          className="contact__item"
          href={`https://${resume.contact.linkedin}`}
          target="_blank"
          rel="noopener"
        >
          <span className="contact__icon">
            <svg {...svgProps}>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </span>
          <span className="contact__text">{resume.contact.linkedin}</span>
        </a>
        <div className="contact__item">
          <span className="contact__icon">
            <svg {...svgProps}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <span className="contact__text">{resume.location}</span>
        </div>
      </div>
    </>
  )
}
