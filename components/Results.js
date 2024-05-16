import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Results() {
  const results = [
    {
      image: "Buzzbud.jpg",
      text: "Food & Lifestyle",
    },
    {
      image: "Dreams.jpg",
      text: "Wellness",
    },
    {
      image: "Gassy.png",
      text: "Recreational",
    },
    {
      image: "Homi.jpg",
      text: "Homecare",
    },
    {
      image: "NolaSkin.jpg",
      text: "Skincare",
    },
    {
      image: "RealTakai.jpg",
      text: "Clothing",
    },
    {
      image: "Santi.png",
      text: "Bedding",
    },
    {
      image: "Sugarbaby.png",
      text: "Feminine Care",
    },
  ];
  return (
    <Box mb='40px'>
      <Heading
        textAlign='center'
        fontSize={{ md: "80px", base: "32px" }}
        pb='80px'
        pt='24px'
      >
        RESULTS THAT SPEAK FOR THEMSELVES
      </Heading>
      <Marquee speed={200} pauseOnHover>
        {results.map((r) => (
          <Box mx='16px' key={r.image} cursor='pointer'>
            <Image
              alt='result'
              src={`/assets/results/${r.image}`}
              style={{ width: "100%", height: "300px" }}
              width='0'
              height='0'
              sizes='100vw'
            />
            <Center mt='24px'>
              <Text fontSize='32px'>{r.text} brand</Text>
            </Center>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
}
