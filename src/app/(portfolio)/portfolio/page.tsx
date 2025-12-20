import { Metadata } from "next";
import Footer from "@/layout/footer/footer-one";
import PortfolioWrapper from "./_components/portfolio-wrapper";
import PageTitle from "@/components/common/page-title";
import WorkAreaEight from "@/components/work/work-area";
import CustomCursor from "@/components/common/custom-cursor";

export const metadata: Metadata = {
  title: "Portfolio - Anotik",
  description:
    "View Anotik's portfolio of technical projects including development, infrastructure, automation, and AI integration work.",
};

export default function PortfolioPage() {
  return (
    <>
      <CustomCursor />

      <PortfolioWrapper>
        <main>
          <PageTitle title="Portfolio" />
          <WorkAreaEight />
        </main>
        <Footer />
      </PortfolioWrapper>
    </>
  );
}
