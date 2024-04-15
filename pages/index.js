import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Results from "../components/Results";
import Works from "../components/Works";
import WordCloud from "../components/WordCloud";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <WordCloud />
      <Works />
      <Results />
    </>
  );
}
