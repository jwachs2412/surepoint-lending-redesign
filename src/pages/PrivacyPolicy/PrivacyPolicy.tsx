import styles from './PrivacyPolicy.module.scss'
import { SEO } from '@components/common/SEO/SEO'
import { BreadcrumbSchema } from '@components/common/StructuredData/BreadcrumbSchema'

const privacyPolicySections = [
  {
    section: '1. Information We Collect and How We Collect It',
    content:
      'During your use of the Site and our Services, we may collect personal information about you that you choose to provide to us or other technical information about your interaction with our Site or our Service. You may choose not to provide personal information to us, but this will limit your ability to use the Site or our Services. As used herein, “personal information” means information that specifically identifies you, including, but not limited to, your name, address, telephone number, email address, social security number, financial information and related information. Personal information will generally be collected when you contact us through our Site, via email, telephone communication or otherwise. In addition to the personal information that you submit, Surepoint Equity may also collect certain information about your computer or device to evaluate and improve your interaction with the Site or our Services. This information may include your browser type, operating system, referring or exit web pages and IP address of your computer. We may also, from time to time, supplement the personal information that you submit to us with information from third party sources.',
  },
  {
    section: '2. How We Use the Information',
    content: (
      <>
        Surepoint Equity only shares your personal information with third parties in accordance with
        this Privacy Policy. We may share your personal information with third party vendors and
        service providers who perform certain functions on our behalf or who otherwise assist us in
        providing services for your benefit. We may also share your personal information with
        affiliates or to provide offers which may be of interest to you. If you prefer not to
        receive information about promotional offers, you may notify us via email at the address
        below. In addition, personal information may be disclosed or transferred to third parties
        seeking to acquire or otherwise finance your loan or during negotiations of, a merger,
        consolidation, sale of company assets or equity, financing, acquisition, strategic alliance
        or in any other situation where personal information may be reasonably necessary for due
        diligence and related purposes.
        <br />
        <br />
        We may also share your information with law enforcement, credit bureaus, or government
        agencies as required by law or for the purposes of detecting and/or limiting fraud. We
        reserve the right to disclose your personally identifiable information when we believe that
        disclosure is necessary to protect our rights or to comply with a judicial requirement,
        proceeding, court order or legal process. Please note that, if you are no longer a customer
        or continuing to use our Service, we may continue to share your personal information as
        described in this Privacy Policy.
      </>
    ),
  },
  {
    section: '3. Data Security',
    content:
      'We use reasonable physical, electronic and procedural safeguards and security measures to protect personal information that we collect from misuse, loss, unauthorized access, or improper disclosure. We attempt to limit access to the personal information that we have about you to those individuals who have a legitimate business need to access such information as outlined in this Privacy Policy.',
  },
  {
    section: '4. Web Analytics',
    content: (
      <>
        When you visit our Site, whether you register for an account, we may send one or more
        cookies to your computer. "Cookies" are small text files containing a string of alphanumeric
        characters that may be placed on your web browser when you visit our Site that store
        information on your computer, such as your preferences when visiting the Site. We may use
        cookies when you sign in, to keep track of your personal session, including some account
        identifiers so that we can ensure that you are the only person making changes to your
        account. We may also use cookies to track your activity on the Site as a unique person.
        While much of this information is aggregated and non-personal, any related information that
        personally identifies you is treated as personal information under this Privacy Policy. You
        can set your web browser to inform you when cookies are set or to prevent cookies from being
        set. Please note, however, that if you decline to use cookies, you may experience limited or
        no use of our Site.
        <br />
        <br />
        We (or our service providers, such as Google Analytics) may also collect web surfing data
        related to your use of the Site. This may include, for example, information regarding which
        of our web pages you access, the frequency of such access, and your product and service
        preferences. This data collection may be accomplished by using cookies, web beacons, page
        tags or similar tools that are set when you visit the Website. Such web surfing data may
        include your IP address, browser type, internet service provider (ISP), referring or exit
        pages, click stream data, operating system and the dates and times that you visit the Site.
        Web surfing data and similar information may be used for administrative purposes, to assess
        the usage, value and performance of our online products and services, and to improve your
        experience with the Site. As with cookies, the web surfing information collected is largely
        used as aggregated, anonymous data.
        <br />
        <br />
        We do not respond to "do not track" signals or similar mechanisms where a visitor to the
        Site requests that we disable the collection of information about the visitor's online
        activities, including navigation around the Site. Third parties that we permit to collect
        information on the Site may also not respond to "do not track" signals.
      </>
    ),
  },
  {
    section: '5. General Disclosures',
    content:
      "Surepoint Equity may disclose your Personal Information in response to a subpoena or other court order, if otherwise required by law, or in an effort to cooperate with law enforcement. Surepoint Equity may disclose your Personal Information when Surepoint Equity believes that doing so is necessary or desirable (a) to enforce Surepoint Equity's rights or defend against legal claims, (b) to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving personal threats to physical safety, allegations of intellectual property infringement or violations of privacy rights, violations of the terms of use and/or (c) as otherwise required by law. Surepoint Equity may disclose your Personal Information to third parties to enable them to provide services to you or Surepoint Equity, provide products or services to you, provide research or analysis for Surepoint Equity, provide data storage or host services for Surepoint Equity, or assist Surepoint Equity in providing Services, whether through our Site or otherwise. Surepoint Equity may disclose your Personal Information in the event of a sale of substantially all Surepoint Equity's assets, the merger, dissolution, or reorganization of Surepoint Equity, or in connection with the transfer of a discrete portfolio of assets or information. If that happens, the new company's privacy policy may govern the further protection, use, and disclosure of your Personal Information.",
  },
  {
    section: '6. Opt-out/California Residents',
    content: (
      <>
        California Civil Code Section 1798.83 permits users of the Site who are California residents
        to request certain information regarding our disclosure of Personal Information to third
        parties for their direct marketing purposes. Surepoint Equity does not share personal
        information with third parties for direct marketing purposes unless specifically permitted
        herein. To make such a request, please send an email to{' '}
        <a href="mailto:flip@surepointequity.com">flip@surepointequity.com</a>, call us at{' '}
        <a href="tel:855-445-3547">855-445-FLIP</a>.
      </>
    ),
  },
  {
    section: "7. Children's Privacy",
    content:
      'We do not intend to collect personal information from children. If we learn that we have collected this information from a child under the age of 13, we will promptly take reasonable steps to delete such data from our system.',
  },
  {
    section: '8. Links to Third Party Sites',
    content:
      'If you follow any links that direct you away from our Site, this Privacy Policy will not apply to your activity on the other websites you visit. We do not control the privacy policies or the privacy practices of any third parties.',
  },
  {
    section: '9. Modifications to Privacy Policy',
    content:
      'We may modify this Privacy Policy from time to time in our sole discretion. If we make a material change to this Privacy Policy, we will post such changes on our Website and we will send also send notice via email. By continuing to use our Website or Services after such notice, you are bound by this Privacy Policy as modified.',
  },
  {
    section: '10. Contact Information',
    content: (
      <>
        If you have questions about this Privacy Policy, you may contact us via email{' '}
        <a href="mailto:flip@surepointequity.com">flip@surepointequity.com</a>. We will use
        reasonable efforts to respond promptly to reasonable requests or questions you may have
        regarding our use of your Personal Information.
      </>
    ),
  },
]

