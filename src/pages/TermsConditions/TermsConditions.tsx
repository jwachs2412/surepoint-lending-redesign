import styles from './TermsConditions.module.scss'
import { SEO } from '@components/common/SEO/SEO'
import { BreadcrumbSchema } from '@components/common/StructuredData/BreadcrumbSchema'

const termsAndConditionsSections = [
  {
    section: '1. Eligibility',
    content: (
      <>
        <p className={styles.terms__description}>
          You must be eighteen (18) years of age or older to use our Service. Neither our Site nor
          the Service is intended to be used by children. By using the Service or the Site, you
          represent and warrant that you are eighteen (18) years of age or older and that you agree
          to abide by all of the terms and conditions of these Terms of Use.
        </p>
      </>
    ),
  },
  {
    section: '2. User Representations and Obligations',
    content: (
      <>
        <p className={styles.terms__description}>
          In consideration of your use of the Site and Service, you agree to: (i) use the Service
          only for purposes that are legal, proper and in accordance with these Terms of Use and any
          applicable law, rules or regulations, (ii) only provide accurate, current and complete
          information (“User Data”); (iii) maintain the security of any password or login
          credentials (if applicable); (iv) maintain and promptly update the User Data to keep it
          accurate, current and complete; and (v) be fully responsible for all use of your account
          and for any actions that take place using your account (if applicable).
        </p>
      </>
    ),
  },
  {
    section: '3. Confidential Information',
    content: (
      <>
        <p className={styles.terms__description}>
          Surepoint Equity's Confidential Information: In connection with your interaction with
          Surepoint Equity, you may receive certain Confidential Information concerning Surepoint
          Equity and its business, and you hereby agree to hold and keep confidential all
          Confidential Information concerning Surepoint Equity that is furnished to you or to any of
          your agents, affiliates, attorneys, associates, clients, consultants, employees, partners,
          related parties or representatives (each, a "Representative") except to the extent
          otherwise authorized here. "Confidential Information" means any and all non-public
          technical and non-technical information disclosed by Surepoint Equity to you, which
          information would appear to a reasonable person to be confidential or proprietary,
          including, without limitation: the business relationships and affairs of Surepoint Equity
          and its affiliates, customer lists (including, without limitation, existing or potential
          borrowers, business partners, brokers, investors and sources thereof), trade secrets,
          proprietary and confidential ideas, techniques, works of authorship, models, inventions,
          know-how, processes, apparatuses, algorithms, software programs, software source
          documents, and formulae related to the current, future, and proposed products and services
          of Surepoint Equity, such as information concerning research, experimental work,
          development, design details and specifications, financial information, procurement
          requirements, purchasing requirements, customer lists, investor lists, employee lists,
          business and contractual relationships, business forecasts, sales and merchandising plans,
          and marketing plans.
        </p>
        <p className={styles.terms__description}>
          You agree that at all times and notwithstanding any termination, modification or
          expiration of these Terms of Use, you will hold in strict confidence and not disclose to
          any third party any Confidential Information of Surepoint Equity, except as approved in
          writing by Surepoint Equity, and will use the Confidential Information for no purpose
          other than with respect to its authorized purpose in connection with the Site and Service.
          You agree to limit access to the Confidential Information to only those Representatives
          having a need to know and who have signed confidentiality agreements containing, or are
          otherwise bound by, confidentiality obligations at least as restrictive as those contained
          herein. You further agree that you will not reproduce the Confidential Information in any
          form except as required to accomplish the intent of the Services. Any reproduction by you
          of any Confidential Information will remain the property of Surepoint Equity and will
          contain any and all confidential or proprietary notices or legends that appear on the
          original, unless otherwise authorized in writing by Surepoint Equity.
        </p>
        <p className={styles.terms__description}>
          For purposes hereof, the term “Confidential Information” shall be deemed not to include
          information that (i) is or becomes generally available to the public other than as a
          result of disclosure by you or your Representative in violation of this Agreement, (ii)
          was within your possession prior to it being furnished to you by Surepoint Equity pursuant
          hereto, (iii) was developed by you independently of and without reference to any
          Confidential Information provided to you or any of your Representatives by Surepoint
          Equity, or (iv) that is required to be disclosed by a court order or applicable law;
          provided, that in the event you or your Representatives are required by law or the
          direction of any court or governmental authority to disclose any information that would
          otherwise be considered Confidential Information under this Agreement, if permitted by
          applicable law, you shall promptly notify Surepoint Equity in writing of such information
          consistent with applicable law. If, upon disclosure by Surepoint Equity of any
          Confidential Information, you believe that such Confidential Information was in your
          possession free of any obligation of confidence at the time it was disclosed to you by
          Surepoint Equity or its affiliates, you shall notify Surepoint Equity in writing of such
          possession within three (3) business days of receipt of such Confidential Information.
          Failure by you to timely notify Surepoint Equity shall constitute prima facie evidence
          that such Confidential Information was not in your possession prior to its disclosure by
          Surepoint Equity.
        </p>
        <p className={styles.terms__description}>
          Your Confidential Information: We are committed to protecting the privacy of your personal
          information in accordance with the Surepoint Equity Privacy Policy. While you may provide
          basic contact information through our Site, you should not provide any Confidential
          Information to Surepoint Equity through the Site. Anything submitted to the Site by you
          shall be treated by Surepoint Equity as publicly available information, and shall not be
          deemed or treated confidential.
        </p>
      </>
    ),
  },
  {
    section: '4. General Restrictions On Use & Termination',
    content: (
      <>
        <p className={styles.terms__description}>
          Except as expressly authorized by this Agreement, you may not use, reproduce, distribute,
          modify, transmit or publicly display any portion of the Site, or any of the content
          displayed on the Site. You may not create derivative works based on any portion of the
          Site or any of the content posted to the Site without our express written consent. Without
          limiting the generality of these Terms, you specifically agree not to use any portion of
          the Site, or our Service, in connection with any of the following, each as determined in
          our sole discretion:
        </p>
        <ul>
          <li>Any illegal or unauthorized use;</li>
          <li>Commercial use;</li>
          <li>Defaming, abusing, "stalking," harassing, or threatening any other person;</li>
          <li>
            Infringing any patent, trademark, trade secret, service mark, copyright, privacy right,
            publicity right, or any other right of another person or entity;
          </li>
          <li>
            Restricting or inhibiting any other user from accessing or using the Site, including,
            but not limited to, by means of "hacking" or defacing any portion of the Site;
          </li>
          <li>
            Distributing computer viruses or other code, files, or programs that interrupt, destroy,
            or limit the functionality of any computer software or hardware or telecommunications
            equipment;
          </li>
          <li>
            Interfering with, disrupting, or destroying the functionality or use of any features or
            portions of the Site or the servers or networks connected thereto;
          </li>
          <li>
            Taking any action that imposes or may impose (in our sole discretion) an unreasonable or
            disproportionately large load on our infrastructure;
          </li>
          <li>
            Using any robot, "bot" spider, scraper, web crawler, data mining process, technique, or
            means, or implementing any other automatic or manual processes to access, copy, compile,
            or decompile any portion of the Site or Content;
          </li>
          <li>
            Decompiling, reverse engineering, disassembling or otherwise attempting to derive source
            code from Surepoint Equity or the Site;
          </li>
          <li>
            Removing, circumventing, disabling, damaging or otherwise interfering with
            security-related features, or features that enforce limitations on use of the Site;
          </li>
          <li>
            Removing any copyright, trademark, or other proprietary rights notices contained in or
            displayed on any portion of the Site;
          </li>
          <li>
            Modifying, copying, publishing, licensing, selling, renting, leasing, lending,
            transferring or otherwise commercializing any rights to the content posted on the Site
            or any portions thereof; and/or
          </li>
          <li>
            Violating any other term or condition governing your use of the Site or any applicable
            federal, state, or local law or regulation.
          </li>
        </ul>
        <p className={styles.terms__description}>
          If you fail to comply with these Terms, we may at any time in our sole discretion and
          without prior notice to you (i) suspend or terminate your access to and use of the Site,
          and our Service; (ii) deny your access to and use of the Site, in whole or in part, and/or
          revoke any or all of your other rights granted under this Agreement; or (iii) take any
          other action available at law or equity. Any termination of this Agreement shall not
          affect the respective rights and obligations of the parties arising before the date of
          termination.
        </p>
      </>
    ),
  },
  {
    section: '5. Intellectual Property Rights',
    content: (
      <>
        <p className={styles.terms__description}>
          The Surepoint Equity Site and the content contained therein may be protected by copyright,
          trademark, patent and/or other intellectual property laws. Unless otherwise agreed in
          writing by us, all text, photographs, videos, and other content appearing on the Surepoint
          Equity Site, including but not limited to visual interfaces, data, interactive features,
          graphics, design, compilation, computer code, software, comments, reports and other
          usage-related data, your account, and all other elements and components of the Surepoint
          Equity Site are owned by us or our licensors (collectively "Our Content"). Except as
          expressly permitted by us, You SHALL NOT copy, license, display, distribute, modify,
          translate, reformat, incorporate into any advertisement, create derivative works based on,
          publish, or sell any content on the Surepoint Equity Site or any information, software, or
          services provided by us. Our Content may be modified from time to time by us in our sole
          discretion. Your use of the Surepoint Equity Site does not grant you any right, title,
          interest or license to any such intellectual property appearing on Surepoint Equity Site.
          Any unauthorized use of the content of the Surepoint Equity Site may subject you to civil
          or criminal penalties.
        </p>
        <p className={styles.terms__description}>
          Except as expressly set forth herein, no license is granted to You for any other purpose
          other than for personal and non-commercial use, and any other use of Our Content by You
          shall constitute a material breach of this Agreement. Nothing in this Agreement shall
          affect any of our rights or the rights of our licensors in the Surepoint Equity Site and
          any associated IP Rights.
        </p>
      </>
    ),
  },
  {
    section: '6. Liability Limitations',
    content: (
      <>
        <p className={styles.terms__description}>
          THIS SITE IS PROVIDED "AS IS" FOR YOUR INFORMATIONAL USE. IN NO EVENT WILL SUREPOINT
          EQUITY OR ITS AFFILIATES, DIRECTORS, OFFICERS, STOCKHOLDERS, PARTNERS, EMPLOYEES OR
          REPRESENTATIVES BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING FOR ANY LOST PROFITS OR LOST
          DATA ARISING FROM YOUR USE OF THE SITE OR THE SERVICE OR ANY OF THE SITE CONTENT OR OTHER
          MATERIALS ON OR ACCESSED THROUGH THE SITE, EVEN IF SUREPOINT EQUITY IS AWARE OR HAS BEEN
          ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY
          CONTAINED HEREIN, EXCEPT AS MAY BE REQUIRED BY APPLICABLE LAWS, YOU SHALL BE LIMITED TO
          INJUNCTIVE RELIEF ONLY, AND SHALL NOT BE ENTITLED TO DAMAGES OF ANY KIND FROM ANY OF
          SUREPOINT EQUITY OR ITS AFFILIATES, DIRECTORS, OFFICERS, STOCKHOLDERS, PARTNERS, EMPLOYEES
          OR REPRESENTATIVES, REGARDLESS OF THE CAUSE OF ACTION.
        </p>
        <p className={styles.terms__description}>
          SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IN SUCH
          JURISDICTIONS, OUR LIABILITY IS LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.
        </p>
        <p className={styles.terms__description}>
          YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD SUREPOINT EQUITY, ITS SUBSIDIARIES AND
          AFFILIATES, AND EACH OF THEIR DIRECTORS, OFFICERS, AGENTS, CONTRACTORS, SHAREHOLDERS,
          EMPLOYEES AND REPRESENTATIVES, HARMLESS FROM AND AGAINST ANY LOSS, LIABILITY, CLAIM,
          DEMAND, DAMAGES, COSTS AND EXPENSES, INCLUDING REASONABLE ATTORNEY'S FEES, ARISING OUT OF
          OR IN CONNECTION WITH YOUR USE OF THE SERVICE OR THE SITE. YOU FURTHER AGREE THAT YOU WILL
          COOPERATE FULLY IN THE DEFENSE OF ANY SUCH CLAIMS. WE RESERVE THE RIGHT, AT OUR OWN
          EXPENSE, TO ASSUME THE EXCLUSIVE DEFENSE AND CONTROL OF ANY MATTER OTHERWISE SUBJECT TO
          INDEMNIFICATION BY YOU, AND YOU SHALL NOT IN ANY EVENT SETTLE ANY SUCH CLAIM OR MATTER
          WITHOUT OUR WRITTEN CONSENT.
        </p>
      </>
    ),
  },
  {
    section: '7. Disclaimer of Warranty',
    content: (
      <>
        <p className={styles.terms__description}>
          THE SITE AND SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTY
          OF ANY KIND. SUREPOINT EQUITY EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER
          EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. NO PERSON
          OR ENTITY IS PERMITTED TO RELY UPON OR USE THIS INFORMATION FOR ANY PURPOSE OTHER THAN
          INFORMATIONAL PURPOSES. NEITHER SUREPOINT EQUITY AND ITS AFFILIATES NOR ANY OF THEIR
          RESPECTIVE MEMBERS, OFFICERS, EMPLOYEES OR REPRESENTATIVES MAKE ANY REPRESENTATIONS OR
          WARRANTIES, EXPRESS OR IMPLIED, CONCERNING THE ACCURACY OF ANY INFORMATION PROVIDED BY
          THIRD PARTIES ("THIRD PARTY CONTENT"), NONE OF WHICH IS GUARANTEED BY ANY OF SUREPOINT
          EQUITY, ITS AFFILIATES OR THEIR RESPECTIVE MEMBERS, OFFICERS, EMPLOYEES OR REPRESENTATIVES
          TO BE ACCURATE OR COMPLETE IN ANY RESPECT.
        </p>
        <p className={styles.terms__description}>
          THE SITE AND THE SERVICE OPERATE OVER THE INTERNET AND LIKE ANY SITE MAY BE TEMPORARILY
          UNAVAILABLE FROM TIME TO TIME FOR MAINTENANCE OR OTHER REASONS. WE MAKE NO GUARANTEE OF
          AVAILABILITY, ACCURACY, OR TAT THE SITE IS ERROR OR VIRUS FREE. ALTHOUGH WE TAKE
          REASONABLE STEPS TO PROVIDE YOU WITH QUALITY CONTENT, WE ASSUME NO RESPONSIBILITY FOR ANY
          ERROR, OMISSION, INTERRUPTION, DELETION, DEFECT, DELAY IN OPERATION OR TRANSMISSION,
          COMMUNICATIONS LINE FAILURE, THEFT OR DESTRUCTION OR UNAUTHORIZED ACCESS TO, OR ALTERATION
          OF, USER COMMUNICATIONS. UNDER NO CIRCUMSTANCES WILL WE BE RESPONSIBLE FOR ANY LOSS OR
          DAMAGE, INCLUDING ANY LOSS OR DAMAGE TO ANY USER RESULTING FROM ANYONE'S USE OF THE SITE
          OR THE SERVICE OR ANY THIRD PARTY CONTENT POSTED ON OR THROUGH THE SITE OR THE SERVICE OR
          TRANSMITTED TO USERS, OR ANY INTERACTIONS BETWEEN USERS OF THE SITE, WHETHER ONLINE OR
          OFFLINE. WE RESERVE THE RIGHT TO CHANGE ANY AND ALL CONTENT CONTAINED IN THE SITE AND ANY
          SERVICES OFFERED THROUGH THE SITE, OR OTHERWISE, AT ANY TIME WITHOUT NOTICE.
        </p>
      </>
    ),
  },
  {
    section: '8. Governing Law',
    content: (
      <>
        <p className={styles.terms__description}>
          By visiting or using the Site and/or the Service, you agree that the laws of the
          Commonwealth of Kentucky, without regard to any principles of conflict of laws, will
          govern these Terms of Use and you agree to submit to personal jurisdiction in Louisville,
          Kentucky for all purposes, and you agree to waive, to the maximum extent permitted by law,
          any right to a trial by jury or to participate in a class action, or recovery any
          attorneys' fees. Unless otherwise agreed in writing by you and us, any dispute arising out
          of or relating to the Terms of Use, or any breach thereof, shall be finally resolved by
          binding arbitration. The arbitration will be conducted before a single arbitrator and will
          be conducted in Louisville, Kentucky in accordance with the AAA Commercial Arbitration
          Rules.. Such arbitration must be commenced within one (1) year after the claim or cause of
          action arises. Notwithstanding the foregoing, either Surepoint Equity or you may apply to
          any court of competent jurisdiction for injunctive relief without breach of this
          arbitration provision.
        </p>
      </>
    ),
  },
  {
    section: '9. Linked Sites',
    content: (
      <>
        <p className={styles.terms__description}>
          The Site may contain links to third party websites ("Linked Sites"). These links are
          provided only as a convenience. The inclusion of any link is not, and shall not be
          construed to imply, an affiliation, sponsorship, endorsement, approval, investigation,
          verification or monitoring by Surepoint Equity of any information, materials, products, or
          services contained in or accessible through any Linked Site. In no event shall Surepoint
          Equity be responsible or otherwise liable for the information contained on any Linked Site
          or your use of or inability to use any Linked Site. Access and use of Linked Sites,
          including the information, material, products, and services on such Linked Sites or
          available through such Linked Sites, is solely at your own risk. Your access and use of
          the Linked Sites are governed by the Terms of Use and privacy policies of such Linked
          Sites, and we encourage you to carefully review all such terms and policies.
        </p>
        <p className={styles.terms__description}>
          REFERENCE TO ANY PRODUCTS, SERVICES, PROCESSES OR OTHER INFORMATION, BY TRADE NAME,
          TRADEMARK, MANUFACTURER, SUPPLIER OR OTHERWISE DOES NOT CONSTITUTE OR IMPLY ENDORSEMENT,
          SPONSORSHIP OR RECOMMENDATION THEREOF OR ANY AFFILIATION THEREWITH BY SUREPOINT EQUITY.
        </p>
      </>
    ),
  },
  {
    section: '10. General',
    content: (
      <>
        <p className={styles.terms__description}>
          If any of the provisions, or portions thereof, of this Agreement are found to be invalid
          under applicable law, then it shall be severed from the Terms and the remainder of the
          Agreement shall be in full force and effect to the fullest extent possible. You may not
          transfer or assign your rights and obligations under this Agreement without our prior,
          written consent; however, we may assign this Agreement without restriction. Any waiver of
          any provision of this Agreement, or a delay by any party in the enforcement of any right
          hereunder, shall neither be construed as a continuing waiver nor create an expectation of
          non-enforcement of that or any other provision or right. No waiver shall be enforceable
          against us unless such waiver is in writing signed by us. This Agreement forms the entire
          agreement between the parties with respect to the subject matter hereof and supersedes all
          prior or contemporaneous agreements pertaining hereto. This Agreement may only be amended
          by Surepoint Equity in writing and will be effective immediately upon posting the revised
          version to the Site. Your use of the Site and Service shall be subject to the current
          version of this Agreement at your time of use of the Site as provided herein.
        </p>
      </>
    ),
  },
  {
    section: '11. Changes to Terms of Use',
    content: (
      <>
        <p className={styles.terms__description}>
          You agree that we may make changes to these Terms of Use from time to time. If we do this,
          we will post the changed Terms of Use on the Site and will indicate on this page the date
          the Terms of Use were last updated. You understand and agree that your continued use of
          the Service or the Site after we have made any such changes constitutes your acceptance of
          the new Terms of Use. You should review these Terms of Use periodically for any changes.
        </p>
      </>
    ),
  },
]

