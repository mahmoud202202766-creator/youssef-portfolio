import { ArrowUpRight, Download } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiFastapi,
  SiPytorch,
  SiOpencv,
  SiDocker,
  SiGit,
} from "react-icons/si";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { about } from "@/data/about";
import profile from "@/assets/images/profile.webp";

const techIcons: { name: string; Icon: IconType }[] = [
  { name: "Python", Icon: SiPython },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "OpenCV", Icon: SiOpencv },
  { name: "Docker", Icon: SiDocker },
  { name: "Git", Icon: SiGit },
];

export default function Hero() {
  const firstName = about.name.split(" ")[0];

  return (
    <section id="home" className="pb-20 pt-32 md:pb-28 md:pt-40">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        {/* Text */}
        <div className="order-2 md:order-1">
          <span className="inline-block rounded-md border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            {about.role}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Hi, I’m <span className="text-primary">{firstName}</span>
            <br />
            {about.headline}
          </h1>

          <p className="mt-5 max-w-md text-muted">{about.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">
              View My Work <ArrowUpRight size={16} />
            </Button>
            <Button variant="outline" href="/Youssef_CV.pdf" download>
              Download CV <Download size={16} />
            </Button>
          </div>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted">
              Technologies I work with
            </p>
            <ul className="mt-4 flex flex-wrap gap-5 text-2xl text-muted">
              {techIcons.map(({ name, Icon }) => (
                <li key={name} title={name}>
                  <Icon aria-label={name} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Photo */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-primary/30 blur-3xl" />
            <img
              src={profile}
              alt={about.name}
              width={800}
              height={1067}
              className="aspect-square w-60 rounded-full border border-border object-cover object-top md:w-80"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
