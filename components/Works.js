import { Box, Heading } from "@chakra-ui/react";
import SectionLayout from "./shared/SectionLayout";
function Works() {
  return (
    <Box>
      <Heading
        textAlign='center'
        fontSize='12vh'
        style={{
          WebkitTextStroke: ".15vw red",
        }}
        color='transparent'
      >
        Works
      </Heading>
      <SectionLayout></SectionLayout>
    </Box>
  );
}

export default Works;
