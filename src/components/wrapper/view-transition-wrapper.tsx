"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ViewTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest("a[href]") as HTMLAnchorElement;
        
        if (link && link.href) {
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
              (document as any).startViewTransition(() => {
                router.push(href);
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
