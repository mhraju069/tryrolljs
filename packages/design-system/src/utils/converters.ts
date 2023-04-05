export const convertTextToNumeric = (text: string): string =>
  text.replace(/[^0-9]/g, '')
