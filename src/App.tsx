import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@components/layout/Layout/Layout'

// Lazy load routes for code splitting and better mobile performance
const Home = lazy(() => import('@pages/Home/Home'))
const OurProcess = lazy(() => import('@pages/OurProcess/OurProcess'))
const About = lazy(() => import('@pages/About/About'))
const FAQs = lazy(() => import('@pages/FAQs/FAQs'))
const Contact = lazy(() => import('@pages/Contact/Contact'))

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
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
