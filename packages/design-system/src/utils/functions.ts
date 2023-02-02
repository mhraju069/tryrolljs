export const openLink = (link: string, newTab = false) => {
  if (newTab) {
    window.open(link)
    return
  }
  window.location.href = link
  return
}

export const isLast = (index: number, array: any[]) =>
  index === array.length - 1
