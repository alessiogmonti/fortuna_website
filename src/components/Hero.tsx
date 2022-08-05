import { Box, Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title, subtitle }: { title, subtitle: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    // bgGradient="linear(to-r, heroGradientStart, heroGradientEnd)"
    // bgClip="text"
  >
      <Heading fontSize="6vw" color={'gray.100'}>{title}</Heading>
      <Heading fontSize="1vw" color={'gray.700'}>data-driven <br/> intelligence</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'FORTUNA',
  subtitle: 'market dynamics'
}
