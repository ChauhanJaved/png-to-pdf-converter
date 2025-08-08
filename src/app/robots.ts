import { portfolioItems } from "@/data/portfolio-items";
import { ProductIDs } from "@/data/website-data";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const portfolioItemDesktop = portfolioItems.find(
    (item) => item.id === ProductIDs.PNGtoPDFConverterDesktop,
  );
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${portfolioItemDesktop?.productWebsite}/sitemap.xml`,
  };
}
