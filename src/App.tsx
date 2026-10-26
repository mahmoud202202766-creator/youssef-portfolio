import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";

export default function App() {
  return (
    <Container className="py-20">
      <SectionTitle label="Featured Projects" title="Some of My Recent Work" />
      <div className="mt-6 flex gap-3">
        <Button href="#projects">View My Work</Button>
        <Button variant="outline" href="/Youssef_CV.pdf" download>
          Download CV
        </Button>
      </div>
      <div className="mt-6 flex gap-2">
        <Tag>Python</Tag>
        <Tag>FastAPI</Tag>
      </div>
    </Container>
  );
}
