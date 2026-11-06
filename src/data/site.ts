export const site = {
  name: "SPLENDOUR Studio",
  shortName: "Splendour",
  brandDescriptor: "STUDIO",
  tagline: "Thoughtful digital experiences. Built for business.",
  description: "SPLENDOUR Studio designs and develops thoughtful digital experiences that help businesses establish credibility, connect with customers and grow.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://splendour-studio-v2.vercel.app",
  email: "jkibura001@gmail.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2547XXXXXXXX",
  location: "Kenya",
  socials: {
    instagram: "",
    tiktok: "",
    linkedin: ""
  }
} as const;
