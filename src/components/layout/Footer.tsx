import Container from "@/components/layout/Container";
import { about } from "@/data/about";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-2 text-sm text-muted md:flex-row">
        <p>
          © {new Date().getFullYear()} {about.name}. All rights reserved.
        </p>
        <p>Built with React &amp; Tailwind CSS</p>
      </Container>
    </footer>
  );
}
