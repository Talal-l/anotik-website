"use client";
import gsap from "gsap";
import { CustomEase, ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

type Props = {
  children: React.ReactNode;
};

export default function PortfolioDetailsWrapper({ children }: Props) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CustomEase);
  }, {});
  return children;
}
