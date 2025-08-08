import { Metadata } from "next";
import { ReactNode } from "react";

export const headerCompanyName: string = "FrameworkTeam";
export const companyName: string = "FrameworkTeam Softwares";
export const email: string = "support@frameworkteam.com";
export const copyrightYear: string = new Date().getFullYear().toString();

export enum HeaderNavItems {
  Home = "home",
  Pricing = "purchase",
  Contact = "contact",
}
export const headerNavItems: string[] = [
  HeaderNavItems.Home,
  HeaderNavItems.Pricing,
  HeaderNavItems.Contact,
];

export const productImages = {
  PNGtoPDFConverterWeb: {
    title: "PNG to PDF Converter Online",
    imgName: `/${headerCompanyName.toLowerCase()}/${"png-to-pdf-converter-web-icon".toLowerCase()}`,
    width: 1024,
    height: 1024,
  },
  PNGtoPDFConverterDesktop: {
    title: "PNG to PDF Converter",
    imgName: `/${headerCompanyName.toLowerCase()}/${"png-to-pdf-converter".toLowerCase()}`,
    width: 756,
    height: 463,
  },
  PNGtoPDFConverterSettings: {
    title: "PNG to PDF Converter Settings",
    imgName: `/${headerCompanyName.toLowerCase()}/${"png-to-pdf-converter-settings".toLowerCase()}`,
    width: 756,
    height: 463,
  },

  PNGtoPDFConverterFilesSelected: {
    title: "PNG to PDF Converter Files Selected",
    imgName: `/${headerCompanyName.toLowerCase()}/${"png-to-pdf-converter-files-selected".toLowerCase()}`,
    width: 756,
    height: 463,
  },
};
export enum Categories {
  All = "All",
  WebApp = "Web App",
  DesktopApp = "Desktop App",
  Converter = "Converter",
  Splitter = "Splitter",
  Merger = "Merger",
}
export const categoryList: string[] = [
  Categories.All,
  Categories.WebApp,
  Categories.DesktopApp,
  Categories.Converter,
  Categories.Splitter,
  Categories.Merger,
];
export const licenseOptions = [
  {
    licenseType: "ONE Computer License",
    price: "$24.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/png-to-pdf-converter-one-computer-license",
  },
  {
    licenseType: "TWO Computers License",
    price: "$39.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/png-to-pdf-converter-two-computers-license",
  },
  {
    licenseType: "THREE Computers License",
    price: "$44.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/png-to-pdf-converter-three-computers-license",
  },
  {
    licenseType: "FIVE Computers License",
    price: "$64.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/png-to-pdf-converter-five-computers-license",
  },
  {
    licenseType: "TEN Computers License",
    price: "$109.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/png-to-pdf-converter-ten-computers-license",
  },
  {
    licenseType: "UNLIMITED Computers License",
    price: "$224.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/png-to-pdf-converter-unlimited-computers-license",
  },
];
export enum ProductIDs {
  PNGtoPDFConverterWeb = "png-to-pdf-converter",
  PNGtoPDFConverterDesktop = "png-to-pdf-converter-desktop",
}
export const productTitles = {
  PNGtoPDFConverterWeb: "PNG to PDF Converter",
  PNGtoPDFConverterDesktop: "PNG to PDF Converter",
} as const;
export type ProductTitles = (typeof productTitles)[keyof typeof productTitles];

export const productSubTitles = {
  PNGtoPDFConverterWeb:
    "Online Tool to Convert & Merge PNG to PDF – Secure & Private, Your Files Never Leave Your Device",
  PNGtoPDFConverterDesktop:
    "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
} as const;
export type ProductSubTitles =
  (typeof productSubTitles)[keyof typeof productSubTitles];

export const productWebsites = {
  PNGtoPDFConverterWeb: "https://www.pdf-tiff-tools.com/png-to-pdf-converter",
  PNGtoPDFConverterDesktop: "https://www.png-to-pdf-converter.com",
} as const;
export type ProductWebsite =
  (typeof productWebsites)[keyof typeof productWebsites];

export const productDownloadLinks = {
  PNGtoPDFConverter:
    "https://png-to-pdf-converter.com/downloads/png-to-pdf-converter-setup.exe",
} as const;
export type ProductDownloadLinks =
  (typeof productDownloadLinks)[keyof typeof productDownloadLinks];
export interface portfolioItem {
  id: ProductIDs;
  title: ProductTitles;
  subtitle: ProductSubTitles;
  src: string;
  width: number;
  height: number;
  categories: Categories[];
  pageLink: string;
  productWebsite: ProductWebsite;
  downloadLink?: ProductDownloadLinks;
  features: string[];
  description?: ReactNode;
  metaData: Metadata;
}
