export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "linkedin" | "github" | "phone";
}
