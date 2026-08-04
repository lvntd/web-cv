import type { Cv } from './types.ts'

// All CV content lives here — edit this file to change the CV text.
//
// Paragraphs and bullets accept either a plain string or an array of
// segments. A segment is a string, or an object:
//   { text: '...', bold: true }    → semibold, ink color
//   { text: '...', medium: true }  → medium, ink color
//   { text: '...', muted: true }   → regular, gray
//
// `tech` is a list of items; they're joined with " · " when rendered.

export const cv: Cv = {
  name: 'Levan Tediashvili',
  title: 'Frontend Engineer',
  contact: {
    lines: ['levan.tediashvili@outlook.com', 'linkedin.com/in/levantediashvili', 'github.com/lvntd'],
    location: 'Tbilisi, Georgia',
  },

  summary: [
    'Software Engineer with 5 years of experience delivering production applications end-to-end  from Next.js and React Query on the client to Node.js, Express and MongoDB on the server. Alongside that, I built ',
    { text: 'Prive AI', medium: true },
    ', a personal product that took me deep into LLM integration, RAG pipelines, agentic workflows with LangChain, and streaming chat interfaces - the same problem space as modern AI-driven products.',
  ],

  experience: [
    {
      company: 'SAVOIRR',
      companyUrl: 'https://savoirr.com',
      location: 'Zurich, Switzerland',
      role: 'Frontend Engineer · Full-time, remote',
      dates: 'Mar 2026 – Present',
      paragraphs: [
        'SAVOIRR is a neutral, AI-powered platform for EU policy monitoring and public affairs, used by corporates, consultancies, and political organizations to track legislation and stakeholders in real time. I build the frontend of the core SaaS product: document-dense interfaces, search and navigation across large policy datasets and reporting based on AI-driven analytics.',
      ],
      tech: [
        'TypeScript', 'React', 'Material UI', 'TanStack Query', 'CI/CD', 'Cypress',
      ],
    },
    {
      company: 'TNET',
      companyUrl: 'https://tnet.ge/en',
      location: 'Tbilisi, Georgia',
      role: 'Frontend Engineer · Full-time, hybrid',
      dates: 'Oct 2023 – Mar 2026',
      paragraphs: [
        "TNET is Georgia's largest technology company and a member of TBC Bank Group, operating 10 digital platforms and 5 mobile apps serving up to 2M unique users monthly, roughly 70% of the country's adult population.",
      ],
      justify: true,
      bullets: [
        [
          { text: 'Led frontend modernization of a housing platform:', bold: true },
          ' managed a team of 3 in a complete rewrite from jQuery to Next.js/TypeScript, delivering a scalable architecture serving 500K+ monthly users with improved SEO and performance.',
        ],
        [
          { text: 'Architected cross-platform authentication:', bold: true },
          ' built a centralized SSO solution integrating Facebook, Google, and Apple OAuth across 10 platforms with seamless cross-domain user management, supporting 2M+ registered users.',
        ],
      ],
      tech: [
        'TypeScript', 'Next.js', 'Tailwind', 'React Query', 'Jest', 'Playwright', 'A/B Testing',
        'Docker', 'Python', 'FastAPI', 'AWS', 'LangChain',
      ],
    },
    {
      company: 'Axon Development Group',
      companyUrl: 'https://axon.dev',
      location: 'Kraków, Poland',
      role: 'Frontend Developer · B2B, full-time, remote',
      dates: 'Jul 2022 – Oct 2023',
      paragraphs: [
        'Axon is a full-cycle software development company specializing in turnkey solutions across web, mobile, and blockchain.\nAt Axon, I developed and shipped a production web platform for fabnite.com, an event-management platform. It enables organizers to manage the full event lifecycle - from ticket creation and sales across multiple ticket types, to inventory tracking and resource management for on-site materials.',
      ],
      tech: [
        'React', 'TypeScript', 'Redux', 'Redux Toolkit',
      ],
    },
    {
      company: 'EPAM Systems',
      companyUrl: 'https://epam.com',
      location: 'Tbilisi, Georgia',
      role: 'Junior Software Engineer · Full-time, hybrid',
      dates: 'Dec 2021 – Jul 2022',
      bullets: [
        'Implemented mobile-first responsive design with Material UI and Tailwind CSS alongside UX designers, ensuring cross-browser consistency across desktop, tablet, and mobile.',
        'Developed and maintained unit test suites with Jest and React Testing Library, improving coverage and reducing regressions in production.',
      ],
      tech: [
        'React', 'TypeScript', 'Material UI', 'Tailwind CSS', 'Styled Components', 'Redux',
      ],
    },
    {
      company: 'Caucasus University',
      companyUrl: 'https://cu.edu.ge/en',
      location: 'Tbilisi, Georgia',
      role: 'Guest Lecturer · Part-time',
      dates: 'Mar 2018 – Jun 2022',
      paragraphs: ['Taught Georgian Tax Legislation to undergraduate and postgraduate students.'],
    },
    {
      company: 'RSM Georgia · Nexia Georgia',
      companyParts: [
        { name: 'RSM Georgia', url: 'https://www.rsm.global/georgia/en' },
        { name: 'Nexia Georgia', url: 'https://www.nexia.ge/en/' },
      ],
      location: 'Tbilisi, Georgia',
      role: 'Tax Intern → Tax Manager · Full-time, on-site',
      dates: 'Mar 2013 – Dec 2021',
      paragraphs: ['Delivered a full range of tax advisory services in compliance with Georgian laws and regulations.'],
    },
  ],

  projects: [
    {
      company: 'Prive AI',
      companyUrl: 'https://priveai.ge/en',
      companySuffix: ' · solo project',
      dates: 'Mar 2025 – Present',
      paragraphs: [
        [
          'An AI research assistant for tax advisors and accountants, giving up-to-date answers on tax matters — ',
          { text: '700+ registered users to date.', bold: true },
          ' More than an LLM wrapper: a RAG pipeline over tax sources plus a set of calculation tools for precise, verifiable figures. Designed, built, and deployed end-to-end, solo — frontend, API, data layer, and infrastructure.',
        ],
      ],
      tech: [
        'TypeScript', 'Next.js', 'shadcn', 'Tailwind', 'React Query', 'Express', 'MongoDB',
        'LangChain', 'Docker', 'AWS',
      ],
    },
  ],

  education: [
    {
      school: 'International Black Sea University',
      degree: 'Master of Arts in Finance',
      meta: 'Tbilisi, Georgia · 2014 – 2016',
    },
    {
      school: 'Kraków University of Economics',
      degree: 'ERASMUS+ Exchange Program',
      meta: 'Kraków, Poland · 2015',
    },
    {
      school: 'Tbilisi State University',
      degree: 'Bachelor of Business Administration',
      meta: 'Tbilisi, Georgia · 2009 – 2014',
    },
  ],

  languages: [
    { name: 'Georgian', level: 'NATIVE' },
    { name: 'English', level: 'PROFESSIONAL' },
    { name: 'Russian', level: 'LIMITED' },
  ],

  other: [
    'Accessibility', 'i18n', 'API Development', 'Vite', 'npm','yarn','pnpm',
    'CI/CD', 'Performance', 'SEO', 'Agile/Scrum', 'Vector Databases',
  ],
}
