"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase, ScrollToPlugin, ScrollTrigger, SplitText } from "gsap/all";
import {
  charAnimation,
  cleanupCharAnimation,
  fadeAnimation,
  goVisibleAnimation,
  titleAnimation,
} from "@/utils/title-anim";
import { growAnimation, scaleAnim } from "@/utils/img-anim";
import { wordAnimation } from "@/utils/word-anim";
import { throwableAnimation } from "@/utils/throwable-anim";
import { ctaAnim } from "@/utils/cta-anim";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function HomeWrapper({ children }: Props) {
  useGSAP(() => {
    gsap.registerPlugin(CustomEase, ScrollToPlugin, SplitText, ScrollTrigger);
    const timer = setTimeout(() => {
      titleAnimation();
      scaleAnim();
      growAnimation();
      goVisibleAnimation();
      wordAnimation();
      throwableAnimation();
      charAnimation();
      fadeAnimation();
      ctaAnim();
    }, 100);
    return () => clearTimeout(timer);
  }, {});

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        cleanupCharAnimation();
        charAnimation();
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return children;
}
