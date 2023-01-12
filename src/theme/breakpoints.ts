declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true
    tablet: true
    laptop: true
    desktop: true
    tv: true
  }
}

export default {
  values: {
    mobile: 0,
    tablet: 640,
    laptop: 1024,
    desktop: 1280,
    tv: 1536
  }
} as const
