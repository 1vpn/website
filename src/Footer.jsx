import { Flex, Box, Link } from 'theme-ui'

const Footer = () => {
  return (
    <Flex
      sx={{
        width: '100%',
        justifyContent: 'center',
        bg: 'paleBlue',
        py: '40px',
        mt: ['40px', '80px', '100px', '100px'],
      }}
    >
      <Flex
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['center', 'start'],
          width: '100%',
          maxWidth: ['540px', '688px', '928px', '1080px'],
          justifyContent: 'space-between',
        }}
      >
        <Flex
          sx={{
            flexDirection: ['column', 'row', 'row'],
            alignItems: 'center',
            gap: ['16px', '32px'],
            mb: ['20px', '0'],
          }}
        >
          <Link
            href="https://twitter.com/1VPN_org"
            target="_blank"
            variant="footer"
          >
            Twitter
          </Link>
          <Link
            href="https://www.instagram.com/1vpnorg"
            target="_blank"
            variant="footer"
          >
            Instagram
          </Link>
          <Link
            href="https://www.reddit.com/r/1VPN/"
            target="_blank"
            variant="footer"
          >
            Reddit
          </Link>
        </Flex>
        <Box sx={{ textAlign: ['center', 'left'] }}>Copyright © 2023 1VPN</Box>
      </Flex>
    </Flex>
  )
}

export default Footer
