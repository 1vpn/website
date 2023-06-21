import { Flex, Box, Image, Link } from 'theme-ui'
import HeaderMenu from './HeaderMenu'
import logo from './assets/logo.svg'

const Header = () => {
  return (
    <Flex
      sx={{
        height: '48px',
        my: '40px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link
        href="/"
        sx={{
          all: 'unset',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <Image
          src={logo}
          alt="1VPN logo"
          sx={{
            height: '32px',
            width: '32px',
          }}
        />
        <Box sx={{ fontSize: '28px', fontWeight: '700', letterSpacing: '1px' }}>
          1VPN
        </Box>
      </Link>
      <HeaderMenu />
    </Flex>
  )
}

export default Header
