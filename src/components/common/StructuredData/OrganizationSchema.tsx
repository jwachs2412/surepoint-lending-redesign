import { Helmet } from 'react-helmet-async'

export const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'SurePoint Equity',
    description:
      'SurePoint Equity provides short-term financing for real estate investors, specializing in fix and flip loans, bridge loans, and renovation financing.',
    url: 'https://surepointequity.com',
    logo: 'https://surepointequity.com/logo.png',
    image: 'https://surepointequity.com/og-image.jpg',
    telephone: '+1-888-445-3547',
    email: 'FLIP@surepointequity.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8001 Lyndon Centre Way, Suite 101',
      addressLocality: 'Louisville',
      addressRegion: 'KY',
      postalCode: '40222',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '38.257211',
      longitude: '-85.606110',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [
      // Add social media URLs here when available
      // 'https://www.facebook.com/surepointequity',
      // 'https://www.linkedin.com/company/surepoint-equity',
    ],
    areaServed: {
      '@type': 'State',
      name: 'Kentucky',
    },
    priceRange: '$$',
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default OrganizationSchema
