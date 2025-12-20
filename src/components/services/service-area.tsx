/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ServiceArea = () => {
  const services = [
    {
      number: "(01)",
      title: "Development",
      list: ["Websites", "E-commerce", "Mobile Apps", "System Integration"],
      image: "/assets/imgs/gallery/development.png",
    },
    {
      number: "(02)",
      title: "Security",
      list: [
        "Code Review",
        "Industry Standards",
        "Data protection",
        "Security Updates",
        "Ongoing Safety Reviews",
      ],
      image: "/assets/imgs/gallery/Security.png",
    },
    {
      number: "(03)",
      title: "Technical Support",
      list: [
        "Cloud setup",
        "System monitoring",
        "Continuous support",
        "Performance improvements",
        "Issue fixing",
      ],
      image: "/assets/imgs/gallery/Systems & Support.png",
    },
    {
      number: "(04)",
      title: "Automation & AI",
      list: [
        "Process Automation",
        "AI Integrations",
        "Workflow Optimization",
        "Data Processing",
        "Custom Solutions",
      ],
      image: "/assets/imgs/gallery/Automation & AI.png",
    },
  ];

  return (
    <section id="services" className="service-area">
      <div className="container large">
        <div className="service-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="title-wrapper">
                <h2 className="section-title font-instrumentsans-medium word-anim">
                  What we do
                </h2>
              </div>
            </div>
          </div>
          <div className="services-wrapper-box">
            <div className="services-wrapper-1">
              {services.map((service, index) => (
                <div key={index} className="service-box fade-anim">
                  <div className="count">
                    <span className="number">{service.number}</span>
                  </div>
                  <div className="content">
                    <h3 className="title">
                      <div>{service.title}</div>
                    </h3>
                    <ul className="service-list">
                      {service.list.map((item, i) => (
                        <li key={i}>
                          <div>{item}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="thumb">
                    <img className="grow" src={service.image} alt="image" />
                    {/* <Image className="grow" src={service.image} alt="image" width={545} height={265} style={{ height: "auto" }} /> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
