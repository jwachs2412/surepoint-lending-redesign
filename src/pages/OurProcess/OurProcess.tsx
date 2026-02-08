import { useState } from 'react'
import styles from './OurProcess.module.scss'
import { Button } from '@components/common/Button/Button'
import { SEO } from '@components/common/SEO/SEO'
import { BreadcrumbSchema } from '@components/common/StructuredData/BreadcrumbSchema'

const processSteps = [
  {
    step: 'STEP 1',
    icon: '📞',
    content: (
      <>
        Call us at{' '}
        <a href="tel:8884445347" className={styles.process__link}>
          888-445-FLIP
        </a>
        <br />
        or email
        <br />
        <a href="mailto:FLIP@surepointequity.com" className={styles.process__link}>
          FLIP@surepointequity.com
        </a>
        <br />
        to inquire about a loan
      </>
    ),
  },
  {
    step: 'STEP 2',
    icon: '📄',
    content:
      "We'll send you a checklist of items needed and a link to securely upload your documents",
  },
  {
    step: 'STEP 3',
    icon: '✓',
    content:
      "We'll contact you within 24 hours of receiving information with your loan approval details",
  },
  {
    step: 'STEP 4',
    icon: '🏆',
    content: (
      <>
        <strong>
          Go Win the Deal!
          <br />
          Closings as fast as
          <br />
          10 Business Days!
        </strong>
      </>
    ),
  },
]

export const OurProcess = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    message: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Form submitted! (This is a demo - no actual submission)')
    setFormData({ name: '', email: '', phone: '', loanType: '', message: '' })
  }

  return (
    <main className={styles.our_process} id="main-content">
      <SEO
        title="Our Process"
        description="Get approved quickly with SurePoint Equity's simple 4-step process. From inquiry to closing in as fast as 10 business days for your real estate investment."
        canonical="/our-process"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Our Process', url: '/our-process' },
        ]}
      />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>HOW IT WORKS</h1>
          <p className={styles.hero__subtitle}>
            Our simple process makes it easy for you to get approved quickly so you can go out and
            win the deal.
          </p>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className={styles.process}>
        <div className={styles.process__container}>
          <div className={styles.process__grid}>
            {processSteps.map((item, index) => (
              <div key={index} className={styles.process__step}>
                <h3 className={styles.process__step_number}>{item.step}</h3>
                <div className={styles.process__icon}>{item.icon}</div>
                <p className={styles.process__description}>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Reused from Home */}
      <section className={styles.contact}>
        <div className={styles.contact__container}>
          {/* Contact Info */}
          <div className={styles.contact__info}>
            <h2 className={styles.contact__heading}>Let's Do This</h2>
            <p className={styles.contact__text}>
              Ready to get started? Contact us today to discuss your real estate investment
              financing needs.
            </p>

            <div className={styles.contact__details}>
              <div className={styles.contact__detail}>
                <h4>Call Us</h4>
                <a href="tel:+18884445347" className={styles.contact__phone}>
                  888-445-FLIP
                </a>
              </div>

              <div className={styles.contact__detail}>
                <h4>Email</h4>
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
                <h4>Office</h4>
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

          {/* Contact Form */}
          <div className={styles.contact__form}>
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.form__group}>
                <label htmlFor="name" className={styles.form__label}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.form__input}
                />
              </div>

              <div className={styles.form__row}>
                <div className={styles.form__group}>
                  <label htmlFor="email" className={styles.form__label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.form__input}
                  />
                </div>

                <div className={styles.form__group}>
                  <label htmlFor="phone" className={styles.form__label}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={styles.form__input}
                  />
                </div>
              </div>

              <div className={styles.form__group}>
                <label htmlFor="loanType" className={styles.form__label}>
                  Loan Type
                </label>
                <select
                  id="loanType"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleInputChange}
                  className={styles.form__select}
                >
                  <option value="">Select a loan type</option>
                  <option value="purchase">Purchase + Renovation</option>
                  <option value="refinance">Refinance</option>
                </select>
              </div>

              <div className={styles.form__group}>
                <label htmlFor="message" className={styles.form__label}>
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={styles.form__textarea}
                />
              </div>

              <Button type="submit" variant="primary" size="large" fullWidth>
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OurProcess
