import type { Metadata } from "next";
import { Hind, Inter, Montserrat, Pontano_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const hind = Hind({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-hind",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Doros Doru - Webdesign & Webdevelopment",
  description:"Professional web designer and developer creating high-quality, responsive websites tailored to your needs. Explore my portfolio for web design, development, and SEO-friendly solutions to elevate your online presence. Let's build your dream website!",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html
      lang="en"
      className={` ${montserrat.variable} ${hind.className}  scroll-smooth`}
    >
      <body className={"leading-loose relative"}>
        <Navbar locale={locale} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
