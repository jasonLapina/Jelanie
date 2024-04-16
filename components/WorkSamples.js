import { Grid, Image, Text, Box, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

const samples = [
  {
    heading: "CLOTHING",
    images: [
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/657148b2abc125e575a271c9_28434712_190905788182108_7835183601141415936_n.jpg",
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/65714948bc2db4345f6a74ad_speaker-tim.jpg",
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/65720f65d7f4f878333d3229_IMG_5833.jpeg",
    ],
  },
  {
    heading: "HEALTH/WELNESS",
    images: [
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/657148b2abc125e575a271c9_28434712_190905788182108_7835183601141415936_n.jpg",
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/65720be7d666653c31312b23_speaker-lauren-tsai-casetify.jpg",
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/6571520e550aa233cd6a3b72_8beeeba9-22ba-4a13-a6dc-7b7a5f907a4a_rw_1920.jpg",
    ],
  },
  {
    heading: "BEAUTY",
    images: [
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/657148b2abc125e575a271c9_28434712_190905788182108_7835183601141415936_n.jpg",
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/65720be7d666653c31312b23_speaker-lauren-tsai-casetify.jpg",
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/6571520e550aa233cd6a3b72_8beeeba9-22ba-4a13-a6dc-7b7a5f907a4a_rw_1920.jpg",
    ],
  },
  {
    heading: "PERSONAL CARE",
    images: [
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/657148b2abc125e575a271c9_28434712_190905788182108_7835183601141415936_n.jpg",
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/65720be7d666653c31312b23_speaker-lauren-tsai-casetify.jpg",
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/6571520e550aa233cd6a3b72_8beeeba9-22ba-4a13-a6dc-7b7a5f907a4a_rw_1920.jpg",
    ],
  },
  {
    heading: "ACCESSORIES",
    images: [
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/657148b2abc125e575a271c9_28434712_190905788182108_7835183601141415936_n.jpg",
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/65720be7d666653c31312b23_speaker-lauren-tsai-casetify.jpg",
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/6571520e550aa233cd6a3b72_8beeeba9-22ba-4a13-a6dc-7b7a5f907a4a_rw_1920.jpg",
    ],
  },
  {
    heading: "HOUSEHOLD",
    images: [
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/657148b2abc125e575a271c9_28434712_190905788182108_7835183601141415936_n.jpg",
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/65720be7d666653c31312b23_speaker-lauren-tsai-casetify.jpg",
      "https://assets-global.website-files.com/65667eee3e4d8058ee5a095b/6571520e550aa233cd6a3b72_8beeeba9-22ba-4a13-a6dc-7b7a5f907a4a_rw_1920.jpg",
    ],
  },
];

export default function WorkSamples() {
  const [hovered, setHovered] = useState(null);

  return (
    <Grid
      justifyContent='center'
      justifyItems='center'
      gridTemplateColumns='1fr 2fr'
    >
      <Box w='100%' h='650px' overflow='hidden'>
        {samples[0].images[hovered] ? (
          <motion.img
            key={[samples[0].images[hovered]]}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            src={[samples[0].images[hovered]]}
          />
        ) : (
          <Box w='100%' h='100%' />
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
