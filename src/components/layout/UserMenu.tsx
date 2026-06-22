import { useEffect, useRef, useState } from 'react'
import { USER_MENU_ITEMS } from './constants'

interface UserMenuProps {
  userName?: string
  semester?: string
}

export function UserMenu({
  userName = '张同学',
  semester = '2026年春季学期',
}: UserMenuProps) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div className="user-menu" ref={menuRef}>
      <div className="user-menu__meta">
        <span className="user-menu__semester">{semester}</span>
        <span className="user-menu__name">{userName}</span>
      </div>

      <button
        type="button"
        className="user-menu__trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="用户菜单"
        onClick={() => setOpen((value) => !value)}
      >
        <img src="/images/avatar.svg" alt="" className="user-menu__avatar" />
      </button>

      {open && (
        <div className="user-menu__dropdown" role="menu">
          <div className="user-menu__dropdown-header">
            <img src="/images/avatar.svg" alt="" className="user-menu__avatar" />
            <div>
              <strong>{userName}</strong>
              <span>{semester}</span>
            </div>
          </div>
          <ul>
            {USER_MENU_ITEMS.map((item) => (
              <li key={item.href} className={item.divider ? 'is-divider' : undefined}>
                <a href={item.href} role="menuitem" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
