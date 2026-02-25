"use client";
import { useMemo } from "react";
import {
  Font,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Register fonts
Font.register({
  family: "Helvetica",
  fonts: [
    { src: "Helvetica" },
    { src: "Helvetica-Bold", fontWeight: "bold" },
    { src: "Helvetica-Oblique", fontStyle: "italic" },
  ],
});

interface AgreementDocumentProps {
  acceptanceDate?: string;
  clientName?: string;
}

export const AgreementDocument = ({ acceptanceDate, clientName }: AgreementDocumentProps) => {
  const currentDate = new Date().toLocaleDateString("en-UK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Document Title */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>
            Mobile App & Web Platform Proposal
          </Text>
        </View>

        {/* Proposal Meta */}
        <View style={styles.metaSection}>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Proposal ID:</Text>
            <Text style={styles.metaValue}>
              cd1910b1-4864-4ca5-9dc4-cbb2bcf52e94
            </Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Date:</Text>
            <Text style={styles.metaValue}>{currentDate}</Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Prepared by:</Text>
            <Text style={styles.metaValue}>Talal Al Ammar — Anotik</Text>
          </View>
        </View>

        {/* Introduction */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Introduction</Text>
          <Text style={styles.paragraph}>
            Thank you for considering Anotik to build your real estate listing
            platform. This proposal outlines our approach, deliverables,
            timeline, and costs so you know exactly what to expect.
          </Text>
          <Text style={styles.subheading}>About Us</Text>
          <Text style={styles.paragraph}>
            Anotik is a Kuwait-based development studio specializing in mobile
            applications, web platforms, and ongoing technical support. We handle
            all technical details so you can focus on growing your business.
          </Text>
          <Text style={styles.subheading}>Proposal Purpose</Text>
          <Text style={styles.paragraph}>
            Outline our strategy, services, and costs for building a real estate
            listing platform that includes a mobile application (iOS and
            Android), a responsive web platform, and an admin panel for managing
            the platform.
          </Text>
        </View>

        {/* Client Needs Assessment */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Client Needs Assessment</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                A real estate listing platform where property owners can post
                listings and users can browse, search, and contact sellers
                directly.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Support for verified brokers with document submission and a
                dedicated broker profile.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                An advertising system where users can purchase and display ads on
                the platform.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                WhatsApp and phone call integration for direct contact between
                buyers and sellers.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Full bilingual support (Arabic and English) with RTL layout.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Push notifications, email notifications, and WhatsApp
                notifications.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                An admin panel to manage listings, users, brokers, and ads.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                A responsive web version accessible from mobile and desktop
                browsers.
              </Text>
            </View>
          </View>
        </View>

        {/* Goals & Objectives */}
        <View style={styles.section} break>
          <Text style={styles.sectionTitle}>Goals & Objectives</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Design:</Text> A clean, professional
                layout that supports browsing listings, contacting sellers, and
                purchasing ads.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Responsiveness:</Text> Consistent
                display across iOS, Android, mobile web, and desktop.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Usability:</Text> Intuitive experience
                for all user types — buyers, sellers, brokers, and admins.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Security:</Text> Encrypted storage for
                sensitive broker documents, secure authentication, and data
                protection.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Performance:</Text> Fast loading,
                reliable uptime, and auto-scaling infrastructure to handle
                traffic spikes.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Scalability:</Text> Architecture that
                supports growth without requiring a full rebuild.
              </Text>
            </View>
          </View>
        </View>

        {/* Project Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Project Overview</Text>
          <Text style={styles.paragraph}>
            We will deliver a real estate listing platform across mobile (iOS and
            Android), web (responsive), and an admin panel. Property owners can
            list properties, users can browse and contact sellers, brokers can
            get verified and maintain a public profile, and users can purchase ad
            placements.
          </Text>

          <Text style={styles.subheading}>Target Platforms</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>iOS (App Store)</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Android (Google Play)</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Web — mobile-friendly responsive version
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Web — desktop-optimized version
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Admin panel (web-based)</Text>
            </View>
          </View>

          <Text style={styles.subheading}>User Roles</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Platform Admin</Text> — Full access to the
            admin panel. Manages listings, users, broker verifications, ads, and
            platform content.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Buyer</Text> — Browses and searches
            listings, saves favorites, contacts sellers via WhatsApp and phone,
            and can purchase ads.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Seller</Text> — Submits property listings
            via WhatsApp. Views active listings once published by admin.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Broker / Marketeer</Text> — All buyer
            capabilities. Submits verification documents for approval. Once
            verified, receives a public profile page with their listings.
          </Text>
        </View>

        {/* Key Features */}
        <View style={styles.section} break>
          <Text style={styles.subheading}>Key Features</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Sign up and login (email, Google, Apple)
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Bilingual interface (Arabic and English with full RTL support)
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Home screen with featured listings, search, and filters
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Listing detail with image gallery, property info, map, and
                contact buttons
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                User profiles with favorites, settings, and notification
                preferences
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Broker verification with secure document upload and status
                tracking
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Public broker profile page with verified badge and active
                listings
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Ads system for purchasing and managing ad placements
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Push, email, and WhatsApp notifications
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Admin panel with dashboard, listing management, user management,
                broker verification, and ads management
              </Text>
            </View>
          </View>
        </View>

        {/* Project Timeline & Milestones */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Project Timeline & Milestones</Text>
          <Text style={styles.paragraph}>
            Estimated total delivery: approximately 13 weeks from project
            kickoff. Each phase includes a feedback window. Delays in feedback
            may adjust the schedule.
          </Text>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Phase 0 — Weeks 1–2</Text>
            <Text style={styles.serviceLevelText}>
              Requirements gathering, AI/design prototyping, and project
              planning.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Phase 1 — Weeks 3–5</Text>
            <Text style={styles.serviceLevelText}>
              Core app: backend, authentication, home screen, listings, user
              profiles, notifications, bilingual/RTL setup.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Phase 2 — Weeks 5–7</Text>
            <Text style={styles.serviceLevelText}>
              Admin panel: dashboard, listing management, user management, broker
              management, ads management.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Phase 3 — Weeks 8–10</Text>
            <Text style={styles.serviceLevelText}>
              Broker system and ads: verification flow, secure document handling,
              payment integration, broker profiles, ads purchasing.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Phase 4 — Weeks 11–12</Text>
            <Text style={styles.serviceLevelText}>
              Web version (mobile + desktop), WhatsApp integration, testing, bug
              fixes, App Store and Play Store submission.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Post-Launch — After launch
            </Text>
            <Text style={styles.serviceLevelText}>
              2 months of support included (bug fixes, monitoring, minor
              adjustments).
            </Text>
          </View>
          <Text style={[styles.paragraph, { fontStyle: "italic" }]}>
            Phase 0 is included at no additional cost. It ensures alignment on
            requirements and design direction before development begins.
          </Text>
        </View>

        {/* Budget and Pricing */}
        <View style={styles.section} break>
          <Text style={styles.sectionTitle}>Budget and Pricing</Text>
          <View style={styles.summaryBox}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Development Fee:</Text>
              <Text style={styles.summaryValueHighlight}>1,950 KWD</Text>
            </View>
          </View>
          <Text style={styles.paragraph}>
            This covers the full design and development of the mobile application
            (iOS and Android), responsive web platform, and admin panel. Includes
            authentication, bilingual support, listing system, broker
            verification, ads system, notifications, payment integration, and 2
            months of post-launch support.
          </Text>

          <Text style={styles.subheading}>Phase Breakdown</Text>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Phase 0 — Requirements & Design Prototype
            </Text>
            <Text style={styles.serviceLevelText}>Included</Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Phase 1 — Core App</Text>
            <Text style={styles.serviceLevelText}>800 KWD</Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Phase 2 — Admin Panel</Text>
            <Text style={styles.serviceLevelText}>350 KWD</Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Phase 3 — Broker & Ads System
            </Text>
            <Text style={styles.serviceLevelText}>400 KWD</Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Phase 4 — Web Version & Launch
            </Text>
            <Text style={styles.serviceLevelText}>400 KWD</Text>
          </View>

          <View style={[styles.summaryBox, { marginTop: 12 }]}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>
                Total (includes 2 months post-launch support):
              </Text>
              <Text style={styles.summaryValueHighlight}>1,950 KWD</Text>
            </View>
          </View>
        </View>

        {/* Optional Add-ons */}
        <View style={styles.section}>
          <Text style={styles.subheading}>Optional Add-ons</Text>
          <Text style={styles.paragraph}>
            The following features can be added at any stage of development or
            post-launch.
          </Text>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Map view for browsing listings
            </Text>
            <Text style={styles.serviceLevelText}>150 KWD</Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              In-app listing submission with admin approval flow
            </Text>
            <Text style={styles.serviceLevelText}>100 KWD</Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              In-app purchases (Apple Pay / Google Pay)
            </Text>
            <Text style={styles.serviceLevelText}>150 KWD</Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Broker rating and review system
            </Text>
            <Text style={styles.serviceLevelText}>75 KWD</Text>
          </View>
        </View>

        {/* Maintenance Plans */}
        <View style={styles.section} break>
          <Text style={styles.sectionTitle}>Maintenance Plans</Text>
          <Text style={styles.paragraph}>
            The first 2 months of post-launch support are included in the
            development fee. After that, two maintenance plans are available:
          </Text>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Standard — 30 KWD/month
            </Text>
            <Text style={styles.serviceLevelText}>
              Keeps the platform running smoothly. Includes bug fixes, security
              updates, server monitoring, store update submissions, and minor
              tweaks. New features or design changes are quoted separately per
              feature.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Growth — 200 KWD/month
            </Text>
            <Text style={styles.serviceLevelText}>
              Everything in Standard, plus ongoing feature development, design
              improvements, and priority support. Recommended if you are actively
              evolving the platform.
            </Text>
          </View>
        </View>

        {/* Infrastructure & Operational Costs */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Infrastructure & Operational Costs
          </Text>
          <Text style={styles.paragraph}>
            These are third-party service costs paid directly to the respective
            providers. They are separate from development fees.
          </Text>

          <Text style={styles.subheading}>One-Time Costs</Text>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              DUNS Number (Middle East)
            </Text>
            <Text style={styles.serviceLevelText}>
              644 KWD — Required to publish under company name on App Store. May
              only need to pay once.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Payment Gateway Setup (uPayment)
            </Text>
            <Text style={styles.serviceLevelText}>
              250 KWD — One-time registration fee.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Google Play Developer Account
            </Text>
            <Text style={styles.serviceLevelText}>
              7.5 KWD — One-time fee.
            </Text>
          </View>

          <Text style={styles.subheading}>Recurring Costs</Text>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Apple Developer Account
            </Text>
            <Text style={styles.serviceLevelText}>
              30 KWD/year — Required for App Store.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Domain (Cloudflare)</Text>
            <Text style={styles.serviceLevelText}>
              ~6 KWD/year — Domain registration and protection.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Google Workspace</Text>
            <Text style={styles.serviceLevelText}>
              ~2.5 KWD/month per email account. Also used for sending
              notifications (up to 2,000/day).
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Server Hosting (Railway)
            </Text>
            <Text style={styles.serviceLevelText}>
              From 3 KWD/month — Auto-scaling. Unlikely to exceed 30 KWD even on
              high traffic.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Media Storage (Cloudflare)
            </Text>
            <Text style={styles.serviceLevelText}>
              Free – minimal/month — First 10 GB free. For images and documents.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>WhatsApp Business API</Text>
            <Text style={styles.serviceLevelText}>
              Per message/month — Requires Facebook developer account. Cost
              depends on volume.
            </Text>
          </View>
        </View>

        {/* Transaction Fees */}
        <View style={styles.section} break>
          <Text style={styles.subheading}>Transaction Fees</Text>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Apple In-App Transactions
            </Text>
            <Text style={styles.serviceLevelText}>
              30% — Apple's standard commission.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              Google In-App Transactions
            </Text>
            <Text style={styles.serviceLevelText}>
              ~15% — Google's commission rate.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              uPayment — Visa / Mastercard
            </Text>
            <Text style={styles.serviceLevelText}>
              2.5% per transaction.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>uPayment — KNet</Text>
            <Text style={styles.serviceLevelText}>
              150 fils per transaction.
            </Text>
          </View>
        </View>

        {/* Technical Approach */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Approach</Text>
          <Text style={styles.paragraph}>
            The platform is built using modern, reliable technologies chosen for
            performance, scalability, and cost efficiency.
          </Text>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Mobile App</Text>
            <Text style={styles.serviceLevelText}>
              Built with React Native (Expo) — a single codebase that produces
              native iOS and Android apps.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Web Platform</Text>
            <Text style={styles.serviceLevelText}>
              Responsive web version optimized for both mobile browsers and
              desktop.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Server & Database</Text>
            <Text style={styles.serviceLevelText}>
              Cloud-hosted on Railway with auto-scaling and automated database
              backups.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Media Storage</Text>
            <Text style={styles.serviceLevelText}>
              Cloudflare cloud storage for images and documents. Fast, reliable,
              and cost-effective.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Payments</Text>
            <Text style={styles.serviceLevelText}>
              uPayment for KNet and Visa/Mastercard transactions.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Notifications</Text>
            <Text style={styles.serviceLevelText}>
              Push notifications on mobile, email via Google Workspace, and
              WhatsApp for key events.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Domain & Security</Text>
            <Text style={styles.serviceLevelText}>
              Cloudflare for domain management, DNS, and security protection.
            </Text>
          </View>
        </View>

        {/* Payment Schedule */}
        <View style={styles.section} break>
          <Text style={styles.sectionTitle}>Payment Schedule</Text>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              20% Deposit — 390 KWD
            </Text>
            <Text style={styles.serviceLevelText}>
              To reserve your project and begin Phase 0. This deposit is
              non-refundable.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              30% at Phase 1 Completion — 585 KWD
            </Text>
            <Text style={styles.serviceLevelText}>
              Due upon delivery and approval of the core app.
            </Text>
          </View>
          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>
              50% Final Payment — 975 KWD
            </Text>
            <Text style={styles.serviceLevelText}>
              Due upon completion of all phases and before the app goes live on
              the stores.
            </Text>
          </View>
        </View>

        {/* Client Responsibilities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Client Responsibilities</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Provide all content (text, images, branding assets) as needed
                during development.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Review deliverables and provide feedback within 3 business days.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Appoint one point of contact for approvals and decisions.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Create and maintain accounts with third-party providers
                (uPayment, Apple Developer, Google Play, etc.).
              </Text>
            </View>
          </View>
        </View>

        {/* Terms and Conditions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Terms and Conditions</Text>
          <Text style={styles.paragraph}>
            To ensure a smooth collaboration and clarity for both parties, please
            review the following terms:
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Project Duration:</Text> Estimated 13
            weeks from project kickoff to launch. Delays in feedback or content
            delivery may adjust the timeline.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Confidentiality:</Text> All information
            shared between Anotik and the client remains confidential and will
            not be disclosed without written consent.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Liability:</Text> We strive for
            excellence, but Anotik is not liable for losses or damages resulting
            from unforeseen issues such as security breaches, hosting outages, or
            third-party service failures.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Post-Launch Support:</Text> 2 months of
            support are included in the development fee. After that, ongoing
            support is provided under the chosen maintenance plan and is active
            only for months paid in advance.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Cancellation:</Text> The client may cancel
            at any time. Work completed up to the cancellation date will be
            billed proportionally. No partial refunds are issued on the deposit.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Ownership:</Text> Upon final payment, full
            ownership and copyright of all code and assets transfer to the
            client. The client may request a full export of files and data at any
            time. Anotik retains the right to feature the project in its
            portfolio.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Payment Processing:</Text> The client is
            responsible for creating and maintaining accounts with payment
            processors (e.g., uPayment). Anotik will assist with technical setup
            and integration but cannot create or manage these accounts on the
            client's behalf.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Scope Changes:</Text> Additional features
            or requirements beyond what is outlined in this proposal will be
            quoted separately and agreed upon before development begins.
          </Text>
        </View>

        {/* Approval and Acceptance */}
        <View style={[styles.section, { flexGrow: 1 }]} break>
          <Text style={styles.sectionTitle}>Approval and Acceptance</Text>
          <Text style={styles.paragraph}>
            By signing below, you acknowledge and agree to the terms, conditions,
            and details outlined in this proposal.
          </Text>
          <View style={styles.signatureArea}>
            <View style={styles.signatureBlock}>
              <Text style={styles.signatureLine}>
                {clientName || "______________________"}
              </Text>
              <Text style={styles.signatureLabel}>Client Name</Text>
              <Text style={[styles.signatureLabel, { marginTop: 8 }]}>
                Date: {acceptanceDate || "______________"}
              </Text>
            </View>
            <View style={styles.signatureBlock}>
              <Text style={styles.signatureLine}>______________________</Text>
              <Text style={styles.signatureLabel}>
                Talal Al Ammar — Anotik
              </Text>
              <Text style={[styles.signatureLabel, { marginTop: 8 }]}>
                Date: ______________
              </Text>
            </View>
          </View>
        </View>

        {/* Acceptance Record */}
        <View style={[styles.section, { justifySelf: "end" }]}>
          <Text style={styles.sectionTitle}>Acceptance Record</Text>
          <View style={styles.acceptanceBox}>
            <View style={styles.acceptanceRow}>
              <Text style={styles.acceptanceLabel}>Proposal ID:</Text>
              <Text style={styles.acceptanceValue}>
                cd1910b1-4864-4ca5-9dc4-cbb2bcf52e94
              </Text>
            </View>
            <View style={styles.acceptanceRow}>
              <Text style={styles.acceptanceLabel}>Accepted By:</Text>
              <Text style={styles.acceptanceValue}>
                {clientName || "[To be recorded upon acceptance]"}
              </Text>
            </View>
            <View style={styles.acceptanceRow}>
              <Text style={styles.acceptanceLabel}>Development Fee:</Text>
              <Text style={styles.acceptanceValue}>1,950 KWD</Text>
            </View>
            <View style={styles.acceptanceRow}>
              <Text style={styles.acceptanceLabel}>Date:</Text>
              <Text style={styles.acceptanceValue}>
                {acceptanceDate || "[To be recorded upon acceptance]"}
              </Text>
            </View>
          </View>
        </View>

        {/* Contact */}
        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Anotik</Text>
          <Text style={styles.contactText}>Phone: +965 6626 4368</Text>
          <Text style={styles.contactText}>Email: info@anotik.com</Text>
        </View>

        {/* Footer with page numbers */}
        <Text
          style={styles.pageNumbers}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  pageNumbers: {
    position: "absolute",
    minHeight: 100,
    textAlign: "center",
    left: 0,
    right: 0,
    top: 820,
  },
  page: {
    display: "flex",
    flexDirection: "column",
    padding: 50,
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1.6,
  },
  titleSection: {
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#1a1a1a",
  },
  metaSection: {
    marginBottom: 25,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    borderBottomStyle: "solid",
  },
  metaRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  metaLabel: {
    fontSize: 9,
    color: "#666",
    width: 80,
    fontWeight: "bold",
  },
  metaValue: {
    fontSize: 9,
    color: "#333",
    flex: 1,
  },
  section: {
    flexGrow: 1,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1a1a1a",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderBottomStyle: "solid",
    paddingBottom: 4,
  },
  subheading: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 6,
    color: "#1a1a1a",
  },
  paragraph: {
    fontSize: 10,
    marginBottom: 10,
    textAlign: "justify",
    lineHeight: 1.6,
    color: "#333",
  },
  summaryBox: {
    backgroundColor: "#f8f9fa",
    padding: 12,
    marginBottom: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderStyle: "solid",
  },
  summaryRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  summaryLabel: {
    fontSize: 9,
    color: "#666",
    width: 200,
    fontWeight: "bold",
  },
  summaryValue: {
    fontSize: 9,
    color: "#333",
    flex: 1,
  },
  summaryValueHighlight: {
    fontSize: 10,
    color: "#000",
    fontWeight: "bold",
    flex: 1,
  },
  bulletList: {
    marginLeft: 0,
    marginBottom: 10,
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 8,
  },
  bullet: {
    width: 15,
    fontSize: 10,
    color: "#333",
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.5,
    color: "#333",
    textAlign: "justify",
  },
  bold: {
    fontWeight: "bold",
  },
  serviceLevel: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderLeftWidth: 3,
    borderLeftColor: "#666",
    borderLeftStyle: "solid",
  },
  serviceLevelTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#1a1a1a",
  },
  serviceLevelText: {
    fontSize: 9,
    lineHeight: 1.5,
    color: "#333",
    textAlign: "justify",
  },
  signatureArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingTop: 20,
  },
  signatureBlock: {
    width: "45%",
  },
  signatureLine: {
    fontSize: 10,
    marginBottom: 4,
    color: "#333",
  },
  signatureLabel: {
    fontSize: 9,
    color: "#666",
  },
  acceptanceBox: {
    backgroundColor: "#f8f9fa",
    padding: 15,
    marginTop: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#333",
    borderStyle: "solid",
  },
  acceptanceRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  acceptanceLabel: {
    fontSize: 10,
    color: "#333",
    width: 150,
    fontWeight: "bold",
  },
  acceptanceValue: {
    fontSize: 10,
    color: "#333",
    flex: 1,
  },
  contactSection: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    borderTopStyle: "solid",
    alignItems: "center",
  },
  contactTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#1a1a1a",
  },
  contactText: {
    fontSize: 9,
    color: "#666",
    marginBottom: 2,
  },
});

interface AgreementPDFProps {
  acceptanceDate?: string;
  clientName?: string;
}

export default function AgreementPDF({ acceptanceDate, clientName }: AgreementPDFProps) {
  const document = useMemo(
    () => <AgreementDocument acceptanceDate={acceptanceDate} clientName={clientName} />,
    [acceptanceDate, clientName],
  );

  return (
    <div>
      <PDFDownloadLink
        document={document}
        fileName="Real_Estate_Platform_Proposal.pdf"
        className="download-pdf-btn"
      >
        {({ blob, url, loading, error }) => {
          if (error) return "Error generating PDF";
          return loading ? "Preparing PDF..." : "Download PDF";
        }}
      </PDFDownloadLink>
    </div>
  );
}
