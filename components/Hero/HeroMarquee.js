import {Box, useMediaQuery} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function HeroMarquee() {
  const featuredImages = [
    "buzzbud.jpg",
    "bezeli_march.jpg",
    "sugar_baby.jpg",
    "realtakai_feb.jpg",
    "bezeli.jpg",
    "sleep_by_santi.jpg",
    "homi2.jpg",
  ];

  const [isMedium] = useMediaQuery("(min-width: 768px)");
  return (
    <Marquee
      direction={isMedium ? "up" : "right"}
      style={{
        transform: isMedium ? "rotate(285deg) scale(2)" : "scale(1)",
        overflow: "hidden",
      }}
      speed={150}
    >
      {featuredImages.map((pic) => (
        <Box
          key={pic}
          mx='80px'
          my='16px'
          h='420px'
          w='320px'
          borderRadius={{ md: "15px", base: "0" }}
          overflow='hidden'
        >
          <Image
            width={420}
            height={420}
            alt={pic}
            src={`/${pic}`}
          />
        </Box>
      ))}
    </Marquee>
  );
}

// https://eoaewyjlaebxhoeszleb.supabase.co/storage/v1/object/public/samples/5minSkin.jpg
