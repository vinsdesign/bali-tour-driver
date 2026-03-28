import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site-content";
import { buildWhatsAppLink } from "@/lib/links";

export function ContactCtaSection() {
  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsappNumber,
    "Hello, I would like to book your Bali driver service.",
  );

  return (
    <section className="site-container py-14 lg:py-20">
      <Card className="rounded-[2rem] border-border/60 bg-card/70">
        <CardContent className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to book your Bali trip?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Contact directly via WhatsApp for airport transfer, private driver
              booking, or custom Bali tour.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Now
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              <a href={`tel:${siteConfig.phoneDisplay}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
