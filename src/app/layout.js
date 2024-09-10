import localFont from "next/font/local";
import "./globals.css";
import { MetaInformation } from "./constants";
import Header from "@/layouts/globalHeader";
import Footer from "@/layouts/globalFooter";
import { InitializeDatas } from "@/lib/postsParser";
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  charset: MetaInformation.charset,
  title: MetaInformation.title,
  description: MetaInformation.description,
  icons: MetaInformation.icons,
};

export const viewport = {
  initialScale: 1,
  width: "device-width",
};

export const pretendard = localFont({
  src: "../public/fonts/Pretendard.ttf",
});

export default function RootLayout({ children }) {
  InitializeDatas();

  return (
    <html lang="ko" className="dark bg-background">
      <body className={pretendard.className}>
        <NextUIProvider>
          <section className="text-slate-400 container mx-auto min-h-screen flex flex-col justify-between">
            <Header />
            {children}
            <Footer />
          </section>
        </NextUIProvider>
      </body>
    </html>
  );
}
