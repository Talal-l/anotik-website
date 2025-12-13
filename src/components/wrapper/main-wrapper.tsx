"use client";
import { useEffect } from "react";

type IProps = {
  children: React.ReactNode;
  bodyCls?: string[];
};

export default function MainWrapper({ children, bodyCls }: IProps) {
  useEffect(() => {
    if (bodyCls?.length) {
      document.body.classList.add(...bodyCls);
    }
    return () => {
      if (bodyCls) {
        document.body.classList.remove(...bodyCls);
      }
    };
  }, [bodyCls]);

  return <>{children}</>;
}
