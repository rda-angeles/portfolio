import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import TechStacks from "@/components/TechStacks";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Landing />
        <TechStacks />
        <Projects />
      </div>
    </section>
  );
}
