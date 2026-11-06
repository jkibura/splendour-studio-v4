export const contactContent = {
  metadata: {
    title: "Start a project",
    description: "Tell SPLENDOUR Studio about your project, business or digital goals."
  },
  intro: {
    eyebrow: "Start a conversation",
    title: "Tell us what you're working on.",
    description: "Whether you have a clear brief or are still figuring things out, we'd be glad to hear about it."
  },
  aside: {
    eyebrow: "Get in touch",
    title: "Good things start with a conversation.",
    description: "Share a little about your business and what you'd like to achieve. We'll take it from there.",
    emailLabel: "Email us",
    locationLabel: "Based in",
    locationSuffix: "· Working everywhere",
    whatsappLabel: "WhatsApp",
    whatsappFallback: "Use the chat button on this page"
  },
  form: {
    fields: {
      name: { label: "Your name", placeholder: "Your name" },
      email: { label: "Email address", placeholder: "you@example.com" },
      business: { label: "Business or organization", placeholder: "Your business name", optional: "(optional)" },
      service: { label: "What do you need?", placeholder: "Select a service" },
      budget: { label: "Indicative budget", placeholder: "Choose a range", optional: "(optional)" },
      message: { label: "Tell us a little about your project", placeholder: "What are you looking to achieve? What's the challenge or opportunity?" }
    },
    serviceOptions: [
      "Website design & development",
      "E-commerce solution",
      "Custom digital solution",
      "Not sure yet"
    ],
    budgetOptions: [
      "Below KSh 25,000",
      "KSh 25,000 – 50,000",
      "KSh 50,000 – 100,000",
      "KSh 100,000+",
      "Not sure yet"
    ],
    submit: "Send enquiry",
    disclaimer: "Your details are sent securely to our studio inbox. We only use them to respond to your enquiry.",
    sending: "Sending enquiry…",
    sentTitle: "Thanks for reaching out.",
    sentDescription: "Your enquiry has been sent. We'll be in touch as soon as we can.",
    errorTitle: "We couldn't send your enquiry.",
    errorDescription: "Please try again, or email us directly at",
    honeypotLabel: "Leave this field empty"
  },
  emailTemplate: {
    subjectPrefix: "New project enquiry",
    labels: {
      name: "Name",
      email: "Email",
      business: "Business",
      service: "Interested in",
      budget: "Indicative budget",
      projectDetails: "Project details"
    },
    notProvided: "Not provided"
  },
  api: {
    invalidRequest: "Invalid request.",
    validationError: "Please complete the required fields with a valid email address.",
    notConfigured: "Contact delivery is not configured yet. Please email us directly.",
    providerError: "The email service could not accept your enquiry. Please try again or email us directly.",
    unexpectedError: "Something went wrong while sending your enquiry. Please try again or email us directly."
  }
} as const;
