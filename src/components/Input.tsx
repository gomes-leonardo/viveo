import { TextField } from '@mui/material'

interface InputProps {
  placeholder?: string
  value?: string
  label?: string
  type?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
  label,
  onChange,
  placeholder,
  value,
  type,
}: InputProps) => {
  return (
    <TextField
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      size="small"
      type={type}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
        backgroundColor: '#f3f4f6',
        borderRadius: '4px',
      }}
    />
  )
}

export default Input
