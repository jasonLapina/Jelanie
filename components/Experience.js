import { Box, Grid, Text } from "@chakra-ui/react";
import SectionLayout from "./shared/SectionLayout";
import MyBtn from "./shared/MyBtn";
import WordCloud from "./WordCloud";
import "@fontsource/lilita-one";

function Experience() {
  return (
    <Box mb='120px' bgColor='rgb(210, 105, 30,.8)'>
      <SectionLayout>
        <Grid gridTemplateColumns='1fr 1fr'>
          <Box />
          <Box>
            <Text
              pos='relative'
              fontWeight='bold'
              textTransform='uppercase'
              fontSize='8vh'
              fontFamily="'Lilita One'"
            >
              <Box
                as='span'
                top='-8px'
                left='-54px'
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
            <MyBtn>View full job history</MyBtn>
          </Box>
        </Grid>
      </SectionLayout>
      <WordCloud />
    </Box>
  );
}

export default Experience;
