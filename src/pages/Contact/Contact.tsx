import { useState } from 'react'
import styles from './Contact.module.scss'
import { Button } from '@components/common/Button/Button'
import { SEO } from '@components/common/SEO/SEO'
import { OrganizationSchema } from '@components/common/StructuredData/OrganizationSchema'
import { BreadcrumbSchema } from '@components/common/StructuredData/BreadcrumbSchema'

export const Contact = () => {
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
    <main className={styles.contact} id="main-content">
      <SEO
        title="Contact Us"
        description="Contact SurePoint Equity in Louisville, KY. Call 888-445-FLIP or visit our office at 8001 Lyndon Centre Way, Suite 101. Get started on your real estate investment loan today."
        canonical="/contact"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact Us', url: '/contact' },
        ]}
      />
      {/* Google Map Section */}
      <section className={styles.map_section}>
        <div className={styles.map_container}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.9609769933204!2d-85.60611078865931!3d38.25721108410657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88699fba7a857bb9%3A0xac89ebd48c652d58!2sSurePoint%20Equity!5e0!3m2!1sen!2sus!4v1770499502443!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SurePoint Equity Location"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact_section}>
        <div className={styles.contact_section__container}>
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

export default Contact
