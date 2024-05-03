import { Box, Image, useMediaQuery } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

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
      direction='up'
      style={{
        transform: "rotate(285deg) scaleX(1.2)",
        overflow: "hidden",
        position: isMedium ? "" : "absolute",
        zIndex: isMedium ? 1 : -1,
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
          borderRadius='15px'
          overflow='hidden'
        >
          <Image alt={pic} src={`/assets/work_samples/${pic}`} />
        </Box>
      ))}
    </Marquee>
  );
}
