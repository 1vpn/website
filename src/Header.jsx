import { Flex, Box, Image } from 'theme-ui'
import HeaderMenu from './HeaderMenu'
import logo from './assets/logo.svg'

const Header = () => {
  return (
    <Flex
      sx={{
        height: '48px',
        my: '40px',
        bg: '',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Flex sx={{ gap: '10px', alignItems: 'center' }}>
        <Image
          src={logo}
          alt="1VPN logo"
          sx={{
            height: '32px',
          }}
        />
        <Box sx={{ fontSize: '28px', fontWeight: '700', letterSpacing: '1px' }}>
          1VPN
        </Box>
      </Flex>
      <HeaderMenu />
    </Flex>
  )
}

export default Header
