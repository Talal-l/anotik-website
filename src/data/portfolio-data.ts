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
    image: "/assets/imgs/project/POLYNUR.png",
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
    gallery: [
      "/assets/imgs/gallery/image-26.webp",
      "/assets/imgs/gallery/image-27.webp",
      "/assets/imgs/gallery/image-28.webp",
      "/assets/imgs/gallery/image-29.webp",
      "/assets/imgs/gallery/image-30.webp",
      "/assets/imgs/gallery/image-31.webp",
    ],
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
    image: "/assets/imgs/project/image-2.webp",
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
    gallery: [
      "/assets/imgs/gallery/image-26.webp",
      "/assets/imgs/gallery/image-27.webp",
      "/assets/imgs/gallery/image-28.webp",
      "/assets/imgs/gallery/image-29.webp",
    ],
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
    image: "/assets/imgs/project/image-3.webp",
    date: "2025",
    service: "Mobile App Development, UX/UI Design",
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
    gallery: [
      "/assets/imgs/gallery/image-30.webp",
      "/assets/imgs/gallery/image-31.webp",
      "/assets/imgs/gallery/image-32.webp",
      "/assets/imgs/gallery/image-33.webp",
    ],
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
    title: "LayerWyse",
    tag: "Web App",
    image: "/assets/imgs/project/LayerWyse.png",
    date: "2025",
    service: "Web Application Development, Branding",
    client: "LayerWyse",
    technology: "Next.js, TypeScript, Tailwind CSS",
    description:
      "A modern web application built with cutting-edge technologies to deliver powerful features and exceptional performance.",
    features: [
      "Web App Development",
      "UX/UI Design",
      "Front-end Development",
      "Backend Integration",
      "API Development",
    ],
    gallery: [
      "/assets/imgs/gallery/image-32.webp",
      "/assets/imgs/gallery/image-33.webp",
      "/assets/imgs/gallery/image-34.webp",
      "/assets/imgs/gallery/image-26.webp",
    ],
    details: [
      {
        title: "Architecture",
        text: "Built with a scalable architecture that can grow with the business needs while maintaining high performance standards.",
      },
      {
        title: "Technology Stack",
        text: "Leveraged modern technologies and best practices to create a robust and maintainable codebase.",
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
