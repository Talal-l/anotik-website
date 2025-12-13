import Image from "next/image";
import shape from "@/assets/imgs/shape/shape-13.webp";

export default function ApproachAboutArea() {
  return (
    <section className="approach-area-about-page">
      <div className="container large">
        <div className="approach-area-about-page-inner section-spacing">
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">Approach</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody">
                  How we remove the technical burden
                </h2>
              </div>
            </div>
          </div>
          <div className="approach-wrapper-box">
            <div className="approach-wrapper fade-anim">
              <div className="approach-box">
                <h2 className="title">
                  Understand <br />
                  requirements <Image src={shape} alt="image" />
                </h2>
                <div className="approach-list">
                  <ul>
                    <li>Technical Assessment</li>
                    <li>Infrastructure Review</li>
                    <li>Business Requirements</li>
                    <li>Current State Analysis</li>
                    <li>Solution Planning</li>
                    <li>Implementation Roadmap</li>
                  </ul>
                </div>
              </div>
              <div className="approach-box">
                <h2 className="title">
                  Build & <br />
                  deploy <Image src={shape} alt="image" />
                </h2>
                <div className="approach-list">
                  <ul>
                    <li>System Architecture</li>
                    <li>Development</li>
                    <li>Infrastructure Setup</li>
                    <li>Testing & QA</li>
                    <li>Deployment</li>
                    <li>Documentation</li>
                  </ul>
                </div>
              </div>
              <div className="approach-box">
                <h2 className="title">
                  Maintain & <br />
                  support{" "}
                </h2>
                <div className="approach-list">
                  <ul>
                    <li>Monitoring</li>
                    <li>Security Updates</li>
                    <li>Performance Optimization</li>
                    <li>Bug Fixes</li>
                    <li>Feature Updates</li>
                    <li>24/7 Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
