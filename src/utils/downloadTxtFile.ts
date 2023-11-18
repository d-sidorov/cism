export default (fileName: string, content: string) => {
  const link: HTMLAnchorElement = document.createElement('a')
  link.download = fileName

  const blob = new Blob([content], { type: 'text/plain' })
  const reader = new FileReader()

  reader.readAsDataURL(blob)

  reader.onload = function () {
    if (!reader.result) return
    link.href = reader.result as string
    link.click()
  }
}
