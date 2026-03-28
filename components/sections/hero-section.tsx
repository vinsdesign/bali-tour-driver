"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  MessageCircle,
  ChevronRight,
  CarFront,
  Users,
  Luggage,
} from "lucide-react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig, heroStats } from "@/data/site-content";
import { buildWhatsAppLink } from "@/lib/links";

export function HeroSection() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.from(".js-hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".js-hero-title", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(".js-hero-copy", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".js-hero-actions", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".js-hero-card", {
        x: 40,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsappNumber,
    "Hello, I would like to book your Bali driver service.",
  );

  return (
    <section
      ref={rootRef}
      className="site-container grid gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-10"
    >
      <div>
        <div className="js-hero-badge inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Trusted Bali Driver Service
        </div>

        <h1 className="js-hero-title mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Explore Bali with a reliable private driver
        </h1>

        <p className="js-hero-copy mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          {siteConfig.description} Ideal for airport pickup, family trips, and
          custom Bali tours.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild size="lg" className="js-hero-actions rounded-full">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="js-hero-actions rounded-full"
          >
            <a href="#services">
              View Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {heroStats.map((item) => (
            <Card key={item.label} className="border-border/60 bg-card/70">
              <CardContent className="p-4">
                <item.icon className="h-5 w-5 text-primary" />
                <div className="mt-3 text-sm font-medium">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="js-hero-card overflow-hidden rounded-[2rem] border-border/60 bg-card/70 shadow-2xl">
        <div className="relative h-90 w-full sm:h-105 lg:h-130">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
            alt="Bali private driver service"
            fill
            priority
            className="object-cover"
          />
        </div>

        <CardContent className="grid gap-4 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-lg font-semibold">Toyota Innova Reborn</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Comfortable ride for airport transfer, tours, and private trips.
              </p>
            </div>
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <CarFront className="h-5 w-5" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl border bg-background/70 p-4">
              <Users className="mb-2 h-4 w-4 text-primary" />
              Up to 5–6 passengers
            </div>
            <div className="rounded-2xl border bg-background/70 p-4">
              <Luggage className="mb-2 h-4 w-4 text-primary" />
              Spacious luggage area
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
