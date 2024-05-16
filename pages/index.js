import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero/Hero";
import Works from "../components/Works/Works";

import Results from "../components/Results";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Works />
      <Results />
      <Contact />
    </>
  );
}
