import type { CSSProperties } from 'react'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import CvDocument from './CvDocument.tsx'

const toolbar: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 20px',
  background: '#2a2826',
  color: '#e3ded4',
}

const button: CSSProperties = {
  fontFamily: 'ui-monospace, monospace',
  fontSize: 13,
  color: '#fff',
  background: '#a8674e',
  textDecoration: 'none',
  padding: '8px 16px',
  borderRadius: 6,
}

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <header style={toolbar}>
        <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 13, letterSpacing: '0.1em' }}>
          LEVAN TEDIASHVILI — CV
        </span>
        <PDFDownloadLink
          document={<CvDocument />}
          fileName="Levan_Tediashvili_CV.pdf"
          style={button}
        >
          {({ loading }) => (loading ? 'Rendering…' : 'Download PDF')}
        </PDFDownloadLink>
      </header>
      <PDFViewer style={{ flex: 1, border: 'none' }} showToolbar>
        <CvDocument />
      </PDFViewer>
    </div>
  )
}
