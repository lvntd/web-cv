import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './Landing.tsx'

// The PDF renderer is a large bundle and only /pdf needs it — load it on demand
// so the landing page stays light.
const PdfPage = lazy(() => import('./PdfPage.tsx'))

const fallback = (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      fontFamily: 'ui-monospace, monospace',
      fontSize: 13,
      color: '#6e6b64',
    }}
  >
    Loading PDF…
  </div>
)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/pdf"
          element={
            <Suspense fallback={fallback}>
              <PdfPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
