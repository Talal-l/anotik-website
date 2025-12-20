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
                  <span>Clients:</span> Helping businesses expand into the
                  digital space with confidence.
                </h2>
              </div>
            </div>
            <div className="text-wrapper fade-anim">
              <p className="text" style={{ color: "gray" }}>
                We work with businesses that value quality and security,
                delivering digital products built to production standards from
                day one.
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
