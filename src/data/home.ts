export const homeContent = {
  hero: {
    eyebrow: "Independent digital studio · Kenya & beyond",
    heading: ["Thoughtful digital", "experiences."],
    description: "Built for business. We create considered digital experiences that help businesses establish credibility, connect with customers and grow.",
    primaryAction: { label: "Start a project", href: "/contact" },
    secondaryAction: { label: "Explore our work", href: "/work" },
    footnote: "Strategy-minded. Detail-driven. Built around your business.",
    scrollLabel: "Scroll to explore",
    art: {
      accessibleLabel: "Abstract composition representing thoughtful digital design",
      windowLabel: "studio / 001",
      sideLabel: ["DESIGN", "WITH INTENT"],
      caption: "Clarity in every detail.",
      note: ["A considered approach", "to the digital world."],
      disciplines: ["STRATEGY", "DESIGN", "DEVELOPMENT"]
    }
  },
  selectedWork: {
    eyebrow: "Selected work",
    title: "A few things we've brought to life.",
    description: "A growing collection of digital experiences shaped around real business needs.",
    action: "View all work"
  },
  services: {
    eyebrow: "What we do",
    title: "Digital, designed around your next move.",
    description: "The right digital foundation can make it easier for people to understand your business, trust what you offer and take action.",
    action: "Explore our services"
  },
  approach: {
    eyebrow: "A little about our approach",
    title: ["Good digital work starts with", "understanding."],
    description: "We're an independent digital studio bringing together business thinking, considered design and modern web technology to create work with a clear purpose.",
    action: "Get to know us",
    principles: [
      { icon: "compass", title: "Business first", text: "We start by understanding what you're trying to achieve, not by choosing colours or writing code." },
      { icon: "layers", title: "Thoughtful by design", text: "Every part of the experience should have a reason to exist and make the next step clearer." },
      { icon: "handshake", title: "Built with care", text: "We value clear communication, considered execution and a dependable working relationship." }
    ]
  },
  process: {
    eyebrow: "How we work",
    title: "A clear path from idea to launch.",
    description: "A collaborative process that keeps the work focused, transparent and moving forward."
  },
  contactCta: {
    eyebrow: "Have a project in mind?",
    title: ["Let's build something", "worth remembering."],
    description: "Tell us what you're working on. We'll help you think through the right next step.",
    action: "Start a conversation"
  }
} as const;
