import Bio from "@/components/Bio";
import Landing from "@/components/Landing";
import Life from "@/components/Life";
import Projects from "@/components/Projects";
import TechStacks from "@/components/TechStacks";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Landing />
        <Bio />
        <TechStacks />
        <Projects />
        <Life />
      </div>
    </section>
  );
}
