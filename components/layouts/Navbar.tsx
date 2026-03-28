import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Bali Private Driver
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            About
          </a>
          <a
            href="#services"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Pricing
          </a>
          <a
            href="#gallery"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Gallery
          </a>
          <a
            href="#testimonials"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Testimonials
          </a>
        </nav>

        <Button asChild>
          <a href="https://wa.me/628123456789" target="_blank" rel="noreferrer">
            Book via WhatsApp
          </a>
        </Button>
      </div>
    </header>
  );
}
