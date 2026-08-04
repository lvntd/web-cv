// Shape of the CV content in cv-data.ts.

/** A styled run of text inside a paragraph or bullet. */
export interface RichSegment {
  text: string
  /** Semibold, ink color — for lead-ins like "Led frontend modernization:". */
  bold?: boolean
  /** Medium weight, ink color — for product names inline in prose. */
  medium?: boolean
  /** Regular weight, gray — for de-emphasized asides. */
  muted?: boolean
}

/** Either plain text, or a sequence of runs with mixed emphasis. */
export type RichText = string | (string | RichSegment)[]

/** One entry under Experience or Projects. */
export interface Entry {
  company: string
  /**
   * Employer website — makes the company name clickable in both views.
   * For a name covering two organizations, use `companyParts` instead.
   */
  companyUrl?: string
  /**
   * Splits the company name into separately-linked pieces, joined with " · ".
   * Use when one entry covers two organizations with different sites.
   * Takes precedence over `company`/`companyUrl` when present.
   */
  companyParts?: { name: string; url?: string }[]
  /** Rendered after the company name in regular gray, e.g. " · solo project". */
  companySuffix?: string
  /** Omit for projects; when absent the dates move up to the company row. */
  location?: string
  role?: string
  dates?: string
  paragraphs?: RichText[]
  bullets?: RichText[]
  /** Justify the entry's paragraphs instead of the default left-align. */
  justify?: boolean
  /** Displayed in the accent color above the tech line. */
  link?: string
  /** Tech stack items, joined with middots when rendered. */
  tech?: string[]
}

export interface Education {
  school: string
  degree: string
  /** Location and years, e.g. "Tbilisi, Georgia · 2014 – 2016". */
  meta: string
}

export interface Language {
  name: string
  /** Proficiency, uppercased in the design, e.g. "NATIVE". */
  level: string
}

export interface Cv {
  name: string
  title: string
  contact: {
    lines: string[]
    location: string
  }
  summary: RichText
  experience: Entry[]
  projects: Entry[]
  education: Education[]
  languages: Language[]
  /** Skill chips in the "Other" block. */
  other: string[]
}
