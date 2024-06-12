import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 custom-scrollbar">
      <div className="max-w-7xl w-full    ">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Clients />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
