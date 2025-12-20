"use client";
import menuData from "@/data/menu-data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

export default function MainMenu() {
  const pathname = usePathname();
  const router = useRouter();

  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesElement = document.getElementById("services");
    
    if (pathname === "/" && servicesElement) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: servicesElement,
          offsetY: 0,
        },
        ease: "power2.inOut",
      });
    } else {
      router.push("/");
      let attempts = 0;
      const maxAttempts = 50;
      const checkElement = () => {
        attempts++;
        const element = document.getElementById("services");
        if (element) {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: {
              y: element,
              offsetY: 0,
            },
            ease: "power2.inOut",
          });
        } else if (attempts < maxAttempts) {
          setTimeout(checkElement, 100);
        }
      };
      setTimeout(checkElement, 300);
    }
  };

  return (
    <nav className="main-menu d-none d-xl-block">
      <ul>
        {menuData.map((item, index) => (
          <li
            key={index}
            className={item.children ? "menu-item-has-children" : ""}
          >
            {item.href === "#services" ? (
              <a href="#" onClick={handleServicesClick}>
                {item.title}
              </a>
            ) : (
              <Link href={item.href}>{item.title}</Link>
            )}
            {item.children && (
              <ul className={`dp-menu ${item.title === "Home" ? "col-2" : ""}`}>
                {item.children.map((child, childIndex) => (
                  <li key={childIndex}>
                    <Link href={child.href}>{child.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
