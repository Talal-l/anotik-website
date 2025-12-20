import { Metadata } from "next";
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
    </>
  );
}
