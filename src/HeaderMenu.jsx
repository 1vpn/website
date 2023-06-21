import { Flex, Link } from 'theme-ui'

const HeaderMenu = () => {
  return (
    <Flex
      sx={{
        fontSize: '16px',
        gap: '32px',
        alignItems: 'center',
      }}
    >
      <Link href="/" variant="header">
        Home
      </Link>
      <Link href="#features" variant="header">
        Features
      </Link>
      <Link href="mailto:1vpncontact@proton.me" variant="header">
        Contact
      </Link>
      <Link
        href={
          navigator.userAgent.indexOf('Firefox') !== -1
            ? 'https://addons.mozilla.org/en-US/firefox/addon/1vpn-free-vpn-for-firefox/'
            : navigator.userAgent.indexOf('Edg') !== -1
            ? 'https://microsoftedge.microsoft.com/addons/detail/dalhgafbhpdolibignjckpmiejgfddjp'
            : 'https://chrome.google.com/webstore/detail/akcocjjpkmlniicdeemdceeajlmoabhg'
        }
        target="_blank"
        variant="button"
        sx={{ width: '132px' }}
      >
        Download
      </Link>
    </Flex>
  )
}

export default HeaderMenu
