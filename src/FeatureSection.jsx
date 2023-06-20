import { Flex, Box, Heading, Image } from 'theme-ui'

const FeatureSection = () => {
  return (
    <Box
      id="features"
      sx={{
        // width: '100%',
        my: '144px',
      }}
    >
      <Box sx={{ fontSize: '32px' }}>Features</Box>
      <Box
        sx={{
          height: '8px',
          width: '72px',
          mt: '16px',
          bg: 'blue',
          borderRadius: '2px',
        }}
      />
    </Box>
  )
}

export default FeatureSection
