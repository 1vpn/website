export const theme = {
  breakpoints: ['770px', '990px', '1200px'],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    blue: '#1391ff',
    darkBlue: '#1182e5',
    lightBlue: 'rgba(19, 145, 255, 0.6)',
    paleBlue: '#edf4ff',
    text: 'rgba(0, 0, 0, 0.9)',
    white: '#fff',
  },
  links: {
    header: {
      color: 'text',
      textDecoration: 'none',
      py: ['16px', 0, 0, 0],
      px: ['8px', 0, 0, 0],
      width: ['100%', 'auto', 'auto', 'auto'],
      borderBottom: ['1px solid', 'none', 'none', 'none'],
      borderColor: ['lightBlue', 'none', 'none', 'none'],
    },
    button: {
      display: 'flex',
      minHeight: ['40px', '48px', '48px', '48px'],
      bg: 'blue',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      borderRadius: '6px',
      transition: '0.15s linear',
      ':hover': {
        bg: 'darkBlue',
      },
    },
  },
}
