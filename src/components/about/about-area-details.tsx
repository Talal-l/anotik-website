import Image from "next/image";
import gallery_img_1 from "@/assets/imgs/gallery/image-19.webp";
import gallery_img_2 from "@/assets/imgs/gallery/image-20.webp";
import gallery_img_3 from "@/assets/imgs/gallery/image-21.webp";
import gallery_img_4 from "@/assets/imgs/gallery/image-22.webp";
import Link from "next/link";

const gallery_images = [
  gallery_img_1,
  gallery_img_2,
  gallery_img_3,
  gallery_img_4,
  gallery_img_1,
];

export default function AboutAreaDetails() {
  return (
    <section className="about-area-details">
      <div className="container large">
        <div className="about-area-details-inner">
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">About Anotik</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody">
                  We own your technology infrastructure so you can focus on your business.
                </h2>
              </div>
            </div>
          </div>
          <div className="section-content-wrapper fade-anim">
            <div className="info-list">
              <ul>
                <li>Ownership</li>
                <li>Reliability</li>
                <li>Long-term Partnership</li>
              </ul>
            </div>
            <div className="section-content">
              <div className="text-wrapper" data-direction="right">
                <p className="text">
                  Anotik removes the technical burden from businesses. We build, maintain, and own your technology stack as your long-term partner, not a one-off agency.
                </p>
                <p className="text">
                  Our approach is simple: we take full responsibility for your technical infrastructure. You focus on growing your business while we handle development, DevOps, maintenance, automation, and AI integrations.
                </p>
              </div>
              <div className="btn-wrapper" data-direction="right">
                <Link href="/services" className="rr-btn">
                  <span className="btn-wrap">
                    <span className="text-one">View Services</span>
                    <span className="text-two">View Services</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moving-gallery fade-anim">
        <ul className="wrapper-gallery">
          {gallery_images.map((g, i) => (
            <li key={i}>
              <Image src={g} alt={`image-${i}`} style={{ height: "auto" }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
