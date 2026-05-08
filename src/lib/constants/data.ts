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
        nameKey: "track1",
        image: "/tal_youtube.png",
        youtubeUrl: "https://www.youtube.com/@TalType"
    },
    {
        id: 2,
        nameKey: "track2",
        image: "/lowest.jpeg",
        youtubeUrl: "https://distrokid.com/hyperfollow/shvmh1nx/V2ENkByzHVc/"
    },
    {
        id: 3,
        nameKey: "track3",
        image: "/trufa.jpeg",
        youtubeUrl: "https://li.sten.to/0y35mynn"
    },
    {
        id: 4,
        nameKey: "track4",
        image: "/roy-2.jpeg",
        youtubeUrl: "https://li.sten.to/roieTrialanderror"
    },
    {
        id: 5,
        nameKey: "track5",
        image: "/ahava.jpeg",
        youtubeUrl: "https://distrokid.com/hyperfollow/shvmh1nx/hl0k4rYbFav/"
    },
    {
        id: 6,
        nameKey: "track6",
        image: "/yarin-1.jpeg",
        youtubeUrl: "https://musican.me/atia-ep"
    }
] as const;

export const RECENT_TRACK = { // Use { because it's one single object
    id: 7,
    nameKey: "track7",
    image: "/latest.jpeg",
    youtubeUrl: "https://distrokid.com/hyperfollow/shvmh1nx/EGIlMlFOgDU/"
};
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
