import resume from '../data/resume.json'

export default function CertsEducation() {
  return (
    <>
      <h2 className="section-header">CERTIFICATIONS, DOMAINS &amp; EDUCATION</h2>
      <div className="certs__columns">
        <div className="certs__column">
          <h3 className="certs__col-header">Certifications</h3>
          {resume.certifications.map((cert) => (
            <div className="certs__item" key={cert.title}>
              <p className="certs__title">{cert.title}</p>
              <p className="certs__credential">{cert.credential || 'Credential ID: N/A'}</p>
            </div>
          ))}
        </div>

        <div className="certs__column">
          <h3 className="certs__col-header">Domain Focus</h3>
          <div className="certs__domains">
            {resume.domains.map((d) => (
              <span className="pill pill--teal" key={d}>{d}</span>
            ))}
          </div>
        </div>

        <div className="certs__column">
          <h3 className="certs__col-header">Education</h3>
          {resume.education.map((edu) => (
            <div className="edu" key={edu.degree}>
              <div className="edu__degree">{edu.degree}</div>
              <div className="edu__school">{edu.school} ({edu.years})</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
