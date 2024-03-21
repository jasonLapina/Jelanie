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
import MyBtn from "./shared/MyBtn";

const dummyClients = Array.from({ length: 10 });
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
          <Text
            textShadow='1px 1px white'
            fontWeight='semibold'
            fontSize='32px'
          >
            Email Copywriter/Marketer
          </Text>
          <Heading
            fontSize='80px'
            style={{
              WebkitTextStroke: ".05vw black",
            }}
            color='white'
          >
            Jelanie Gapas
          </Heading>
          <Text
            textShadow='1px 1px white'
            fontWeight='semibold'
            fontSize='18px'
          >
            Helping e-commerce brands boost their revenue with email marketing
            strategies that convert subscribers into brand loyalists and repeat
            buyers.
          </Text>
          <HStack gap='32px'>
            <MyBtn border='solid 2px orangered'>CTA1</MyBtn>
            <MyBtn border='solid 2px orangered'>CTA2</MyBtn>
          </HStack>
        </VStack>
      </Box>

      <Marquee
        direction='up'
        style={{
          transform: "rotate(110deg) scaleX(1.2)",
          overflow: "hidden",
        }}
        speed={125}
      >
        {dummyClients.map((_, i) => (
          <Box
            key={i}
            mx='80px'
            my='16px'
            bgColor='red'
            h='400px'
            w='320px'
            borderRadius='15px'
          />
        ))}
      </Marquee>
    </Grid>
  );
}

export default Hero;
