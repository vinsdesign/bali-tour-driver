import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TestimonialItem } from "@/types/sanity";

type Props = {
  items: TestimonialItem[];
};

export function TestimonialsSection({ items }: Props) {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">Testimonials</h2>
        <p className="mt-2 text-muted-foreground">
          What guests say about the service.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item._id} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">{item.customerName}</CardTitle>
              <div className="text-sm text-muted-foreground">
                {item.country ?? "Guest"}
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="text-muted-foreground">“{item.message}”</p>
              <div className="text-sm font-medium">
                Rating: {item.rating ?? 5}/5
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
