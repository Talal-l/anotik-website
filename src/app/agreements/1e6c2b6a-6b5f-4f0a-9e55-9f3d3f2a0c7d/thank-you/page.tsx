import { Metadata } from "next";
import Footer from "@/layout/footer/footer-one";
import PageTitle from "@/components/common/page-title";
import PortalWrapper from "../_components/portal-wrapper";

export const metadata: Metadata = {
  title: "Thank You - Anotik",
  description: "Thank you for accepting the agreement.",
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
                          Thank You for Accepting the Agreement
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="agreement-sections">
                    <div className="agreement-section">
                      <p className="agreement-text">
                        We're thrilled that you've accepted the agreement and
                        are excited to begin working with you as your technical
                        partner.
                      </p>
                      <p className="agreement-text">
                        We've sent a confirmation email to your inbox with a
                        copy of the signed agreement attached for your records.
                      </p>
                      <p className="agreement-text">
                        Our team will contact you shortly with the next steps to
                        get started. We'll work together to ensure a smooth
                        onboarding process and set up everything needed for our
                        partnership.
                      </p>
                      <p className="agreement-text">
                        If you have any questions in the meantime, please don't
                        hesitate to reach out to us. We're here to help and
                        look forward to supporting your business success.
                      </p>
                      <p className="agreement-text">
                        Best regards,
                        <br />
                        <strong>Anotik Team</strong>
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

