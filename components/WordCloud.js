import { Box, HStack, Text } from "@chakra-ui/react";
import CloudWrapper from "./CloudWrapper";
import { useEffect, useState } from "react";

const words = ["BC", "LP", "PD", "SOC", "EN", "DR", "BP", "SMS", "SL"];

export default function WordCloud() {
  const [highLighted, setHighLighted] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHighLighted((prev) => (prev >= words.length - 1 ? 0 : prev + 1));
    }, 750);

    return () => clearInterval(interval);
  }, []);
  return (
    <CloudWrapper>
      {/* TOP PART */}
      <HStack justify='center'>
        <CloudItem color={words[highLighted] === "BC" ? "fuchsia" : "black"}>
          B2C
        </CloudItem>
        <CloudItem
          color={words[highLighted] === "LP" ? "fuchsia" : "black"}
          fontSize='24px'
        >
          LANDING PAGES
        </CloudItem>
        <CloudItem
          color={words[highLighted] === "PD" ? "fuchsia" : "black"}
          textAlign='left'
        >
          PRODUCT DESCRIPTION
        </CloudItem>
      </HStack>
      {/* MIDDLE PART */}
      <HStack mt='56px' justify='center'>
        <CloudItem
          color={words[highLighted] === "SOC" ? "fuchsia" : "black"}
          transform='rotate(270deg) translate(16px, 24px)'
          maxW='180px'
          lineHeight='48px'
          fontSize='48px'
          textAlign='right'
        >
          SOCIAL MEDIA ADS
        </CloudItem>
        <CloudItem
          color={words[highLighted] === "EN" ? "fuchsia" : "black"}
          textAlign='left'
          alignSelf='start'
          fontSize='64px'
        >
          EMAIL NEWSLETTER
        </CloudItem>
      </HStack>
      {/* BOTTOM PART */}
      <HStack mt='-95px' justify='center'>
        <CloudItem
          color={words[highLighted] === "DR" ? "fuchsia" : "black"}
          fontSize='24px'
        >
          direct-response
        </CloudItem>
        <CloudItem
          color={words[highLighted] === "BP" ? "fuchsia" : "black"}
          textAlign='left'
        >
          BLOG POSTS
        </CloudItem>
      </HStack>
      <Box mt='16px' textAlign='left' transform='translateX(72px)'>
        <CloudItem color={words[highLighted] === "SMS" ? "fuchsia" : "black"}>
          SMS CAMPAIGNS
        </CloudItem>
        <CloudItem
          fontSize='24px'
          ml='8px'
          color={words[highLighted] === "SL" ? "fuchsia" : "black"}
        >
          short/long form
        </CloudItem>
      </Box>
    </CloudWrapper>
  );
}

function CloudItem(props) {
  return (
    <Text
      lineHeight='0'
      flexShrink='0'
      display='inline'
      w='fit-content'
      transition='color .4s'
      {...props}
    >
      {props.children}
    </Text>
  );
}
