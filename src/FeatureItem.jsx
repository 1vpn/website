import { Flex, Heading, Image } from 'theme-ui'

const FeatureItem = ({ title, image }) => {
  return (
    <Flex sx={{ width: '33%', flexDirection: 'column', alignItems: 'center' }}>
      <Image
        src={image}
        alt={title}
        sx={{
          width: '100px',
          height: '100px',
        }}
      />
      <Heading as="h3" sx={{ all: 'unset', fontSize: '24px', my: '16px' }}>
        {title}
      </Heading>
    </Flex>
  )
}

export default FeatureItem
