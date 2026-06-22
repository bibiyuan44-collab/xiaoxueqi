import { useEffect, useState } from 'react'
import { NAV_ITEMS, SITE_NAME } from './constants'
import { UserMenu } from './UserMenu'

interface HeaderProps {
  activeNav?: string
}

export function Header({ activeNav = '课程学习' }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', mobileOpen)

    return () => {
      document.body.classList.remove('nav-open')
    }
  }, [mobileOpen])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 992) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="/" className="site-logo" aria-label={`${SITE_NAME} 首页`}>
          <img src="/images/logo.svg" alt="" className="site-logo__image" />
          <span className="site-logo__text">{SITE_NAME}</span>
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={mobileOpen}
          aria-controls="site-nav"
          aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-nav"
          className={`site-nav${mobileOpen ? ' is-open' : ''}`}
          aria-label="主导航"
        >
          <ul className="site-nav__list">
            {NAV_ITEMS.map((item) => {
              const isActive = item.label === activeNav

              return (
                <li key={item.href} className={isActive ? 'is-active' : undefined}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="site-nav__user">
            <UserMenu />
          </div>
        </nav>
      </div>

      {mobileOpen && (
        <button
          type="button"
          className="site-header__backdrop"
          aria-label="关闭菜单"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  )
}
