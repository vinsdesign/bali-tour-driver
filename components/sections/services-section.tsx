import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ServiceItem } from "@/types/sanity";

type Props = {
  services: ServiceItem[];
};

export function ServicesSection({ services }: Props) {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">Services</h2>
        <p className="mt-2 text-muted-foreground">
          Choose the service that fits your travel plan in Bali.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Card key={service._id} className="rounded-2xl">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {service.shortDescription}
              </p>

              {service.priceLabel ? (
                <div className="text-sm font-medium">{service.priceLabel}</div>
              ) : null}

              {service.highlights?.length ? (
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.highlights.map((item) => (
                    <li key={item} className="rounded-lg border px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
