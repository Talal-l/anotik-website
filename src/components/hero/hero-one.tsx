import Image from "next/image";
import shape_3 from "@/assets/imgs/shape/shape-3.webp";
import shape_2 from "@/assets/imgs/shape/shape-2.webp";
import shape_1 from "@/assets/imgs/shape/shape-1.webp";

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
                  <Image src={shape_3} alt="image" className="text" />
                  <Image src={shape_2} alt="image" className="icon" />
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
                    We handle your tech.
                    <span>
                      <Image
                        className="title-shape-1 fade-anim"
                        src={shape_1}
                        alt="image"
                        data-direction="right"
                        data-delay="1.80"
                        style={{ height: "auto" }}
                      />
                    </span>
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
                      <span className="number">100%</span>
                      <p className="text">
                        You own everything we build
                      </p>
                    </div>
                  </div>
                  <div className="feature-box">
                    <div className="content">
                      <span className="number">24/7</span>
                      <p className="text">
                        Always-on support when you need it
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper fade-anim" data-delay="0.75">
                <p className="text">
                  We build, maintain, and own your technology so you can focus
                  on what matters—growing your business.
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
