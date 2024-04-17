import { Box, Center, Heading } from "@chakra-ui/react";
import SectionLayout from "./shared/SectionLayout";
import WorkSamples from "./WorkSamples";
function Works() {
  return (
    <Box mt='-120px'>
      <Heading textAlign='center' fontSize='80px' py='80px'>
        industries I&apos;ve written for
      </Heading>
      <Center bgColor='rgb(85, 107, 47,.8)'>
        <SectionLayout>
          <WorkSamples />
        </SectionLayout>
      </Center>
    </Box>
  );
}

export default Works;
