//External Imports
import { Metadata } from "next";
//Internal Imports
import Contact from "@/components/contact";
import Pricing from "@/components/pricing";
import { portfolioItems } from "@/data/portfolio-items";
import Hero from "@/components/hero";
import { ProductIDs } from "@/data/website-data";

const portfolioItemDesktop = portfolioItems.find(
  (item) => item.id === ProductIDs.PNGtoPDFConverterDesktop,
);

export const metadata: Metadata = portfolioItemDesktop?.metaData ?? {};
export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
