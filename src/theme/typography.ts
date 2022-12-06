import { TypographyOptions } from '@mui/material/styles/createTypography'
import { BreakpointsOptions } from '@mui/material'

const BASE_FONTSIZE: number = 16
const FONT_PRIMARY = 'Public Sans, sans-serif' // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

/*
const remToPx = (value: string): number => {
  return Math.round(parseFloat(value) * BASE_FONTSIZE)
}
*/

const pxToRem = (value: number): string => {
  return `${value / BASE_FONTSIZE}rem`
}

const typography = (breakpoints: BreakpointsOptions): TypographyOptions => {
  // Compute responsive font size.
  const responsiveFontSizes = (tablet?: number, laptop?: number, desktop?: number, tv?: number): object => {
    const tabletFontSize =
      tablet != null
        ? {
            [`@media (min-width:${breakpoints.values?.tablet ?? 600}px)`]: {
              fontSize: pxToRem(tablet)
            }
          }
        : {}

    const laptopFontSize =
      laptop != null
        ? {
            [`@media (min-width:${breakpoints.values?.laptop ?? 900}px)`]: {
              fontSize: pxToRem(laptop)
            }
          }
        : {}

    const desktopFontSize =
      desktop != null
        ? {
            [`@media (min-width:${breakpoints.values?.desktop ?? 1200}px)`]: {
              fontSize: pxToRem(desktop)
            }
          }
        : {}

    const tvFontSize =
      tv != null
        ? {
            [`@media (min-width:${breakpoints.values?.tv ?? 1536}px)`]: {
              fontSize: pxToRem(tv)
            }
          }
        : {}

    return { ...tabletFontSize, ...laptopFontSize, ...desktopFontSize, ...tvFontSize }
  }

  return {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontSize: BASE_FONTSIZE,
    h1: {
      fontWeight: 800,
      lineHeight: 80 / 64,
      fontSize: pxToRem(40),
      ...responsiveFontSizes(52, 58, 64, 68)
    },
    h2: {
      fontWeight: 800,
      lineHeight: 64 / 48,
      fontSize: pxToRem(32),
      ...responsiveFontSizes(40, 44, 48, 52)
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(24),
      ...responsiveFontSizes(26, 30, 32, 36)
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(20),
      ...responsiveFontSizes(20, 24, 24, 26)
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(18),
      ...responsiveFontSizes(19, 20, 20, 22)
    },
    h6: {
      fontWeight: 700,
      lineHeight: 28 / 18,
      fontSize: pxToRem(17),
      ...responsiveFontSizes(18, 18, 18, 18)
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(16)
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: 22 / 14,
      fontSize: pxToRem(14)
    },
    body1: {
      lineHeight: 1.5,
      fontSize: pxToRem(16)
    },
    body2: {
      lineHeight: 22 / 14,
      fontSize: pxToRem(14)
    },
    caption: {
      lineHeight: 1.5,
      fontSize: pxToRem(12)
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(12),
      textTransform: 'uppercase'
    },
    button: {
      fontWeight: 700,
      lineHeight: 24 / 14,
      fontSize: pxToRem(14),
      textTransform: 'capitalize'
    }
  }
}

export default typography
