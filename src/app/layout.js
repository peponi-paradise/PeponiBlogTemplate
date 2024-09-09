import Favicon from "@/public/icons/favicon.ico";
import "./globals.css";
import Header from "@/layouts/globalHeader";
import Footer from "@/layouts/globalFooter";

export const metadata = {
  charset: "UTF-8",
  title: "Peponi",
  description: "Peponi's blog",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export const viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-slate-900 text-slate-400 container mx-auto min-h-screen flex flex-col justify-between">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
