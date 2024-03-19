import { Box } from "@chakra-ui/react";
function SectionLayout({ children }) {
  return (
    <Box maxW='1440px' mx='auto' py='80px' px='16px'>
      {children}
    </Box>
  );
}

export default SectionLayout;
