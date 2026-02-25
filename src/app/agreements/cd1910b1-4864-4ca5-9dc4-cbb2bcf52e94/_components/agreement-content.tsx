"use client";

import { useActionState, useRef, useState, startTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import { submitAgreement } from "../_actions/submit-agreement";
import dynamic from "next/dynamic";
import { pdf } from "@react-pdf/renderer";
import { AgreementDocument } from "./agreement-pdf";

const AgreementPDF = dynamic(() => import("./agreement-pdf"), {
  ssr: false,
  loading: () => <div>Loading PDF component...</div>,
});

function getKuwaitTime(): string {
  const now = new Date();
  const kuwaitDate = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kuwait" }));
  const day = String(kuwaitDate.getDate()).padStart(2, "0");
  const month = String(kuwaitDate.getMonth() + 1).padStart(2, "0");
  const year = kuwaitDate.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function AgreementContent() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(submitAgreement, {
    success: false,
    message: "",
  });

  const [clientName, setClientName] = useState("");
  const [committedName, setCommittedName] = useState("");
  const acceptanceDate = getKuwaitTime();

  useEffect(() => {
    if (state.success) {
      router.push("/agreements/cd1910b1-4864-4ca5-9dc4-cbb2bcf52e94/thank-you");
    }
  }, [state.success, router]);

  return (
    <section className="agreement-area section-spacing-top">
      <div className="container large">
        <div className="agreement-area-inner">
          <div className="agreement-content fade-anim">
            <div className="section-header">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper"></div>
                <div className="title-wrapper">
                  <h2 className="section-title font-sequelsans-romanbody">
                    Mobile App & Web Platform Proposal
                  </h2>
                </div>
              </div>
              <div className="proposal-meta">
                <div className="meta-item">
                  <span className="meta-label">Proposal ID:</span>
                  <span className="meta-value">
                    cd1910b1-4864-4ca5-9dc4-cbb2bcf52e94
                  </span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Date:</span>
                  <span className="meta-value">
                    {new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Prepared by:</span>
                  <span className="meta-value">
                    Talal Al Ammar — Anotik
                  </span>
                </div>
              </div>
            </div>

            <div className="agreement-sections">
              {/* Introduction */}
              <div className="agreement-section">
                <h3 className="agreement-section-title">Introduction</h3>
                <p className="agreement-text">
                  Thank you for considering Anotik to build your real estate
                  listing platform. This proposal outlines our approach,
                  deliverables, timeline, and costs so you know exactly what to
                  expect.
                </p>
                <h4 className="agreement-subsection-title">About Us</h4>
                <p className="agreement-text">
                  Anotik is a Kuwait-based development studio specializing in
                  mobile applications, web platforms, and ongoing technical
                  support. We handle all technical details so you can focus on
                  growing your business.
                </p>
                <h4 className="agreement-subsection-title">Proposal Purpose</h4>
                <p className="agreement-text">
                  Outline our strategy, services, and costs for building a real
                  estate listing platform that includes a mobile application (iOS
                  and Android), a responsive web platform, and an admin panel for
                  managing the platform.
                </p>
              </div>

              {/* Client Needs Assessment */}
              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  Client Needs Assessment
                </h3>
                <ul className="agreement-list">
                  <li>
                    A real estate listing platform where property owners can post
                    listings and users can browse, search, and contact sellers
                    directly.
                  </li>
                  <li>
                    Support for verified brokers with document submission and a
                    dedicated broker profile.
                  </li>
                  <li>
                    An advertising system where users can purchase and display
                    ads on the platform.
                  </li>
                  <li>
                    WhatsApp and phone call integration for direct contact
                    between buyers and sellers.
                  </li>
                  <li>
                    Full bilingual support (Arabic and English) with RTL layout.
                  </li>
                  <li>
                    Push notifications, email notifications, and WhatsApp
                    notifications.
                  </li>
                  <li>
                    An admin panel to manage listings, users, brokers, and ads.
                  </li>
                  <li>
                    A responsive web version accessible from mobile and desktop
                    browsers.
                  </li>
                </ul>
              </div>

              {/* Goals & Objectives */}
              <div className="agreement-section">
                <h3 className="agreement-section-title">Goals & Objectives</h3>
                <ul className="agreement-list">
                  <li>
                    <strong>Design:</strong> A clean, professional layout that
                    supports browsing listings, contacting sellers, and
                    purchasing ads.
                  </li>
                  <li>
                    <strong>Responsiveness:</strong> Consistent display across
                    iOS, Android, mobile web, and desktop.
                  </li>
                  <li>
                    <strong>Usability:</strong> Intuitive experience for all user
                    types — buyers, sellers, brokers, and admins.
                  </li>
                  <li>
                    <strong>Security:</strong> Encrypted storage for sensitive
                    broker documents, secure authentication, and data protection.
                  </li>
                  <li>
                    <strong>Performance:</strong> Fast loading, reliable uptime,
                    and auto-scaling infrastructure to handle traffic spikes.
                  </li>
                  <li>
                    <strong>Scalability:</strong> Architecture that supports
                    growth without requiring a full rebuild.
                  </li>
                </ul>
              </div>

              {/* Project Overview */}
              <div className="agreement-section">
                <h3 className="agreement-section-title">Project Overview</h3>
                <p className="agreement-text">
                  We will deliver a real estate listing platform across mobile
                  (iOS and Android), web (responsive), and an admin panel.
                  Property owners can list properties, users can browse and
                  contact sellers, brokers can get verified and maintain a public
                  profile, and users can purchase ad placements.
                </p>

                <h4 className="agreement-subsection-title">Target Platforms</h4>
                <ul className="agreement-list">
                  <li>iOS (App Store)</li>
                  <li>Android (Google Play)</li>
                  <li>Web — mobile-friendly responsive version</li>
                  <li>Web — desktop-optimized version</li>
                  <li>Admin panel (web-based)</li>
                </ul>

                <h4 className="agreement-subsection-title">User Roles</h4>
                <p className="agreement-text">
                  <strong>Platform Admin</strong> — Full access to the admin
                  panel. Manages listings, users, broker verifications, ads, and
                  platform content.
                </p>
                <p className="agreement-text">
                  <strong>Buyer</strong> — Browses and searches listings, saves
                  favorites, contacts sellers via WhatsApp and phone, and can
                  purchase ads.
                </p>
                <p className="agreement-text">
                  <strong>Seller</strong> — Submits property listings via
                  WhatsApp. Views active listings once published by admin.
                </p>
                <p className="agreement-text">
                  <strong>Broker / Marketeer</strong> — All buyer capabilities.
                  Submits verification documents for approval. Once verified,
                  receives a public profile page with their listings.
                </p>
                <div className="agreement-callout">
                  <p className="agreement-text">
                    <strong>Decision Point:</strong> The listing submission
                    method (WhatsApp-only vs. in-app submission with admin
                    approval) is to be confirmed. In-app submission is available
                    as an optional add-on.
                  </p>
                </div>

                <h4 className="agreement-subsection-title">Key Features</h4>
                <ul className="agreement-list">
                  <li>Sign up and login (email, Google, Apple)</li>
                  <li>
                    Bilingual interface (Arabic and English with full RTL
                    support)
                  </li>
                  <li>
                    Home screen with featured listings, search, and filters
                  </li>
                  <li>
                    Listing detail with image gallery, property info, map, and
                    contact buttons
                  </li>
                  <li>
                    User profiles with favorites, settings, and notification
                    preferences
                  </li>
                  <li>
                    Broker verification with secure document upload and status
                    tracking
                  </li>
                  <li>
                    Public broker profile page with verified badge and active
                    listings
                  </li>
                  <li>
                    Ads system for purchasing and managing ad placements
                  </li>
                  <li>Push, email, and WhatsApp notifications</li>
                  <li>
                    Admin panel with dashboard, listing management, user
                    management, broker verification, and ads management
                  </li>
                </ul>
              </div>

              {/* Project Timeline & Milestones */}
              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  Project Timeline & Milestones
                </h3>
                <p className="agreement-text">
                  Estimated total delivery: approximately 13 weeks from project
                  kickoff. Each phase includes a feedback window. Delays in
                  feedback may adjust the schedule.
                </p>
                <div className="service-levels">
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Phase 0 — Weeks 1–2
                    </h4>
                    <p className="service-level-desc">
                      Requirements gathering, AI/design prototyping, and project
                      planning.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Phase 1 — Weeks 3–5
                    </h4>
                    <p className="service-level-desc">
                      Core app: backend, authentication, home screen, listings,
                      user profiles, notifications, bilingual/RTL setup.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Phase 2 — Weeks 5–7
                    </h4>
                    <p className="service-level-desc">
                      Admin panel: dashboard, listing management, user
                      management, broker management, ads management.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Phase 3 — Weeks 8–10
                    </h4>
                    <p className="service-level-desc">
                      Broker system and ads: verification flow, secure document
                      handling, payment integration, broker profiles, ads
                      purchasing.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Phase 4 — Weeks 11–12
                    </h4>
                    <p className="service-level-desc">
                      Web version (mobile + desktop), WhatsApp integration,
                      testing, bug fixes, App Store and Play Store submission.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Post-Launch — After launch
                    </h4>
                    <p className="service-level-desc">
                      2 months of support included (bug fixes, monitoring, minor
                      adjustments).
                    </p>
                  </div>
                </div>
                <p className="agreement-note">
                  Phase 0 is included at no additional cost. It ensures
                  alignment on requirements and design direction before
                  development begins.
                </p>
              </div>

              {/* Budget and Pricing */}
              <div className="agreement-section">
                <h3 className="agreement-section-title">Budget and Pricing</h3>
                <div className="engagement-summary">
                  <div className="summary-item">
                    <span className="summary-label">Development Fee:</span>
                    <span className="summary-value highlight">1,950 KWD</span>
                  </div>
                </div>
                <p className="agreement-text">
                  This covers the full design and development of the mobile
                  application (iOS and Android), responsive web platform, and
                  admin panel. Includes authentication, bilingual support,
                  listing system, broker verification, ads system,
                  notifications, payment integration, and 2 months of
                  post-launch support.
                </p>

                <h4 className="agreement-subsection-title">Phase Breakdown</h4>
                <div className="service-levels">
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Phase 0 — Requirements & Design Prototype
                    </h4>
                    <p className="service-level-desc">Included</p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Phase 1 — Core App
                    </h4>
                    <p className="service-level-desc">800 KWD</p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Phase 2 — Admin Panel
                    </h4>
                    <p className="service-level-desc">350 KWD</p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Phase 3 — Broker & Ads System
                    </h4>
                    <p className="service-level-desc">400 KWD</p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Phase 4 — Web Version & Launch
                    </h4>
                    <p className="service-level-desc">400 KWD</p>
                  </div>
                </div>
                <div className="engagement-summary">
                  <div className="summary-item">
                    <span className="summary-label">
                      Total (includes 2 months post-launch support):
                    </span>
                    <span className="summary-value highlight">1,950 KWD</span>
                  </div>
                </div>

                <h4 className="agreement-subsection-title">Optional Add-ons</h4>
                <p className="agreement-text">
                  The following features can be added at any stage of development
                  or post-launch.
                </p>
                <div className="service-levels">
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Map view for browsing listings
                    </h4>
                    <p className="service-level-desc">150 KWD</p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      In-app listing submission with admin approval flow
                    </h4>
                    <p className="service-level-desc">100 KWD</p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      In-app purchases (Apple Pay / Google Pay)
                    </h4>
                    <p className="service-level-desc">150 KWD</p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Broker rating and review system
                    </h4>
                    <p className="service-level-desc">75 KWD</p>
                  </div>
                </div>
              </div>

              {/* Maintenance Plans */}
              <div className="agreement-section">
                <h3 className="agreement-section-title">Maintenance Plans</h3>
                <p className="agreement-text">
                  The first 2 months of post-launch support are included in the
                  development fee. After that, two maintenance plans are
                  available:
                </p>
                <div className="service-levels">
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Standard — 30 KWD/month
                    </h4>
                    <p className="service-level-desc">
                      Keeps the platform running smoothly. Includes bug fixes,
                      security updates, server monitoring, store update
                      submissions, and minor tweaks. New features or design
                      changes are quoted separately per feature.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Growth — 200 KWD/month
                    </h4>
                    <p className="service-level-desc">
                      Everything in Standard, plus ongoing feature development,
                      design improvements, and priority support. Recommended if
                      you are actively evolving the platform.
                    </p>
                  </div>
                </div>
              </div>

              {/* Infrastructure & Operational Costs */}
              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  Infrastructure & Operational Costs
                </h3>
                <p className="agreement-text">
                  These are third-party service costs paid directly to the
                  respective providers. They are separate from development fees.
                </p>

                <h4 className="agreement-subsection-title">One-Time Costs</h4>
                <div className="service-levels">
                  <div className="service-level">
                    <h4 className="service-level-title">
                      DUNS Number (Middle East)
                    </h4>
                    <p className="service-level-desc">
                      644 KWD — Required to publish under company name on App
                      Store. May only need to pay once.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Payment Gateway Setup (uPayment)
                    </h4>
                    <p className="service-level-desc">
                      250 KWD — One-time registration fee.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Google Play Developer Account
                    </h4>
                    <p className="service-level-desc">
                      7.5 KWD — One-time fee.
                    </p>
                  </div>
                </div>

                <h4 className="agreement-subsection-title">Recurring Costs</h4>
                <div className="service-levels">
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Apple Developer Account
                    </h4>
                    <p className="service-level-desc">
                      30 KWD/year — Required for App Store.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Domain (Cloudflare)
                    </h4>
                    <p className="service-level-desc">
                      ~6 KWD/year — Domain registration and protection.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">Google Workspace</h4>
                    <p className="service-level-desc">
                      ~2.5 KWD/month per email account. Also used for sending
                      notifications (up to 2,000/day).
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Server Hosting (Railway)
                    </h4>
                    <p className="service-level-desc">
                      From 3 KWD/month — Auto-scaling. Unlikely to exceed 30 KWD
                      even on high traffic. Alerts can be configured.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Media Storage (Cloudflare)
                    </h4>
                    <p className="service-level-desc">
                      Free – minimal/month — First 10 GB free. For images and
                      documents.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      WhatsApp Business API
                    </h4>
                    <p className="service-level-desc">
                      Per message/month — Requires Facebook developer account.
                      Cost depends on volume.
                    </p>
                  </div>
                </div>

                <h4 className="agreement-subsection-title">Transaction Fees</h4>
                <div className="service-levels">
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Apple In-App Transactions
                    </h4>
                    <p className="service-level-desc">
                      30% — Apple's standard commission.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      Google In-App Transactions
                    </h4>
                    <p className="service-level-desc">
                      ~15% — Google's commission rate.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      uPayment — Visa / Mastercard
                    </h4>
                    <p className="service-level-desc">
                      2.5% per transaction.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">uPayment — KNet</h4>
                    <p className="service-level-desc">
                      150 fils per transaction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Approach */}
              <div className="agreement-section">
                <h3 className="agreement-section-title">Technical Approach</h3>
                <p className="agreement-text">
                  The platform is built using modern, reliable technologies
                  chosen for performance, scalability, and cost efficiency.
                </p>
                <div className="service-levels">
                  <div className="service-level">
                    <h4 className="service-level-title">Mobile App</h4>
                    <p className="service-level-desc">
                      Built with React Native (Expo) — a single codebase that
                      produces native iOS and Android apps.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">Web Platform</h4>
                    <p className="service-level-desc">
                      Responsive web version optimized for both mobile browsers
                      and desktop.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">Server & Database</h4>
                    <p className="service-level-desc">
                      Cloud-hosted on Railway with auto-scaling and automated
                      database backups.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">Media Storage</h4>
                    <p className="service-level-desc">
                      Cloudflare cloud storage for images and documents. Fast,
                      reliable, and cost-effective.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">Payments</h4>
                    <p className="service-level-desc">
                      uPayment for KNet and Visa/Mastercard transactions.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">Notifications</h4>
                    <p className="service-level-desc">
                      Push notifications on mobile, email via Google Workspace,
                      and WhatsApp for key events.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">Domain & Security</h4>
                    <p className="service-level-desc">
                      Cloudflare for domain management, DNS, and security
                      protection.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Schedule */}
              <div className="agreement-section">
                <h3 className="agreement-section-title">Payment Schedule</h3>
                <div className="service-levels">
                  <div className="service-level">
                    <h4 className="service-level-title">
                      20% Deposit — 390 KWD
                    </h4>
                    <p className="service-level-desc">
                      To reserve your project and begin Phase 0. This deposit is
                      non-refundable.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      30% at Phase 1 Completion — 585 KWD
                    </h4>
                    <p className="service-level-desc">
                      Due upon delivery and approval of the core app.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">
                      50% Final Payment — 975 KWD
                    </h4>
                    <p className="service-level-desc">
                      Due upon completion of all phases and before the app goes
                      live on the stores.
                    </p>
                  </div>
                </div>
              </div>

              {/* Client Responsibilities */}
              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  Client Responsibilities
                </h3>
                <ul className="agreement-list">
                  <li>
                    Provide all content (text, images, branding assets) as
                    needed during development.
                  </li>
                  <li>
                    Review deliverables and provide feedback within 3 business
                    days.
                  </li>
                  <li>
                    Appoint one point of contact for approvals and decisions.
                  </li>
                  <li>
                    Create and maintain accounts with third-party providers
                    (uPayment, Apple Developer, Google Play, etc.).
                  </li>
                </ul>
              </div>

              {/* Terms and Conditions */}
              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  Terms and Conditions
                </h3>
                <p className="agreement-text">
                  To ensure a smooth collaboration and clarity for both parties,
                  please review the following terms:
                </p>
                <p className="agreement-text">
                  <strong>Project Duration:</strong> Estimated 13 weeks from
                  project kickoff to launch. Delays in feedback or content
                  delivery may adjust the timeline.
                </p>
                <p className="agreement-text">
                  <strong>Confidentiality:</strong> All information shared
                  between Anotik and the client remains confidential and will not
                  be disclosed without written consent.
                </p>
                <p className="agreement-text">
                  <strong>Liability:</strong> We strive for excellence, but
                  Anotik is not liable for losses or damages resulting from
                  unforeseen issues such as security breaches, hosting outages,
                  or third-party service failures.
                </p>
                <p className="agreement-text">
                  <strong>Post-Launch Support:</strong> 2 months of support are
                  included in the development fee. After that, ongoing support is
                  provided under the chosen maintenance plan and is active only
                  for months paid in advance.
                </p>
                <p className="agreement-text">
                  <strong>Cancellation:</strong> The client may cancel at any
                  time. Work completed up to the cancellation date will be billed
                  proportionally. No partial refunds are issued on the deposit.
                </p>
                <p className="agreement-text">
                  <strong>Ownership:</strong> Upon final payment, full ownership
                  and copyright of all code and assets transfer to the client.
                  The client may request a full export of files and data at any
                  time. Anotik retains the right to feature the project in its
                  portfolio.
                </p>
                <p className="agreement-text">
                  <strong>Payment Processing:</strong> The client is responsible
                  for creating and maintaining accounts with payment processors
                  (e.g., uPayment). Anotik will assist with technical setup and
                  integration but cannot create or manage these accounts on the
                  client's behalf.
                </p>
                <p className="agreement-text">
                  <strong>Scope Changes:</strong> Additional features or
                  requirements beyond what is outlined in this proposal will be
                  quoted separately and agreed upon before development begins.
                </p>
              </div>

              {/* Approval and Acceptance */}
              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  Approval and Acceptance
                </h3>
                <p className="agreement-text">
                  By accepting below, you acknowledge and agree to the terms,
                  conditions, and details outlined in this proposal.
                </p>
              </div>

              {/* Hidden Acceptance Record */}
              <div className="agreement-section" style={{ display: "none" }}>
                <h3 className="agreement-section-title">Acceptance Record</h3>
                <div className="acceptance-record">
                  <div className="record-item">
                    <span className="record-label">Proposal ID:</span>
                    <span className="record-value">
                      cd1910b1-4864-4ca5-9dc4-cbb2bcf52e94
                    </span>
                  </div>
                  <div className="record-item">
                    <span className="record-label">Development Fee:</span>
                    <span className="record-value">1,950 KWD</span>
                  </div>
                  <div className="record-item">
                    <span className="record-label">
                      Date/Time of Acceptance:
                    </span>
                    <span className="record-value">{acceptanceDate}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="agreement-acceptance">
              <form
                ref={formRef}
                action={async (formData: FormData) => {
                  try {
                    const pdfBlob = await pdf(
                      <AgreementDocument acceptanceDate={acceptanceDate} clientName={clientName} />
                    ).toBlob();
                    const pdfFile = new File([pdfBlob], "agreement.pdf", {
                      type: "application/pdf",
                    });
                    formData.append("pdf", pdfFile);
                    startTransition(() => {
                      formAction(formData);
                    });
                  } catch (error) {
                    console.error("Error generating PDF:", error);
                    startTransition(() => {
                      formAction(formData);
                    });
                  }
                }}
                id="agreement-form"
              >
                <div className="acceptance-name-input">
                  <label htmlFor="clientName">Full Name</label>
                  <input
                    type="text"
                    id="clientName"
                    name="clientName"
                    required
                    placeholder="Type your full name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    onBlur={() => setCommittedName(clientName)}
                    disabled={isPending || state.success}
                  />
                </div>
                <div className="acceptance-name-input">
                  <label htmlFor="clientEmail">Email Address</label>
                  <input
                    type="email"
                    id="clientEmail"
                    name="clientEmail"
                    required
                    placeholder="Type your email address"
                    disabled={isPending || state.success}
                  />
                </div>
                <div className="acceptance-name-input">
                  <label htmlFor="clientPhone">Phone Number</label>
                  <input
                    type="tel"
                    id="clientPhone"
                    name="clientPhone"
                    required
                    placeholder="Type your phone number"
                    disabled={isPending || state.success}
                  />
                </div>
                <div className="acceptance-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="accepted"
                      required
                      disabled={isPending || state.success}
                    />
                    <span>
                      I have read and agree to the terms outlined in this
                      proposal.
                    </span>
                  </label>
                </div>
                <div className="agreement-actions">
                  <div className="submit-btn">
                    <button
                      type="submit"
                      className="rr-btn"
                      disabled={isPending || state.success}
                    >
                      <span className="btn-wrap">
                        <span className="text-one">
                          {isPending
                            ? "Submitting..."
                            : state.success
                              ? "Submitted"
                              : "Confirm & Submit"}
                        </span>
                        <span className="text-two">
                          {isPending
                            ? "Submitting..."
                            : state.success
                              ? "Submitted"
                              : "Confirm & Submit"}
                        </span>
                      </span>
                    </button>
                  </div>
                  <AgreementPDF acceptanceDate={acceptanceDate} clientName={committedName} />
                </div>
                {state.message && (
                  <div
                    className={`response-message ${state.success ? "success" : "error"}`}
                  >
                    {state.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
