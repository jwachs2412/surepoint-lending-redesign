import { Helmet } from 'react-helmet-async'

export const FAQSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What type of loan products do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide real estate investors with short term financing for non-owner occupied residential renovation loans. Simply said, we fund flips.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are your rates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Typically, you will find our rates to be higher than traditional bank financing, but lower than most hard money lenders. Since we are not a bank, we require less money down so you can keep your cash to do more deals. We don't qualify investors like a bank. If it makes sense, we'll make it happen. We don't have minimum credit score, asset or income requirements. We will look at your individual scenario and quickly quote a rate for you.",
        },
      },
      {
        '@type': 'Question',
        name: 'What are your fees?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We have $0 fees to apply. Like our rates, our fees are determined on a case by case basis. We can quickly look at your individual scenario and quote your exact loan terms. Most of our fees are charged when you sell your FLIP, so we don't get paid until you get paid.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do you finance improvement costs for the renovation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We finance up to 100% of your improvement costs in addition to 90% of the purchase price.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is your Loan Term?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide short term financing, so all loan terms are 12 months.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you lend to individuals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We are not a bank or a regulated financial institution. Therefore, we only lend to Business Entities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do I need to qualify?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We don't qualify investors like a bank. If it makes sense, we'll make it happen. We don't have minimum credit score, asset or income requirements. We underwrite primarily on the experience of the investor and the subject property.",
        },
      },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default FAQSchema
