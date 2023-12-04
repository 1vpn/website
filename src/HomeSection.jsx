import { Flex, Heading, Image, Box } from 'theme-ui'
import HomeButton from './HomeButton'
import map from './assets/map.svg'
import chrome from './assets/chrome.svg'
import firefox from './assets/firefox.svg'
import edge from './assets/edge.svg'

const HomeSection = () => {
  return (
    <Box sx={{ position: 'relative', zIndex: '1' }}>
      <Box
        sx={{
          display: ['block', 'none', 'none', 'none'],
          height: '30px',
          bg: 'white',
        }}
      />
      <Flex
        sx={{
          width: '100%',
          bg: 'paleBlue',
          borderRadius: '24px',
          px: ['16px', '40px', '40px', '80px'],
          py: ['16px', '40px', '40px', '40px'],
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Heading
          as="h1"
          sx={{
            all: 'unset',
            fontSize: ['35px', '45px'],
            mb: ['24px', '24px', '32px', '32px'],
            height: ['auto', 'auto', '56px', '56px'],
            textAlign: 'center',
          }}
        >
          Free, Secure, and Private VPN
        </Heading>
        <Flex
          sx={{
            gap: ['18px', '24px', '32px', '32px'],
            mb: ['24px', '40px', '50px', '50px'],
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <HomeButton
            browserName={'Chrome'}
            logo={chrome}
            url={
              'https://chrome.google.com/webstore/detail/akcocjjpkmlniicdeemdceeajlmoabhg'
            }
          />
          <HomeButton
            browserName={'Edge'}
            logo={edge}
            url={
              'https://microsoftedge.microsoft.com/addons/detail/dalhgafbhpdolibignjckpmiejgfddjp'
            }
          />
          <HomeButton
            browserName={'Firefox'}
            logo={firefox}
            url={'https://addons.mozilla.org/en-US/firefox/addon/1vpn/'}
          />
        </Flex>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingBottom: '58%',
          }}
        >
          <Image
            src={map}
            alt="World map"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default HomeSection
