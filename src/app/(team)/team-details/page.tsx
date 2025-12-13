import { Metadata } from "next";
import MainWrapper from "@/components/wrapper/main-wrapper";
import FooterInner from "@/layout/footer/footer-inner";
import TeamDetailsWrapper from "./_components/team-details-wrapper";
import TeamDetailsArea from "./_components/team-details-area";

export const metadata: Metadata = {
  title: "Team Details - Anotik",
  description:
    "Learn more about Anotik team members who handle your development, infrastructure, and maintenance needs.",
};

export default function TeamDetailsPage() {
  return (
    <>
      {/* Header area start */}
      {/* Header area end */}

      {/* Main wrapper start */}
      <MainWrapper
        bodyCls={[
          "body-wrapper",
          "body-page-inner",
          "font-heading-sequelsans-romanbody",
        ]}
      >
        <TeamDetailsWrapper>
          <main>
            {/* team details area start */}
            <TeamDetailsArea />
            {/* team details area end */}
          </main>

          {/* Footer area start */}
          <FooterInner />
          {/* Footer area end */}
        </TeamDetailsWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
