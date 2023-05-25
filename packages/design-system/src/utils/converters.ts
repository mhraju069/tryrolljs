export const convertTextToNumeric = (text: string): string =>
  text.replace(/[^0-9]/g, '')

export const convertBlobToDataUrl = (blob: Blob) => {
  return new Promise<string | ArrayBuffer | null>((resolve) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsDataURL(blob)
  })
}
