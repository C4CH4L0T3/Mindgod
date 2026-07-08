import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Leaks from "@/components/sections/Leaks";
import Offers from "@/components/sections/Offers";
import Method from "@/components/sections/Method";
import Fit from "@/components/sections/Fit";
import Nosotros from "@/components/sections/Nosotros";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import type { Lang } from "@/lib/copy";

/* Una sola página, dos idiomas: "/" (es) y "/en" montan este árbol. */
export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <>
      <Intro lang={lang} />
      <SmoothScroll />
      <main className="relative z-10">
        <ScrollProgress />
        <Navbar lang={lang} />
        <Hero lang={lang} />
        <Leaks lang={lang} />
        <Offers lang={lang} />
        <Method lang={lang} />
        <Fit lang={lang} />
        <Nosotros lang={lang} />
        <Testimonials />
        <Faq lang={lang} />
        <Contact lang={lang} />
        <Footer lang={lang} />
        <StickyCta lang={lang} />
      </main>
    </>
  );
}
