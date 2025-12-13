import { Metadata } from "next";
import MainWrapper from "@/components/wrapper/main-wrapper";
import ContactWrapper from "./_components/contact-wrapper";
import ContactArea from "./_components/contact-area";
import FooterInner from "@/layout/footer/footer-inner";
import PageTitle from "@/components/common/page-title";
import Header from "@/layout/header/header-one";

export const metadata: Metadata = {
  title: "Contact - Anotik",
  description:
    "Get in touch with Anotik to discuss your technical needs. We're here to help remove the burden of tech for your business.",
};

export default function ContactPage() {
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
        <ContactWrapper>
          <main>
            {/* page title area start */}
            <PageTitle title="Contact" />
            {/* page title area end */}

            {/* contact area start */}
            <ContactArea />
            {/* contact area end */}
          </main>

          {/* Footer area start */}
          <FooterInner />
          {/* Footer area end */}
        </ContactWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
