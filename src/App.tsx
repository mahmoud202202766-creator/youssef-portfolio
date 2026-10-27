import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

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
        <Placeholder id="home" title="Hero" />
        <Placeholder id="about" title="About" />
        <Placeholder id="skills" title="Skills" />
        <Placeholder id="projects" title="Projects" />
        <Placeholder id="contact" title="Contact" />
      </main>
      <Footer />
    </>
  );
}
