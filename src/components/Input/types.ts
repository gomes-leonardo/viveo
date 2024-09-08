export interface InputProps {
  name: string
  placeholder?: string
  value?: string
  label?: string
  type?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}
