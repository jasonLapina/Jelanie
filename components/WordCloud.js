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
    <>
      <Text
        textAlign='center'
        fontFamily='Special Elite'
        fontSize='32px'
        fontWeight='semibold'
        mb='-24px'
      >
        ...but what exactly can I do?
      </Text>
      <CloudWrapper>
        {/* TOP PART */}
        <HStack justify='center'>
          <CloudItem highLighted={words[highLighted] === "BC"}>B2C</CloudItem>
          <CloudItem highLighted={words[highLighted] === "LP"} fontSize='24px'>
            LANDING PAGES
          </CloudItem>
          <CloudItem highLighted={words[highLighted] === "PD"} textAlign='left'>
            PRODUCT DESCRIPTION
          </CloudItem>
        </HStack>
        {/* MIDDLE PART */}
        <HStack mt='56px' justify='center'>
          <CloudItem
            highLighted={words[highLighted] === "SOC"}
            transform='rotate(270deg) translate(16px, 24px)'
            maxW='180px'
            lineHeight='48px'
            fontSize='48px'
            textAlign='right'
          >
            SOCIAL MEDIA ADS
          </CloudItem>
          <CloudItem
            highLighted={words[highLighted] === "EN"}
            textAlign='left'
            alignSelf='start'
            fontSize='64px'
            fontFamily='Special Elite'
          >
            EMAIL NEWSLETTER
          </CloudItem>
        </HStack>
        {/* BOTTOM PART */}
        <HStack mt='-95px' justify='center'>
          <CloudItem highLighted={words[highLighted] === "DR"} fontSize='24px'>
            direct-response
          </CloudItem>
          <CloudItem highLighted={words[highLighted] === "BP"} textAlign='left'>
            BLOG POSTS
          </CloudItem>
        </HStack>
        <Box
          mt='16px'
          textAlign='left'
          transform='translateX(72px)'
          w='fit-content'
        >
          <CloudItem highLighted={words[highLighted] === "SMS"}>
            SMS CAMPAIGNS
          </CloudItem>
          <CloudItem
            highLighted={words[highLighted] === "SL"}
            fontSize='24px'
            ml='8px'
          >
            short/long form
          </CloudItem>
        </Box>
      </CloudWrapper>
    </>
  );
}

function CloudItem(props) {
  return (
    <Text
      lineHeight='0'
      flexShrink='0'
      display='inline'
      w='fit-content'
      transition='all .4s'
      color={props.highLighted ? "white" : "black"}
      filter={props.highLighted ? "drop-shadow(1px 2px 8px gold)" : ""}
      {...props}
    >
      {props.children}
    </Text>
  );
}
