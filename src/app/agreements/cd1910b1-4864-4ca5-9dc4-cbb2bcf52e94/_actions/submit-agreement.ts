"use server";

import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import React from "react";
import { AgreementEmail } from "../_components/agreement-email";

type AgreementSubmissionData = {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  developmentFee: string;
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
  const kuwaitTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kuwait" }),
  );
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

async function sendAgreementEmails(
  data: AgreementSubmissionData,
  pdfFile: File | null,
): Promise<void> {
  const user = process.env.ZOHO_EMAIL_USER;
  const password = process.env.ZOHO_EMAIL_PASSWORD;

  if (!user || !password) {
    throw new Error(
      "Zoho email credentials are not configured. Please set ZOHO_EMAIL_USER and ZOHO_EMAIL_PASSWORD environment variables.",
    );
  }

  const internalRecipient =
    process.env.AGREEMENT_EMAIL_RECIPIENT ||
    process.env.CONTACT_EMAIL_RECIPIENT ||
    user;
  const agreementUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://anotik.com"
  }/agreements/cd1910b1-4864-4ca5-9dc4-cbb2bcf52e94`;
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
Proposal Accepted - ${data.clientName}

Client Name: ${data.clientName}
Client Email: ${data.clientEmail}
Client Phone: ${data.clientPhone}
Development Fee: ${data.developmentFee}
Accepted: ${data.accepted ? "Yes" : "No"}
Timestamp: ${timestamp}
Proposal URL: ${agreementUrl}
  `.trim();

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Proposal Accepted - ${escapeHtml(data.clientName)}</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <p><strong>Client Name:</strong> ${escapeHtml(data.clientName)}</p>
        <p><strong>Client Email:</strong> <a href="mailto:${escapeHtml(data.clientEmail)}">${escapeHtml(data.clientEmail)}</a></p>
        <p><strong>Client Phone:</strong> ${escapeHtml(data.clientPhone)}</p>
        <p><strong>Development Fee:</strong> ${escapeHtml(data.developmentFee)}</p>
        <p><strong>Accepted:</strong> ${data.accepted ? "Yes" : "No"}</p>
        <p><strong>Timestamp:</strong> ${escapeHtml(timestamp)}</p>
        <p><strong>Proposal URL:</strong> <a href="${escapeHtml(agreementUrl)}">${escapeHtml(agreementUrl)}</a></p>
      </div>
    </div>
  `;

  const clientEmailHtml = await render(
    React.createElement(AgreementEmail, {
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      developmentFee: data.developmentFee,
      timestamp,
      agreementUrl,
    }),
  );

  const pdfBuffer = pdfFile ? Buffer.from(await pdfFile.arrayBuffer()) : null;

  const pdfAttachment = pdfBuffer
    ? {
        filename: "Real_Estate_Platform_Proposal.pdf",
        content: pdfBuffer,
      }
    : null;

  await Promise.all([
    transporter.sendMail({
      from: `"Anotik" <${user}>`,
      replyTo: data.clientEmail,
      to: internalRecipient,
      subject: `Proposal Accepted - ${data.clientName}`,
      text: emailContent,
      html: htmlContent,
      attachments: pdfAttachment ? [pdfAttachment] : [],
    }),
    transporter.sendMail({
      from: `"Anotik" <${user}>`,
      replyTo: user,
      to: data.clientEmail,
      subject: `Proposal Confirmation - Anotik`,
      text: `Dear ${data.clientName},\n\nThank you for accepting the proposal. We're excited to work with you!\n\nProposal Details:\n- Development Fee: ${data.developmentFee}\n- Accepted: ${timestamp}\n\nA copy of your signed proposal has been attached to this email for your records.\n\nYou can view the proposal at: ${agreementUrl}\n\nBest regards,\nAnotik Team`,
      html: clientEmailHtml,
      attachments: pdfAttachment ? [pdfAttachment] : [],
    }),
  ]);
}

export async function submitAgreement(
  prevState: ActionResult | null,
  formData: FormData | null,
): Promise<ActionResult> {
  try {
    if (!formData || !(formData instanceof FormData)) {
      return {
        success: false,
        message: "Invalid form data. Please try again.",
      };
    }

    const accepted = formData.get("accepted") === "on";
    const clientName = (formData.get("clientName") as string)?.trim();
    const clientEmail = (formData.get("clientEmail") as string)?.trim();
    const clientPhone = (formData.get("clientPhone") as string)?.trim();

    if (!clientName) {
      return {
        success: false,
        message: "Please type your full name to proceed.",
      };
    }

    if (!clientEmail) {
      return {
        success: false,
        message: "Please provide your email address to proceed.",
      };
    }

    if (!clientPhone) {
      return {
        success: false,
        message: "Please provide your phone number to proceed.",
      };
    }

    if (!accepted) {
      return {
        success: false,
        message: "Please accept the proposal terms to proceed.",
      };
    }

    const pdfFile = formData.get("pdf") as File | null;

    const agreementData: AgreementSubmissionData = {
      clientName,
      clientEmail,
      clientPhone,
      developmentFee: "1,950 KWD",
      accepted: true,
    };

    await sendAgreementEmails(agreementData, pdfFile);

    console.log(
      `Proposal accepted by ${agreementData.clientName} at ${getKuwaitTime()}`,
    );

    return {
      success: true,
      message:
        "Proposal submitted successfully! Confirmation emails have been sent.",
    };
  } catch (error) {
    console.error("Proposal submission error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return {
      success: false,
      message: `An error occurred: ${errorMessage}. Please try again later.`,
    };
  }
}
