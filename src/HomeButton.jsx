import { Link, Image } from 'theme-ui'

const HomeButton = ({ browserName, logo, url }) => {
  return (
    <Link
      href={url}
      target="_blank"
      variant="button"
      sx={{ width: '256px', gap: '8px' }}
    >
      <Image
        src={logo}
        alt={`${browserName} logo`}
        sx={{
          width: '22px',
          height: '22px',
        }}
      />
      {`Download for ${browserName}`}
    </Link>
  )
}

export default HomeButton
