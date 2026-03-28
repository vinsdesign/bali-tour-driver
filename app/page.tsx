import { Footer } from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/Navbar";
import { AboutSection } from "@/components/sections/about-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import {
  driverProfileQuery,
  galleryQuery,
  pricingQuery,
  servicesQuery,
  testimonialsQuery,
} from "@/lib/queries";
import { sanityClient } from "@/lib/sanity.client";
import type {
  DriverProfile,
  GalleryItem,
  PricingItem,
  ServiceItem,
  TestimonialItem,
} from "@/types/sanity";

export default async function HomePage() {
  const [profile, services, pricing, gallery, testimonials] = await Promise.all(
    [
      sanityClient.fetch<DriverProfile | null>(driverProfileQuery),
      sanityClient.fetch<ServiceItem[]>(servicesQuery),
      sanityClient.fetch<PricingItem[]>(pricingQuery),
      sanityClient.fetch<GalleryItem[]>(galleryQuery),
      sanityClient.fetch<TestimonialItem[]>(testimonialsQuery),
    ],
  );

  return (
    <>
      <Navbar />
      <main>
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <ServicesSection services={services} />
        <PricingSection items={pricing} />
        <GallerySection items={gallery} />
        <TestimonialsSection items={testimonials} />
      </main>
      <Footer />
    </>
  );
}
