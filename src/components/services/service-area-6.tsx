import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceContentWrapper from "./service-content-wrapper";

export default function ServiceAreaSix() {
  return (
    <section className="service-area-service-page">
      <div className="container large">
        <div className="service-area-service-page-inner">
          {/* Section Header */}
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">Capabilities</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody">
                  Technical services that remove operational burden
                </h2>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="services-wrapper-box fade-anim">
            <div className="services-wrapper-1">
              {[
                {
                  number: "(01)",
                  title: "Development",
                  services: [
                    "Web Applications",
                    "Mobile Apps",
                    "Backend Systems",
                    "API Development",
                    "System Integration",
                  ],
                  img: "/assets/imgs/gallery/image-3.webp",
                },
                {
                  number: "(02)",
                  title: "Infrastructure & DevOps",
                  services: [
                    "Cloud Setup",
                    "Server Management",
                    "CI/CD Pipelines",
                    "Monitoring & Alerts",
                    "Scalability Planning",
                  ],
                  img: "/assets/imgs/gallery/image-4.webp",
                },
                {
                  number: "(03)",
                  title: "Maintenance & Support",
                  services: [
                    "Ongoing Maintenance",
                    "Security Updates",
                    "Performance Optimization",
                    "Bug Fixes",
                    "24/7 Support",
                  ],
                  img: "/assets/imgs/gallery/image-5.webp",
                },
                {
                  number: "(04)",
                  title: "Automation & AI",
                  services: [
                    "Process Automation",
                    "AI Integrations",
                    "Workflow Optimization",
                    "Data Processing",
                    "Custom Solutions",
                  ],
                  img: "/assets/imgs/gallery/image-6.webp",
                },
              ].map((service, index) => (
                <div className="service-box fade-anim" key={index}>
                  <div className="count">
                    <span className="number">{service.number}</span>
                  </div>
                  <div className="content">
                    <h3 className="title">
                      <Link href="/service-details">{service.title}</Link>
                    </h3>
                    <ul className="service-list">
                      {service.services.map((item, idx) => (
                        <li key={idx}>
                          <Link href="/service-details">{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="thumb">
                    <Image
                      className="grow"
                      src={service.img}
                      alt={service.title}
                      width={545}
                      height={265}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Content Wrapper */}
          <ServiceContentWrapper />
        </div>
      </div>
    </section>
  );
}
