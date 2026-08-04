import { Font } from '@react-pdf/renderer'

// Resolves a font file both in the browser (Vite serves/bundles the asset)
// and in Node (scripts/generate-pdf.ts needs a filesystem path).
const font = (url: URL): string => (typeof window === 'undefined' ? url.pathname : url.href)

Font.register({
  family: 'IBM Plex Sans',
  fonts: [
    { src: font(new URL('./fonts/IBMPlexSans-Regular.ttf', import.meta.url)), fontWeight: 400 },
    { src: font(new URL('./fonts/IBMPlexSans-Medium.ttf', import.meta.url)), fontWeight: 500 },
    { src: font(new URL('./fonts/IBMPlexSans-SemiBold.ttf', import.meta.url)), fontWeight: 600 },
    { src: font(new URL('./fonts/IBMPlexSans-Bold.ttf', import.meta.url)), fontWeight: 700 },
  ],
})

Font.register({
  family: 'IBM Plex Mono',
  fonts: [
    { src: font(new URL('./fonts/IBMPlexMono-Regular.ttf', import.meta.url)), fontWeight: 400 },
    { src: font(new URL('./fonts/IBMPlexMono-Medium.ttf', import.meta.url)), fontWeight: 500 },
  ],
})

// Don't hyphenate words — match browser text wrapping.
Font.registerHyphenationCallback((word) => [word])
