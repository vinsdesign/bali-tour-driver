import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";

import { driverProfileType } from "@/sanity/schemaTypes/driverProfileType";
import { serviceType } from "@/sanity/schemaTypes/serviceType";
import { pricingType } from "@/sanity/schemaTypes/pricingType";
import { galleryType } from "@/sanity/schemaTypes/galleryType";
import { testimonialType } from "@/sanity/schemaTypes/testimonialType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType],
};

export const schemaTypes = [
  driverProfileType,
  serviceType,
  pricingType,
  galleryType,
  testimonialType,
];
