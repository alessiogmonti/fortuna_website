import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
import { ButtonStyles as Button } from './styles/button'
import { HeaderStyles as Header} from './styles/header'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { truncateSync } from 'fs';

const fonts = { mono: `'Times', monospace` }

const config : ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: 'green',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
  components: {
    Container : {
      bg: {
        default: 'black',
        dark: 'white'
      },
      bgGradient: {
        default: 'linear(to-r, gray.200, green.100, blue.100)',
        _dark: 'linear(to-r, blue.100, orange.100, blue.100)'
      }
    },
    Button,
    Header
  },
  config
})

export default theme
