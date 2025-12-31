import { Metadata } from "next";
import Footer from "@/layout/footer/footer-one";
import PageTitle from "@/components/common/page-title";
import PortalWrapper from "./_components/portal-wrapper";
import AgreementContent from "./_components/agreement-content";

export const metadata: Metadata = {
  title: "Client Agreement - Anotik",
  description:
    "Service agreement and proposal for ongoing technical services and support.",
};

export default function PortalPage() {
  return (
    <>
      <PortalWrapper>
        <main>
          <PageTitle title="Service Agreement" />

          <AgreementContent />
        </main>

        <Footer />
      </PortalWrapper>
    </>
  );
}

