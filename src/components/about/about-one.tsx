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
                Anotik takes care of your business technology. We build and
                maintain your websites and applications, operate your
                infrastructure, and automate operational work. Everything is
                designed with security and reliability in mind so you can focus
                on running your business
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
