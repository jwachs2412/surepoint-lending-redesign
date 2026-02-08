import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogType?: string
  ogImage?: string
  twitterCard?: string
}

export const SEO = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = '/og-image.jpg',
  twitterCard = 'summary_large_image',
}: SEOProps) => {
  const siteUrl = 'https://surepointequity.com'
  const fullTitle = `${title} | SurePoint Equity`
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Tags */}
      <meta property="og:site_name" content="SurePoint Equity" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="SurePoint Equity" />
    </Helmet>
  )
}

export default SEO
