import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero/Hero";
import Works from "../components/Works/Works";
import getSupa from "../utils/apiSupa";

export default function Home() {
  const [supa, setSupa] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getSupa();
      console.log(res);
    })();
  }, []);
  return (
    <>
      <Hero />
      <Experience />
      <Works />
      <Contact />
    </>
  );
}
