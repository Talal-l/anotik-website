export type IPortfolio = {
  id: number;
  slug: string;
  title: string;
  tag: string;
  image: string;
  date: string;
  service?: string;
  client?: string;
  technology?: string;
  description?: string;
  features?: string[];
  gallery?: string[];
  details?: {
    title: string;
    text: string;
  }[];
};

export const portfolioData: IPortfolio[] = [
  {
    id: 1,
    slug: "polynur-design",
    title: "POLYNUR DESIGN",
    tag: "E-Commerce",
    image: "/assets/imgs/project/polynurDesign.png",
    date: "2023",
    service: "E-Commerce Development, Branding",
    client: "Polynur",
    technology: "WordPress",
    description:
      "An e-commerce platform for a 3D printing business in Kuwait specializing in collectibles, magnets, and hand-painted figurines. The store showcases a diverse range of products including gaming and anime-themed magnets, custom figurines, busts, book nooks, and hobby supplies. The platform features intuitive navigation for browsing categories like magnets, collectibles, unpainted items, and hobby tools, with a focus on showcasing the craftsmanship of 3D printing, modeling, hand-painting, and mold making services.",
    features: [
      "E-Commerce Development",
      "UX/UI Design",
      "Front-end Development",
      "Shopify Integration",
      "Payment Gateway Setup",
    ],
    gallery: [],
  },
  {
    id: 2,
    slug: "blush-layers",
    title: "Blush Layers",
    tag: "E-Commerce",
    image: "/assets/imgs/project/blushLayers.png",
    date: "2025",
    service: "E-Commerce Development, Visual Identity",
    client: "Blush Layers",
    technology: "WordPress",
    description:
      "A cute and girly e-commerce platform for a Kuwait-based FDM 3D printing studio specializing in adorable pastel collectibles. The store features charming 3D printed items including clickers, vases, coasters, keychains, and gift-ready products. Every piece is carefully 3D-printed and finished by hand, with a focus on unique, character-packed designs that bring little pieces of happy to desks and shelves. The platform emphasizes eco-friendly materials, handcrafted quality, and gift-ready packaging.",
    features: [
      "Brand Development",
      "UX/UI Design",
      "Front-end Development",
      "Copywriting",
      "Shopify Development",
    ],
    gallery: [],
  },
  {
    id: 3,
    slug: "try-live",
    title: "Try LIVE",
    tag: "Mobile App",
    image: "/assets/imgs/project/tryLive.png",
    date: "2025",
    service: "Mobile App Development, AI",
    client: "SAK Co",
    technology: "React Native, Firebase, AI",
    description:
      "An AI-powered mobile application that uses hardware features and advanced AI models to evaluate indoor space quality and lighting conditions. The app scans and analyzes indoor environments using camera-based technology, providing sustainability-based insights and practical suggestions to enhance comfort, clarity, and wellbeing. It detects key environmental qualities and prepares wellness-inspired assessments, helping users create healthier, more balanced living and working spaces through intelligent design guidance.",
    features: [
      "Mobile App Development",
      "UX/UI Design",
      "Backend Development",
      "API Integration",
      "Real-time Features",
    ],
    gallery: [],
  },
  {
    id: 4,
    slug: "layerwyse",
    title: "LayerWyse Calculator",
    tag: "Web App",
    image: "/assets/imgs/project/layerWyse.png",
    date: "2025",
    service: "Web Application Development, UX/UI Design",
    client: "LayerWyse",
    technology: "Next.js, TypeScript, Tailwind",
    description:
      "A comprehensive pricing calculator designed to help 3D printing businesses accurately price their work and improve sustainability. The tool enables businesses to calculate project costs, manage production workflows, and generate precise pricing quotes. By providing accurate cost analysis and profit margin management, it helps 3D printing businesses become more sustainable while streamlining production management and ensuring fair pricing for their services.",
    features: [
      "File Upload System",
      "Real-time Pricing Calculator",
      "Material Cost Management",
      "Multi-service Configuration",
      "Profit Margin Customization",
      "Financial Summary Dashboard",
    ],
    gallery: [],
  },
];

export const getPortfolioBySlug = (slug: string): IPortfolio | undefined => {
  return portfolioData.find((item) => item.slug === slug);
};

export const getAllPortfolioSlugs = (): string[] => {
  return portfolioData.map((item) => item.slug);
};
