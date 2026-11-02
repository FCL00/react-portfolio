import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://fernando.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fernando Lagahit | Full-Stack Developer",
    template: "%s | Fernando Lagahit",
  },

  description:
    "Fernando Lagahit is a full-stack developer based in Manila, Philippines, building web applications with modern JavaScript technologies.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Fernando Lagahit | Full-Stack Developer",
    description:
      "Explore Fernando Lagahit's portfolio, web development projects, and technical skills.",
    siteName: "Fernando Lagahit Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Fernando Lagahit — Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fernando Lagahit | Full-Stack Developer",
    description: "Explore my portfolio and selected web development projects.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
