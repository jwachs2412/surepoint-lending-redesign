import { useState } from 'react'
import styles from './About.module.scss'
import { Button } from '@components/common/Button/Button'
import { SEO } from '@components/common/SEO/SEO'
import { BreadcrumbSchema } from '@components/common/StructuredData/BreadcrumbSchema'

const teamMembers = [
  {
    name: 'SAUL POHN',
    phone: '502.205.9423',
    email: 'flip@surepointequity.com',
    image: 'https://lirp.cdn-website.com/a68655c6/dms3rep/multi/opt/Saul-270w.png',
  },
  {
    name: 'LEIGH WISE',
    phone: '502.205.9422',
    email: 'flip@surepointequity.com',
    image: 'https://lirp.cdn-website.com/a68655c6/dms3rep/multi/opt/Leigh-270w.png',
  },
  {
    name: 'JORDAN POHN',
    phone: '502.205.9424',
    email: 'flip@surepointequity.com',
    image: 'https://lirp.cdn-website.com/a68655c6/dms3rep/multi/opt/jordan-1-270w.png',
  },
]

const testimonials = [
  '"I am now working multiple properties with the same capital expenditure that I used to need to work 1 or 2. They get deals to the table quickly are always very responsive. Our business has grown with SurePoint financing our flips."',
  '"SurePoint has been a great partner. Being self-employed, the banks were very limiting with financing options. SurePoint financed multiple properties simultaneously for me and got it done quickly and easily. I highly recommend them."',
]

export const About = () => {
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
    <main className={styles.about} id="main-content">
      <SEO
        title="About Us"
        description="Meet the SurePoint Equity team. Three mortgage executives with over 20 years of residential lending experience, committed to delivering exceptional service to real estate investors."
        canonical="/about"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]}
      />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>WHO WE ARE</h1>
          <p className={styles.hero__subtitle}>Experience. Capital. Service. Speed.</p>
        </div>
      </section>

      {/* Company Description Section */}
      <section className={styles.description}>
        <div className={styles.description__container}>
          <div className={styles.description__content}>
            <p>
              We are a private lender funding residential renovation loans for real estate
              investors. We are well capitalized so you can rest assured, your deals will get
              funded. We understand the unique needs of investors flipping real estate. We are
              committed to delivering the speed, service and products needed for you to win more
              deals and grow your business.
            </p>
            <p>
              Our members consist of 3 prior mortgage executives from a nationally ranked lender.
              Each team member has over 20 years of residential lending experience and a strong
              background in building and developing a platform to deliver impeccable service and
              quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.team__container}>
          <div className={styles.team__grid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.team__member}>
                <div className={styles.team__image_wrapper}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.team__image}
                    loading="lazy"
                  />
                </div>
                <h3 className={styles.team__name}>{member.name}</h3>
                <div className={styles.team__contact}>
                  <p>
                    <a href={`tel:${member.phone.replace(/\./g, '')}`} className={styles.team__phone}>
                      {member.phone}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${member.email}`} className={styles.team__email}>
                      {member.email}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.testimonials__container}>
          <h2 className={styles.testimonials__heading}>See why our clients love us!</h2>
          <div className={styles.testimonials__content}>
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className={styles.testimonials__quote}>
                {testimonial}
              </blockquote>
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
                  aria-label="Select loan type"
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
    </main>
  )
}

export default About
