import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import SectionLayout from "../shared/SectionLayout";
import WordMarquee from "./WordMarquee";
import WorksMasonry from "./WorksMasonry";

const industries = [
  "Fashion & Clothing",
  "Health & Wellness",
  "Skincare",
  "Haircare",
  "Beauty",
  "THC and CBD",
  "Household care",
  "Bedding",
  "Electronics",
  "Jewelry & Accessories",
  "Fitness Apparel",
  "Food & Lifestyle",
];

const objectives = [
  "Product Launches",
  "Teasers",
  "Educational/Informational",
  "General Promotions",
  "Sales & Discounts",
  "Holiday Greetings and Announcements",
  "Restocks and Relaunches",
  "Welcome, Post-purchase, Retention Sequences",
  "Seasonal Promotions",
  "Social Proof",
  "Review Request",
  "Product Spotlights",
];

function Works() {
  return (
    <Box mt='-120px'>
      <Heading textAlign='center' fontSize='80px' py='80px'>
        THE PROOF IS IN THE{" "}
        <Box as='span' textDecor='line-through'>
          PUDDING
        </Box>{" "}
        PORTFOLIO
      </Heading>
      <VStack bgColor='rgb(85, 107, 47,.8)' py='40px' gap='40px'>
        <WordMarquee words={industries} />
        <WordMarquee words={objectives} direction='left' />
      </VStack>
      <WorksMasonry />
    </Box>
  );
}

export default Works;
