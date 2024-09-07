import React, { useState } from 'react'
import {
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import EmailIcon from '@mui/icons-material/Email'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

interface InputProps {
  name: string
  placeholder?: string
  value?: string
  label?: string
  type?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  type,
  error,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="w-full">
      <TextField
        name={name}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        size="small"
        type={type === 'password' && showPassword ? 'text' : type}
        error={!!error}
        fullWidth
        InputProps={{
          endAdornment:
            name === 'email' ? (
              <InputAdornment position="end">
                <EmailIcon fontSize="small" sx={{ verticalAlign: 'middle' }} />
              </InputAdornment>
            ) : name === 'password' || name === 'confirmPassword' ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff fontSize="small" />
                  ) : (
                    <Visibility fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: error ? 'red' : 'transparent',
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#38b2ac',
            },
            '& .MuiInputAdornment-root': {
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#4A5568',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#38b2ac',
          },
          backgroundColor: '#f3f4f6',
          borderRadius: '4px',
          width: '350px',
          '@media (max-width: 600px)': {
            width: '100%',
          },
        }}
      />
      {error && (
        <Typography
          variant="caption"
          sx={{
            color: 'red',
            marginTop: '4px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          <ErrorOutlineIcon sx={{ fontSize: '16px', marginRight: '4px' }} />{' '}
          {error}
        </Typography>
      )}
    </div>
  )
}

export default Input
