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
  PDFViewer,
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
        {/* Header */}
        {/*<View style={styles.header} fixed>
          <Text style={styles.headerText}>
            Technical Services & Maintenance Agreement
          </Text>
        </View>*/}

        {/* Document Title */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>
            Maintenance Proposal For Dueling Area
          </Text>
        </View>

        {/* Proposal Meta */}
        <View style={styles.metaSection}>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Proposal ID:</Text>
            <Text style={styles.metaValue}>
              1e6c2b6a-6b5f-4f0a-9e55-9f3d3f2a0c7d
            </Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Date:</Text>
            <Text style={styles.metaValue}>{currentDate}</Text>
          </View>
        </View>

        {/* Client Information Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Client Information</Text>
          <View style={styles.summaryBox}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Client Name / Company:</Text>
              <Text style={styles.summaryValue}>Mohammed Alenezi</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Email Address:</Text>
              <Text style={styles.summaryValue}>Mohammed@duelingarea.com</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Monthly Retainer:</Text>
              <Text style={styles.summaryValueHighlight}>500 KD</Text>
            </View>
          </View>
          <Text style={styles.paragraph}>
            Thank you for considering Anotik as your technical partner. This
            proposal outlines our recommended approach to providing ongoing
            technical services and maintenance for your digital infrastructure.
            We're excited about the opportunity to support your business and
            help you focus on growth while we handle the technical details.
          </Text>
        </View>

        {/* Section 1: Introduction */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Introduction</Text>
          <Text style={styles.paragraph}>
            This Technical Services & Maintenance Agreement establishes the
            framework for our ongoing partnership. Anotik will serve as your
            dedicated technical partner, providing continuous support,
            maintenance, and development services for your digital
            infrastructure. We believe in building long-term relationships based
            on mutual trust and clear expectations. This document outlines how
            we'll work together to keep your systems running smoothly, respond
            to your needs, and support your business growth.
          </Text>
          <Text style={styles.paragraph}>
            Our approach is collaborative and flexible. We understand that every
            business has unique needs, and we're committed to adapting our
            services to best serve you. This agreement reflects our commitment
            to transparency, quality service, and a partnership mindset rather
            than a rigid vendor-client relationship.
          </Text>
        </View>

        {/* Section 2: Scope of Services */}
        <View style={styles.section} break>
          <Text style={styles.sectionTitle}>2. Scope of Services</Text>
          <Text style={styles.paragraph}>
            Anotik will provide ongoing technical services and maintenance for
            your digital infrastructure. This includes but is not limited to:
          </Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Website and System Maintenance:</Text>{" "}
                Regular updates, security patches, performance monitoring, and
                general upkeep of your websites and digital systems.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Third-Party Integrations:</Text>{" "}
                Management and support for integrations with external services,
                APIs, and platforms that your business relies on.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Mobile Application Support:</Text>{" "}
                Ongoing maintenance, updates, and oversight for mobile
                applications, including both iOS and Android platforms.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Backend Systems:</Text> Monitoring,
                maintenance, and support for server infrastructure, databases,
                and backend services.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Bahrain Branch Support:</Text>{" "}
                Technical support for your Bahrain branch website and store
                operations, ensuring consistent service across locations.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Minor Development and Fixes:</Text>{" "}
                Small updates, bug fixes, and minor feature additions that fall
                within the scope of regular maintenance work.
              </Text>
            </View>
          </View>
          <Text style={styles.paragraph}>
            We'll work together to ensure all your technical needs are addressed
            promptly and effectively. If you have specific requirements or
            questions about what's included, we're always happy to discuss and
            clarify.
          </Text>
        </View>

        {/* Section 3: Support & Availability */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Support & Availability</Text>
          <Text style={styles.paragraph}>
            Anotik commits to providing up to 24 hours of support per week under
            this agreement. This time is dedicated to addressing your
            maintenance needs, responding to requests, implementing updates, and
            ensuring your systems remain operational and secure.
          </Text>
          <Text style={styles.paragraph}>
            Our support includes proactive monitoring, regular maintenance
            tasks, responding to your requests, troubleshooting issues, and
            implementing improvements. We'll use our best judgment to prioritize
            work based on urgency and impact, always keeping your business needs
            in mind.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Urgent Requests:</Text> For critical
            issues that affect your business operations or security, we'll
            respond as quickly as possible and work to resolve them in a
            reasonable timeframe. We understand that some issues can't wait, and
            we're committed to being responsive when it matters most.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Non-Urgent Requests:</Text> For routine
            updates, minor changes, and general maintenance tasks, we'll
            schedule these within our regular workflow. We'll keep you informed
            about progress and timelines so you always know what to expect.
          </Text>
        </View>

        {/* Section 4: Service Levels */}
        <View style={styles.section} break>
          <Text style={styles.sectionTitle}>4. Service Levels</Text>
          <Text style={styles.paragraph}>
            To help us prioritize and manage requests effectively, we categorize
            issues by severity. These are general guidelines that help us
            allocate resources appropriately:
          </Text>

          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Critical</Text>
            <Text style={styles.serviceLevelText}>
              Issues that completely prevent your business from operating or
              pose immediate security risks. We'll respond immediately and work
              continuously until resolved. Examples include complete site
              outages, security breaches, or payment system failures.
            </Text>
          </View>

          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>High</Text>
            <Text style={styles.serviceLevelText}>
              Significant issues that impact major functionality but don't
              completely halt operations. We'll respond within a few hours and
              work to resolve within 1-2 business days. Examples include major
              feature malfunctions or significant performance degradation.
            </Text>
          </View>

          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Medium</Text>
            <Text style={styles.serviceLevelText}>
              Issues that affect some functionality but have workarounds or
              don't significantly impact operations. We'll address these within
              2-3 business days. Examples include minor feature bugs or
              non-critical integrations not working.
            </Text>
          </View>

          <View style={styles.serviceLevel}>
            <Text style={styles.serviceLevelTitle}>Low</Text>
            <Text style={styles.serviceLevelText}>
              Minor issues, cosmetic problems, or enhancement requests that
              don't impact functionality. We'll address these as time permits,
              typically within 1-2 weeks. Examples include styling adjustments
              or small UI improvements.
            </Text>
          </View>

          <Text style={styles.paragraph}>
            These are our target response times based on best efforts. We
            understand that every situation is unique, and we'll always
            communicate with you about timelines and expectations. If something
            needs faster attention, we'll work together to make it happen.
          </Text>
        </View>

        {/* Section 5: Communication & Requests */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Communication & Requests</Text>
          <Text style={styles.paragraph}>
            Clear communication is essential for a successful partnership. We
            prefer to receive requests through email or our designated
            communication channels, as this helps us track, prioritize, and
            respond to everything systematically.
          </Text>
          <Text style={styles.paragraph}>
            When you submit a request, please provide as much detail as possible
            about what you need. This helps us understand the context,
            prioritize appropriately, and deliver exactly what you're looking
            for. If something is urgent, please let us know clearly so we can
            adjust our priorities accordingly.
          </Text>
          <Text style={styles.paragraph}>
            We'll keep you updated on progress, ask clarifying questions when
            needed, and confirm completion of work. Our goal is to make sure you
            always know what's happening and feel confident that your needs are
            being addressed.
          </Text>
        </View>

        {/* Section 6: Changes & Larger Work */}
        <View style={styles.section} break>
          <Text style={styles.sectionTitle}>6. Changes & Larger Work</Text>
          <Text style={styles.paragraph}>
            Minor changes, bug fixes, and small updates are included in the
            regular maintenance scope. This covers things like content updates,
            small feature tweaks, styling adjustments, and routine fixes that
            don't require significant development time.
          </Text>
          <Text style={styles.paragraph}>
            For larger projects, new features, major redesigns, or work that
            requires substantial development time, we'll discuss the
            requirements with you and provide a separate quote. This ensures
            transparency about costs and timelines, and allows us to plan and
            execute larger work properly.
          </Text>
          <Text style={styles.paragraph}>
            We'll always be upfront about what falls within the maintenance
            scope and what would be considered additional work. If you're unsure
            whether something is included, just ask—we're happy to clarify.
          </Text>
        </View>

        {/* Section 7: Third-Party Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7. Third-Party Services</Text>
          <Text style={styles.paragraph}>
            Your digital infrastructure likely relies on various third-party
            services, platforms, and tools—payment processors, hosting
            providers, APIs, content management systems, and more. We'll support
            and manage these integrations to the best of our ability.
          </Text>
          <Text style={styles.paragraph}>
            It's important to understand that while we can configure, monitor,
            and troubleshoot these services, we don't control their
            availability, pricing, or policies. If a third-party service
            experiences downtime, changes its terms, or discontinues a feature,
            we'll work with you to find solutions and alternatives, but we can't
            guarantee the performance or availability of services we don't
            operate.
          </Text>
        </View>

        {/* Section 8: Security & Data */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>8. Security & Data</Text>
          <Text style={styles.paragraph}>
            We take security seriously and follow industry best practices to
            protect your systems and data. This includes regular security
            updates, monitoring for vulnerabilities, implementing appropriate
            access controls, and staying current with security standards.
          </Text>
          <Text style={styles.paragraph}>
            However, it's important to understand that no system can be 100%
            secure, and the digital landscape is constantly evolving. We commit
            to using our best efforts to maintain security, but we can't
            guarantee absolute protection against all possible threats. We'll
            work proactively to minimize risks and respond quickly if security
            issues arise.
          </Text>
          <Text style={styles.paragraph}>
            You retain full ownership of all your data, content, and
            intellectual property. We'll never claim ownership of your
            materials, and we'll always respect your data privacy and
            confidentiality.
          </Text>
        </View>

        {/* Section 9: Pricing & Billing */}
        <View style={styles.section} break>
          <Text style={styles.sectionTitle}>9. Pricing & Billing</Text>
          <Text style={styles.paragraph}>
            Services under this agreement are provided on a monthly retainer
            basis. The monthly fee of <Text style={styles.bold}>500 KD</Text>{" "}
            covers up to 24 hours of support per week and includes all the
            services outlined in this agreement.
          </Text>
          <Text style={styles.paragraph}>
            Invoicing is done monthly in advance, meaning you'll receive an
            invoice at the beginning of each month for that month's services.
            Payment terms are standard net 30 days, though we're flexible if you
            need to discuss alternative arrangements.
          </Text>
          <Text style={styles.paragraph}>
            If additional work is requested that falls outside the scope of
            regular maintenance, we'll provide a separate quote for approval
            before beginning that work. This ensures transparency and allows you
            to make informed decisions about additional investments.
          </Text>
        </View>

        {/* Section 10: Flexibility & Adjustments */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>10. Flexibility & Adjustments</Text>
          <Text style={styles.paragraph}>
            We recognize that businesses evolve, and your technical needs may
            change over time. This agreement is designed to be flexible and
            adaptable. If you find that you need more or less support, or if
            your priorities shift, we're happy to discuss adjustments to the
            scope, hours, or services.
          </Text>
          <Text style={styles.paragraph}>
            We'll periodically review the agreement together to ensure it
            continues to meet your needs. This might include discussing how
            hours are being used, whether the scope needs to expand or contract,
            and how we can better serve your business.
          </Text>
          <Text style={styles.paragraph}>
            Our goal is a partnership that grows and adapts with your business.
            We're committed to being fair, reasonable, and responsive to your
            changing needs.
          </Text>
        </View>

        {/* Section 11: Termination & Transition */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>11. Termination & Transition</Text>
          <Text style={styles.paragraph}>
            If either party wishes to end this agreement, we ask for 30 days'
            written notice. This gives us time to wrap up any ongoing work,
            ensure a smooth transition, and provide you with all necessary
            documentation and access.
          </Text>
          <Text style={styles.paragraph}>
            We're committed to making any transition as smooth as possible.
            We'll provide documentation of your systems, transfer access
            credentials, assist with knowledge transfer, and help ensure
            continuity of service. Our goal is to leave you in a good position,
            regardless of why the agreement ends.
          </Text>
          <Text style={styles.paragraph}>
            You'll retain full ownership of all your systems, data, and content.
            We'll provide everything you need to continue operating
            independently or transition to another provider.
          </Text>
        </View>

        {/* Section 12: Closing Statement */}
        <View style={[styles.section, { flexGrow: 1 }]} break>
          <Text style={styles.sectionTitle}>12. Closing Statement</Text>
          <Text style={styles.paragraph}>
            This agreement represents our commitment to being your trusted
            technical partner. We're not just here to fix things when they
            break—we're here to proactively maintain your systems, support your
            growth, and ensure your technology works for you, not against you.
          </Text>
          <Text style={styles.paragraph}>
            We believe in building long-term relationships based on trust, clear
            communication, and mutual respect. This document outlines the
            framework for our partnership, but the real value comes from how we
            work together day to day.
          </Text>
          <Text style={styles.paragraph}>
            Thank you for considering Anotik as your technical partner. We look
            forward to the opportunity to work together and support your
            business success.
          </Text>
        </View>

        {/* Acceptance Record */}
        <View style={[styles.section, { justifySelf: "end" }]}>
          <Text style={styles.sectionTitle}>Acceptance Record</Text>
          <View style={styles.acceptanceBox}>
            <View style={styles.acceptanceRow}>
              <Text style={styles.acceptanceLabel}>Client Name:</Text>
              <Text style={styles.acceptanceValue}>
                {clientName || "Mohammed Alenezi"}
              </Text>
            </View>
            <View style={styles.acceptanceRow}>
              <Text style={styles.acceptanceLabel}>Accepted By:</Text>
              <Text style={styles.acceptanceValue}>
                {clientName || "[To be recorded upon acceptance]"}
              </Text>
            </View>
            <View style={styles.acceptanceRow}>
              <Text style={styles.acceptanceLabel}>Client Email:</Text>
              <Text style={styles.acceptanceValue}>
                Mohammed@duelingarea.com
              </Text>
            </View>
            <View style={styles.acceptanceRow}>
              <Text style={styles.acceptanceLabel}>Monthly Retainer:</Text>
              <Text style={styles.acceptanceValue}>500 KD / month</Text>
            </View>
            <View style={styles.acceptanceRow}>
              <Text style={styles.acceptanceLabel}>Date:</Text>
              <Text style={styles.acceptanceValue}>
                {acceptanceDate || "[To be recorded upon acceptance]"}
              </Text>
            </View>
          </View>
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
    // for some strange reason if we just use bottom: 0 it only renders on the 4th page and after but never before!
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
  header: {
    // position: "absolute",
    // top: 20,
    // left: 50,
    // right: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    borderBottomStyle: "solid",
    paddingBottom: 8,
  },
  headerText: {
    fontSize: 9,
    color: "#666",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
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
    width: 130,
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
  footer: {
    alignSelf: "center",
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
        fileName="Maintenance_Proposal_Dueling_Area.pdf"
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
