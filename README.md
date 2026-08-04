# web-cv

Levan Tediashvili's CV as a React + TypeScript + [@react-pdf/renderer](https://react-pdf.org)
project. The CV is defined in TSX, previewed live in the browser as a real PDF, and
exported to a `.pdf` file — same output either way.

## Usage

```bash
npm install
npm run dev        # live PDF preview at http://localhost:5173 (hot-reloads on edit)
npm run pdf        # writes Levan_Tediashvili_CV.pdf to the project root
npm run typecheck  # tsc --noEmit
npm run build      # typecheck + production build to dist/
```

The dev page also has a **Download PDF** button.

## Editing

| File | What to edit |
| --- | --- |
| [src/cv-data.ts](src/cv-data.ts) | **All CV text** — jobs, bullets, education, skills. Start here. |
| [src/types.ts](src/types.ts) | Types describing the CV content shape. |
| [src/CvDocument.tsx](src/CvDocument.tsx) | Layout and styles (react-pdf TSX + StyleSheet). |
| [src/theme.ts](src/theme.ts) | Colors and font family names. |
| [src/fonts.ts](src/fonts.ts) | Font registration (IBM Plex Sans/Mono, bundled in `src/fonts/`). |

Notes:

- `cv-data.ts` is typed as `Cv`, so a typo in a field name or a missing `company`
  is a compile error rather than a silently missing line in the PDF.
- The design was authored in CSS px; the `px()` helper in `theme.ts` converts to
  PDF points, so style values in `CvDocument.tsx` stay 1:1 with the original design.
- Rich text (bold/medium spans inside paragraphs) is written as segment arrays in
  `cv-data.ts` — see `RichText` in `types.ts`.
- The bundled TTFs had their `fi`/`fl` ligature features stripped so copy-paste and
  ATS text extraction read "first", not "frst". If you replace the fonts, use static
  (non-variable) TTFs — react-pdf's font parser can't read variable-font instances.
- The CV currently fits 2 pages. Entries are kept unbroken (`wrap={false}`), so if
  added content pushes it to 3, the spacing values at the top of `CvDocument.tsx`
  (`section`, `entry`, `paragraph`) are the knobs to turn.
