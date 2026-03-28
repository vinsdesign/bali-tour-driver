export type SanityImage = {
  asset?: {
    _ref?: string;
    _type?: "reference";
    url?: string;
  };
};

export type DriverProfile = {
  _id: string;
  _type: "driverProfile";
  fullName: string;
  headline: string;
  shortBio?: string;
  yearsOfExperience?: number;
  whatsappNumber: string;
  email?: string;
  location?: string;
  heroImage?: SanityImage;
  vehicleName?: string;
  vehicleCapacity?: string;
  languages?: string[];
  features?: string[];
};

export type ServiceItem = {
  _id: string;
  _type: "service";
  title: string;
  slug: {
    current: string;
  };
  shortDescription?: string;
  priceLabel?: string;
  image?: SanityImage;
  highlights?: string[];
  order?: number;
};

export type PricingItem = {
  _id: string;
  _type: "pricing";
  packageName: string;
  price: number;
  currency?: "IDR" | "USD";
  unit?: string;
  notes?: string;
  includedItems?: string[];
  order?: number;
};

export type GalleryItem = {
  _id: string;
  _type: "gallery";
  title: string;
  image: SanityImage;
  alt: string;
  category?: "car" | "tour" | "customer" | "destination";
  cloudinaryPublicId?: string;
  order?: number;
};

export type TestimonialItem = {
  _id: string;
  _type: "testimonial";
  customerName: string;
  country?: string;
  message: string;
  rating?: number;
  customerPhoto?: SanityImage;
  order?: number;
};
