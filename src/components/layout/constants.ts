export interface NavItem {
  label: string
  href: string
}

export interface UserMenuItem {
  label: string
  href: string
  divider?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { label: '课程学习', href: '/courses' },
  { label: '个人学习中心', href: '/learning-center' },
  { label: '项目成长社区', href: '/community' },
  { label: '课程资源库', href: '/resources' },
  { label: '我的学伴', href: '/companions' },
]

export const USER_MENU_ITEMS: UserMenuItem[] = [
  { label: '个人中心', href: '/profile' },
  { label: '账号设置', href: '/settings' },
  { label: '退出登录', href: '/logout', divider: true },
]

export const SITE_NAME = '教技智汇'
