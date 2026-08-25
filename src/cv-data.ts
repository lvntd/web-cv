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
  "name": "Levan Tediashvili",
  "title": "Senior Frontend Engineer",
  "contact": {
    "lines": [
      "levan.tediashvili@outlook.com",
      "linkedin.com/in/levantediashvili",
      "github.com/lvntd"
    ],
    "location": "Tbilisi, Georgia"
  },
  "summary": "Frontend engineer for AI products in regulated, document-heavy domains. Five years in engineering — from consumer platforms at 3M monthly users to AI systems shipped solo — on top of nine years in tax advisory at RSM and Nexia and four years lecturing taxation and financial accounting. I build the interface layer over RAG and agentic pipelines: streaming chat, citation and verifiability UX, human-in-the-loop review. TypeScript, React and Next.js, with Node.js and Python where the product needs it.",
  "experience": [
    {
      "company": "SAVOIRR",
      "companyUrl": "https://www.savoirr.com",
      "location": "Remote · Zurich, Switzerland",
      "role": "Senior Frontend Engineer",
      "dates": "Mar 2026 – Present",
      "paragraphs":["AI-powered platform for EU policy and regulatory monitoring, used by corporates, consultancies and political organisations."],
      "bullets": [
        [
          "One of 3 senior frontend engineers on a 12-person product team (5 backend, 2 design, QA, PO), building document-dense interfaces over 300k EU policy documents: faceted search and tables rendering ",
          { text: "30 columns at under 100ms", bold: true },
          ", plus reporting over AI-driven analytics."
        ],
        "Diagnosed dependency-resolution failures degrading build reliability, evaluated package-manager alternatives, and migrated the monorepo from npm to pnpm — cutting CI install time from 70s to 50s and eliminating ~10 lockfile conflicts per month.",
        [
          "Rebuilt the app-wide document search data layer on TanStack Query with normalized caching and optimistic updates, ",
          { text: "improving average interaction responsiveness by 50%", bold: true },
          ". Authored the team's code review conventions, now used across 25+ PRs per month."
        ]
      ],
      "tech":["React","TypeScript","Material UI", "TanStack Query", "TanStack Table", "React Hook Form", "Zod", "Zustand", "Cypress"]
    },
    {
      "company": "TNET",
      "companyUrl": "https://tnet.ge/en",
      "location": "Hybrid · Tbilisi, Georgia",
      "role": "Senior Frontend Engineer",
      "dates": "Oct 2023 – Mar 2026",
      "paragraphs":["TNET is Georgia's largest technology company and a member of TBC Bank Group, operating 10 digital platforms and 5 mobile apps serving up to 2M unique users monthly, roughly 70% of the country's adult population."],
      "bullets": [
        [
          "Led frontend modernization of a housing platform: managed a team of 3 in a complete rewrite from legacy jQuery to Next.js/TypeScript, delivering an architecture serving 500K+ monthly users and ",
          { text: "lifting organic sessions 50% within 7 months", bold: true },
          "."
        ],
        "Built and owned end-to-end an internal AI assistant for ~300 employees — HR knowledge retrieval, policy Q&A, and vacation booking — on Python/FastAPI with a LangChain RAG pipeline over PGVector, deployed on AWS. ~60 monthly active employees, deflecting ~400 HR requests per month.",
        "Architected cross-platform authentication: centralized SSO integrating Facebook, Google, and Apple OAuth across 10 platforms with cross-domain user management, supporting 3M+ monthly users.",
        "Led a performance task force: 30% improvement in page load through code-splitting, resource prioritization, and refactoring heavy UI layers."
      ],
      "tech":["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form","Redux", "Jest", "Playwright", "Python 3", "FastAPI", "PGVector", "AWS", "LangChain"]
    },
    {
      "company": "Axon Development Group",
      "companyUrl": "https://www.axon.dev/",
      "location": "Remote · Kraków, Poland",
      "role": "Frontend Developer",
      "dates": "Jul 2022 – Oct 2023",
      "bullets": [
        "Developed and shipped a production web platform for an event-management product, owning inventory tracking and resource management features end-to-end.",
        "Engineered complex client-side business logic and state management using React Query and Redux for real-time inventory cost calculations and multi-step validations."
      ],
      "tech":["React", "Next.js", "Material UI", "TypeScript", "Redux", "NX Monorepo"]
    },
    {
      "company": "EPAM Systems",
      "companyUrl": "https://www.epam.com/",
      "location": "Hybrid · Tbilisi, Georgia",
      "role": "Junior Software Engineer",
      "dates": "Dec 2021 – Jul 2022",
      "bullets": [
        [
          "Built and maintained unit test suites with Jest and React Testing Library, ",
          { text: "raising coverage from 50% to 70%", bold: true },
          ", and reducing production regressions."
        ]
      ],
      "tech":["React", "Redux", "Redux Thunk", "Axios", "Material UI", "Styled Components",  "CSS Modules"]
    },
    {
      "company": "Nexia Georgia & RSM Georgia",
      "location": "Tbilisi, Georgia",
      "role": "Tax Manager",
      "dates": "Mar 2013 – Dec 2021",
      "paragraphs": ["Joined as an intern, left as Tax Manager. Ran a portfolio of ~15 clients including a commercial bank and several large companies — delivering the full range of tax advisory and compliance work."]
    },
    {
      "company": "Caucasus University",
      "role": "Lecturer, Taxation & Financial Accounting",
      "dates": "2017 – 2021",
      "paragraphs": ["Taught final-year undergraduates, ~200 students over four years, alongside full-time practice."]
    }
  ],
  "projects": [
    {
      "company": "Prive AI",
      "paragraphs": [
        [
          "Solo-designed, built and deployed an AI research assistant for tax advisors: ",
          { text: "700+ registered users, 50 paying monthly subscribers, 3 audit firms on annual contracts.", bold: true },
          " Streaming conversational interface, RAG over primary tax legislation, agentic audit workflows with human-in-the-loop pause/resume, and an ",
          { text: "MCP server with OAuth 2.1", bold: true },
          " for Claude Desktop integration."
        ]
      ],
      "links": ["priveai.ge/en"],
      "tech": [
        "TypeScript",
        "Next.js",
        "TanStack Query",
        "Express",
        "MongoDB",
        "LangChain",
        "AWS",
      ]
    },
    {
      "company": "alterego",
      "paragraphs": [
        "Open-source CLI tool that launches multiple isolated Chromium browser windows at once — each with its own cookies, storage, and session — tiled across the screen. Published as a public npm package with an interactive terminal UI."
      ],
      "links": ["npmjs.com/package/@lvntd/alterego"],
      "tech": [
        "TypeScript",
        "Node.js",
        "React",
        "Ink",
        "Commander",
        "Vitest"
      ]
    },
    {
      "company": "Benefits Georgia Client Portal",
      "paragraphs": [
        "Client portal for the 5th largest insurance company in Georgia — policy management, claims tracking, in-network provider search, and appointment booking. Owned the project end-to-end: architected the frontend and led a junior frontend developer as a freelance engagement, shipping to production September 2026."
      ],
      "tech": [
        "TypeScript",
        "Next.js (App router)",
        "shadcn",
        "TanStack Query",
        "React Hook Form",
        "Zod",
        "Leaflet"
      ]
    },
    {
      "company": "Seaside Club",
      "paragraphs": [
        "Shipped three production Web3 frontends: an NFT minting platform, a crypto exchange interface, and a charity landing page."
      ],
      "links": ["seaside-help.club","seaside.club","crypto-hunters.io"],
      "tech": [
        "Next.js",
        "Wagmi",
        "Ethers.js",
      ]
    }
  ],
  "education": [
    {
      "school": "International Black Sea University",
      "degree": "Master of Arts in Finance",
      "meta": "2016"
    },
    {
      "school": "Tbilisi State University",
      "degree": "Bachelor of Business Administration",
      "meta": "2014"
    }
  ],
  "languages": [
    {
      "name": "Georgian",
      "level": "Native"
    },
    {
      "name": "English",
      "level": "Professional"
    },
    {
      "name": "Russian",
      "level": "Limited"
    }
  ],
  "other": [
    "React Testing Library",
    "TanStack Virtual",
    "Vite",
    "Docker",
    "CI/CD",
    "Web Vitals (LCP/CLS)",
    "Accessibility (WCAG)",
    "i18n",
    "RAG pipelines",
    "Vector databases",
    "Streaming interfaces (SSE)",
    "Agentic workflows",
    "MCP / OAuth 2.1"
  ]
}
