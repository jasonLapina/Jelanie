import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Box,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";

function MasonryModal({ src, height }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        mb='8px'
        h={height}
        overflow='hidden'
        cursor='pointer'
        onClick={onOpen}
        pos='relative'
        role='group'
        data-aos='fade-up'
        border='solid 5px orangered'
        borderRadius='15px'
      >
        <Image
          alt='work sample'
          src={`https://eoaewyjlaebxhoeszleb.supabase.co/storage/v1/object/public/samples/${src}`}
          style={{ transition: "all .4s" }}
          objectFit='cover'
          objectPosition='top'
          fill={true}
        />
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
          _groupHover={{ opacity: 1 }}
          fontWeight='bold'
          textShadow='2px 2px white'
        >
          Click to view
        </Center>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent>
          <Image
            alt='work sample'
            src={`https://eoaewyjlaebxhoeszleb.supabase.co/storage/v1/object/public/samples/${src}`}
            loading='lazy'
          />
        </ModalContent>
      </Modal>
    </>
  );
}

export default MasonryModal;
