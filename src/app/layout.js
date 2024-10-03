import "./globals.css";
import { MetaInformation } from "./constants";
import Header from "@/layouts/globalHeader";
import Footer from "@/layouts/globalFooter";

export const metadata = {
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
};

export const viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="container mx-auto flex min-h-screen flex-col justify-between bg-slate-900 text-slate-400">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
