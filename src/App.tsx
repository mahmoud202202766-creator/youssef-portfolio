import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";

function Placeholder({ id, title }: { id: string; title: string }) {
  return (
    <section id={id} className="flex min-h-screen items-center">
      <Container>
        <h2 className="text-3xl font-semibold">{title}</h2>
      </Container>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Placeholder id="contact" title="Contact" />
      </main>
      <Footer />
    </>
  );
}
