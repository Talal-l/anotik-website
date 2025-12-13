import Link from "next/link";

export default function AboutOne() {
  return (
    <section className="about-area">
      <div className="container large">
        <div className="about-area-inner section-spacing">
          <div className="section-content">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <div className="shape-3"></div>
            <div className="shape-4"></div>
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title font-instrumentsans-medium">
                  Anotik
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text">
                We own your technology so you don't have to. Anotik handles development, infrastructure, maintenance, and automation for small-to-mid businesses that need a reliable technical partner, not a one-off agency.
              </p>
            </div>
            <div className="btn-wrapper ">
              <Link
                href="/contact"
                className="rr-btn  btn-text-fli hover-bg-theme"
              >
                <span className="btn-wrap">
                  <span className="text-one">Talk to us</span>
                  <span className="text-two">Talk to us</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
