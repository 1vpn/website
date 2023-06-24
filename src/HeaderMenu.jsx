import { useState } from 'react'
import { Flex, Link, Button, Image } from 'theme-ui'
import menu from './assets/menu.svg'

const HeaderMenu = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <Button
        sx={{
          all: 'unset',
          display: ['flex', 'none', 'none', 'none'],
          cursor: 'pointer',
          px: '12px',
        }}
        onClick={() => setShowMenu(!showMenu)}
      >
        <Image
          src={menu}
          alt="menu"
          sx={{
            height: '24px',
            width: '24px',
          }}
        />
      </Button>
      <Flex
        sx={{
          fontSize: '16px',
          gap: '0 32px',
          alignItems: 'center',
          display: 'flex',
          height: [showMenu ? '216px' : '0', 'auto', 'auto', 'auto'],
          flexDirection: ['column', 'row', 'row', 'row'],
          width: ['100%', 'auto', 'auto', 'auto'],
          mt: ['8px', '0', '0', '0'],
          transition: 'height 0.15s linear',
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
          sx={{
            width: ['100%', '132px', '132px', '132px'],
            mt: ['16px', '0', '0', '0'],
          }}
        >
          Download
        </Link>
      </Flex>
    </>
  )
}

export default HeaderMenu
