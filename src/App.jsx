// import { useState } from 'react'
import { Flex, Box } from 'theme-ui'
import Header from './Header'
import Main from './Home'

const App = () => {
  return (
    <Flex sx={{ width: '100%', justifyContent: 'center' }}>
      <Box sx={{ width: '1080px' }}>
        <Header />
        <Main />
      </Box>
    </Flex>
  )
}

export default App
