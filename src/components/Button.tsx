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
      disabled={loading}
      sx={{
        width: '250px',
        fontSize: '0.95rem',
        fontWeight: '600',
        textTransform: 'none',
        fontFamily: 'Inter, sans-serif',
        boxShadow: 'none',
        backgroundColor: loading ? '#B0BEC5' : '#6EE1DC',
        color: loading ? '#90A4AE' : '#0F4B55',
        padding: '12px',
        cursor: loading ? 'not-allowed' : 'pointer',
        '&:hover': {
          backgroundColor: loading ? '#B0BEC5' : '#5AC8D8',
        },
      }}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : title}
    </Button>
  )
}

export default CustomButton
