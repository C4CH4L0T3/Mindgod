import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Leaks from "@/components/sections/Leaks";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Nosotros from "@/components/sections/Nosotros";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import type { Lang } from "@/lib/copy";

/* Una sola página, dos idiomas: "/" (es) y "/en" montan este árbol. */
export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <>
      <Intro lang={lang} />
      <main className="relative z-10">
        <Navbar lang={lang} />
        <Hero lang={lang} />
        <Leaks lang={lang} />
        <Services />
        <Process />
        <Nosotros />
        <Testimonials />
        <Contact />
        <Footer lang={lang} />
      </main>
    </>
  );
}
