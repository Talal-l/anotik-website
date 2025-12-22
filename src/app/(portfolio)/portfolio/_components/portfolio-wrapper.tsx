"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-anim";
import { scaleAnim } from "@/utils/img-anim";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

type Props = {
  children: React.ReactNode;
};

export default function PortfolioWrapper({ children }: Props) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    scaleAnim();
    const timer = setTimeout(() => {}, 0);
    return () => clearTimeout(timer);
  }, {});
  return children;
}
