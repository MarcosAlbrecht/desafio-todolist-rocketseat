import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    gray: {
      700: '#0D0D0D',
      600: '#1A1A1A',
      500: '#262626',
      400: '#333333',
      300: '#808080',
      200: '#D9D9D9',
      100: '#F2F2F2'
    },
    produto: {
      purple: '#8284FA',
      purple_dark: '#5E60CE',
      blue: '#4EA8DE',
      blue_dark: '#1E6F9F',      
    },
    white: '#FFFFFF',
    danger: '#E25858', 
  },
 
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    lgg: 35,
  },
  fonts: {
    heading: 'Inter_700Bold',
    body: 'Inter_400Regular',
  },
  sizes: {
    14: 56
  }
});