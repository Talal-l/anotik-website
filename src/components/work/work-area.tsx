import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";

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
          <div className="text-wrapper"></div>
        </div>
        <div className="works-wrapper-box" style={{ marginTop: "20px" }}>
          <div className="works-wrapper-1 fade-anim">
            {portfolioData.map((work) => (
              <div key={work.id} className="work-box">
                <div className="thumb">
                  <div className="image scale" data-cursor-text="View Project">
                    <Link href={`/portfolio-details/${work.slug}`}>
                      <Image
                        src={work.image}
                        alt={work.title}
                        width={840}
                        height={580}
                        style={{ height: "auto" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <h3 className="title">
                    <Link href={`/portfolio-details/${work.slug}`}>
                      {work.title}
                    </Link>
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
      </div>
    </div>
  );
};

export default WorkArea;
