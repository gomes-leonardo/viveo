import React from 'react'
import Link from 'next/link'

import { LinkedIn, Instagram, Facebook, YouTube } from '@mui/icons-material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import CustomButton from '../Button'

import { FormProps } from './types'
import { formSocialMediaIconStyle } from './styles'
import Input from '../Input'

const Form: React.FC<FormProps> = ({
  fields,
  onSubmit,
  title,
  redirectUrlOnSubmit,
  submitButtonText,
  onRememberMeChange,
  loading = false,
  rememberMe = false,
  rememberPasswordButton = false,
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

          <Link href={redirectUrlOnSubmit} legacyBehavior>
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
          <LinkedIn sx={formSocialMediaIconStyle} />
        </a>
        <a
          href="https://www.instagram.com/viveo.oficial/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram sx={formSocialMediaIconStyle} />
        </a>
        <a
          href="https://www.facebook.com/viveo.saude"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook sx={formSocialMediaIconStyle} />
        </a>
        <a
          href="https://www.youtube.com/c/ViveoSA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTube sx={formSocialMediaIconStyle} />
        </a>
      </div>
    </form>
  )
}

export default Form
