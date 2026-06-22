import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import './layout.css'

interface LayoutProps {
  children: ReactNode
  activeNav?: string
}

export function Layout({ children, activeNav }: LayoutProps) {
  return (
    <div className="site-layout">
      <Header activeNav={activeNav} />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  )
}
