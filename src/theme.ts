// Design tokens lifted from the original CV design.
// The source design was authored in CSS px (96dpi); react-pdf uses pt (72dpi),
// so px() converts design values 1:1 — keep editing in px numbers.
export const px = (n: number): number => n * 0.75

export const colors = {
  ink: '#2a2826',      // headings, strong text #2a2826
  body: '#3d3a36',     // body copy #3d3a36
  sub: '#3d3a36',      // role lines, chips #5c594f
  contact: '#6e6b64',  // header contact block
  faint: '#6e6b64',    // dates, locations
  tech: '#6e6b64',     // tech stack lines
  label: '#a8674e',    // section headings - EXPERIENCE, PROJECTS
  accent: '#a8674e',   // rust — markers, links, subtitle - #a8674e
  line: '#a8674e',     // hairlines, chip borders #e3ded4
} as const

export const sans = 'IBM Plex Sans'
export const mono = 'IBM Plex Mono'
