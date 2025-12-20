/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ServiceArea = () => {
  const services = [
    {
      number: "(01)",
      title: "Development",
      list: [
        "Web Applications",
        "Mobile Apps",
        "Backend Systems",
        "API Development",
        "System Integration",
      ],
      image: "/assets/imgs/gallery/image-3.webp",
    },
    {
      number: "(02)",
      title: "Infrastructure & DevOps",
      list: [
        "Cloud Setup",
        "Server Management",
        "CI/CD Pipelines",
        "Monitoring & Alerts",
        "Scalability Planning",
      ],
      image: "/assets/imgs/gallery/image-4.webp",
    },
    {
      number: "(03)",
      title: "Maintenance & Support",
      list: [
        "Ongoing Maintenance",
        "Security Updates",
        "Performance Optimization",
        "Bug Fixes",
        "24/7 Support",
      ],
      image: "/assets/imgs/gallery/image-5.webp",
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
      image: "/assets/imgs/gallery/image-6.webp",
    },
  ];

  return (
    <section className="service-area">
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
                      <Link href="/service-details">{service.title}</Link>
                    </h3>
                    <ul className="service-list">
                      {service.list.map((item, i) => (
                        <li key={i}>
                          <Link href="/service-details">{item}</Link>
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
