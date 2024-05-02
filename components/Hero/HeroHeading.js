import { useState, useEffect, useMemo, useCallback } from "react";
import { Box } from "@chakra-ui/react";

const heroHeading = ["Hi", "there,", "it's", "Jel"];

export default function HeroHeading() {
  const [headingIdx, setHeadingIdx] = useState(0);

  const intervalFunction = useCallback(() => {
    setHeadingIdx((prev) => (prev >= heroHeading.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(intervalFunction, 800);
    return () => clearInterval(interval);
  }, [intervalFunction]);

  const memoizedHeroHeading = useMemo(() => heroHeading, []);

  return (
    <>
      {memoizedHeroHeading.map((w, i) => (
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
