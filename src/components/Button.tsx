import React from 'react'
import { Button, CircularProgress } from '@mui/material'

interface ButtonProps {
  title: string
  redirectUrl?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
}

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
      onClick={onClick}
      href={redirectUrl || undefined}
      type={type}
      variant="contained"
      className={className}
      sx={{
        width: '250px',
        fontSize: '0.95rem',
        fontWeight: 'bold',
        textTransform: 'none',
        fontFamily: 'Inter, sans-serif',
        boxShadow: 'none',
        backgroundColor: '#6EE1DC',
        color: '#0F4B55',
        padding: '12px',
      }}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : title}
    </Button>
  )
}

export default CustomButton
