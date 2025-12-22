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
                Anotik serves as your dedicated technical department. We
                architect and maintain custom websites and applications, manage
                your cloud infrastructure, and implement intelligent automation
                to streamline your operations. By embedding security and
                reliability into every line of code, we give you the freedom to
                stop managing tech and start leading your business
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
