// src/app/how-to-merge-png-to-pdf/page.tsx

// External imports
import { Download, Slash } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

// Internal imports
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/section-header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HeaderNavItems, ProductIDs, productImages } from "@/data/website-data";
import BreadcrumbNextLink from "@/components/breadcrumb-next-link";
import { capitalizeWords } from "@/lib/utils";
import { portfolioItems } from "@/data/portfolio-items";
import ProductImage from "@/components/product-image";

const portfolioItemDesktop = portfolioItems.find(
  (item) => item.id === ProductIDs.PNGtoPDFConverterDesktop,
);
const portfolioItemWeb = portfolioItems.find(
  (item) => item.id === ProductIDs.PNGtoPDFConverterWeb,
);
export const metadata: Metadata = portfolioItemDesktop?.metaData ?? {};

export default function Page() {
  return (
    <>
      <div className="px-5 pt-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbNextLink
                linkName={capitalizeWords(HeaderNavItems.Home)}
                hrefActiveSection={`/#${HeaderNavItems.Home}`}
                headerActiveSection={HeaderNavItems.Home}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Combine PNG into PDF</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="container mx-auto px-5 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mt-10 lg:mt-16"
          caption="Combine PNG into PDF"
          element="h1"
          desc="Windows 11/10/8/7 | Fully Functional - No Limits - 15 Days Free | Safe & Secure Download"
        />
        <div className="flex flex-col items-center">
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 rounded-md border p-10">
            {/* ----- Box-1 ----- */}
            {portfolioItemDesktop?.downloadLink && (
              <Button asChild className="text-base">
                <Link
                  className="flex flex-row items-center justify-center gap-3"
                  href={portfolioItemDesktop.downloadLink}
                >
                  <Download />
                  <span> Download Now</span>
                </Link>
              </Button>
            )}
            {/* ----- Box-2 ----- */}
            {portfolioItemWeb?.productWebsite && (
              <Button asChild variant={"link"}>
                <Link
                  href={portfolioItemWeb.productWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Online {portfolioItemWeb.title}{" "}
                </Link>
              </Button>
            )}
            {/* ----- Box-3 ----- */}
            <div className="mt-10 flex w-full flex-col items-center">
              <ProductImage
                src={productImages.PNGtoPDFConverterDesktop.imgName}
                width={productImages.PNGtoPDFConverterDesktop.width}
                height={productImages.PNGtoPDFConverterDesktop.height}
                alt={productImages.PNGtoPDFConverterDesktop.title}
                galleryID="PNGtoPDFConverterDesktop"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col">
            <h2 className="mt-10 font-semibold">
              How to Combine PNG images to PDF in Windows 11/10/8/7?
            </h2>
            <p className="mt-2">
              PNG is a lossless compressed format, which makes it good for both
              photographs and text files. A PNG will normally be larger than a
              JPEG, and sometimes smaller than a TIFF. It was originally
              developed to replace the GIF, but the formats are drastically
              different, and both have a place in today’s computer world. PNG
              supports more colors than GIF images as well as better
              transparency. It is a useful format for line graphics and
              wordmarks as the lines and text will show up crisply and neatly in
              the output image. PNG’s benefits are compress images without
              losing quality and suitable for text documents. Disadvantages are
              larger file size than JPEGs and not suitable for professional
              quality print graphics. Sometimes you want to combine PNG images
              into PDF (Portable Document Format) format suitable for sharing
              and can be viewed in a professional software program or a free
              acrobat reader.
            </p>
            <p className="mt-2">
              If you have thousands of PNG images and they need to be merge into
              Adobe PDF documents, choose our converter program that
              accommodates batch process — that’ll save both your time and your
              clicking finger.
            </p>
            <p className="mt-2">
              Download Free PNG to PDF Converter and install it on your
              computer. A full version of the program is available for download.
              Run the desktop application, you can see the above screen.
            </p>
            <p className="mt-2">
              Click on “Add Files” to add PNG files into the conversion list.
              You can also drag and drop files and folders from the Windows
              Explorer.
            </p>

            <div className="my-10 flex justify-center">
              <ProductImage
                src={productImages.PNGtoPDFConverterFilesSelected.imgName}
                width={productImages.PNGtoPDFConverterFilesSelected.width}
                height={productImages.PNGtoPDFConverterFilesSelected.height}
                alt={productImages.PNGtoPDFConverterFilesSelected.title}
                galleryID="PNGtoPDFConverterFilesSelected"
              />
            </div>
            <p className="mt-10">
              After selecting PNG files for merging, select Output Mode
              &#34;Combine all PNG to PDF&#34; from settings screen.
            </p>
            <div className="my-10 flex justify-center">
              <ProductImage
                src={productImages.PNGtoPDFConverterSettings.imgName}
                width={productImages.PNGtoPDFConverterSettings.width}
                height={productImages.PNGtoPDFConverterSettings.height}
                alt={productImages.PNGtoPDFConverterSettings.title}
                galleryID="PNGtoPDFConverterSettings"
              />
            </div>
            <p className="mt-10">
              Now to combine PNG to PDF, click on &#34;Convert&#34; button to
              begin the batch conversion process. All of the generated PDF will
              appear in a separate output folder.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
