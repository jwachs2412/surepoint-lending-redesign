import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@components/layout/Layout/Layout'
import { ScrollToTop } from '@components/common/ScrollToTop/ScrollToTop'
import Home from '@pages/Home/Home' // Keep Home eager for better initial load

// Lazy load non-critical routes for code splitting
const OurProcess = lazy(() => import('@pages/OurProcess/OurProcess'))
const About = lazy(() => import('@pages/About/About'))
const FAQs = lazy(() => import('@pages/FAQs/FAQs'))
const Contact = lazy(() => import('@pages/Contact/Contact'))

// Minimal loading fallback to prevent layout shift
const LoadingFallback = () => (
  <div style={{
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid #E8EDF5',
      borderTop: '3px solid #1E5EAA',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-process" element={<OurProcess />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
