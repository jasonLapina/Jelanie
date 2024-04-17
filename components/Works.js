import { Box, Heading } from "@chakra-ui/react";
import SectionLayout from "./shared/SectionLayout";
import WorkSamples from "./WorkSamples";
function Works() {
  return (
    <Box>
      <Heading textAlign='center' fontSize='12vh'>
        some brands I&apos;ve written for
      </Heading>
      <SectionLayout>
        <WorkSamples />
      </SectionLayout>
    </Box>
  );
}

export default Works;
