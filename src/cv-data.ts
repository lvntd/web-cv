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
  "summary": "Senior Frontend Engineer with 5 years of experience building scalable frontend architecture, reusable component systems, and conversational AI interfaces end-to-end. Led a jQuery-to-Next.js/TypeScript rewrite of a platform serving 500K+ monthly users, and solo-built Prive AI, an AI product with a RAG pipeline, streaming chat interfaces, and real-time AI experiences for 700+ users. Deep React and TypeScript expertise, strong ownership of ambiguous, cross-cutting problems from concept to production, with a track record of setting technical standards for the teams around me.",
  "experience": [
    {
      "company": "SAVOIRR",
      "location": "Remote · Zurich, Switzerland",
      "role": "Senior Frontend Engineer",
      "dates": "Mar 2026 – Present",
      "bullets": [
        "Built large, data-heavy tables: virtualized views handling thousands of rows with complex filtering and custom column ordering, using react-virtualized and TanStack Table, keeping scrolling and interactions smooth as datasets grow.",
        "Build document-dense interfaces, search and navigation across large policy datasets, and reporting based on AI-driven analytics for a neutral, AI-powered EU policy monitoring platform.",
        "Deliver dashboards that turn complex, large-scale data into intuitive, navigable interaction patterns for corporate, consultancy, and political-organization users."
      ]
    },
    {
      "company": "TNET",
      "location": "Hybrid · Tbilisi, Georgia",
      "role": "Senior Frontend Engineer",
      "dates": "Oct 2023 – Mar 2026",
      "bullets": [
        "Led frontend modernization of a housing platform: led 2 frontend developers in a complete rewrite from jQuery to Next.js/TypeScript, delivering scalable frontend architecture and a reusable component system serving 500K+ monthly users with improved SEO and performance.",
        "Architected cross-platform authentication: built a centralized SSO solution integrating Facebook, Google, and Apple OAuth across 10 platforms with seamless cross-domain user management, owning an ambiguous, cross-cutting problem end-to-end for 2M+ registered users.",
        "Helped define technical standards and code review conventions for the team as the platform architecture scaled."
      ]
    },
    {
      "company": "Axon Development Group",
      "location": "Remote · Kraków, Poland",
      "role": "Frontend Developer",
      "dates": "Jul 2022 – Oct 2023",
      "bullets": [
        "Developed and shipped a production web platform for an event-management product, owning ticketing, inventory tracking, and resource management features end-to-end."
      ]
    },
    {
      "company": "EPAM Systems",
      "location": "Hybrid · Tbilisi, Georgia",
      "role": "Junior Software Engineer",
      "dates": "Dec 2021 – Jul 2022",
      "bullets": [
        "Implemented mobile-first, accessible, responsive design with modern UI libraries, ensuring polished, performant cross-browser and cross-device experiences.",
        "Built and maintained unit test suites with Jest and React Testing Library, improving coverage and reducing production regressions."
      ]
    }
  ],
  "projects": [
    {
      "company": "Prive AI",
      "paragraphs": [
        "Solo-designed, built, and deployed end-to-end AI research assistant for tax advisors — 700+ registered users. Built conversational AI interfaces with streaming chat, a RAG pipeline over source documents, and calculation tools for precise, verifiable answers."
      ],
      "link": "https://priveai.ge/en",
      "tech": [
        "TypeScript",
        "Next.js",
        "React Query",
        "Express",
        "MongoDB",
        "LangChain"
      ]
    },
    {
      "company": "Benefits Georgia Client Portal",
      "paragraphs": [
        "Client portal for the 5th largest insurance company in Georgia — policy management, claims tracking, in-network provider search, and appointment booking. Owned the project end-to-end: architected the frontend and led a team of 2 mid-level frontend developers as a freelance engagement, targeting production release."
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
    "TypeScript",
    "JavaScript",
    "Python",
    "React",
    "Next.js",
    "TanStack/React Query",
    "TanStack Table",
    "react-virtualized",
    "Redux",
    "Material UI",
    "Tailwind CSS",
    "Accessibility",
    "i18n",
    "Node.js",
    "Express",
    "MongoDB",
    "FastAPI",
    "Docker",
    "AWS",
    "CI/CD",
    "Jest",
    "React Testing Library",
    "Cypress",
    "Playwright",
    "Vite",
    "LangChain",
    "RAG pipelines",
    "Vector Databases",
    "Streaming interfaces"
  ]
}
