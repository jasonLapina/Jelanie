import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import SectionLayout from "./shared/SectionLayout";
function Experience() {
  return (
    <Box mb='120px' bgColor='yellow.100'>
      <SectionLayout>
        <Grid gridTemplateColumns='1fr 1fr'>
          <Box />
          <Box>
            <Heading textTransform='uppercase' fontSize='8vh'>
              12 of the world's top creative minds
              <Box
                as='span'
                style={{
                  WebkitTextStroke: ".1vw red",
                }}
                color='transparent'
              >
                {" "}
                in Asia's biggest & most influential creative conference
              </Box>
            </Heading>
            <Text mt='24px' fontSize='18px' fontWeight='semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              laudantium, natus dicta earum iste numquam suscipit nesciunt quis
              aliquid repellat repellendus enim similique labore id debitis
              deserunt maxime. Possimus, commodi.
            </Text>
          </Box>
        </Grid>
      </SectionLayout>
    </Box>
  );
}

export default Experience;
