import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { VehicleSection } from "@/components/sections/vehicle-section";

export default function HomePage() {
  return (
    <main className=" bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.16),transparent_35%),radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.08),transparent_30%)]" />
      <SiteHeader />
      <HeroSection />
      <ServicesSection />
      <VehicleSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
