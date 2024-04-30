import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Box,
  Image,
  Skeleton,
  Text,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

function MasonryModal({ src, height }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Box
        mb='8px'
        key={height}
        h={height}
        overflow='hidden'
        cursor='pointer'
        onClick={onOpen}
        pos='relative'
        role='group'
      >
        <Skeleton isLoaded={loaded}>
          <Image
            alt='work sample'
            src={`/assets/work_samples/${src}`}
            onLoad={() => setLoaded(true)}
            transition='all .4s'
            loading='lazy'
          />
        </Skeleton>

        <Center
          pos='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%,-50%)'
          h='100%'
          w='100%'
          textAlign='center'
          fontSize='24px'
          py='8px'
          bgColor='rgba(255,255,255,.2)'
          backdropFilter='blur(5px)'
          transition='all .2s'
          opacity={0}
          _groupHover={{
            opacity: 1,
          }}
          fontWeight='bold'
          textShadow='2px 2px white'
        >
          Click to view
        </Center>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <Image alt='work sample' src={`/assets/work_samples/${src}`} />
          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}

export default MasonryModal;
