import Header from "@/components/layouts/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-frame border-x border-line">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
