import { Flex, Heading, Image } from 'theme-ui'
import HomeButton from './HomeButton'
import map from './assets/map.svg'
import chrome from './assets/chrome.svg'
import firefox from './assets/firefox.svg'
import edge from './assets/edge.svg'

const HomeSection = () => {
  return (
    <Flex
      sx={{
        width: '100%',
        bg: 'lightBlue',
        borderRadius: '24px',
        px: '80px',
        py: '40px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Heading as="h1" sx={{ all: 'unset', fontSize: '45px', mb: '32px' }}>
        Free, Secure, and Private VPN
      </Heading>
      <Flex sx={{ gap: '32px', mb: '50px' }}>
        <HomeButton
          browserName={'Chrome'}
          logo={chrome}
          url={
            'https://chrome.google.com/webstore/detail/akcocjjpkmlniicdeemdceeajlmoabhg'
          }
        />
        <HomeButton
          browserName={'Firefox'}
          logo={firefox}
          url={
            'https://addons.mozilla.org/en-US/firefox/addon/1vpn-free-vpn-for-firefox/'
          }
        />
        <HomeButton
          browserName={'Edge'}
          logo={edge}
          url={
            'https://microsoftedge.microsoft.com/addons/detail/dalhgafbhpdolibignjckpmiejgfddjp'
          }
        />
      </Flex>
      <Image
        src={map}
        alt="World map"
        sx={{
          height: '532px',
          width: '100%',
        }}
      />
    </Flex>
  )
}

export default HomeSection
