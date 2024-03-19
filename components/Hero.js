import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const dummyClients = Array.from({ length: 10 });
function Hero() {
  return (
    <Grid
      alignItems='center'
      px='16px'
      gridTemplateColumns='2fr 1fr'
      overflow='hidden'
      h='75vh'
    >
      <Box maxW='640px' justifySelf='center'>
        <VStack align='normal' gap='24px'>
          <Text fontSize='24px'>subheading</Text>
          <Heading fontSize='48px'>Heading</Heading>
          <Text fontSize=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            officiis eaque deserunt veritatis dolores repellat rem autem quos
            perspiciatis, optio, animi
          </Text>
          <HStack gap='32px'>
            <Button>CTA1</Button>
            <Button>CTA2</Button>
          </HStack>
        </VStack>
      </Box>

      <Marquee
        direction='up'
        style={{
          transform: "rotate(110deg)",
          overflow: "hidden",
          top: 0,
        }}
      >
        {dummyClients.map((_, i) => (
          <Box
            key={i}
            m='24px'
            bgColor='red'
            h='320px'
            w='320px'
            borderRadius='15px'
          />
        ))}
      </Marquee>
    </Grid>
  );
}

export default Hero;