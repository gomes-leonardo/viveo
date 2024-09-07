import React from 'react'
import Input from './Input'
import Link from 'next/link'
import CustomButton from './Button'

interface FormField {
  label: string
  type?: string
  placeholder?: string
}

interface FormProps {
  fields: FormField[]
  showForgotPassword?: boolean
  submitButtonText: string
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  title?: string
  redirectUrl: string
}

const Form: React.FC<FormProps> = ({
  fields,
  showForgotPassword = false,
  onSubmit,
  title,
  redirectUrl,
}) => {
  return (
    <form onSubmit={onSubmit} className="mt-4">
      {fields.map((field, index) => (
        <div key={index} className="flex items-center mb-4">
          <Input
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
          />
        </div>
      ))}
      {showForgotPassword && (
        <div className="flex justify-between items-center mb-4">
          <Link href={redirectUrl} legacyBehavior>
            <a href="#" className="text-sm text-secondary-default font-bold">
              {title}
            </a>
          </Link>
        </div>
      )}
      <CustomButton title="Iniciar sessão" />
    </form>
  )
}

export default Form
