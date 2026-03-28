import { siteConfig } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="site-container py-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name} — Private Driver & Bali
        Tour Guide
      </div>
    </footer>
  );
}
