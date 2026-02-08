import { Helmet } from 'react-helmet-async'

export const WebSiteSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SurePoint Equity',
    url: 'https://surepointequity.com',
    description:
      'Short-term financing for real estate investors. Fast closings, competitive rates, and flexible terms for fix and flip projects.',
    publisher: {
      '@type': 'FinancialService',
      name: 'SurePoint Equity',
      logo: {
        '@type': 'ImageObject',
        url: 'https://surepointequity.com/logo.png',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://surepointequity.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default WebSiteSchema
