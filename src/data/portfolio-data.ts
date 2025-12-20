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
    technology: "Shopify, React, Node.js",
    description:
      "A comprehensive e-commerce solution built with modern technologies to provide an exceptional shopping experience.",
    features: [
      "E-Commerce Development",
      "UX/UI Design",
      "Front-end Development",
      "Shopify Integration",
      "Payment Gateway Setup",
    ],
    gallery: [],
    details: [
      {
        title: "Visual Hierarchy",
        text: "Visual hierarchy is the principle of arranging elements to show their order of importance. information easily. By laying out elements logically designers working process by wireframing.",
      },
      {
        title: "Components",
        text: "From textile design to murals, editorial illustrations and book covers, her style is recognized by her simple and perfectly arranged shapes as well as her rich and vibrant color palette.",
      },
    ],
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
    technology: "Shopify, React",
    description:
      "An elegant e-commerce platform designed to showcase beauty products with a focus on user experience and visual appeal.",
    features: [
      "Brand Development",
      "UX/UI Design",
      "Front-end Development",
      "Copywriting",
      "Shopify Development",
    ],
    gallery: [],
    details: [
      {
        title: "User Experience",
        text: "Focused on creating an intuitive shopping experience that guides users through the product discovery and purchase process seamlessly.",
      },
      {
        title: "Design System",
        text: "Implemented a cohesive design system that maintains brand consistency across all touchpoints and devices.",
      },
    ],
  },
  {
    id: 3,
    slug: "try-live",
    title: "Try LIVE",
    tag: "Mobile App",
    image: "/assets/imgs/project/tryLive.png",
    date: "2025",
    service: "Mobile App Development, AI",
    client: "Try LIVE",
    technology: "React Native, Node.js",
    description:
      "A mobile application that enables users to experience products in real-time with innovative features and smooth performance.",
    features: [
      "Mobile App Development",
      "UX/UI Design",
      "Backend Development",
      "API Integration",
      "Real-time Features",
    ],
    gallery: [],
    details: [
      {
        title: "Performance",
        text: "Optimized for speed and efficiency, ensuring smooth user experience even with complex real-time interactions.",
      },
      {
        title: "User Interface",
        text: "Designed with a focus on simplicity and clarity, making complex features accessible to all users.",
      },
    ],
  },
  {
    id: 4,
    slug: "layerwyse",
    title: "LayerWyse Calculator",
    tag: "Web App",
    image: "/assets/imgs/project/LayerWyse.png",
    date: "2025",
    service: "Web Application Development, UX/UI Design",
    client: "LayerWyse",
    technology: "Next.js, TypeScript, Tailwind CSS",
    description:
      "A 3D Printing Pricing Calculator that helps businesses calculate project costs and generate accurate pricing quotes. The application allows users to upload 3D model files, configure printing details, manage materials, and set profit margins to create comprehensive project estimates.",
    features: [
      "File Upload System",
      "Real-time Pricing Calculator",
      "Material Cost Management",
      "Multi-service Configuration",
      "Profit Margin Customization",
      "Financial Summary Dashboard",
    ],
    gallery: [],
    details: [
      {
        title: "Project Overview",
        text: "The LayerWyse Calculator is a web application designed to simplify pricing for 3D printing businesses. Users can upload 3D model files and reference images, configure project details including printing parameters, materials, and services like modeling, painting, and sanding. The calculator automatically computes costs based on material weight, print time, difficulty levels, and other factors.",
      },
      {
        title: "Key Features",
        text: "The application supports multiple services that can be combined for a complete project quote. Users can add multiple materials with different costs per kilogram, set difficulty levels for each service, and include extras like licensed assets or non-print components. The calculator offers preset profit margin options (Competitive, Standard, Premium, Luxury) or allows custom margins, providing real-time financial summaries with price, cost, and profit breakdowns.",
      },
    ],
  },
];

export const getPortfolioBySlug = (slug: string): IPortfolio | undefined => {
  return portfolioData.find((item) => item.slug === slug);
};

export const getAllPortfolioSlugs = (): string[] => {
  return portfolioData.map((item) => item.slug);
};
