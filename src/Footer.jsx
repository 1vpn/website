import { Flex, Box } from 'theme-ui'

const Footer = () => {
  return (
    <Flex
      sx={{
        width: '100%',
        justifyContent: 'center',
        bg: 'lightBlue',
        py: '40px',
        mt: '100px',
      }}
    >
      <Box sx={{ width: '1080px', textAlign: 'center' }}>
        Copyright © 2023 1VPN
      </Box>
    </Flex>
  )
}

export default Footer
