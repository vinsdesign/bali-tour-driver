import { Card, CardContent } from "@/components/ui/card";
import type { GalleryItem } from "@/types/sanity";

type Props = {
  items: GalleryItem[];
};

export function GallerySection({ items }: Props) {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">Gallery</h2>
        <p className="mt-2 text-muted-foreground">
          A quick look at the vehicle and Bali travel experience.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item._id} className="overflow-hidden rounded-2xl">
            <CardContent className="p-0">
              <div className="aspect-4/3 bg-muted" />
              <div className="p-4">
                <div className="font-medium">{item.title}</div>
                {item.category ? (
                  <div className="mt-1 text-sm text-muted-foreground">
                    {item.category}
                  </div>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
