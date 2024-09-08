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

import { InputProps } from './types'
import { textFieldStyle, typographyStyle } from './styles'

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
                <EmailIcon fontSize="small" />
              </InputAdornment>
            ) : name === 'password' || name === 'confirmPassword' ? (
              <InputAdornment position="end">
                <IconButton
                  sx={{ padding: 0, margin: 0 }}
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
        sx={() => textFieldStyle(error)}
      />
      {error && (
        <Typography variant="caption" sx={typographyStyle}>
          <ErrorOutlineIcon sx={{ fontSize: '16px', marginRight: '4px' }} />{' '}
          {error}
        </Typography>
      )}
    </div>
  )
}

export default Input
