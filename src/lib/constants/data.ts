// Portfolio data constants

import { Instagram, Youtube, Mail } from "lucide-react";

// Social media links
export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/frontalbeats?igsh=dWNpZDNmMXFid2V2&utm_source=qr",
    color: "hover:text-pink-500"
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@taltype",
    color: "hover:text-red-500"
  },
] as const;

// Tracks data
export const TRACKS = [
  {
    id: 1,
    name: "מביט רחוק",
    image: "/roy-1.jpeg",
    youtubeUrl: "https://li.sten.to/roieTrialanderror"
  },
  {
    id: 2,
    name: "ניסוי ותהייה",
    image: "/roy-2.jpeg",
    youtubeUrl: "https://li.sten.to/roieTrialanderror"
  },
  {
    id: 3,
    name: "שלם",
    image: "/roy-3.jpeg",
    youtubeUrl: "https://li.sten.to/roieTrialanderror"
  },
  {
    id: 4,
    name: "את ואני",
    image: "/yarin-1.jpeg",
    youtubeUrl: "https://li.sten.to/roieTrialanderror"
  },
  {
    id: 5,
    name: "אוקטובר 23",
    image: "/yarin-2.jpeg",
    youtubeUrl: "https://li.sten.to/roieTrialanderror"
  },
  {
    id: 6,
    name: "אני אנכי ועצמי",
    image: "/yarin-3.jpeg",
    youtubeUrl: "https://li.sten.to/roieTrialanderror"
  }
] as const;

export const RECENT_TRACK = 
  {
    id: 7,
    name: "אהבה",
    image: "/latest.jpeg",
    youtubeUrl: "https://distrokid.com/hyperfollow/shvmh1nx/hl0k4rYbFav/"
  } as const;
// Quick links for footer
export const QUICK_LINKS = [
  { name: "about", href: "#about" },
  { name: "works", href: "#works" },
  { name: "services", href: "#services" },
  { name: "contact", href: "#collaborate" }
] as const;

// Contact information
export const CONTACT_INFO = {
  email: "talshiprod@gmail.com",
  phone: "+972 54-586-7457",
  location: "Raanana, Israel"
} as const;
