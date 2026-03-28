import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-content";
import { buildWhatsAppLink } from "@/lib/links";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsappNumber,
    "Hello, I would like to book your Bali driver service.",
  );

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-xl">
      <div className="site-container flex items-center justify-between py-4">
        <div>
          <div className="text-base font-semibold sm:text-lg">
            {siteConfig.name}
          </div>
          <div className="text-xs text-muted-foreground sm:text-sm">
            {siteConfig.role}
          </div>
        </div>

        <Button asChild className="rounded-full">
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            Book via WhatsApp
          </a>
        </Button>
      </div>
    </header>
  );
}
