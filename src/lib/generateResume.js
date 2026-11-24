import resume from '../data/resume.json'

export async function downloadResume() {
  const link = document.createElement('a')
  link.href = `${import.meta.env.BASE_URL}${resume.download.path}`
  link.download = resume.download.filename
  document.body.appendChild(link)
  link.click()
  link.remove()
}
