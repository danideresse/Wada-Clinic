import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { siteConfig } from "@/data/site-config";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingMobileCTA } from "@/components/layout/floating-cta";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline} – Adama, Ethiopia`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Wada Hospital",
    "Wada Clinic",
    "Wada Hospital Adama",
    "Hospital in Adama",
    "Adama Medical College Hospital",
    "Neurology Adama",
    "Oncology Adama",
    "Surgery Adama",
    "Emergency Care Ethiopia",
  ],
  authors: [{ name: "Wada Hospital Medical Administration" }],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Wada Hospital Modern Facility – Adama, Ethiopia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2E8DBB" },
    { media: "(prefers-color-scheme: dark)", color: "#001724" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: siteConfig.name,
    alternateName: "Wada Hospital Adama",
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.landmark,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    medicalSpecialty: [
      "https://schema.org/Emergency",
      "https://schema.org/Surgical",
      "https://schema.org/Neurologic",
      "https://schema.org/Oncologic",
      "https://schema.org/Pediatric",
      "https://schema.org/Gynecologic",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${openSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans text-[#1B2B33] dark:text-[#E9EEF1] bg-[#F2F8FB] dark:bg-[#001724] antialiased transition-colors duration-200 pb-16 sm:pb-0">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingMobileCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
