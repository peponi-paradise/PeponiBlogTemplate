import Footer from "@/layouts/globalFooter";
import Header from "@/layouts/globalHeader";

import { MetaInformation } from "./constants";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(MetaInformation.baseUrl),
  charset: MetaInformation.charset,
  authors: [{ name: MetaInformation.author }],
  title: MetaInformation.title,
  description: MetaInformation.description,
  icons: MetaInformation.icons,
  openGraph: {
    title: MetaInformation.title,
    description: MetaInformation.description,
    url: MetaInformation.baseUrl,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({ children }) {
  return (
    <html lang={MetaInformation.language} className="scroll-smooth">
      <head>{/* Add custom scripts, metadata */}</head>
      <body className="container flex flex-col justify-between min-h-screen mx-auto bg-slate-900 text-slate-400">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
