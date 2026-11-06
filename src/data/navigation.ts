export const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" }
] as const;

export const navigationContent = {
  brandAccessibleLabel: "SPLENDOUR Studio home",
  primaryAction: "Let’s talk",
  mobileOpenLabel: "Open navigation menu",
  mobileCloseLabel: "Close navigation menu",
  locationSuffix: "· Working everywhere"
} as const;
