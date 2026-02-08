import { ReactNode } from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import styles from './Layout.module.scss'

export interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
