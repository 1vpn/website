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
      <Link href="#About" variant="header">
        About
      </Link>
      <Link href="#Features" variant="header">
        Features
      </Link>
      <Link href="#About" variant="header">
        GitHub
      </Link>
      <Link href="'https://google.com" variant="header">
        Contact
      </Link>
      <Link
        href="#download"
        target="_blank"
        variant="button"
        sx={{ width: '124px' }}
      >
        Download
      </Link>
    </Flex>
  )
}

export default HeaderMenu
