import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { pricing } from "@/data/site-content";

export function PricingSection() {
  return (
    <section className="site-container py-14 lg:py-20">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple pricing guidance"
        description="The final price can depend on destination, trip duration, and your custom route."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {pricing.map((item) => (
          <Card
            key={item.title}
            className="rounded-[1.75rem] border-border/60 bg-card/70"
          >
            <CardContent className="p-6">
              <div className="text-lg font-semibold">{item.title}</div>
              <div className="mt-4 text-2xl font-bold text-primary">
                {item.price}
              </div>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {item.note}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
