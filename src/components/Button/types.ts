export interface ButtonProps {
  title: string
  redirectUrl?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
  onClick?: () => void
}
