import { Metadata } from "next";
import MainWrapper from "@/components/wrapper/main-wrapper";
import FooterInner from "@/layout/footer/footer-inner";
import PortfolioDetailsWrapper from "./_components/portfolio-details-wrapper";
import PortfolioDetailsArea from "./_components/portfolio-details-area";

export const metadata: Metadata = {
  title: "Portfolio Details - Anotik",
  description:
    "Detailed view of Anotik's technical project including development, infrastructure, and implementation details.",
};

export default function PortfolioDetailsPage() {
  return (
    <>
      {/* Main wrapper start */}
      <MainWrapper
        bodyCls={[
          "body-wrapper",
          "body-page-inner",
          "font-heading-sequelsans-romanbody",
        ]}
      >
        <PortfolioDetailsWrapper>
          <main>
            {/* portfolio details area start */}
            <PortfolioDetailsArea />
            {/* portfolio details area end */}
          </main>

          {/* Footer area start */}
          <FooterInner />
          {/* Footer area end */}
        </PortfolioDetailsWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
