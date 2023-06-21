import { Flex, Box, Heading } from 'theme-ui'
import FeatureItem from './FeatureItem'
import fast from './assets/fast.svg'
import secure from './assets/secure.svg'
import noLogs from './assets/noLogs.svg'
import unblock from './assets/unblock.svg'
import unlimited from './assets/unlimited.svg'
import free from './assets/free.svg'

const FeatureSection = () => {
  return (
    <Box
      id="features"
      sx={{
        mt: '144px',
      }}
    >
      <Heading as="h2" sx={{ all: 'unset', fontSize: '32px' }}>
        Features
      </Heading>
      <Box
        sx={{
          height: '8px',
          width: '72px',
          mt: '16px',
          mb: '70px',
          bg: 'blue',
          borderRadius: '2px',
        }}
      />
      <Flex
        sx={{
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '70px 0',
        }}
      >
        <FeatureItem title={'Lightning-Fast Speed'} image={fast} />
        <FeatureItem title={'Advanced Data Encryption'} image={secure} />
        <FeatureItem title={'Strict Zero-Logs Policy'} image={noLogs} />
        <FeatureItem title={'Unblock Global Content'} image={unblock} />
        <FeatureItem title={'Unlimited Bandwidth'} image={unlimited} />
        <FeatureItem title={'Free Forever'} image={free} />
      </Flex>
    </Box>
  )
}

export default FeatureSection
