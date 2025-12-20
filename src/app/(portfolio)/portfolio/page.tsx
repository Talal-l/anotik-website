import { Metadata } from "next";
import FooterInner from "@/layout/footer/footer-inner";
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
      {/* custom cursor start */}
      <CustomCursor />
      {/* custom cursor end */}

      <PortfolioWrapper>
        <main>
          {/* page title area start */}
          <PageTitle title="Portfolio" />
          {/* page title area end */}

          {/* portfolio area start */}
          <WorkAreaEight />
          {/* portfolio area end */}
        </main>

        {/* Footer area start */}
        <FooterInner />
        {/* Footer area end */}
      </PortfolioWrapper>
    </>
  );
}
