import { Box, Grid, HStack, Text, useMediaQuery } from "@chakra-ui/react";
import SectionLayout from "./shared/SectionLayout";
import MyBtn from "./shared/MyBtn";
import WordCloud from "./WordCloud";
import "@fontsource/lilita-one";

function Experience() {
  const [isMedium] = useMediaQuery("(min-width: 768px)");
  return (
    <Box mb='120px' bgColor='rgb(210, 105, 30,.8)'>
      <SectionLayout>
        <Grid gridTemplateColumns={{ md: "1fr 1fr", base: "1fr" }}>
          <Box />
          <Box>
            <Text
              pos='relative'
              fontWeight='bold'
              textTransform='uppercase'
              fontSize={{ md: "8vh", base: "40px" }}
              fontFamily="'Lilita One'"
            >
              <Box
                as='span'
                top={{ md: "-8px", base: "-32px" }}
                left={{ md: "-54px", base: "-8px" }}
                transform='rotate(-9deg)'
                bgColor='gold'
                pos='absolute'
                fontSize='16px'
                px='16px'
                py='8px'
                borderRadius='10px'
              >
                {" "}
                ABOUT ME!
              </Box>
              TL;DR:
              <Box
                as='span'
                style={{
                  WebkitTextStroke: ".1vw white",
                }}
                color='transparent'
              >
                {" "}
                I&apos;M YOUR GO-TO FOR ALL THINGS COPY
              </Box>
            </Text>
            <Text mb='24px' mt='24px' fontSize='20px' fontWeight='bold'>
              A few years ago, a 20-something career shifter wanted to put her
              love for writing and natural knack for problem-solving into good
              (aka profitable) use… and POOF!{" "}
              <Box as='span' fontStyle='italic' fontWeight='bolder'>
                Copywriter Jelanie (me) was born.{" "}
              </Box>
              Since then, I&apos;ve been helping brands turn onlookers into
              paying customers and brand loyalists by writing targeted,
              conversion-focused, and community-driven copy.
            </Text>
            <HStack justify={{ base: "center", md: "start" }}>
              <MyBtn>View full job history</MyBtn>
            </HStack>
          </Box>
        </Grid>
      </SectionLayout>
      {isMedium && <WordCloud />}
    </Box>
  );
}

export default Experience;
