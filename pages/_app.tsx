import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/inter/400.css';
import '@fontsource/manrope/800.css';
import { theme } from 'theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}