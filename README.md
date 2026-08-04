# web-cv

Levan Tediashvili's CV as a React + TypeScript project, with two views driven by
one source of truth ([src/cv-data.ts](src/cv-data.ts)):

| Route | What it is |
| --- | --- |
| `/` | Responsive landing page — regular React components + CSS. |
| `/pdf` | The same CV rendered as a real PDF via [@react-pdf/renderer](https://react-pdf.org). |

## Usage

```bash
npm install
npm run dev        # http://localhost:5173
npm run pdf        # writes public/Levan_Tediashvili_CV.pdf
npm run typecheck  # tsc --noEmit
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build
```

Run `npm run pdf` after editing the CV so the downloadable file stays in sync —
it writes into `public/`, which the landing page's "Download CV" button links to
and Vite copies into `dist/` at build time.

## Editing

| File | What to edit |
| --- | --- |
| [src/cv-data.ts](src/cv-data.ts) | **All CV text** — jobs, bullets, education, skills. Start here; both views read it. |
| [src/types.ts](src/types.ts) | Types describing the CV content shape. |
| [src/Landing.tsx](src/Landing.tsx) + [src/landing.css](src/landing.css) | The web landing page. |
| [src/CvDocument.tsx](src/CvDocument.tsx) | The PDF layout (react-pdf TSX + StyleSheet). |
| [src/PdfPage.tsx](src/PdfPage.tsx) | The `/pdf` viewer shell (toolbar + download button). |
| [src/theme.ts](src/theme.ts) | Colors and font names used by the PDF. |

Notes:

- **Two renderers, one dataset.** react-pdf has its own primitives (`View`/`Text`,
  no CSS), so the landing page can't reuse `CvDocument.tsx` — each view has its own
  `Rich` renderer for the bold/medium text segments, both reading the same `cv` object.
- **Responsive** via fluid `clamp()` type and two breakpoints: the contact block
  stacks under the name below 34rem, and the Education/Languages grid becomes one
  column below 44rem. Verified with no horizontal overflow at 375px, 768px, and desktop.
- The `/pdf` route is **lazy-loaded** — react-pdf is ~1.5MB, so keeping it out of the
  initial bundle leaves the landing page at ~244KB (79KB gzipped).
- **Deploying:** client-side routing means the host must serve `index.html` for
  unknown paths, or a hard refresh on `/pdf` 404s. `public/_redirects` (Netlify) and
  `vercel.json` (Vercel) are included; other hosts need the equivalent SPA fallback.
- The bundled TTFs had their `fi`/`fl` ligature features stripped so copy-paste and
  ATS text extraction read "first", not "frst". If you replace the fonts, use static
  (non-variable) TTFs — react-pdf's font parser can't read variable-font instances.
- The PDF fits 2 pages. Entries are kept unbroken (`wrap={false}`), so if added
  content pushes it to 3, the spacing values at the top of `CvDocument.tsx` are the
  knobs to turn.
