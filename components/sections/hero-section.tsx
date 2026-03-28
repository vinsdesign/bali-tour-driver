import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { DriverProfile } from "@/types/sanity";

type Props = {
  profile: DriverProfile | null;
};

export function HeroSection({ profile }: Props) {
  const whatsapp = profile?.whatsappNumber ?? "628123456789";

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
      <div className="space-y-6">
        <Badge variant="secondary">Private Driver & Bali Guide</Badge>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            {profile?.fullName ?? "Your Driver Name"}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            {profile?.headline ??
              "Comfortable airport transfer, Bali day tour, and custom private trips with Toyota Innova Reborn."}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Book on WhatsApp
            </a>
          </Button>

          <Button asChild size="lg" variant="outline">
            <a href="#services">See Services</a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {profile?.vehicleName ? <span>{profile.vehicleName}</span> : null}
          {profile?.vehicleCapacity ? (
            <span>• {profile.vehicleCapacity}</span>
          ) : null}
          {profile?.location ? <span>• {profile.location}</span> : null}
        </div>
      </div>

      <div>
        <div className="rounded-3xl border bg-muted p-6 shadow-sm">
          <div className="aspect-4/3 rounded-2xl bg-background" />
        </div>
      </div>
    </section>
  );
}
