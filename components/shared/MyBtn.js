import { Button } from "@chakra-ui/react";
function MyBtn(props) {
  return (
    <Button
      borderRadius='20px'
      px='24px'
      boxShadow='4px 6px rgba(0,0,0,.7)'
      border='solid 2px black'
      _hover={{
        boxShadow: "2px 3px rgba(0,0,0,7)",
        transform: "translate(2px, 2px)",
        color: "red",
      }}
      {...props}
    />
  );
}

export default MyBtn;
