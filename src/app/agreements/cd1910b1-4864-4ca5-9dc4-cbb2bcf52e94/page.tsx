import { Metadata } from "next";
import Footer from "@/layout/footer/footer-one";
import PageTitle from "@/components/common/page-title";
import PortalWrapper from "./_components/portal-wrapper";
import AgreementContent from "./_components/agreement-content";

export const metadata: Metadata = {
  title: "Project Proposal - Anotik",
  description:
    "Mobile App & Web Platform Proposal for real estate listing platform.",
};

export default function PortalPage() {
  return (
    <>
      <PortalWrapper>
        <main>
          <PageTitle title="Project Proposal" />

          <AgreementContent />
        </main>

        <Footer />
      </PortalWrapper>
    </>
  );
}
