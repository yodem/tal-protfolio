"use client";

import { useLocale } from "next-intl";
import { CONTACT_INFO } from "@/lib/constants/data";

export function StructuredData() {
  const locale = useLocale();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://talshimoni.com/#person",
    "name": "Tal Shimoni",
    "alternateName": "טל שמעוני",
    "description": locale === "he" 
      ? "מפיק מוזיקה ומעצב סאונד מקצועי היוצר חוויות שמע סוחפות. מתמחה במוזיקה אלקטרונית, סאונדסקייפים אמביינטיים וייצור אודיו מותאם אישית לאמנים ומותגים."
      : "Professional music producer and sound designer creating immersive audio experiences. Specializing in electronic music, ambient soundscapes, and custom audio production for artists and brands.",
    "url": "https://talshimoni.com",
    "image": "https://talshimoni.com/og-image.jpg",
    "sameAs": [
      "https://www.instagram.com/frontalbeats",
      "https://www.youtube.com/@taltype"
    ],
    "jobTitle": locale === "he" ? "מפיק מוזיקה ומעצב סאונד" : "Music Producer & Sound Designer",
    "worksFor": {
      "@type": "Organization",
      "name": "Tal Shimoni Music Production"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Raanana",
      "addressCountry": "IL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT_INFO.phone,
      "contactType": "customer service",
      "email": CONTACT_INFO.email,
      "availableLanguage": ["English", "Hebrew"]
    },
    "knowsAbout": [
      "Music Production",
      "Sound Design", 
      "Electronic Music",
      "Ambient Music",
      "Audio Engineering",
      "Music Composition",
      "Audio Mixing",
      "Audio Mastering"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": locale === "he" ? "מפיק מוזיקה" : "Music Producer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Israel"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
