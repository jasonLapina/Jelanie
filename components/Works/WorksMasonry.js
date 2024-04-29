import { Box } from "@chakra-ui/react";
import MasonryModal from "./MasonryModal";

export default function WorksMasonry() {
  const masonItems = [
    {
      src: "5minSkin.png",
      height: "300",
    },
    {
      src: "airstyle.jpg",
      height: "250",
    },
    {
      src: "bezeli_march.jpg",
      height: "190",
    },
    {
      src: "daisy2.png",
      height: "320",
    },

    {
      src: "bonsai.jpg",
      height: "210",
    },
    {
      src: "brute_force.png",
      height: "200",
    },
    {
      src: "buzzbud.jpg",
      height: "240",
    },
    {
      src: "cru.png",
      height: "210",
    },
    {
      src: "bezeli.jpg",
      height: "280",
    },
    {
      src: "daisy.png",
      height: "350",
    },

    {
      src: "gassy.jpg",
      height: "220",
    },
  ];
  return (
    <Box my='120px' px='40px' style={{ columns: "400px auto" }}>
      {masonItems.map((m) => (
        // <Box
        //   mb='8px'
        //   key={m.src}
        //   bgColor='red'
        //   h={`${m.height}`}
        //   bgImage={`url(/assets/work_samples/${m.src})`}
        //   bgSize='cover'
        //   bgPos='top'
        //   bgRepeat='no-repeat'
        //   borderRadius='10px'
        //   overflow='hidden'
        //   cursor='pointer'
        // />
        <MasonryModal height={m.height} src={m.src} key={m.src} />
      ))}
    </Box>
  );
}
