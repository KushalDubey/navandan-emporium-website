export const navigationData = {
  links: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    {
      label: "Services",
      path: "/services",
      children: [
        {
          label: "Branding & Creative",
          path: "/services/branding-creative",
          description: "Visual identity, design systems, and creative direction.",
        },
        {
          label: "Digital Marketing & Growth",
          path: "/services/digital-marketing",
          description: "Performance campaigns, enterprise SEO, and conversion optimization.",
        },
        {
          label: "Website & App Development",
          path: "/services/web-app-development",
          description: "Modern web platforms, APIs, and mobile applications.",
        },
        {
          label: "ERP, CRM & Business Automation",
          path: "/services/business-automation",
          description: "Enterprise workflows, custom portals, and pipeline automation.",
        },
      ],
    },
    { label: "Work", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
  ],
  cta: {
    label: "Get a Quote",
    path: "/contact",
  },
};
