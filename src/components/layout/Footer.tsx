import { SITE_NAME } from './constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src="/images/logo.svg" alt="" className="site-footer__logo" />
          <span>{SITE_NAME}</span>
        </div>

        <p className="site-footer__copyright">
          © {year} {SITE_NAME} · 教育技术学在线学习平台
        </p>

        <div className="site-footer__links">
          <a href="/about">关于平台</a>
          <a href="/help">帮助中心</a>
          <a href="/privacy">隐私政策</a>
        </div>
      </div>
    </footer>
  )
}
