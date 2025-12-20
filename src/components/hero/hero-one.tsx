import Image from "next/image";
import spinnerText from "@/assets/imgs/shape/SpinnerText.png";
import shape_2 from "@/assets/imgs/shape/shape-2-dark.webp";

export default function Hero() {
  return (
    <section className="hero-area">
      <div className="container large">
        <div className="hero-area-inner section-spacing-top">
          <div className="hero-content section-spacing-bottom">
            <div
              className="award-wrapper fade-anim"
              data-delay="0.90"
              data-direction="left"
              data-ease="back.out(4)"
            >
              <div className="circle-text-wrapper">
                <div className="circle-text">
                  <Image src={spinnerText} alt="image" className="text" />
                  <div
                    className="font-instrumentsans-medium"
                    style={{
                      color: "#d9d9d9",
                      fontSize: "48px",
                      fontFamily: "var(--font_thunder)",
                      fontWeight: "bold",
                    }}
                  >
                    A.
                  </div>
                </div>
              </div>
            </div>
            <div className="section-header">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2
                    className="section-title font-instrumentsans-medium char-anim"
                    data-delay="0.45"
                    aria-label="We handle your tech. You handle your business."
                  >
                    We handle your tech
                    <span style={{ color: "var(--secondary)" }}>.</span>
                    You handle your business.
                  </h2>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="features-wrapper-box fade-anim" data-delay="0.75">
                <div className="features-wrapper">
                  <div className="feature-box">
                    <div className="content">
                      <span className="number">
                        100<span style={{ color: "var(--action)" }}>%</span>
                      </span>
                      <p className="text">You own everything we build</p>
                    </div>
                  </div>
                  <div className="feature-box">
                    <div className="content">
                      <span className="number">
                        24<span style={{ color: "var(--action)" }}>/</span>7
                      </span>
                      <p className="text">Always-on support when you need it</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper fade-anim" data-delay="0.75">
                <p className="text">
                  We are a Kuwait-based development agency focused on building
                  secure, high-quality digital products that help businesses
                  grow.
                </p>
              </div>
            </div>
          </div>
          <div className="big-text-wrapper">
            <h2 className="big-text">Anotik</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
