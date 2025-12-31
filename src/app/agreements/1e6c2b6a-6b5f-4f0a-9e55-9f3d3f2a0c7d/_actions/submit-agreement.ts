"use server";

import nodemailer from "nodemailer";

type AgreementSubmissionData = {
  clientName: string;
  clientEmail: string;
  monthlyRetainer: string;
  accepted: boolean;
};

type ActionResult = {
  success: boolean;
  message: string;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getKuwaitTime(): string {
  const now = new Date();
  const kuwaitTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kuwait" }));
  return kuwaitTime.toLocaleString("en-US", {
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

async function sendAgreementEmails(data: AgreementSubmissionData): Promise<void> {
  const user = process.env.ZOHO_EMAIL_USER;
  const password = process.env.ZOHO_EMAIL_PASSWORD;

  if (!user || !password) {
    throw new Error(
      "Zoho email credentials are not configured. Please set ZOHO_EMAIL_USER and ZOHO_EMAIL_PASSWORD environment variables."
    );
  }

  const internalRecipient = process.env.AGREEMENT_EMAIL_RECIPIENT || process.env.CONTACT_EMAIL_RECIPIENT || user;
  const agreementUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://anotik.com"}/agreements/1e6c2b6a-6b5f-4f0a-9e55-9f3d3f2a0c7d`;
  const timestamp = getKuwaitTime();

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false,
    auth: {
      user,
      pass: password,
    },
  });

  const emailContent = `
Agreement Accepted - ${data.clientName}

Client Name: ${data.clientName}
Client Email: ${data.clientEmail}
Monthly Retainer: ${data.monthlyRetainer}
Accepted: ${data.accepted ? "Yes" : "No"}
Timestamp: ${timestamp}
Agreement URL: ${agreementUrl}
  `.trim();

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Agreement Accepted - ${escapeHtml(data.clientName)}</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <p><strong>Client Name:</strong> ${escapeHtml(data.clientName)}</p>
        <p><strong>Client Email:</strong> <a href="mailto:${escapeHtml(data.clientEmail)}">${escapeHtml(data.clientEmail)}</a></p>
        <p><strong>Monthly Retainer:</strong> ${escapeHtml(data.monthlyRetainer)}</p>
        <p><strong>Accepted:</strong> ${data.accepted ? "Yes" : "No"}</p>
        <p><strong>Timestamp:</strong> ${escapeHtml(timestamp)}</p>
        <p><strong>Agreement URL:</strong> <a href="${escapeHtml(agreementUrl)}">${escapeHtml(agreementUrl)}</a></p>
      </div>
    </div>
  `;

  await Promise.all([
    transporter.sendMail({
      from: `"Anotik" <${user}>`,
      replyTo: data.clientEmail,
      to: internalRecipient,
      subject: `Agreement Accepted - ${data.clientName}`,
      text: emailContent,
      html: htmlContent,
    }),
    transporter.sendMail({
      from: `"Anotik" <${user}>`,
      replyTo: user,
      to: data.clientEmail,
      subject: `Agreement Confirmation - Anotik`,
      text: `Dear ${data.clientName},\n\nThank you for accepting the agreement. We're excited to work with you!\n\nAgreement Details:\n- Monthly Retainer: ${data.monthlyRetainer}\n- Accepted: ${timestamp}\n\nYou can view the agreement at: ${agreementUrl}\n\nBest regards,\nAnotik Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Agreement Confirmation</h2>
          <p>Dear ${escapeHtml(data.clientName)},</p>
          <p>Thank you for accepting the agreement. We're excited to work with you!</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Agreement Details:</strong></p>
            <p>Monthly Retainer: ${escapeHtml(data.monthlyRetainer)}</p>
            <p>Accepted: ${escapeHtml(timestamp)}</p>
          </div>
          <p>You can view the agreement at: <a href="${escapeHtml(agreementUrl)}">${escapeHtml(agreementUrl)}</a></p>
          <p>Best regards,<br>Anotik Team</p>
        </div>
      `,
    }),
  ]);
}

export async function submitAgreement(
  prevState: ActionResult | null,
  formData: FormData | null
): Promise<ActionResult> {
  try {
    if (!formData || !(formData instanceof FormData)) {
      return {
        success: false,
        message: "Invalid form data. Please try again.",
      };
    }

    const accepted = formData.get("accepted") === "on";

    if (!accepted) {
      return {
        success: false,
        message: "Please accept the agreement terms to proceed.",
      };
    }

    const agreementData: AgreementSubmissionData = {
      clientName: "Mohammed Alenezi",
      clientEmail: "talal@anotik.com",
      monthlyRetainer: "500 KD",
      accepted: true,
    };

    await sendAgreementEmails(agreementData);

    console.log(`Agreement accepted by ${agreementData.clientName} at ${getKuwaitTime()}`);

    return {
      success: true,
      message: "Agreement submitted successfully! Confirmation emails have been sent.",
    };
  } catch (error) {
    console.error("Agreement submission error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return {
      success: false,
      message: `An error occurred: ${errorMessage}. Please try again later.`,
    };
  }
}

