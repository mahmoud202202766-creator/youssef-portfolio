import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, date, description, tech, image, github, demo } = project;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary">
      {/* Image or placeholder */}
      <div className="relative aspect-video border-b border-border bg-bg">
        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            width={1280}
            height={720}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary/20 to-bg">
            <span className="text-5xl font-semibold text-primary/40">
              {number}
            </span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-md border border-border bg-bg/80 px-2 py-0.5 text-xs text-muted backdrop-blur">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-widest text-muted">{date}</p>
        <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <li key={item}>
              <Tag>{item}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-5 pt-1 text-sm">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white transition-colors hover:text-primary"
            >
              <SiGithub size={16} /> Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-white transition-colors hover:text-primary"
            >
              Live Demo <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
