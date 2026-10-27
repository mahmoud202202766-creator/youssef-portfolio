import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { contactLinks } from "@/data/contact";

const icons = {
  mail: Mail,
  linkedin: FaLinkedinIn,
  github: FaGithub,
  phone: Phone,
};

export default function Contact() {
  return (
    <section id="contact" className="py-14 md:py-16">
      <Container>
        <SectionTitle
          label="Let's Work Together"
          title="Have a project in mind?"
        />
        <p className="mt-4 max-w-xl text-muted">
          I'm open to new opportunities and interesting projects. Reach out
          through any of the channels below.
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map(({ label, value, href, icon }) => {
            const Icon = icons[icon];
            const external = href.startsWith("http");
            return (
              <li key={label}>
                <a
                  href={href}
                  {...(external && { target: "_blank", rel: "noreferrer" })}
                  className="flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon size={18} />
                  </span>
                  <span className="mt-4 text-xs uppercase tracking-widest text-muted">
                    {label}
                  </span>
                  <span className="mt-1 break-all text-sm text-white">
                    {value}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-8">
          <Button href="mailto:Youssef.Mohamed4994@gmail.com">
            Get in Touch
          </Button>
        </div>
      </Container>
    </section>
  );
}
