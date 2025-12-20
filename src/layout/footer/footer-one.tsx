"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import logo from "@/assets/imgs/logo/logo-big-dark.png";
import menuData from "@/data/menu-data";

const Footer: React.FC = () => {
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
    <footer className="footer-area">
      <div className="container large">
        <div className="footer-top-inner">
          <div className="footer-logo">
            <Link href="/">
              <Image src={logo} alt="site-logo" style={{ height: "auto" }} />
            </Link>
          </div>
          <div className="footer-content-wrapper">
            <div className="info-link">
              <a href="mailto:info@anotik.com">info@anotik.com</a>
            </div>
            <nav className="footer-nav">
              <ul className="footer-nav-list">
                {menuData.map((item, index) => (
                  <li key={index}>
                    {item.href === "#services" ? (
                      <a href="#" onClick={handleServicesClick}>
                        {item.title}
                      </a>
                    ) : (
                      <Link href={item.href}>{item.title}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="footer-social">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="copyright-area-inner">
          <div className="copyright-text">
            <p className="text">
              © {new Date().getFullYear()} Anotik. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
