import { HStack, Text } from "@chakra-ui/react";
import CloudWrapper from "./CloudWrapper";

export default function WordCloud() {
  return (
    <CloudWrapper>
      <HStack justify='center'>
        <CloudItem>B2C</CloudItem>
        <CloudItem fontSize='24px'>LANDING PAGES</CloudItem>
        <CloudItem textAlign='left'>PRODUCT DESCRIPTION</CloudItem>
      </HStack>
      <HStack mt='48px' justify='center'>
        <CloudItem
          transform='rotate(270deg) translateX(16px)'
          maxW='180px'
          lineHeight='48px'
          fontSize='48px'
        >
          SOCIAL MEDIA ADS
        </CloudItem>
        <CloudItem
          flexShrink='1'
          textAlign='left'
          lineHeight='64px'
          fontSize='64px'
        >
          EMAIL NEWSLETTER
        </CloudItem>
      </HStack>
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
      {...props}
    >
      {props.children}
    </Text>
  );
}
