import { Metadata } from "next";
import HeaderTwo from "@/layout/header/header-two";
import MainWrapper from "@/components/wrapper/main-wrapper";
import FooterInner from "@/layout/footer/footer-inner";
import PortfolioWrapper from "./_components/portfolio-wrapper";
import PageTitle from "@/components/common/page-title";
import WorkAreaEight from "@/components/work/work-area-8";
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

      {/* Main wrapper start */}
      <MainWrapper
        bodyCls={[
          "body-wrapper",
          "body-page-inner",
          "font-heading-sequelsans-romanbody",
        ]}
      >
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
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
