import Navbar from "@/components/Navbar";
import HandBackdrop from "@/components/HandBackdrop";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Nosotros from "@/components/sections/Nosotros";
import Finale from "@/components/sections/Finale";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HandBackdrop />
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <StatsBar />
        <Services />
        <Process />
        <Nosotros />
        <Finale />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
