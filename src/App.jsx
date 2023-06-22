import { Flex, Box } from 'theme-ui'
import Header from './Header'
import HomeSection from './HomeSection'
import FeatureSection from './FeatureSection'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Flex sx={{ width: '100%', justifyContent: 'center' }}>
        <Box sx={{ width: '1080px', mx: '52px' }}>
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
