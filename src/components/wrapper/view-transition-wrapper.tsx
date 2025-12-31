"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { ScrollSmoother } from "gsap/all";

export default function ViewTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      
      const scrollToTop = () => {
        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.scrollTo(0, true);
        } else {
          const smoothContent = document.getElementById("smooth-content");
          if (smoothContent) {
            smoothContent.scrollTop = 0;
          }
        }
      };

      if (typeof window !== "undefined") {
        const attemptScroll = (attempt = 0) => {
          if (attempt < 20) {
            requestAnimationFrame(() => {
              const smoother = ScrollSmoother.get();
              if (smoother) {
                smoother.scrollTo(0, true);
              } else {
                const smoothContent = document.getElementById("smooth-content");
                if (smoothContent) {
                  smoothContent.scrollTop = 0;
                  if (smoothContent.scrollTop > 10) {
                    setTimeout(() => attemptScroll(attempt + 1), 50);
                  }
                } else {
                  setTimeout(() => attemptScroll(attempt + 1), 50);
                }
              }
            });
          }
        };

        setTimeout(() => {
          attemptScroll();
        }, 200);
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest("a[href]") as HTMLAnchorElement;
        
        if (link && link.href) {
          if (link.hasAttribute("download") || link.href.startsWith("blob:")) {
            return;
          }
          
          const url = new URL(link.href);
          const currentUrl = new URL(window.location.href);
          
          if (
            url.origin === currentUrl.origin &&
            url.pathname !== currentUrl.pathname &&
            !url.hash
          ) {
            e.preventDefault();
            const href = url.pathname + url.search;
            
            if ("startViewTransition" in document) {
              const transition = (document as any).startViewTransition(() => {
                router.push(href);
              });
              
              transition.finished.then(() => {
                setTimeout(() => {
                  const smoother = ScrollSmoother.get();
                  if (smoother) {
                    smoother.scrollTo(0, true);
                  } else {
                    const smoothContent = document.getElementById("smooth-content");
                    if (smoothContent) {
                      smoothContent.scrollTop = 0;
                    }
                  }
                }, 100);
              });
            } else {
              router.push(href);
            }
          }
        }
      };

      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    }
  }, [pathname, router]);

  return <>{children}</>;
}
