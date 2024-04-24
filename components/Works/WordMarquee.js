import { Box, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export default function WordMarquee({ words, direction = "right" }) {
  return (
    <Marquee direction={direction}>
      {words.map((ind) => (
        <Box key={ind}>
          <Text fontSize='40px' mx='40px'>
            {ind}
          </Text>
        </Box>
      ))}
    </Marquee>
  );
}
