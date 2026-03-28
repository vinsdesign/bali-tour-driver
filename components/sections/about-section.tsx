import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DriverProfile } from "@/types/sanity";

type Props = {
  profile: DriverProfile | null;
};

export function AboutSection({ profile }: Props) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">About</h2>
        <p className="mt-2 text-muted-foreground">
          Professional Bali driver service with local experience, comfort, and
          friendly hospitality.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              {profile?.shortBio ??
                "Experienced private driver in Bali for airport transfer, tours, and custom trips."}
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border p-4">
                <div className="text-sm text-muted-foreground">Experience</div>
                <div className="text-xl font-semibold">
                  {profile?.yearsOfExperience ?? 0}+ years
                </div>
              </div>

              <div className="rounded-xl border p-4">
                <div className="text-sm text-muted-foreground">Vehicle</div>
                <div className="text-xl font-semibold">
                  {profile?.vehicleName ?? "-"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Why Choose This Service</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              {(
                profile?.features ?? [
                  "Friendly and professional driver",
                  "Comfortable clean vehicle",
                  "Flexible custom itinerary",
                  "Airport and hotel pickup available",
                ]
              ).map((item) => (
                <li key={item} className="rounded-xl border p-3">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
