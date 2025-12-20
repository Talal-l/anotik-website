import { Metadata } from "next";
import Footer from "@/layout/footer/footer-one";
import PageTitle from "@/components/common/page-title";
import ServiceAreaSix from "@/components/services/service-area-6";
import ServiceWrapper from "./_components/service-wrapper";
import ClientAreaFour from "@/components/client/client-area-4";

export const metadata: Metadata = {
  title: "Services - Anotik",
  description:
    "Anotik provides development, infrastructure, DevOps, maintenance, automation, and AI integration services for businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <ServiceWrapper>
        <main>
          {/* page title area start */}
          <PageTitle title="Services" />
          {/* page title area end */}

          {/* services area start */}
          <ServiceAreaSix />
          {/* services area end */}

          {/* client area start  */}
          <ClientAreaFour />
          {/* client area end  */}
        </main>

        {/* Footer area start */}
        <Footer />
        {/* Footer area end */}
      </ServiceWrapper>
    </>
  );
}
