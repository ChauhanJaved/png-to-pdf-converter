//src/app/help/page.tsx

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
              <BreadcrumbPage>Software User Guide</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="container mx-auto px-5 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mt-10 lg:mt-16"
          caption="Software User Guide"
          element="h1"
          desc="Windows 11/10/8/7 | Fully Functional 15 Days Free Trial | Secure Download"
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
                galleryID="software-user-guide"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col">
            <h2 className="mt-10 font-semibold">Adding files:</h2>
            <p className="mt-2">
              Download Free PNG to PDF Converter and install it on your
              computer. A full version of the program is available for download.
              Run the application, you can see the above screen.
            </p>
            <p className="mt-2">
              Clicking the “Add Files” button will open the standard file browse
              and select window. From that window you can navigate to the folder
              and find the files you want to add to the list to be converted
              from.
            </p>
            <p className="mt-2">
              Alternatively, If you are using Windows Explorer to locate files,
              you have the convenience of being able to drag and drop files and
              folders into the list.
            </p>

            <p className="mt-2">
              This software application even allows you to select all files in a
              particular directory/folder by clicking the “Add Folder” button.
              It also supports sub-folders.
            </p>
            <p className="mt-2">
              By using “Move Up” and “Move Down” buttons you can rearrange the
              position of files in the list. If you want to remove any selected
              files from the list, you can click “Remove” button and if you want
              to clear all the files from the list, you can use “Remove All”
              button.
            </p>
            <div className="my-10 flex justify-center">
              <ProductImage
                src={productImages.PNGtoPDFConverterFilesSelected.imgName}
                width={productImages.PNGtoPDFConverterFilesSelected.width}
                height={productImages.PNGtoPDFConverterFilesSelected.height}
                alt={productImages.PNGtoPDFConverterFilesSelected.title}
                galleryID="software-user-guide-files-selected"
              />
            </div>
            <h2 className="mt-10 font-semibold">Modify Settings:</h2>
            <p className="mt-2">
              Output Folder: Browse output folder that you want or keep it
              default. You can also select “Save to same folder as original
              file”.
            </p>
            <p className="mt-2">
              If you want to view output files after conversion, select this
              option “Open output folder after conversion”
            </p>
            <p className="mt-2">
              Output Mode: If you want to convert PNG to PDF as it is, select
              &#34;Convert each PNG to PDF&#34;, if you want to merge all
              selected PNG into single PDF file, then select “Combine all PNG to
              PDF”.
            </p>

            <div className="my-10 flex justify-center">
              <ProductImage
                src={productImages.PNGtoPDFConverterSettings.imgName}
                width={productImages.PNGtoPDFConverterSettings.width}
                height={productImages.PNGtoPDFConverterSettings.height}
                alt={productImages.PNGtoPDFConverterSettings.title}
                galleryID="software-user-guide-settings"
              />
            </div>
            <h2 className="mt-10 font-semibold">Start Conversion:</h2>
            <p className="mt-2">
              After adding all your files and selecting your settings, you can
              now click “Convert” button to start conversion process. You will
              get your output in your selected location.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
