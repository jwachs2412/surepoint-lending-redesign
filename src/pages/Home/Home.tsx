import { Link } from 'react-router-dom'
import { Button } from '@components/common/Button/Button'
import { Input } from '@components/common/Input/Input'
import { SEO } from '@components/common/SEO/SEO'
import { OrganizationSchema } from '@components/common/StructuredData/OrganizationSchema'
import { WebSiteSchema } from '@components/common/StructuredData/WebSiteSchema'
import styles from './Home.module.scss'
import buttonStyles from '@components/common/Button/Button.module.scss'
import { useState } from 'react'

export const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    message: ''
  })

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    if (formSection) {
      // Get the contact__container element (the actual content container)
      const container = formSection.querySelector('[class*="contact__container"]')
      const targetElement = container || formSection

      // Get the header height from CSS variable
      const headerOffset = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-offset') || '73',
        10
      )

      // Calculate the position to scroll to
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      // Scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission - just show alert for demo
    alert('Form submitted! (This is a demo - no actual submission)')
    setFormData({ name: '', email: '', phone: '', loanType: '', message: '' })
  }

  return (
    <div className={styles.home}>
      <SEO
        title="Home"
        description="SurePoint Equity provides short-term financing for real estate investors. Experience fast closings, competitive rates, and flexible terms for your fix and flip projects."
        canonical="/"
      />
      <OrganizationSchema />
      <WebSiteSchema />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__content}>
          <p className={styles.hero__eyebrow}>Real Estate Investment Lending</p>
          
          <h1 className={styles.hero__title}>
            A Common Sense Lender<br />
            for Real Estate Investors
          </h1>
          
          <p className={styles.hero__subtitle}>
            Specializing in non-owner occupied renovation loans with flexible terms,
            fast closings, and a practical approach to making deals work
          </p>
          
          <div className={styles.hero__cta_group}>
            <Button variant="primary" size="large" onClick={scrollToForm}>
              Get Started Today
            </Button>
            <Link
              to="/our-process"
              className={`${buttonStyles.button} ${buttonStyles['button--outline']} ${buttonStyles['button--large']} ${styles.hero__outline_btn}`}
            >
              View Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.stats__grid}>
          <div className={styles.stat}>
            <div className={styles.stat__number}>90%</div>
            <div className={styles.stat__label}>Purchase Financing</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.stat__number}>100%</div>
            <div className={styles.stat__label}>Improvement Costs</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.stat__number}>10</div>
            <div className={styles.stat__label}>Day Closings</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.stat__number}>48hr</div>
            <div className={styles.stat__label}>Draw Payments</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.features__container}>
          <div className={styles.features__header}>
            <p className={styles.features__tag}>Why Choose SurePoint</p>
            <h2 className={styles.features__heading}>
              See How You'll Grow Your Business
            </h2>
            <p className={styles.features__description}>
              We're committed to helping real estate investors succeed with competitive
              terms, fast decisions, and a partnership approach to lending
            </p>
          </div>

          <div className={styles.features__grid}>
            {/* Card 1 */}
            <div className={styles.feature_card}>
              <div className={styles.feature_card__icon}>💰</div>
              <h3 className={styles.feature_card__title}>Keep Your Cash</h3>
              <p className={styles.feature_card__description}>
                Finance up to 90% of purchase price plus 100% of improvements.
                12-month flexible terms designed for real estate investors.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.feature_card}>
              <div className={styles.feature_card__icon}>⚡</div>
              <h3 className={styles.feature_card__title}>Speed is King</h3>
              <p className={styles.feature_card__description}>
                Close in as little as 10 business days. Get draws paid in 48 hours
                and approvals within 24 hours.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.feature_card}>
              <div className={styles.feature_card__icon}>🤝</div>
              <h3 className={styles.feature_card__title}>Common Sense Lending</h3>
              <p className={styles.feature_card__description}>
                If it makes sense, we'll make it happen. Our practical approach
                to underwriting finds ways to make deals work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className={styles.contact}>
        <div className={styles.contact__container}>
          <div className={styles.contact__info}>
            <h2 className={styles.contact__heading}>Let's Do This</h2>
            <p className={styles.contact__text}>
              Ready to get started? Contact us today to discuss your real estate investment
              financing needs.
            </p>
            <div className={styles.contact__details}>
              <div className={styles.contact__detail}>
                <h3>Call Us</h3>
                <a href="tel:+18884445347" className={styles.contact__phone}>
                  888-445-FLIP
                </a>
              </div>
              <div className={styles.contact__detail}>
                <h3>Email</h3>
                <p>
                  <a
                    href="mailto:FLIP@surepointequity.com"
                    style={{ color: '#00A8CC', textDecoration: 'none' }}
                  >
                    FLIP@surepointequity.com
                  </a>
                </p>
              </div>
              <div className={styles.contact__detail}>
                <h3>Office</h3>
                <p>
                  8001 Lyndon Centre Way
                  <br />
                  Suite 101
                  <br />
                  Louisville, KY 40222
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.contact__form}>
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.form__group}>
                <Input
                  label="Full Name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div className={styles.form__row}>
                <div className={styles.form__group}>
                  <Input
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className={styles.form__group}>
                  <Input
                    label="Phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className={styles.form__group}>
                <label htmlFor="loanType" className={styles.form__label}>Loan Type</label>
                <select
                  id="loanType"
                  name="loanType"
                  className={styles.form__select}
                  value={formData.loanType}
                  onChange={(e) => setFormData({...formData, loanType: e.target.value})}
                  aria-label="Select loan type"
                >
                  <option value="">Select a loan type</option>
                  <option value="purchase">Purchase + Renovation</option>
                  <option value="refinance">Refinance</option>
                </select>
              </div>

              <div className={styles.form__group}>
                <label htmlFor="projectDetails" className={styles.form__label}>Project Details</label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  className={styles.form__textarea}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  aria-label="Enter project details"
                />
              </div>

              <Button type="submit" variant="primary" size="large" fullWidth>
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
