import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: {
    default: "Profil Padukuhan Magirejo",
    template: "%s | Padukuhan Magirejo",
  },
  description:
    "Profil resmi Padukuhan Magirejo, Ngalang, Gedangsari, Gunungkidul: informasi dusun, organisasi, UMKM, fasilitas, budaya, dan visi misi.",
  keywords: [
    "Padukuhan Magirejo",
    "Magirejo",
    "Ngalang",
    "Gedangsari",
    "Gunungkidul",
    "Profil Dusun",
    "UMKM Magirejo",
    "Budaya",
    "Fasilitas",
    "Organisasi",
  ],
  applicationName: "Profil Padukuhan Magirejo",
  generator: "Next.js",
  authors: [{ name: "Padukuhan Magirejo" }],
  creator: "Padukuhan Magirejo",
  publisher: "Padukuhan Magirejo",
  category: "community",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://magirejosembodo.vercel.app/",
    title: "Profil Padukuhan Magirejo",
    description:
      "Informasi resmi Padukuhan Magirejo: tentang, organisasi, UMKM, fasilitas, budaya, dan visi misi.",
    siteName: "Padukuhan Magirejo",
    images: [
      {
        url: "/logo text.png",
        width: 1200,
        height: 630,
        alt: "Padukuhan Magirejo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profil Padukuhan Magirejo",
    description:
      "Informasi resmi Padukuhan Magirejo: tentang, organisasi, UMKM, fasilitas, budaya, dan visi misi.",
    images: [
      {
        url: "/logo text.png",
        alt: "Padukuhan Magirejo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "qBipZ2SQ24p9bFk5Wo4qefDoIMSn8Agh_QolWUy3tjA",
  },
  themeColor: "#ffffff",
  icons: {
    icon: "/logo text.svg",
    shortcut: "/logo text.svg",
    apple: "/logo text.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${poppins.variable} antialiased min-h-screen flex flex-col bg-white text-gray-900 selection:bg-indigo-200/60 selection:text-indigo-900`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 rounded bg-indigo-600 px-3 py-2 text-white"
        >
          Lewati ke konten
        </a>
        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Padukuhan Magirejo",
              url: siteUrl || undefined,
              inLanguage: "id-ID",
            }),
          }}
        />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
