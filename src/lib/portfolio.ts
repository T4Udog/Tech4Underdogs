// PLACEHOLDER DATA — replace each entry with a real project.
// Keep this shape identical so the component needs no changes.

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  image: string;
  result: string;
  services: string[];
  href?: string;
};

export const portfolio: CaseStudy[] = [
  {
    slug: "placeholder-1",
    client: "[Client Name]",
    industry: "[Industry]",
    image: "https://picsum.photos/seed/placeholder-1/800/600",
    result: "[One-line result — e.g. “Rebuilt site + local SEO → +X leads/mo”]",
    services: ["Web Design", "Local SEO"],
  },
  {
    slug: "placeholder-2",
    client: "[Client Name]",
    industry: "[Industry]",
    image: "https://picsum.photos/seed/placeholder-2/800/600",
    result: "[One-line result]",
    services: ["IT Support"],
  },
  {
    slug: "placeholder-3",
    client: "[Client Name]",
    industry: "[Industry]",
    image: "https://picsum.photos/seed/placeholder-3/800/600",
    result: "[One-line result]",
    services: ["Web Design", "Hosting"],
  },
  {
    slug: "placeholder-4",
    client: "[Client Name]",
    industry: "[Industry]",
    image: "https://picsum.photos/seed/placeholder-4/800/600",
    result: "[One-line result]",
    services: ["Google Ads"],
  },
  {
    slug: "placeholder-5",
    client: "[Client Name]",
    industry: "[Industry]",
    image: "https://picsum.photos/seed/placeholder-5/800/600",
    result: "[One-line result]",
    services: ["IT Support", "Security"],
  },
  {
    slug: "placeholder-6",
    client: "[Client Name]",
    industry: "[Industry]",
    image: "https://picsum.photos/seed/placeholder-6/800/600",
    result: "[One-line result]",
    services: ["Web Design", "Local SEO"],
  },
];
