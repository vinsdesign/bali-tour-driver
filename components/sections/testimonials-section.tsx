import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { testimonials } from "@/data/site-content";

export function TestimonialsSection() {
  return (
    <section className="site-container py-14 lg:py-20">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by guests and travelers"
        description="Simple social proof to make the website feel more personal and convincing."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <Card
            key={item.name}
            className="rounded-[1.75rem] border-border/60 bg-card/70"
          >
            <CardContent className="p-6">
              <p className="text-sm leading-7 text-muted-foreground">
                “{item.text}”
              </p>
              <div className="mt-5 text-sm font-semibold">{item.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
