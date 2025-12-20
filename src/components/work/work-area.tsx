import Image from "next/image";
import Link from "next/link";

const WorkArea = () => {
  return (
    <div className="container large">
      <div className="work-area-inner">
        <div className="section-header fade-anim">
          <div className="section-title-wrapper">
            <div className="title-wrapper">
              <h2 className="section-title font-instrumentsans-medium">
                SELECTED PROJECTS
              </h2>
            </div>
          </div>
          <div className="text-wrapper">
            <p className="text">Technical solutions that deliver results</p>
          </div>
          <div className="total-count">
            <span className="number">(—)</span>
          </div>
        </div>
        <div className="works-wrapper-box">
          <div className="works-wrapper-1 fade-anim">
            {[
              {
                title: "POLYNUR DESIGN",
                tag: "E-Commerce",
                image: "/assets/imgs/project/POLYNUR.png",
                date: "2023",
              },
              {
                title: "Blush Layers",
                tag: "E-Commerce",
                image: "/assets/imgs/project/image-2.webp",
                date: "2025",
              },
              {
                title: "Try LIVE",
                tag: "Mobile App",
                image: "/assets/imgs/project/image-3.webp",
                date: "2025",
              },
              {
                title: "LayerWyse",
                tag: "Web App",
                image: "/assets/imgs/project/LayerWyse.png",
                date: "2025",
              },
            ].map((work, index) => (
              <div key={index} className="work-box">
                <div className="thumb">
                  <div className="image scale" data-cursor-text="View Project">
                    <Link href="/portfolio-details">
                      <Image
                        src={work.image}
                        alt="image"
                        width={840}
                        height={580}
                        style={{ height: "auto" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <h3 className="title">
                    <Link href="/portfolio-details">{work.title}</Link>
                  </h3>
                  <div className="meta">
                    <span className="tag">{work.tag}</span>
                    <span className="date">{work.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="all-btn-wrapper fade-anim">
          <Link href="/portfolio" className="rr-btn btn-border hover-bg-theme">
            <span className="btn-wrap">
              <span className="text-one">View All Work</span>
              <span className="text-two">View All Work</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkArea;
