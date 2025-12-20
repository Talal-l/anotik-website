import { Metadata } from "next";
import Footer from "@/layout/footer/footer-one";
import PageTitle from "@/components/common/page-title";
import AboutWrapper from "./_components/about-wrapper";
import AboutAreaDetails from "@/components/about/about-area-details";
import ApproachAboutArea from "@/components/approach/approach-about-area";
import InfoAreaAbout from "./_components/info-area-about";
import ClientSlider from "@/components/client/client-slider";
import MediaAboutArea from "./_components/media-about-area";
import { AwardBoxWrapper } from "@/components/award/award-area";
import { TeamWrapperArea } from "@/components/team/team-area";
import TeamListArea from "@/components/team/team-list-area";

export const metadata: Metadata = {
  title: "About - Anotik",
  description:
    "Anotik is your long-term technical partner. We remove the burden of tech for businesses through development, infrastructure, maintenance, and automation.",
};

export default function AboutPage() {
  return (
    <>
      <AboutWrapper>
        <main>
          {/* page title area start */}
          <PageTitle title="About Anotik" />
          {/* page title area end */}

          {/* about area details start */}
          <AboutAreaDetails />
          {/* about area details end */}

          {/* about approach area start */}
          <ApproachAboutArea />
          {/* about approach area end */}

          {/* about info area start */}
          <InfoAreaAbout />
          {/* about info area end */}

          {/* client area start */}
          <div className="client-area-page-about">
            <div className="client-area-page-about-inner section-spacing">
              <div className="container large">
                <div className="section-header fade-anim">
                  <div className="text-wrapper">
                    <p className="text">
                      We own your technology infrastructure so you can focus on
                      growing your business
                    </p>
                  </div>
                </div>
              </div>
              <div className="clients-wrapper-box fade-anim">
                <div className="clients-wrapper">
                  <ClientSlider />
                </div>
              </div>
            </div>
          </div>
          {/* client area end */}

          {/* media area page about start */}
          <MediaAboutArea />
          {/* media area page about end */}

          {/* about award area start */}
          <section className="award-area-page-about">
            <div className="container large">
              <div className="award-area-page-about-inner section-spacing">
                <div className="section-header fade-anim">
                  <div className="section-title-wrapper">
                    <div className="subtitle-wrapper">
                      <span className="section-subtitle">Awards</span>
                    </div>
                    <div className="title-wrapper" data-direction="left">
                      <h2 className="section-title font-sequelsans-romanbody">
                        We believe in quality, not quantity, that’s why we’re
                        great ever.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="awards-wrapper-box fade-anim">
                  <div className="awards-wrapper">
                    <AwardBoxWrapper />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about award area end */}

          {/* team area start */}
          <section className="team-area-about-page">
            <div className="container large">
              <div className="team-area-about-page-inner section-spacing-top">
                <div className="section-header fade-anim">
                  <div className="section-title-wrapper">
                    <div className="subtitle-wrapper">
                      <span className="section-subtitle">Team</span>
                    </div>
                    <div className="title-wrapper">
                      <h2 className="section-title font-sequelsans-romanbody">
                        The team that owns your technical infrastructure
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="team-wrapper-box fade-anim">
                  <TeamWrapperArea />
                </div>
              </div>
            </div>
          </section>
          {/* team area end */}

          {/* team list area start */}
          <TeamListArea />
          {/* team list area end */}
        </main>

        {/* Footer area start */}
        <Footer />
        {/* Footer area end */}
      </AboutWrapper>
    </>
  );
}
