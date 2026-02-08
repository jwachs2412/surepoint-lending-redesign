import { useState } from 'react'
import styles from './FAQs.module.scss'
import { Button } from '@components/common/Button/Button'
import { SEO } from '@components/common/SEO/SEO'
import { FAQSchema } from '@components/common/StructuredData/FAQSchema'
import { BreadcrumbSchema } from '@components/common/StructuredData/BreadcrumbSchema'

const faqData = [
  {
    question: 'What type of loan products do you offer?',
    answer:
      'We provide real estate investors with short term financing for non-owner occupied residential renovation loans. Simply said, we fund flips.',
  },
  {
    question: 'What are your rates?',
    answer:
      "Typically, you will find our rates to be higher than traditional bank financing, but lower than most hard money lenders. Since we are not a bank, we require less money down so you can keep your cash to do more deals. We don't qualify investors like a bank. If it makes sense, we'll make it happen. We don't have minimum credit score, asset or income requirements. We will look at your individual scenario and quickly quote a rate for you.",
  },
  {
    question: 'What are your fees?',
    answer:
      "We have $0 fees to apply. Like our rates, our fees are determined on a case by case basis. We can quickly look at your individual scenario and quote your exact loan terms. Most of our fees are charged when you sell your FLIP, so we don't get paid until you get paid.",
  },
  {
    question: 'Do you finance improvement costs for the renovation?',
    answer:
      'Yes. We finance up to 100% of your improvement costs in addition to 90% of the purchase price.',
  },
  {
    question: 'What is your Loan Term?',
    answer: 'We provide short term financing, so all loan terms are 12 months.',
  },
  {
    question: 'Do you lend to individuals?',
    answer:
      'No. We are not a bank or a regulated financial institution. Therefore, we only lend to Business Entities.',
  },
  {
    question: 'What do I need to qualify?',
    answer:
      "We don't qualify investors like a bank. If it makes sense, we'll make it happen. We don't have minimum credit score, asset or income requirements. We underwrite primarily on the experience of the investor and the subject property.",
  },
]

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    message: '',
  })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
    <main className={styles.faqs} id="main-content">
      <SEO
        title="FAQs"
        description="Get answers to frequently asked questions about SurePoint Equity's loan products, rates, fees, qualification requirements, and loan terms for real estate investors."
        canonical="/faqs"
      />
      <FAQSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'FAQs', url: '/faqs' },
        ]}
      />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>QUESTIONS?</h1>
          <p className={styles.hero__subtitle}>
            Check out our FAQ's below or call us with anything you want answered.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq_section}>
        <div className={styles.faq_section__container}>
          <div className={styles.faq_list}>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faq_item}>
                <button
                  className={`${styles.faq_question} ${
                    openIndex === index ? styles['faq_question--active'] : ''
                  }`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className={styles.faq_icon}>{openIndex === index ? '−' : '+'}</span>
                </button>
                <div
                  className={`${styles.faq_answer} ${
                    openIndex === index ? styles['faq_answer--open'] : ''
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

export default FAQs
