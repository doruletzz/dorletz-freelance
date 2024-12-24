import type { Metadata } from "next";
import { Hind, Inter, Montserrat, Pontano_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

import { PHProvider } from "../../provider/posthog";
import dynamic from "next/dynamic";
import { useReducer } from "react";
import { appReducer } from "@/provider/app/reducer";
import { initialAppState } from "@/provider/app/state";
import { AppContext } from "@/provider/app/context";
import AppProvider from "@/provider/app";

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
  title: "Doros Doru - Web Design & Web Development",
  description:
    "Professional web designer and developer creating high-quality, responsive websites tailored to your needs. Explore my portfolio for web design, development, and SEO-friendly solutions to elevate your online presence. Let's build your dream website!",
};

const PostHogPageView = dynamic(
  () => import("../../components/PostHogPageViewComponent"),
  {
    ssr: false,
  }
);

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
      <PHProvider>
        <AppProvider>
          <body className={"leading-loose relative"}>
            <Navbar locale={locale} />
            {children}
            <Footer />
          </body>
        </AppProvider>
      </PHProvider>
    </html>
  );
}
