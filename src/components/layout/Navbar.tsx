import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-semibold text-white">
          <span className="text-primary">&lt;/&gt;</span> Youssef
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                "text-sm transition-colors hover:text-white",
                active === id ? "text-white" : "text-muted",
              )}
            >
              {label}
            </a>
          ))}
          <Button href="#contact">Hire Me</Button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="text-white md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-bg md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm",
                  active === id ? "text-white" : "text-muted",
                )}
              >
                {label}
              </a>
            ))}
            <Button href="#contact" className="w-full">
              Hire Me
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
