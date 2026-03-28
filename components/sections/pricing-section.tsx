import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import type { PricingItem } from "@/types/sanity";

type Props = {
  items: PricingItem[];
};

export function PricingSection({ items }: Props) {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">Pricing</h2>
        <p className="mt-2 text-muted-foreground">
          Simple pricing for common trips. Final price can depend on distance,
          duration, and destination.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item._id} className="rounded-2xl">
            <CardHeader>
              <CardTitle>{item.packageName}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">
                {formatPrice(item.price, item.currency ?? "IDR")}
                {item.unit ? (
                  <span className="ml-1 text-base font-normal text-muted-foreground">
                    {item.unit}
                  </span>
                ) : null}
              </div>

              {item.notes ? (
                <p className="text-sm text-muted-foreground">{item.notes}</p>
              ) : null}

              {item.includedItems?.length ? (
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.includedItems.map((included) => (
                    <li key={included} className="rounded-lg border px-3 py-2">
                      {included}
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
