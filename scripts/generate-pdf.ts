// Renders the CV straight to a PDF file without opening the browser:
//   npm run pdf
// Run through tsx, which compiles the TypeScript/JSX sources on the fly.
//
// Writes into public/ so the landing page's "Download CV" link serves the same
// file, and Vite copies it into dist/ at build time.
import { mkdir } from 'node:fs/promises'
import { createElement } from 'react'
import { renderToFile } from '@react-pdf/renderer'
import CvDocument from '../src/CvDocument.tsx'

const publicDir = new URL('../public/', import.meta.url)
await mkdir(publicDir, { recursive: true })

const out = new URL('Levan_Tediashvili_CV.pdf', publicDir).pathname
await renderToFile(createElement(CvDocument), out)
console.log(`PDF written to ${out}`)
