import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dhruv Deora — Creative Engineer",
  description:
    "FullStack Developer and UI/UX Designer, currently studying at NSUT. Focused on interfaces and experiences, working remotely from New Delhi, India.",
  generator: "Next.js",
  applicationName: "Dhruv Deora",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "India",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Dhruv Deora — Designer and Developer",
    description:
      "FullStack Developer and UI/UX Designer, currently studying at NSUT. Focused on interfaces and experiences, working remotely from New Delhi, India.",
    url: "https://dhruv-folio.vercel.app/",
    siteName: "https://dhruv-folio.vercel.app/",
    images: [
      {
        url: "https://raw.githubusercontent.com/dhruv-colosus/Dhruv-folio/main/public/titlescreen.png",
        width: 1200,
        height: 630,
        alt: "Dhruv Deora — Designer and Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
