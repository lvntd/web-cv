// Contact lines are stored bare in cv-data.ts ("github.com/lvntd"), so both the
// landing page and the PDF derive their hrefs from the same rule here.

/** mailto: for addresses, https:// for everything else. */
export const contactHref = (value: string): string =>
  value.includes('@') ? `mailto:${value}` : `https://${value}`
