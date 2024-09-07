import React from 'react'
import { Button } from '@mui/material'

interface ButtonProps {
  title: string
  redirectUrl?: string
  className?: string
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  redirectUrl,
  className,
}) => {
  return (
    <Button
      href={redirectUrl}
      variant="contained"
      className={className}
      sx={{
        fontSize: '0.75rem',
        fontWeight: 'normal',
        textTransform: 'none',
        borderRadius: '0',
        fontFamily: 'Inter, sans-serif',
        boxShadow: 'none',
        backgroundColor: '#6EE1DC',
        color: '#0F4B55',
        padding: '12px',
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: '#0F4B55',
          color: '#6EE1DC',
          transition: 'all 0.5s ease-in-out',
        },
      }}
    >
      {title}
    </Button>
  )
}

export default CustomButton
