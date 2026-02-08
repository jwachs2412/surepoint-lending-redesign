import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop component
 * Scrolls window to top whenever the route changes
 * Prevents pages from loading at random scroll positions
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    })
  }, [pathname])

  return null
}

export default ScrollToTop
