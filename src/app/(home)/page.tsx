import AboutOne from "@/components/about/about-one";
import ClientArea from "@/components/client/client-area";
import CtaArea from "@/components/cta/cta-area";
import FunFactArea from "@/components/fun-fact/fun-fact-area";
import Hero from "@/components/hero/hero-one";
import ParallaxImg from "@/components/parallax-img/parallax-img";
import ProductivityArea from "@/components/productivity/productivity-area";
import ServiceArea from "@/components/services/service-area";
import TextSlider from "@/components/text-slider/text-slider";
import VideoBox from "@/components/video/video-box";
import WorkArea from "@/components/work/work-area";
import Footer from "@/layout/footer/footer-one";
import HomeWrapper from "./_components/home-wrapper";
import CustomCursor from "@/components/common/custom-cursor";

export default function HomePage() {
  return (
    <>
      {/* custom cursor start */}
      <CustomCursor />
      {/* custom cursor end */}

      <HomeWrapper>
        <main>
          <Hero />
          <AboutOne />
          <VideoBox />
          <section className="work-area">
            <TextSlider />
            <WorkArea />
          </section>
          <ServiceArea />
          <FunFactArea />
          <ClientArea isHome={true} />
          <CtaArea />
          <ProductivityArea />
          <ParallaxImg />
        </main>
        <Footer />
      </HomeWrapper>
    </>
  );
}
