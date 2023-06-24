import { Flex, Box } from 'theme-ui'
import Header from './Header'
import HomeSection from './HomeSection'
import FeatureSection from './FeatureSection'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Flex sx={{ width: '100%', justifyContent: 'center' }}>
        <Box
          sx={{
            width: ['540px', '688px', '928px', '1080px'],
            mx: ['0', '30px', '40px', '50px'],
          }}
        >
          <Header />
          <HomeSection />
          <FeatureSection />
        </Box>
      </Flex>
      <Footer />
    </>
  )
}

export default App
