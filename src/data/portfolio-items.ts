// src/data/portfolio-items.ts

// Internal imports
import { portfolioItem } from "@/data/website-data";
import { PNGtoPDFConverterWeb } from "./png-to-pdf-converter-web";
import { PNGtoPDFConverterDesktop } from "./png-to-pdf-converter-desktop";

export const portfolioItems: portfolioItem[] = [
  PNGtoPDFConverterDesktop,
  PNGtoPDFConverterWeb,
];
