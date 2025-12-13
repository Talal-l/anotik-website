"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/imgs/logo/logo-2.png";
import icon from "@/assets/imgs/icon/icon-1.webp";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Add subscription logic here (e.g., API call)
    alert(`Subscribed with email: ${email}`);
    setEmail(""); // Clear the input field after subscribing
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
          <div className="info-text">
            <div className="text-wrapper">
              <p className="text">
                Anotik removes the burden of tech for businesses. We build, maintain, and own your technology infrastructure as your long-term technical partner.
              </p>
            </div>
            <div className="info-link">
              <a href="mailto:info@anotik.com">info@anotik.com</a>
            </div>
          </div>
        </div>
        <div className="footer-widget-wrapper-box">
          <div className="footer-widget-wrapper">
            <div className="footer-widget-box newsletter">
              <form action="#" className="subscribe-form">
                <div className="input-field">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                  <button
                    onClick={handleSubscribe}
                    type="submit"
                    className="subscribe-btn"
                  >
                    <Image src={icon} alt="icon" />
                  </button>
                </div>
              </form>
              <div className="subscription-text">
                <div className="text-wrapper">
                  <p className="text">
                    By subscribing you agree with our
                    <Link href="/contact">Privacy Policy</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-widget-box">
              <h2 className="title">Company</h2>
              <ul className="footer-nav-list">
                {["About", "Services", "Work", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <Link href="/contact">{item}</Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="footer-widget-box">
              <h2 className="title">Services</h2>
              <ul className="footer-nav-list">
                {[
                  "Development",
                  "DevOps",
                  "Maintenance",
                  "Automation",
                  "AI Integration",
                ].map((item) => (
                  <li key={item}>
                    <Link href="/services">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-widget-box">
              <h2 className="title">Support</h2>
              <ul className="footer-nav-list">
                {["Get Support", "Documentation", "Status"].map((item) => (
                  <li key={item}>
                    <Link href="/contact">{item}</Link>
                  </li>
                ))}
              </ul>
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
