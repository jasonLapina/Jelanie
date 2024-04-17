import { Button } from "@chakra-ui/react";
function MyBtn(props) {
  return (
    <Button
      borderRadius='full'
      px='60px'
      py='40px'
      fontSize='24px'
      boxShadow='6px 8px rgba(0,0,0,.7)'
      border='solid 2px black'
      _hover={{
        boxShadow: "2px 3px rgba(0,0,0,7)",
        transform: "translate(2px, 2px)",
        color: "orangered",
      }}
      {...props}
    />
  );
}

export default MyBtn;
