// Renders the CV straight to a PDF file without opening the browser:
//   npm run pdf
// Run through tsx, which compiles the TypeScript/JSX sources on the fly.
import { createElement } from 'react'
import { renderToFile } from '@react-pdf/renderer'
import CvDocument from '../src/CvDocument.tsx'

const out = new URL('../Levan_Tediashvili_CV.pdf', import.meta.url).pathname
await renderToFile(createElement(CvDocument), out)
console.log(`PDF written to ${out}`)
