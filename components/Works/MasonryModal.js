import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Box,
  Image,
} from "@chakra-ui/react";

function MasonryModal({ src, height }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        mb='8px'
        key={height}
        bgColor='red'
        h={height}
        bgImage={`url(/assets/work_samples/${src})`}
        bgSize='cover'
        bgPos='top'
        bgRepeat='no-repeat'
        // borderRadius='10px'
        overflow='hidden'
        cursor='pointer'
        onClick={onOpen}
      />
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
