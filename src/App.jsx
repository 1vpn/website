import { Flex, Box } from 'theme-ui'
import Header from './Header'
import HomeSection from './HomeSection'
import FeatureSection from './FeatureSection'

const App = () => {
  return (
    <Flex sx={{ width: '100%', justifyContent: 'center' }}>
      <Box sx={{ width: '1080px' }}>
        <Header />
        <HomeSection />
        <FeatureSection />
      </Box>
    </Flex>
  )
}

export default App
