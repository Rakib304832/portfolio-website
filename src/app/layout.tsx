import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { siteConfig } from "@/content/site";
import { getSiteUrl } from "@/lib/utils";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = getSiteUrl();
const description = `${siteConfig.name} is a ${siteConfig.designation.toLowerCase()} in ${siteConfig.location}, building complete web applications with React, Next.js, Node.js, and MongoDB.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.designation}`,
    template: `%s — ${siteConfig.name}`,
  },
  description,
  keywords: [
    "Rakib",
    "Rakib Hassan",
    "full stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "MongoDB",
    "TypeScript",
    "portfolio",
    "Dinajpur",
    "Bangladesh",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${siteConfig.name} — Portfolio`,
    title: `${siteConfig.name} — ${siteConfig.designation}`,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}, ${siteConfig.designation}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.designation}`,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: "Rakib Hassan",
  jobTitle: siteConfig.designation,
  description: siteConfig.tagline,
  url: siteUrl,
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dinajpur",
    addressRegion: "Rangpur",
    addressCountry: "BD",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Rangpur Polytechnic Institute",
  },
  sameAs: siteConfig.socials.map((social) => social.href),
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Better Auth",
    "REST APIs",
    "Web performance",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body
        id="top"
        className="min-h-dvh bg-background font-sans text-foreground antialiased"
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#03211c]"
        >
          Skip to content
        </a>

        <ScrollProgress />
        <Navbar />

        <main id="main" cz-shortcut-listen="true">{children}</main>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
