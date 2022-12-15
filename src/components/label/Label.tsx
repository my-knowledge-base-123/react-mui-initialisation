import React, { forwardRef } from 'react'
// @mui
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
//
import { StyledLabel } from './styles'
import { LabelProps } from './types'

// ----------------------------------------------------------------------

const Label = forwardRef<HTMLSpanElement, LabelProps>(({ children, color = 'default', variant = 'soft', startIcon, endIcon, sx, ...other }, ref) => {
  const theme = useTheme()

  const iconStyle = {
    width: 16,
    height: 16,
    '& svg, img': { width: 1, height: 1, objectFit: 'cover' }
  }

  return (
    <StyledLabel
      component={'span'}
      ref={ref}
      theme={theme}
      ownerState={{ color, variant }}
      sx={{
        ...(startIcon != null && { pl: 0.75 }),
        ...(endIcon != null && { pr: 0.75 }),
        ...sx
      }}
      {...other}
    >
      {startIcon != null && <Box sx={{ mr: 0.75, ...iconStyle }}> {startIcon} </Box>}

      {children}

      {endIcon != null && <Box sx={{ ml: 0.75, ...iconStyle }}> {endIcon} </Box>}
    </StyledLabel>
  )
})

Label.displayName = 'Label'

export default Label
