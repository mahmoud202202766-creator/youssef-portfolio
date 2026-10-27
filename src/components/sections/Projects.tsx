import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border bg-surface/40 py-14 md:py-16"
    >
      <Container>
        <SectionTitle
          label="Featured Projects"
          title="Some of My Recent Work"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