export const TermsConditions = () => {
  return (
    <main className={styles.terms} id="main-content">
      <SEO
        title="Terms & Conditions"
        description="Review the Surepoint Equity Terms of Use governing access to our website, real estate lending services, intellectual property, liability and user obligations."
        canonical="/terms-and-conditions"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Terms & Conditions', url: '/terms-and-conditions' },
        ]}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>TERMS &amp; CONDITIONS</h1>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className={styles.terms__wrapper}>
        <div className={styles.terms__container}>
          <h2 className={styles.terms__heading}>SurePoint Equity Website Terms of Use</h2>
          <p className={styles.terms__openingParagraph}>
            Welcome to the Surepoint Equity website (the "Site"). These Terms of Use govern your
            access and use of the Site and all content, information, products and/or services which
            may be provided through the Site (the "Service"). The Service is operated by Surepoint
            Equity, LLC, a Kentucky limited liability company, (together with its subsidiaries and
            affiliates, "Surepoint Equity," "we," or "us"). Please read these Terms of Use carefully
            before using the Site. By accessing or using our Site, you (the "User") signify that you
            have read, understand and agree to be bound by these Terms of Use. If you do not agree,
            please immediately discontinue accessing the Site. If you violate any of these Terms of
            Use, which include Surepoint Equity's Privacy Policy, or otherwise violate an agreement
            between you and us, Surepoint Equity may terminate your access to or use of the Service
            or the Site, or any portion, aspect or feature thereof, at any time in its sole
            discretion, with or without notice. In addition to these Terms of Use, you may enter
            into other agreements with us or others that will govern your use of our Service or
            other products or services we provide. If there is any contradiction between these Terms
            of Use and another agreement you enter into applicable to specific aspects of our
            products or services, the other agreement shall take precedence in relation to the
            specific aspects of the products or services to which it applies.
          </p>
          <div className={styles.terms__grid}>
            {termsAndConditionsSections.map((item, index) => (
              <div key={index} className={styles.terms__section}>
                <b>{item.section}:</b> {item.content}
              </div>
            ))}
            <p className={styles.terms__revisionDate}>REVISION DATE: October 10, 2016</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TermsConditions
