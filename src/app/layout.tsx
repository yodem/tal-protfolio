import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tal Shimoni - Music Producer & Sound Designer",
    template: "%s | Tal Shimoni"
  },
  description: "Professional music producer and sound designer creating immersive audio experiences. Specializing in electronic music, ambient soundscapes, and custom audio production for artists and brands.",
  keywords: [
    "music producer",
    "sound designer", 
    "electronic music",
    "ambient music",
    "audio production",
    "music composition",
    "sound engineering",
    "Israel music producer",
    "Hebrew music",
    "tal shimoni"
  ],
  authors: [{ name: "Tal Shimoni" }],
  creator: "Tal Shimoni",
  publisher: "Tal Shimoni",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://talshimoni.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "he": "/he",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "he_IL",
    url: "https://talshimoni.com",
    siteName: "Tal Shimoni - Music Producer",
    title: "Tal Shimoni - Music Producer & Sound Designer",
    description: "Professional music producer and sound designer creating immersive audio experiences. Specializing in electronic music, ambient soundscapes, and custom audio production.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tal Shimoni - Music Producer & Sound Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tal Shimoni - Music Producer & Sound Designer",
    description: "Professional music producer and sound designer creating immersive audio experiences.",
    images: ["/og-image.jpg"],
    creator: "@taltype",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}