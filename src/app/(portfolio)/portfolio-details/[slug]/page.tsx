import { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/layout/footer/footer-one";
import PortfolioDetailsWrapper from "../_components/portfolio-details-wrapper";
import PortfolioDetailsArea from "../_components/portfolio-details-area";
import {
  getPortfolioBySlug,
  getAllPortfolioSlugs,
} from "@/data/portfolio-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllPortfolioSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = getPortfolioBySlug(slug);

  if (!portfolio) {
    return {
      title: "Portfolio Details - Anotik",
      description: "Portfolio project details",
    };
  }

  return {
    title: `${portfolio.title} - Portfolio Details - Anotik`,
    description: portfolio.description || "Portfolio project details",
  };
}

export default async function PortfolioDetailsPage({ params }: Props) {
  const { slug } = await params;
  const portfolio = getPortfolioBySlug(slug);

  if (!portfolio) {
    notFound();
  }

  return (
    <>
      <PortfolioDetailsWrapper>
        <main>
          <PortfolioDetailsArea portfolio={portfolio} />
        </main>
        <Footer />
      </PortfolioDetailsWrapper>
    </>
  );
}
