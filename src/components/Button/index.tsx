import React from 'react'
import { Button, CircularProgress } from '@mui/material'

import { ButtonProps } from './types'
import { buttonStyle } from './styles'

const CustomButton: React.FC<ButtonProps> = ({
  title,
  redirectUrl,
  className,
  onClick,
  type = 'button',
  loading = false,
}) => {
  return (
    <Button
      type={type}
      href={redirectUrl || undefined}
      className={className}
      sx={() => buttonStyle(loading)}
      onClick={onClick}
      variant="contained"
      disabled={loading}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : title}
    </Button>
  )
}

export default CustomButton
