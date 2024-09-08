import React from 'react'
import Input from './Input'
import Link from 'next/link'
import CustomButton from './Button'
import { LinkedIn, Instagram, Facebook, YouTube } from '@mui/icons-material'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

interface FormField {
  label: string
  type?: string
  placeholder?: string
  name: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

interface FormProps {
  fields: FormField[]
  rememberPasswordButton?: boolean
  submitButtonText: string
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  title?: string
  redirectUrl: string
  loading?: boolean
  rememberMe?: boolean
  onRememberMeChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Form: React.FC<FormProps> = ({
  fields,
  rememberPasswordButton = false,
  onSubmit,
  title,
  redirectUrl,
  submitButtonText,
  loading = false,
  rememberMe = false,
  onRememberMeChange,
}) => {
  return (
    <form onSubmit={onSubmit} className="mt-4">
      {fields.map((field, index) => (
        <div key={index} className="flex items-center mb-4">
          <Input
            name={field.name}
            onChange={field.onChange}
            value={field.value}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            error={field.error}
          />
        </div>
      ))}

      {rememberPasswordButton && (
        <div className="flex justify-start items-center mb-4">
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={onRememberMeChange}
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 22 },
                  color: '#B0BEC5',
                  transition: 'color 0.3s ease',
                  '&.Mui-checked': {
                    color: '#00796B',
                    transition: 'color 0.3s ease',
                  },
                }}
              />
            }
            label="Lembrar senha"
            sx={{
              color: '#37474F',
              fontWeight: '500',
              fontSize: '0.875rem',
            }}
          />

          <Link href={redirectUrl} legacyBehavior>
            <a href="#" className="text-sm text-secondary-default font-bold">
              {title}
            </a>
          </Link>
        </div>
      )}

      <div className="flex justify-center mt-6">
        <CustomButton
          loading={loading}
          type="submit"
          title={submitButtonText}
          className="w-full max-w-md p-3 text-white font-bold bg-gradient-to-r from-teal-400 to-green-400 hover:from-teal-500 hover:to-green-500 transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl"
        />
      </div>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <a
          href="https://www.linkedin.com/company/viveooficial/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn
            sx={{
              fontSize: 25,
              color: '#004D40',
              '&:hover': {
                color: '#00796B',
                transform: 'scale(1.1)',
                transition: 'transform 0.2s',
              },
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/viveo.oficial/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram
            sx={{
              fontSize: 25,
              color: '#004D40',
              '&:hover': {
                color: '#00796B',
                transform: 'scale(1.1)',
                transition: 'transform 0.2s',
              },
            }}
          />
        </a>
        <a
          href="https://www.facebook.com/viveo.saude"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook
            sx={{
              fontSize: 25,
              color: '#004D40',
              '&:hover': {
                color: '#00796B',
                transform: 'scale(1.1)',
                transition: 'transform 0.2s',
              },
            }}
          />
        </a>
        <a
          href="https://www.youtube.com/c/ViveoSA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTube
            sx={{
              fontSize: 25,
              color: '#004D40',
              '&:hover': {
                color: '#00796B',
                transform: 'scale(1.1)',
                transition: 'transform 0.2s',
              },
            }}
          />
        </a>
      </div>
    </form>
  )
}

export default Form
