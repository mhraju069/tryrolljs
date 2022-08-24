export const openLink = (link: string, newTab = false) => {
  if (newTab) {
    window.open(link)
    return
  }
  window.location.href = link
  return
}
