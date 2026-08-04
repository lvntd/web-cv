import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import CvDocument from './CvDocument.tsx'

const toolbar: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '0.75rem',
  padding: '0.65rem 1.25rem',
  background: '#2a2826',
  color: '#e3ded4',
}

const mono = 'ui-monospace, "SF Mono", monospace'

const backLink: CSSProperties = {
  fontFamily: mono,
  fontSize: 13,
  color: '#e3ded4',
  textDecoration: 'none',
}

const button: CSSProperties = {
  fontFamily: mono,
  fontSize: 13,
  color: '#fff',
  background: '#a8674e',
  textDecoration: 'none',
  padding: '8px 16px',
  borderRadius: 6,
}

export default function PdfPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <header style={toolbar}>
        <Link to="/" style={backLink}>
          ← LEVAN TEDIASHVILI — CV
        </Link>
        <PDFDownloadLink
          document={<CvDocument />}
          fileName="Levan_Tediashvili_CV.pdf"
          style={button}
        >
          {({ loading }) => (loading ? 'Rendering…' : 'Download PDF')}
        </PDFDownloadLink>
      </header>
      <PDFViewer style={{ flex: 1, border: 'none', minHeight: 0 }} showToolbar>
        <CvDocument />
      </PDFViewer>
    </div>
  )
}
