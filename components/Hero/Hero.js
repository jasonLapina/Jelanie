import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import MyBtn from "../shared/MyBtn";

import "@fontsource/rampart-one";

import HeroHeading from "./HeroHeading";

const featuredImages = [
  "5minSkin.png",
  "airstyle.jpg",
  "bezeli_march.jpg",
  "bezeli.jpg",
  "bonsai.jpg",
  "brute_force.png",
  "buzzbud.jpg",
];

function Hero() {
  return (
    <Grid
      alignItems='center'
      px='16px'
      gridTemplateColumns='10fr 1fr'
      overflow='hidden'
      h='90vh'
    >
      <Box
        bgSize='cover'
        bgRepeat='no-repeat'
        bgPos='-20px center'
        maxW='768px'
        justifySelf='center'
        py='120px'
      >
        <VStack align='normal' gap='24px'>
          <Heading
            fontSize='120px'
            style={{
              WebkitTextStroke: ".05vw black",
            }}
          >
            <HeroHeading />
          </Heading>
          <Text fontWeight='semibold' fontSize='24px'>
            I&apos;m here to put words to work for your business.
          </Text>
          <HStack gap='32px'>
            <MyBtn>VIEW MY PORTFOLIO</MyBtn>
            {/* <MyBtn border='solid 2px orangered'>CTA2</MyBtn> */}
          </HStack>
        </VStack>
      </Box>

      <Marquee
        direction='up'
        style={{
          transform: "rotate(285deg) scaleX(1.2)",
          overflow: "hidden",
        }}
        speed={150}
      >
        {featuredImages.map((pic) => (
          <Box
            key={pic}
            mx='80px'
            my='16px'
            h='420px'
            w='320px'
            borderRadius='15px'
            overflow='hidden'
          >
            <Image alt={pic} src={`/assets/work_samples/${pic}`} />
          </Box>
        ))}
      </Marquee>
    </Grid>
  );
}

export default Hero;
