import { Box } from "@chakra-ui/react";
import React from "react";

export default function CloudWrapper({ children, extendedProps }) {
  return (
    <Box
      maxW='768px'
      mx='auto'
      minH='400px'
      py='80px'
      px='40px'
      fontSize='40px'
      fontFamily='Balsamiq Sans'
      textAlign='center'
      fontWeight='semibold'
      pos='relative'
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { ...child.props, ...extendedProps });
      })}
    </Box>
  );
}
