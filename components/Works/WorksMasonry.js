import { Box } from "@chakra-ui/react";
import MasonryModal from "./MasonryModal";

export default function WorksMasonry() {
  const masonItems = [
    {
      src: "5minSkin.png",
      height: "300",
    },
    {
      src: "sleep_by_santi.jpg",
      height: "250",
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
      src: "realtakai.gif",
      height: "400",
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
      src: "lavish.jpg",
      height: "170",
    },
    {
      src: "sleep_steady.png",
      height: "400",
    },

    {
      src: "gassy.jpg",
      height: "220",
    },

    {
      src: "homi_towel.jpg",
      height: "300",
    },

    {
      src: "homi2.jpg",
      height: "400",
    },
    {
      src: "inlove.jpg",
      height: "340",
    },
    {
      src: "lavish_pokemon.jpg",
      height: "170",
    },
    {
      src: "paddie.png",
      height: "260",
    },
    {
      src: "peach_perfect.jpg",
      height: "290",
    },
    {
      src: "realtakai_feb.jpg",
      height: "130",
    },

    {
      src: "sleep_by_santi2.jpg",
      height: "400",
    },

    {
      src: "sleep_steady2.png",
      height: "240",
    },
    {
      src: "sugar_baby.jpg",
      height: "180",
    },
    {
      src: "sweet_dreams.jpg",
      height: "240",
    },
  ];
  return (
    <Box my='120px' px='40px' style={{ columns: "400px auto" }}>
      {masonItems.map((m) => (
        <MasonryModal height={m.height} src={m.src} key={m.src} />
      ))}
    </Box>
  );
}
