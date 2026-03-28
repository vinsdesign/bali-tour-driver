export const driverProfileQuery = `
  *[_type == "driverProfile"][0]{
    _id,
    _type,
    fullName,
    headline,
    shortBio,
    yearsOfExperience,
    whatsappNumber,
    email,
    location,
    heroImage,
    vehicleName,
    vehicleCapacity,
    languages,
    features
  }
`;

export const servicesQuery = `
  *[_type == "service"] | order(order asc){
    _id,
    _type,
    title,
    slug,
    shortDescription,
    priceLabel,
    image,
    highlights,
    order
  }
`;

export const pricingQuery = `
  *[_type == "pricing"] | order(order asc){
    _id,
    _type,
    packageName,
    price,
    currency,
    unit,
    notes,
    includedItems,
    order
  }
`;

export const galleryQuery = `
  *[_type == "gallery"] | order(order asc){
    _id,
    _type,
    title,
    image,
    alt,
    category,
    cloudinaryPublicId,
    order
  }
`;

export const testimonialsQuery = `
  *[_type == "testimonial"] | order(order asc){
    _id,
    _type,
    customerName,
    country,
    message,
    rating,
    customerPhoto,
    order
  }
`;
