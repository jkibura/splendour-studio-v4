export const aboutContent = {
  metadata: {
    title: "About",
    description: "Learn about SPLENDOUR Studio's approach to thoughtful digital design and development."
  },
  intro: {
    eyebrow: "About the studio",
    title: "A thoughtful approach to the digital world.",
    description: "SPLENDOUR Studio is an independent digital studio focused on helping businesses show up with clarity, connect with people and make meaningful progress."
  },
  story: {
    eyebrow: "Our perspective",
    title: "We don't believe in digital for the sake of digital.",
    paragraphs: [
      "We believe in useful experiences. The kind that make a business easier to understand, a service easier to discover and a next step easier to take.",
      "Our work brings together business understanding, thoughtful design and modern web technology. We keep the process collaborative and the details intentional, creating digital foundations that can grow with the businesses they serve."
    ]
  },
  values: {
    eyebrow: "What guides us",
    title: "The principles behind the work.",
    items: [
      { icon: "compass", title: "Purpose before pixels", text: "We believe good digital work begins with understanding the people, goals and challenges behind a project." },
      { icon: "eye", title: "Clarity in the details", text: "The best experiences make things feel simple. We pay attention to the small decisions that make the whole work better." },
      { icon: "handshake", title: "A considered partnership", text: "We value honest conversations, clear expectations and a collaborative process from first discussion to launch." }
    ]
  }
} as const;
