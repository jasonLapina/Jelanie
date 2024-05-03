import {
  Box,
  Grid,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import MyBtn from "../shared/MyBtn";

import "@fontsource/rampart-one";
import { motion } from "framer-motion";

import HeroHeading from "./HeroHeading";
import HeroMarquee from "./HeroMarquee";

function Hero() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: "translateY(120px)",
      }}
      animate={{
        opacity: 1,
        transform: "translateY(0)",
      }}
      transition={{
        delay: 0.6,
        duration: 0.4,
      }}
    >
      <Grid
        alignItems='center'
        px={{ md: "16px", base: "9px" }}
        gridTemplateColumns={{ base: "1fr", md: "10fr 1fr" }}
        overflow='hidden'
        h='90vh'
        pos='relative'
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
              fontSize={{ md: "6.5vw", base: "40px" }}
              style={{
                WebkitTextStroke: ".05vw black",
              }}
            >
              <HeroHeading />
            </Heading>
            <Text fontWeight='semibold' fontSize='24px'>
              I&apos;m here to put words to work for your business.
            </Text>
            <HStack gap='32px' justify={{ base: "center", md: "start" }}>
              <MyBtn>VIEW MY PORTFOLIO</MyBtn>
            </HStack>
          </VStack>
        </Box>
        <HeroMarquee />
      </Grid>
    </motion.div>
  );
}

export default Hero;
