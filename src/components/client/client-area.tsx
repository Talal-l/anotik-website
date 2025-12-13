import React from "react";
import ClientCapsules from "./client-capsules";

type Props = {
  isHome?: boolean;
};
const ClientArea = ({ isHome = false }: Props) => {
  return (
    <section className="client-area">
      <div className="container large">
        <div className="client-area-inner section-spacing-top">
          <div className="section-content">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title font-instrumentsans-medium word-anim">
                  <span>Clients:</span> Businesses that trust us to own their
                  technology.
                </h2>
              </div>
            </div>
            <div className="text-wrapper fade-anim">
              <p className="text">
                We partner with small-to-mid businesses that need reliable technical infrastructure without the operational overhead. Our clients focus on growth while we handle the tech.
              </p>
            </div>
          </div>

          <ClientCapsules isHome={isHome} />

          <div className="lines-wrapper">
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="line"></div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientArea;
