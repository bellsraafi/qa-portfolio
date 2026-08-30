import resume from '../data/resume.json'

const FILENAME = 'Bello-Abdulrafiu-Resume.pdf'
const PAGE_W = 210
const PAGE_H = 297
const MARGIN = 16
const CONTENT_W = PAGE_W - MARGIN * 2

const COLOR_DARK = [17, 24, 39]
const COLOR_MUTED = [75, 85, 99]
const COLOR_ACCENT = [124, 92, 252]

function newPageIfNeeded(doc, y, needed) {
  if (y + needed > PAGE_H - MARGIN) {
    doc.addPage()
    return MARGIN
  }
  return y
}

function sectionHeading(doc, label, y) {
  y = newPageIfNeeded(doc, y, 12)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(COLOR_ACCENT[0], COLOR_ACCENT[1], COLOR_ACCENT[2])
  doc.text(label.toUpperCase(), MARGIN, y)
  y += 1.5
  doc.setDrawColor(COLOR_ACCENT[0], COLOR_ACCENT[1], COLOR_ACCENT[2])
  doc.setLineWidth(0.4)
  doc.line(MARGIN, y, PAGE_W - MARGIN, y)
  y += 5
  return y
}

function bodyText(doc, text, y, fontSize) {
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(fontSize || 10)
  doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2])
  const lines = doc.splitTextToSize(text, CONTENT_W)
  const blockH = lines.length * (fontSize || 10) * 0.3528 + 2
  y = newPageIfNeeded(doc, y, blockH)
  doc.text(lines, MARGIN, y)
  return y + blockH
}

function bullet(doc, text, y) {
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9.5)
  doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2])
  const lines = doc.splitTextToSize(text, CONTENT_W - 5)
  const lineH = 9.5 * 0.3528 + 0.6
  const blockH = lines.length * lineH
  y = newPageIfNeeded(doc, y, blockH)
  doc.setFillColor(COLOR_ACCENT[0], COLOR_ACCENT[1], COLOR_ACCENT[2])
  doc.circle(MARGIN + 1.2, y - 1.2, 0.55, 'F')
  doc.text(lines, MARGIN + 5, y)
  return y + blockH
}

function generateResumePdf(jsPDF, data) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  let y = MARGIN

  // Header
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(22)
  doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2])
  doc.text(data.name, MARGIN, y)
  y += 7.5

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(12)
  doc.setTextColor(COLOR_ACCENT[0], COLOR_ACCENT[1], COLOR_ACCENT[2])
  doc.text(data.title, MARGIN, y)
  y += 6

  const contact = []
  if (data.contact) {
    if (data.contact.email) contact.push(data.contact.email)
    if (data.contact.phone) contact.push(data.contact.phone)
    if (data.contact.linkedin) contact.push(data.contact.linkedin)
  }
  if (data.location) contact.push(data.location)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9.5)
  doc.setTextColor(COLOR_MUTED[0], COLOR_MUTED[1], COLOR_MUTED[2])
  doc.text(contact.join('   |   '), MARGIN, y)
  y += 7

  doc.setDrawColor(COLOR_ACCENT[0], COLOR_ACCENT[1], COLOR_ACCENT[2])
  doc.setLineWidth(0.6)
  doc.line(MARGIN, y, PAGE_W - MARGIN, y)
  y += 7

  // Summary
  y = sectionHeading(doc, 'Summary', y)
  y = bodyText(doc, data.summary, y, 10) + 2

  // Experience
  y = sectionHeading(doc, 'Experience', y)
  ;(data.experience || []).forEach((job) => {
    y = newPageIfNeeded(doc, y, 16)

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2])
    doc.text(job.title, MARGIN, y)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9.5)
    doc.setTextColor(COLOR_MUTED[0], COLOR_MUTED[1], COLOR_MUTED[2])
    doc.text(`${job.start} \u2014 ${job.end}`, PAGE_W - MARGIN, y, { align: 'right' })
    y += 5

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.setTextColor(COLOR_MUTED[0], COLOR_MUTED[1], COLOR_MUTED[2])
    doc.text(job.company, MARGIN, y)
    y += 5

    ;(job.bullets || []).forEach((b) => {
      y = bullet(doc, b, y)
    })
    y += 3
  })

  // Skills
  y = sectionHeading(doc, 'Skills', y)
  ;(data.skills || []).forEach((group) => {
    y = newPageIfNeeded(doc, y, 12)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2])
    doc.text(group.group, MARGIN, y)
    y += 4.5

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9.5)
    doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2])
    const line = group.items.join('   \u2022   ')
    const lines = doc.splitTextToSize(line, CONTENT_W)
    const lineH = 9.5 * 0.3528 + 0.6
    y = newPageIfNeeded(doc, y, lines.length * lineH)
    doc.text(lines, MARGIN, y)
    y += lines.length * lineH + 2
  })

  // Certifications
  y = sectionHeading(doc, 'Certifications', y)
  ;(data.certifications || []).forEach((cert) => {
    y = newPageIfNeeded(doc, y, 10)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9.5)
    doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2])
    const label = cert.title + (cert.credential ? ` \u2014 ${cert.credential}` : '')
    const lines = doc.splitTextToSize(label, CONTENT_W)
    const lineH = 9.5 * 0.3528 + 0.6
    y = newPageIfNeeded(doc, y, lines.length * lineH)
    doc.text(lines, MARGIN, y)
    y += lines.length * lineH + 2
  })

  // Education
  y = sectionHeading(doc, 'Education', y)
  ;(data.education || []).forEach((edu) => {
    y = newPageIfNeeded(doc, y, 10)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2])
    doc.text(edu.degree, MARGIN, y)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9.5)
    doc.setTextColor(COLOR_MUTED[0], COLOR_MUTED[1], COLOR_MUTED[2])
    doc.text(edu.school + (edu.years ? ` (${edu.years})` : ''), MARGIN, y + 4.5)
    y += 9.5
  })

  doc.save(FILENAME)
}

export async function downloadResume() {
  const { jsPDF } = await import('jspdf')
  generateResumePdf(jsPDF, resume)
}
