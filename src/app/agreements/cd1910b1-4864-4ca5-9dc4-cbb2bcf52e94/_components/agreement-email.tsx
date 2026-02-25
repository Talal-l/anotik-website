import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AgreementEmailProps {
  clientName: string;
  clientEmail: string;
  developmentFee: string;
  timestamp: string;
  agreementUrl: string;
}

export const AgreementEmail = ({
  clientName,
  clientEmail,
  developmentFee,
  timestamp,
  agreementUrl,
}: AgreementEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for accepting the proposal. We're excited to work with you!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>Proposal Confirmation</Heading>
          </Section>
          <Section style={content}>
            <Text style={text}>Dear {clientName},</Text>
            <Text style={text}>
              Thank you for accepting the proposal. We're excited to work with you on your real estate listing platform!
            </Text>
            <Section style={detailsBox}>
              <Text style={detailsTitle}>Proposal Details</Text>
              <Text style={detailsText}>
                <strong>Client Name:</strong> {clientName}
              </Text>
              <Text style={detailsText}>
                <strong>Email:</strong> {clientEmail}
              </Text>
              <Text style={detailsText}>
                <strong>Development Fee:</strong> {developmentFee}
              </Text>
              <Text style={detailsText}>
                <strong>Accepted:</strong> {timestamp}
              </Text>
            </Section>
            <Text style={text}>
              A copy of your signed proposal has been attached to this email for your records.
            </Text>
            <Text style={text}>
              You can also view the proposal online at:{" "}
              <Link href={agreementUrl} style={link}>
                {agreementUrl}
              </Link>
            </Text>
            <Text style={text}>
              <strong>Next Steps:</strong> Our team will contact you shortly to begin Phase 0 — requirements gathering and design prototyping. We'll work together to ensure alignment on all project details before development begins.
            </Text>
            <Text style={text}>
              If you have any questions or need to discuss any aspect of the proposal, please don't hesitate to reach out to us.
            </Text>
            <Text style={text}>
              Best regards,<br />
              <strong>Anotik Team</strong><br />
              Phone: +965 6626 4368<br />
              Email: info@anotik.com
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const header = {
  padding: "32px 24px",
  borderBottom: "1px solid #e6ebf1",
};

const h1 = {
  color: "#1a1a1a",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.3",
  margin: "0",
};

const content = {
  padding: "24px",
};

const text = {
  color: "#333333",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 16px 0",
};

const detailsBox = {
  backgroundColor: "#f8f9fa",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  padding: "20px",
  margin: "24px 0",
};

const detailsTitle = {
  color: "#1a1a1a",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 12px 0",
};

const detailsText = {
  color: "#333333",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 8px 0",
};

const link = {
  color: "#0066cc",
  textDecoration: "underline",
};
