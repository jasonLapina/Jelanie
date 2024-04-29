import { AlertTitle, Box, Grid, Image, SimpleGrid } from "@chakra-ui/react";

export default function WorksMasonry() {
  const masonItems = [
    {
      src: "5minSkin.png",
      height: "200",
    },
    {
      src: "airstyle.jpg",
      height: "230",
    },
    {
      src: "bezeli_march.jpg",
      height: "190",
    },
    {
      src: "bezeli.jpg",
      height: "170",
    },
    {
      src: "bonsai.jpg",
      height: "210",
    },
    {
      src: "brute_force.png",
      height: "250",
    },
    {
      src: "buzzbud.jpg",
      height: "180",
    },
    {
      src: "cru.png",
      height: "250",
    },
    {
      src: "daisy.png",
      height: "220",
    },
    {
      src: "daisy2.png",
      height: "200",
    },
    {
      src: "gassy.jpg",
      height: "180",
    },
  ];
  return (
    <Box my='120px' px='40px' style={{ columns: "400px auto" }}>
      {masonItems.map((m) => (
        <Box
          mb='8px'
          key={m.src}
          bgColor='red'
          h={`${m.height}`}
          bgImage={`url(/assets/work_samples/${m.src})`}
          bgSize='cover'
          bgPos='top'
          bgRepeat='no-repeat'
          borderRadius='10px'
          overflow='hidden'
        />
      ))}
    </Box>
  );
}
