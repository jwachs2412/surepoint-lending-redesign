import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

const navigationLinks = [
  { label: 'Our Process', path: '/our-process' },
  { label: 'About', path: '/about' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Contact Us', path: '/contact' },
]

export const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // Dynamically measure and set header height
  useEffect(() => {
    if (!headerRef.current) return

    const observer = new ResizeObserver(([entry]) => {
      const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.target.getBoundingClientRect().height
      document.documentElement.style.setProperty('--header-offset', `${height}px`)
    })

    observer.observe(headerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false)
  }, [location])

  useEffect(() => {
    // Prevent body scroll when menu is open and prevent layout shift
    if (isMenuOpen) {
      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

      // Apply overflow hidden and compensate for scrollbar
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isMenuOpen])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className={styles['skip-link']}>
        Skip to main content
      </a>

      <header ref={headerRef} className={styles.header} onKeyDown={handleKeyDown}>
        <div className={styles.header__container}>
          {/* Logo */}
          <Link to="/" className={styles.header__logo} aria-label="SurePoint Equity - Home">
            Sure<span className={styles.header__logo_accent}>Point</span>
            <span className={styles.header__logo_full}> Equity</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.header__nav} aria-label="Main navigation">
            <ul className={styles.header__nav_list}>
              {navigationLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${styles.header__nav_link} ${
                      location.pathname === link.path ? styles['header__nav_link--active'] : ''
                    }`}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="tel:+18884445347" className={styles.header__cta_button}>
                  888-445-FLIP
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile/Tablet Hamburger Menu Button */}
          <button
            className={styles.header__hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.header__hamburger_line} ${isMenuOpen ? styles['header__hamburger_line--open'] : ''}`}></span>
            <span className={`${styles.header__hamburger_line} ${isMenuOpen ? styles['header__hamburger_line--open'] : ''}`}></span>
            <span className={`${styles.header__hamburger_line} ${isMenuOpen ? styles['header__hamburger_line--open'] : ''}`}></span>
          </button>
        </div>

        {/* Mobile/Tablet Menu Drawer */}
        <div
          id="mobile-menu"
          className={`${styles.header__mobile_menu} ${isMenuOpen ? styles['header__mobile_menu--open'] : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <nav aria-label="Mobile navigation">
            <ul className={styles.header__mobile_nav_list}>
              {navigationLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${styles.header__mobile_nav_link} ${
                      location.pathname === link.path ? styles['header__mobile_nav_link--active'] : ''
                    }`}
                    tabIndex={isMenuOpen ? 0 : -1}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="tel:+18884445347" 
                  className={styles.header__mobile_cta}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  888-445-FLIP
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className={styles.header__overlay}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </header>
    </>
  )
}

export default Header