export const PrivacyPolicy = () => {
  return (
    <main className={styles.privacy} id="main-content">
      <SEO
        title="Privacy Policy"
        description="Surepoint Equity Privacy Policy explains how we collect, use, protect and share personal and financial information for our real estate lending services."
        canonical="/privacy-policy"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy-policy' },
        ]}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>PRIVACY POLICY</h1>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className={styles.privacy__wrapper}>
        <div className={styles.privacy__container}>
          <h2 className={styles.privacy__heading}>SurePoint Equity Privacy Policy</h2>
          <p className={styles.privacy__openingParagraph}>
            Surepoint Equity, LLC ("Surepoint Equity," "we" or "us"), values your privacy. The
            following Privacy Policy explains our practices with respect to how we collect, use,
            disclose and secure your personal information in connection with our website at
            www.surepointequity.com (the "Site") and our lending service or related services
            ("Service"). This Privacy Policy applies to personal information we collect from you
            through the Site, but does not apply to any personal information collected otherwise or
            by third parties from you. This Privacy Policy forms part of the Terms and Conditions of
            Use that govern your use of our Site.
          </p>
          <p className={styles.privacy__openingParagraph}>
            This notice describes our Privacy Policy effective as of October 10, 2016, and we
            reserve the right to update this Privacy Policy at any time. Any changes to the Privacy
            Policy will be immediately effective upon the posting of the updated policy. By
            continuing to use our Site and our Services, you agree to this Privacy Policy and the
            collection, use, disclosure, and storage of your personal information as described
            herein.
          </p>
          <div className={styles.privacy__grid}>
            {privacyPolicySections.map((item, index) => (
              <div key={index} className={styles.privacy__section}>
                <p className={styles.privacy__description}>
                  <b>{item.section}:</b> {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy
