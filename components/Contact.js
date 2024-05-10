import { Box, Center, Heading } from "@chakra-ui/react";
import MyBtn from "./shared/MyBtn";

export default function Contact() {
  return (
    <Box py='80px' bgColor='rgb(95, 133, 117,.8)'>
      <Heading
        mb='32px'
        textAlign='center'
        fontSize={{ md: "80px", base: "32px" }}
        maxW='1400px'
        mx='auto'
        data-aos='fade-down'
      >
        <Box color='white' as='span' fontFamily="'Lilita One'">
          LEVEL UP YOUR MARKETING
          <Box as='span' color='gold'>
            {" "}
            WITHOUT BREAKING A SWEAT.
          </Box>
        </Box>{" "}
        <Box as='span'>LET THE COPY DO THE HEAVY LIFTING!</Box>
      </Heading>

      <Center data-aos='fade-up'>
        <a href="mailto:jgapaswork@gmail.com?subject=Let's work together, Jel">
          <MyBtn>WORK WITH JEL</MyBtn>
        </a>
      </Center>
    </Box>
  );
}
