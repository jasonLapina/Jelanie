import { Box, ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/raleway";

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bgAttachment='fixed'
        bgSize='cover'
        bgImage='url(https://static.vecteezy.com/system/resources/previews/023/509/279/original/fun-colorful-doodle-pattern-creative-minimalist-style-art-abstract-background-with-bright-cute-elements-and-figures-simple-childish-scribble-backdrop-multi-colored-swirls-circles-lines-vector.jpg)'
      >
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
