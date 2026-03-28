"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/data/site-content";

export function ServicesSection() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.from(".js-service-item", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={rootRef}
      className="site-container py-14 lg:py-20"
    >
      <SectionHeading
        eyebrow="Services"
        title="Travel service for different Bali trips"
        description="Flexible booking and comfortable transportation for solo travelers, couples, and families."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.title}
            className="js-service-item rounded-[1.75rem] border-border/60 bg-card/70 transition hover:-translate-y-1"
          >
            <CardContent className="p-6">
              <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
