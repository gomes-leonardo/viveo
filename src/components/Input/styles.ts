export const textFieldStyle = (error: string | undefined) => {
  return {
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
  }
}

export const typographyStyle = {
  color: 'red',
  marginTop: '4px',
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  fontWeight: 500,
}
