import { Metadata } from "next";
import Footer from "@/layout/footer/footer-one";
import PageTitle from "@/components/common/page-title";
import PortalWrapper from "../_components/portal-wrapper";

export const metadata: Metadata = {
  title: "Thank You - Anotik",
  description: "Thank you for accepting the proposal.",
};

export default function ThankYouPage() {
  return (
    <>
      <PortalWrapper>
        <main>
          <PageTitle title="Thank You" />

          <section className="agreement-area section-spacing-top">
            <div className="container large">
              <div className="agreement-area-inner">
                <div className="agreement-content fade-anim">
                  <div className="section-header">
                    <div className="section-title-wrapper">
                      <div className="subtitle-wrapper"></div>
                      <div className="title-wrapper">
                        <h2 className="section-title font-sequelsans-romanbody">
                          Thank You for Accepting the Proposal
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="agreement-sections">
                    <div className="agreement-section">
                      <p className="agreement-text">
                        We're thrilled that you've accepted the proposal and
                        are excited to begin building your real estate listing
                        platform.
                      </p>
                      <p className="agreement-text">
                        We've sent a confirmation email to your inbox with a
                        copy of the signed proposal attached for your records.
                      </p>
                      <p className="agreement-text">
                        Our team will contact you shortly to begin Phase 0 —
                        requirements gathering and design prototyping. We'll
                        work together to ensure alignment on all project details
                        before development begins.
                      </p>
                      <p className="agreement-text">
                        If you have any questions in the meantime, please don't
                        hesitate to reach out to us. We're here to help and
                        look forward to bringing your platform to life.
                      </p>
                      <p className="agreement-text">
                        Best regards,
                        <br />
                        <strong>Anotik Team</strong>
                        <br />
                        Phone: +965 6626 4368
                        <br />
                        Email: info@anotik.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </main>

        <Footer />
      </PortalWrapper>
    </>
  );
}
