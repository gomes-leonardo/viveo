export interface FormField {
  name: string
  label: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

export interface FormProps {
  fields: FormField[]
  submitButtonText: string
  redirectUrlOnSubmit: string
  rememberPasswordButton?: boolean
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  title?: string
  loading?: boolean
  rememberMe?: boolean
  onRememberMeChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
