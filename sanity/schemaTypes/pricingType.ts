import { defineField, defineType } from "sanity";

export const pricingType = defineType({
  name: "pricing",
  title: "Pricing",
  type: "document",
  fields: [
    defineField({
      name: "packageName",
      title: "Package Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      initialValue: "IDR",
      options: {
        list: ["IDR", "USD"],
      },
    }),
    defineField({
      name: "unit",
      title: "Unit",
      type: "string",
      description: "Contoh: /trip, /day",
    }),
    defineField({
      name: "notes",
      title: "Notes",
      type: "text",
      rows: 3,
      description: "Contoh: Harga dapat berubah sesuai area dan durasi",
    }),
    defineField({
      name: "includedItems",
      title: "Included Items",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "packageName",
      subtitle: "unit",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle,
      };
    },
  },
});
