export const buttonStyle = (loading: boolean) => {
  return {
    width: '250px',
    fontSize: '0.95rem',
    fontWeight: '600',
    textTransform: 'none',
    fontFamily: 'Inter, sans-serif',
    boxShadow: 'none',
    backgroundColor: loading ? '#B0BEC5' : '#6EE1DC',
    color: loading ? '#90A4AE' : '#0F4B55',
    padding: '12px',
    cursor: loading ? 'not-allowed' : 'pointer',
    '&:hover': {
      backgroundColor: loading ? '#B0BEC5' : '#5AC8D8',
    },
  }
}
