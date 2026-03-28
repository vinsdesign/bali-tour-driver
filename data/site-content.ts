import {
  Briefcase,
  CarFront,
  Clock3,
  Luggage,
  MapPinned,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";

export const siteConfig = {
  name: "Made Surya",
  role: "Private Driver & Bali Tour Guide",
  description:
    "Comfortable, safe, and punctual service for airport transfer, Bali tours, and private trips across Bali.",
  phoneDisplay: "+62 812-3456-7890",
  whatsappNumber: "6281234567890",
  location: "Bali, Indonesia",
  experienceLabel: "8+ years experience",
};

export const heroStats = [
  { icon: Clock3, label: siteConfig.experienceLabel },
  { icon: ShieldCheck, label: "Safe & reliable" },
  { icon: MapPinned, label: "Based in Bali" },
];

export const services = [
  {
    icon: Plane,
    title: "Airport Transfer",
    description:
      "On-time airport pickup and drop-off with a clean and comfortable car.",
  },
  {
    icon: MapPinned,
    title: "Bali Tour",
    description:
      "Explore Ubud, Kintamani, Uluwatu, Tanah Lot, Bedugul, and many more destinations.",
  },
  {
    icon: Briefcase,
    title: "Private Trip",
    description:
      "Flexible route for couples, family travel, business, or custom daily trips.",
  },
];

export const vehicleFeatures = [
  { icon: CarFront, label: "Toyota Innova Reborn" },
  { icon: Users, label: "Up to 5–6 passengers" },
  { icon: Luggage, label: "Spacious luggage area" },
  { icon: ShieldCheck, label: "Clean, safe, and comfortable ride" },
];

export const pricing = [
  {
    title: "Airport Pickup / Drop",
    price: "Start from Rp250.000",
    note: "Price depends on destination area.",
  },
  {
    title: "Half Day Trip",
    price: "Start from Rp500.000",
    note: "Suitable for short 4–6 hour private travel.",
  },
  {
    title: "Full Day Tour",
    price: "Start from Rp700.000",
    note: "Best for a full-day Bali itinerary.",
  },
];

export const testimonials = [
  {
    name: "Sarah & Daniel",
    text: "Very friendly driver, on time, and the trip felt very comfortable.",
  },
  {
    name: "Michael",
    text: "Clean car, safe driving, and very flexible with our itinerary.",
  },
  {
    name: "Ayu Family",
    text: "Perfect for airport pickup and family travel around Bali.",
  },
];
