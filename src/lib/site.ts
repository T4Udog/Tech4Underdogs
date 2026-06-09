// Single source of truth for contact + CTA. Edit values here only.

export const site = {
  name: "Tech 4 Underdogs",

  // TODO(Andrew): replace before launch — placeholder phone.
  phone: { display: "(000) 000-0000", href: "tel:+10000000000" },

  email: "contact@tech4underdogs.com",

  // Empty string => link is hidden (Footer skips empty URLs).
  social: {
    facebook: "",
    threads: "",
    x: "",
    youtube: "",
  },

  cta: {
    primary: { label: "Talk to a Real Person", href: "/contact" },
    secondary: { label: "See How We Help", href: "/#services" },
  },

  pricing: {
    // TODO(Andrew): confirm starting price matches /pricing tier before launch.
    startingPrice: "$35/user/mo",
    teaser: "Plans from $35/user/mo — month-to-month, no long-term contracts.",
    href: "/pricing",
  },
} as const;
