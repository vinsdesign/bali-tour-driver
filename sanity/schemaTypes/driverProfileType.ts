import { defineField, defineType } from "sanity";

export const driverProfileType = defineType({
  name: "driverProfile",
  title: "Driver Profile",
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "Contoh: Private Driver & Bali Guide",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "yearsOfExperience",
      title: "Years of Experience",
      type: "number",
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description: "Gunakan format internasional, contoh 628123456789",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Contoh: Denpasar, Bali",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "vehicleName",
      title: "Vehicle Name",
      type: "string",
      description: "Contoh: Toyota Innova Reborn",
    }),
    defineField({
      name: "vehicleCapacity",
      title: "Vehicle Capacity",
      type: "string",
      description: "Contoh: Up to 6 passengers",
    }),
    defineField({
      name: "languages",
      title: "Languages",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "features",
      title: "Driver Features",
      type: "array",
      of: [{ type: "string" }],
      description: "Contoh: Friendly, On Time, Local Expert",
    }),
  ],
  preview: {
    select: {
      title: "fullName",
      subtitle: "headline",
      media: "heroImage",
    },
  },
});
