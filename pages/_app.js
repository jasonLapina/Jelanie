import { Box, ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

import "@fontsource/chilanka";
import "@fontsource/special-elite";
import "@fontsource/balsamiq-sans/400.css";
import "@fontsource/balsamiq-sans/700.css";

const theme = extendTheme({
  fonts: {
    heading: `'Rampart One', cursive`,
    body: `'Balsamiq Sans', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  console.log("render");
  return (
    <ChakraProvider theme={theme}>
      <Box
        bgAttachment='fixed'
        bgSize='cover'
        bgImage='url(/assets/app-bg.webp)'
        bgBlendMode='overlay'
        pos='absolute'
        w='100%'
        h='100%'
        zIndex='-1'
        filter='blur(20px)'
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
