import { GraduationCap, Award, Cpu, Languages } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { about } from "@/data/about";

const icons = {
  education: GraduationCap,
  gpa: Award,
  focus: Cpu,
  languages: Languages,
};

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-surface/40 py-14 md:py-16"
    >
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <SectionTitle
            label="About Me"
            title="Passionate about building smart solutions"
          />
          <p className="mt-6 leading-relaxed text-muted">{about.bio}</p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {about.highlights.map(({ icon, label, value, detail }) => {
            const Icon = icons[icon];
            return (
              <li
                key={label}
                className="rounded-xl border border-border bg-bg p-5 transition-colors hover:border-primary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon size={20} />
                </span>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted">
                  {label}
                </p>
                <p className="mt-1 font-medium text-white">{value}</p>
                <p className="mt-1 text-sm text-muted">{detail}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
