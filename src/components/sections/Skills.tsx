import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillGroups } from "@/data/skills";
import { getSkillIcon } from "@/lib/skillIcons";

export default function Skills() {
  return (
    <section id="skills" className="py-14 md:py-16">
      <Container>
        <SectionTitle label="My Skills" title="Technologies I Work With" />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-sm font-medium uppercase tracking-widest text-muted">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <SkillBadge icon={getSkillIcon(skill)}>{skill}</SkillBadge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
