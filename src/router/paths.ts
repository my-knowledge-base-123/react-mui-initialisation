// ----------------------------------------------------------------------

function path(root: string, subLink: string) {
  return `${root}${subLink}`
}

// const ROOTS_AUTH = '/auth'
const ROOTS_DASHBOARD = '/dashboard'

// ----------------------------------------------------------------------

// DASHBOARD
export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    me: path(ROOTS_DASHBOARD, '/user/me')
  }
}

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = PATH_DASHBOARD.user.me
