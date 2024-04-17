import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

const heroHeading = ["Hi", "there", "it's", "Jel"];
export default function HeroHeading() {
  const [headingIdx, setHeadingIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadingIdx((prev) => (prev >= heroHeading.length - 1 ? 0 : prev + 1));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {heroHeading.map((w, i) => (
        <Box
          key={w}
          as='span'
          color={i === headingIdx ? "orangered" : ""}
          transition='color .2s'
        >
          {w}{" "}
        </Box>
      ))}
    </>
  );
}
