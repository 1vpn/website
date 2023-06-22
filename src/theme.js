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
    lightBlue: '#edf4ff',
    text: 'rgba(0, 0, 0, 0.9)',
    white: '#fff',
  },
  links: {
    header: {
      color: 'text',
      textDecoration: 'none',
    },
    button: {
      display: 'flex',
      height: '48px',
      bg: 'blue',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      borderRadius: '6px',
      transition: '0.1s',
      ':hover': {
        bg: 'darkBlue',
      },
    },
  },
}
