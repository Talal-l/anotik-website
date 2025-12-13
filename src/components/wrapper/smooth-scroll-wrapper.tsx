"use client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import ScrollToTop from "../common/scroll-to-top";

type IProps = {
  children: React.ReactNode;
};

export default function SmoothScrollWrapper({ children }: IProps) {
  useScrollSmooth();
  
  return (
    <>
      <ScrollToTop />
      <div className="has-smooth" id="has_smooth"></div>
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
    </>
  );
}
