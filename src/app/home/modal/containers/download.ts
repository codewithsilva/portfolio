export const downloadResume = (type:'pdf' | 'docx') => {
  const urls = {
    pdf:process.env.NEXT_PUBLIC_RESUME_PDF,
    docx:process.env.NEXT_PUBLIC_RESUME_DOCX
  }, url = urls[type]

  if (!url) return console.error('URL UNDEFINED')

  const anchor = document.createElement('a')
  anchor.href = url
  anchor.setAttribute('download', `resume.${type}`)

  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}
