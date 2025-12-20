import Image from "next/image";
import gallery_img from "@/assets/imgs/gallery/anotik.png";

export default function ParallaxImg() {
  return (
    <div className="image-wrapper parallax-view">
      <Image
        className="w-100"
        src={gallery_img}
        alt="image"
        data-speed="0.1"
        style={{ height: "auto" }}
      />
    </div>
  );
}
