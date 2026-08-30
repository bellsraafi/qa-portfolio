import { useState } from 'react'
import resume from '../data/resume.json'
import { downloadResume } from '../lib/generateResume.js'

export default function About() {
  const [busy, setBusy] = useState(false)

  const handleDownload = async (e) => {
    e.preventDefault()
    setBusy(true)
    try {
      await downloadResume()
    } catch (err) {
      console.error('Could not generate resume:', err)
      alert('Sorry, the resume could not be generated. Please try again.')
    }
    setBusy(false)
  }

  return (
    <>
      <h1 className="about__headline">
        Hi, I'm Bello Abdulrafiu —{' '}
        <span className="about__headline-gradient">Senior QA Engineer &amp; SDET</span>
      </h1>
      <p className="about__bio">{resume.summary}</p>
      <div className="about__location">Based in {resume.location}</div>
      <div className="about__buttons">
        <a href="#contact" className="btn btn--primary">Get in Touch</a>
        <a
          href="#"
          id="downloadResume"
          className="btn btn--secondary"
          onClick={handleDownload}
          aria-busy={busy || undefined}
        >
          {busy ? 'Generating…' : 'Download Resume'}
        </a>
      </div>
    </>
  )
}
