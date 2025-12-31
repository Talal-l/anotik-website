"use client";

import { useActionState, useRef, useEffect, useState } from "react";
import { submitAgreement } from "../_actions/submit-agreement";
import dynamic from "next/dynamic";

const AgreementPDF = dynamic(() => import("./agreement-pdf"), {
  ssr: false,
  loading: () => <div>Loading PDF component...</div>,
});

function getKuwaitTime(): string {
  const now = new Date();
  return now.toLocaleString("en-US", {
    timeZone: "Asia/Kuwait",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

export default function AgreementContent() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(submitAgreement, {
    success: false,
    message: "",
  });
  const [printTimestamp, setPrintTimestamp] = useState<string>("");

  useEffect(() => {
    if (state.success && formRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const acceptanceTime = getKuwaitTime();
      setPrintTimestamp(acceptanceTime);
      const timestampElement = document.getElementById("print-timestamp");
      if (timestampElement) {
        timestampElement.textContent = acceptanceTime;
      }
    }
  }, [state.success]);

  useEffect(() => {
    const initialTime = getKuwaitTime();
    setPrintTimestamp(initialTime);
    const timestampElement = document.getElementById("print-timestamp");
    if (timestampElement && !state.success) {
      timestampElement.textContent = initialTime;
    }
  }, []);

  const handlePrint = () => {
    const timestampElement = document.getElementById("print-timestamp");
    if (timestampElement) {
      timestampElement.textContent = getKuwaitTime();
    }
  };

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
                    Maintenance Proposal For Dueling Area
                  </h2>
                </div>
              </div>
              <div className="proposal-meta">
                <div className="meta-item">
                  <span className="meta-label">Proposal ID:</span>
                  <span className="meta-value">
                    1e6c2b6a-6b5f-4f0a-9e55-9f3d3f2a0c7d
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
              </div>
            </div>

            <div className="agreement-sections">
              <div className="agreement-section">
                <h3 className="agreement-section-title">Client Information</h3>
                <div className="engagement-summary">
                  <div className="summary-item">
                    <span className="summary-label">
                      Client Name / Company:
                    </span>
                    <span className="summary-value">Mohammed Alenezi</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Email Address:</span>
                    <span className="summary-value">
                      Mohammed@duelingarea.com
                    </span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Monthly Retainer:</span>
                    <span className="summary-value highlight">500 KD</span>
                  </div>
                </div>
                <p className="agreement-text">
                  Thank you for considering Anotik as your technical partner.
                  This proposal outlines our recommended approach to providing
                  ongoing technical services and maintenance for your digital
                  infrastructure. We're excited about the opportunity to support
                  your business and help you focus on growth while we handle the
                  technical details.
                </p>
              </div>

              <div className="agreement-section">
                <h3 className="agreement-section-title">1. Introduction</h3>
                <p className="agreement-text">
                  This Technical Services & Maintenance Agreement establishes
                  the framework for our ongoing partnership. Anotik will serve
                  as your dedicated technical partner, providing continuous
                  support, maintenance, and development services for your
                  digital infrastructure. We believe in building long-term
                  relationships based on mutual trust and clear expectations.
                  This document outlines how we'll work together to keep your
                  systems running smoothly, respond to your needs, and support
                  your business growth.
                </p>
                <p className="agreement-text">
                  Our approach is collaborative and flexible. We understand that
                  every business has unique needs, and we're committed to
                  adapting our services to best serve you. This agreement
                  reflects our commitment to transparency, quality service, and
                  a partnership mindset rather than a rigid vendor-client
                  relationship.
                </p>
              </div>

              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  2. Scope of Services
                </h3>
                <p className="agreement-text">
                  Anotik will provide ongoing technical services and maintenance
                  for your digital infrastructure. This includes but is not
                  limited to:
                </p>
                <ul className="agreement-list">
                  <li>
                    <strong>Website and System Maintenance:</strong> Regular
                    updates, security patches, performance monitoring, and
                    general upkeep of your websites and digital systems.
                  </li>
                  <li>
                    <strong>Third-Party Integrations:</strong> Management and
                    support for integrations with external services, APIs, and
                    platforms that your business relies on.
                  </li>
                  <li>
                    <strong>Mobile Application Support:</strong> Ongoing
                    maintenance, updates, and oversight for mobile applications,
                    including both iOS and Android platforms.
                  </li>
                  <li>
                    <strong>Backend Systems:</strong> Monitoring, maintenance,
                    and support for server infrastructure, databases, and
                    backend services.
                  </li>
                  <li>
                    <strong>Bahrain Branch Support:</strong> Technical support
                    for your Bahrain branch website and store operations,
                    ensuring consistent service across locations.
                  </li>
                  <li>
                    <strong>Minor Development and Fixes:</strong> Small updates,
                    bug fixes, and minor feature additions that fall within the
                    scope of regular maintenance work.
                  </li>
                </ul>
                <p className="agreement-text">
                  We'll work together to ensure all your technical needs are
                  addressed promptly and effectively. If you have specific
                  requirements or questions about what's included, we're always
                  happy to discuss and clarify.
                </p>
              </div>

              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  3. Support & Availability
                </h3>
                <p className="agreement-text">
                  Anotik commits to providing up to 24 hours of support per week
                  under this agreement. This time is dedicated to addressing
                  your maintenance needs, responding to requests, implementing
                  updates, and ensuring your systems remain operational and
                  secure.
                </p>
                <p className="agreement-text">
                  Our support includes proactive monitoring, regular maintenance
                  tasks, responding to your requests, troubleshooting issues,
                  and implementing improvements. We'll use our best judgment to
                  prioritize work based on urgency and impact, always keeping
                  your business needs in mind.
                </p>
                <p className="agreement-text">
                  <strong>Urgent Requests:</strong> For critical issues that
                  affect your business operations or security, we'll respond as
                  quickly as possible and work to resolve them in a reasonable
                  timeframe. We understand that some issues can't wait, and
                  we're committed to being responsive when it matters most.
                </p>
                <p className="agreement-text">
                  <strong>Non-Urgent Requests:</strong> For routine updates,
                  minor changes, and general maintenance tasks, we'll schedule
                  these within our regular workflow. We'll keep you informed
                  about progress and timelines so you always know what to
                  expect.
                </p>
              </div>

              <div className="agreement-section">
                <h3 className="agreement-section-title">4. Service Levels</h3>
                <p className="agreement-text">
                  To help us prioritize and manage requests effectively, we
                  categorize issues by severity. These are general guidelines
                  that help us allocate resources appropriately:
                </p>
                <div className="service-levels">
                  <div className="service-level">
                    <h4 className="service-level-title">Critical</h4>
                    <p className="service-level-desc">
                      Issues that completely prevent your business from
                      operating or pose immediate security risks. We'll respond
                      immediately and work continuously until resolved. Examples
                      include complete site outages, security breaches, or
                      payment system failures.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">High</h4>
                    <p className="service-level-desc">
                      Significant issues that impact major functionality but
                      don't completely halt operations. We'll respond within a
                      few hours and work to resolve within 1-2 business days.
                      Examples include major feature malfunctions or significant
                      performance degradation.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">Medium</h4>
                    <p className="service-level-desc">
                      Issues that affect some functionality but have workarounds
                      or don't significantly impact operations. We'll address
                      these within 2-3 business days. Examples include minor
                      feature bugs or non-critical integrations not working.
                    </p>
                  </div>
                  <div className="service-level">
                    <h4 className="service-level-title">Low</h4>
                    <p className="service-level-desc">
                      Minor issues, cosmetic problems, or enhancement requests
                      that don't impact functionality. We'll address these as
                      time permits, typically within 1-2 weeks. Examples include
                      styling adjustments or small UI improvements.
                    </p>
                  </div>
                </div>
                <p className="agreement-text">
                  These are our target response times based on best efforts. We
                  understand that every situation is unique, and we'll always
                  communicate with you about timelines and expectations. If
                  something needs faster attention, we'll work together to make
                  it happen.
                </p>
              </div>

              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  5. Communication & Requests
                </h3>
                <p className="agreement-text">
                  Clear communication is essential for a successful partnership.
                  We prefer to receive requests through email or our designated
                  communication channels, as this helps us track, prioritize,
                  and respond to everything systematically.
                </p>
                <p className="agreement-text">
                  When you submit a request, please provide as much detail as
                  possible about what you need. This helps us understand the
                  context, prioritize appropriately, and deliver exactly what
                  you're looking for. If something is urgent, please let us know
                  clearly so we can adjust our priorities accordingly.
                </p>
                <p className="agreement-text">
                  We'll keep you updated on progress, ask clarifying questions
                  when needed, and confirm completion of work. Our goal is to
                  make sure you always know what's happening and feel confident
                  that your needs are being addressed.
                </p>
              </div>

              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  6. Changes & Larger Work
                </h3>
                <p className="agreement-text">
                  Minor changes, bug fixes, and small updates are included in
                  the regular maintenance scope. This covers things like content
                  updates, small feature tweaks, styling adjustments, and
                  routine fixes that don't require significant development time.
                </p>
                <p className="agreement-text">
                  For larger projects, new features, major redesigns, or work
                  that requires substantial development time, we'll discuss the
                  requirements with you and provide a separate quote. This
                  ensures transparency about costs and timelines, and allows us
                  to plan and execute larger work properly.
                </p>
                <p className="agreement-text">
                  We'll always be upfront about what falls within the
                  maintenance scope and what would be considered additional
                  work. If you're unsure whether something is included, just
                  ask—we're happy to clarify.
                </p>
              </div>

              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  7. Third-Party Services
                </h3>
                <p className="agreement-text">
                  Your digital infrastructure likely relies on various
                  third-party services, platforms, and tools—payment processors,
                  hosting providers, APIs, content management systems, and more.
                  We'll support and manage these integrations to the best of our
                  ability.
                </p>
                <p className="agreement-text">
                  It's important to understand that while we can configure,
                  monitor, and troubleshoot these services, we don't control
                  their availability, pricing, or policies. If a third-party
                  service experiences downtime, changes its terms, or
                  discontinues a feature, we'll work with you to find solutions
                  and alternatives, but we can't guarantee the performance or
                  availability of services we don't operate.
                </p>
              </div>

              <div className="agreement-section">
                <h3 className="agreement-section-title">8. Security & Data</h3>
                <p className="agreement-text">
                  We take security seriously and follow industry best practices
                  to protect your systems and data. This includes regular
                  security updates, monitoring for vulnerabilities, implementing
                  appropriate access controls, and staying current with security
                  standards.
                </p>
                <p className="agreement-text">
                  However, it's important to understand that no system can be
                  100% secure, and the digital landscape is constantly evolving.
                  We commit to using our best efforts to maintain security, but
                  we can't guarantee absolute protection against all possible
                  threats. We'll work proactively to minimize risks and respond
                  quickly if security issues arise.
                </p>
                <p className="agreement-text">
                  You retain full ownership of all your data, content, and
                  intellectual property. We'll never claim ownership of your
                  materials, and we'll always respect your data privacy and
                  confidentiality.
                </p>
              </div>

              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  9. Pricing & Billing
                </h3>
                <p className="agreement-text">
                  Services under this agreement are provided on a monthly
                  retainer basis. The monthly fee of <strong>500 KD</strong>{" "}
                  covers up to 24 hours of support per week and includes all the
                  services outlined in this agreement.
                </p>
                <p className="agreement-text">
                  Invoicing is done monthly in advance, meaning you'll receive
                  an invoice at the beginning of each month for that month's
                  services. Payment terms are standard net 30 days, though we're
                  flexible if you need to discuss alternative arrangements.
                </p>
                <p className="agreement-text">
                  If additional work is requested that falls outside the scope
                  of regular maintenance, we'll provide a separate quote for
                  approval before beginning that work. This ensures transparency
                  and allows you to make informed decisions about additional
                  investments.
                </p>
              </div>

              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  10. Flexibility & Adjustments
                </h3>
                <p className="agreement-text">
                  We recognize that businesses evolve, and your technical needs
                  may change over time. This agreement is designed to be
                  flexible and adaptable. If you find that you need more or less
                  support, or if your priorities shift, we're happy to discuss
                  adjustments to the scope, hours, or services.
                </p>
                <p className="agreement-text">
                  We'll periodically review the agreement together to ensure it
                  continues to meet your needs. This might include discussing
                  how hours are being used, whether the scope needs to expand or
                  contract, and how we can better serve your business.
                </p>
                <p className="agreement-text">
                  Our goal is a partnership that grows and adapts with your
                  business. We're committed to being fair, reasonable, and
                  responsive to your changing needs.
                </p>
              </div>

              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  11. Termination & Transition
                </h3>
                <p className="agreement-text">
                  If either party wishes to end this agreement, we ask for 30
                  days' written notice. This gives us time to wrap up any
                  ongoing work, ensure a smooth transition, and provide you with
                  all necessary documentation and access.
                </p>
                <p className="agreement-text">
                  We're committed to making any transition as smooth as
                  possible. We'll provide documentation of your systems,
                  transfer access credentials, assist with knowledge transfer,
                  and help ensure continuity of service. Our goal is to leave
                  you in a good position, regardless of why the agreement ends.
                </p>
                <p className="agreement-text">
                  You'll retain full ownership of all your systems, data, and
                  content. We'll provide everything you need to continue
                  operating independently or transition to another provider.
                </p>
              </div>

              <div className="agreement-section">
                <h3 className="agreement-section-title">
                  12. Closing Statement
                </h3>
                <p className="agreement-text">
                  This agreement represents our commitment to being your trusted
                  technical partner. We're not just here to fix things when they
                  break—we're here to proactively maintain your systems, support
                  your growth, and ensure your technology works for you, not
                  against you.
                </p>
                <p className="agreement-text">
                  We believe in building long-term relationships based on trust,
                  clear communication, and mutual respect. This document
                  outlines the framework for our partnership, but the real value
                  comes from how we work together day to day.
                </p>
                <p className="agreement-text">
                  Thank you for considering Anotik as your technical partner. We
                  look forward to the opportunity to work together and support
                  your business success.
                </p>
              </div>

              <div
                className="agreement-section print-only"
                style={{ display: "none" }}
              >
                <h3 className="agreement-section-title">Acceptance Record</h3>
                <div className="acceptance-record">
                  <div className="record-item">
                    <span className="record-label">Client Name:</span>
                    <span className="record-value">Mohammed Alenezi</span>
                  </div>
                  <div className="record-item">
                    <span className="record-label">Client Email:</span>
                    <span className="record-value">
                      Mohammed@duelingarea.com
                    </span>
                  </div>
                  <div className="record-item">
                    <span className="record-label">Monthly Retainer:</span>
                    <span className="record-value">500 KD / month</span>
                  </div>
                  <div className="record-item">
                    <span className="record-label">
                      Date/Time of Acceptance:
                    </span>
                    <span className="record-value" id="print-timestamp">
                      {printTimestamp || "Not yet accepted"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="agreement-actions">
              <button
                type="button"
                onClick={handlePrint}
                className="rr-btn print-btn"
              >
                <span className="btn-wrap">
                  <span className="text-one">Print</span>
                  <span className="text-two">Print</span>
                </span>
              </button>
              <AgreementPDF />
            </div>

            <div className="agreement-acceptance">
              <form ref={formRef} action={formAction} id="agreement-form">
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
                      agreement.
                    </span>
                  </label>
                </div>
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
                {state.message && (
                  <div
                    className={`response-message ${state.success ? "success" : "error"}`}
                    style={{
                      marginTop: "20px",
                      padding: "12px",
                      borderRadius: "4px",
                      backgroundColor: state.success
                        ? "rgba(76, 175, 80, 0.1)"
                        : "rgba(244, 67, 54, 0.1)",
                      color: state.success ? "#4caf50" : "#f44336",
                      border: `1px solid ${
                        state.success ? "#4caf50" : "#f44336"
                      }`,
                    }}
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
