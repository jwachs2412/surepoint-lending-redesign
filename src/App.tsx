import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@components/layout/Layout/Layout'
import Home from '@pages/Home/Home'
import OurProcess from '@pages/OurProcess/OurProcess'
import About from '@pages/About/About'
import FAQs from '@pages/FAQs/FAQs'
import Contact from '@pages/Contact/Contact'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
