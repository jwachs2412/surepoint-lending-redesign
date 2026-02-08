import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        {/* Company Info */}
        <div className={styles.footer__section}>
          <h4 className={styles.footer__heading}>SurePoint Equity</h4>
          <p className={styles.footer__address}>
            8001 Lyndon Centre Way<br />
            Suite 101<br />
            Louisville, KY 40222
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footer__section}>
          <h4 className={styles.footer__heading}>Quick Links</h4>
          <nav aria-label="Footer navigation">
            <ul className={styles.footer__links}>
              <li>
                <Link to="/our-process" className={styles.footer__link}>
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.footer__link}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/faqs" className={styles.footer__link}>
                  FAQs
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Legal */}
        <div className={styles.footer__section}>
          <h4 className={styles.footer__heading}>Legal</h4>
          <ul className={styles.footer__links}>
            <li>
              <a href="#" className={styles.footer__link}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className={styles.footer__link}>
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
