import { Grid, Image, Text, Box, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const samples = [
  {
    heading: "CLOTHING",
    images: [
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/657148b2abc125e575a271c9_28434712_190905788182108_7835183601141415936_n.jpg",
    ],
  },
  {
    heading: "HEALTH/WELNESS",
    images: [
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/65720be7d666653c31312b23_speaker-lauren-tsai-casetify.jpg",
    ],
  },
  {
    heading: "BEAUTY",
    images: [
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/65720f65d7f4f878333d3229_IMG_5833.jpeg",
    ],
  },
  {
    heading: "PERSONAL CARE",
    images: [
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/65714948bc2db4345f6a74ad_speaker-tim.jpg",
    ],
  },
  {
    heading: "ACCESSORIES",
    images: [
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/657148b2abc125e575a271c9_28434712_190905788182108_7835183601141415936_n.jpg",
    ],
  },
  {
    heading: "HOUSEHOLD",
    images: [
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/657148b2abc125e575a271c9_28434712_190905788182108_7835183601141415936_n.jpg",
    ],
  },
];

export default function WorkSamples() {
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    samples[hovered];
  }, [hovered]);

  return (
    <Grid gridTemplateColumns='1fr 1fr' gap='80px'>
      <Box h='650px' overflow='hidden'>
        {samples[hovered]?.images[0] ? (
          <motion.img
            key={hovered}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            src={[samples[hovered].images[0]]}
            style={{
              width: "480px",
            }}
          />
        ) : (
          <Box w='480px' h='100%' />
        )}
      </Box>
      <VStack align='normal'>
        {samples.map((item, i) => (
          <Box
            key={item.heading}
            w='100%'
            h='fit-content'
            fontSize='40px'
            fontWeight='bold'
            fontFamily='Special Elite'
            pos='relative'
            cursor='pointer'
            role='group'
            overflow='hidden'
            textShadow='2px 2px white'
          >
            <Text
              transition='all .4s'
              _groupHover={{
                transform: "translateY(-100%)",
                opacity: 0,
              }}
              onMouseEnter={() => {
                setHovered(i);
              }}
            >
              {item.heading}
            </Text>
            <Text
              left='0'
              top='0'
              transform='translateY(50px)'
              pos='absolute'
              transition='all .4s'
              opacity={0}
              _groupHover={{
                transform: "translateY(0)",
                opacity: 1,
              }}
              color='red'
            >
              {item.heading}
            </Text>
          </Box>
        ))}
      </VStack>
    </Grid>
  );
}
