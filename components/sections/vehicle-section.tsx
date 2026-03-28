import { Card, CardContent } from "@/components/ui/card";
import { vehicleFeatures } from "@/data/site-content";

export function VehicleSection() {
  return (
    <section className="site-container py-14 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Card className="rounded-[2rem] border-border/60 bg-card/70">
          <CardContent className="p-6 sm:p-8">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Vehicle & comfort
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Clean car, comfortable seats, and ready for your Bali journey
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Perfect for airport pickup, day tours, and private travel with a
              reliable car setup.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          {vehicleFeatures.map((feature) => (
            <Card
              key={feature.label}
              className="rounded-[1.5rem] border-border/60 bg-card/70"
            >
              <CardContent className="flex items-start gap-3 p-5">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <feature.icon className="h-4 w-4" />
                </div>
                <div className="text-sm leading-7">{feature.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
