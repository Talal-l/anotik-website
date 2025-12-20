"use server";

import nodemailer from "nodemailer";

const createTransporter = () => {
  const user = process.env.ZOHO_EMAIL_USER;
  const password = process.env.ZOHO_EMAIL_PASSWORD;

  if (!user || !password) {
    throw new Error(
      "Zoho email credentials are not configured. Please set ZOHO_EMAIL_USER and ZOHO_EMAIL_PASSWORD environment variables."
    );
  }

  return nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false,
    auth: {
      user,
      pass: password,
    },
  });
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  solution?: string;
  message: string;
}): Promise<void> {
  const transporter = createTransporter();
  const recipientEmail = process.env.CONTACT_EMAIL_RECIPIENT || process.env.ZOHO_EMAIL_USER;

  if (!recipientEmail) {
    throw new Error(
      "Contact email recipient is not configured. Please set CONTACT_EMAIL_RECIPIENT environment variable."
    );
  }

  const emailContent = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.company ? `Company: ${data.company}` : ""}
${data.solution ? `Solution: ${data.solution}` : ""}

Message:
${data.message}
  `.trim();

  await transporter.sendMail({
    from: `"${escapeHtml(data.name)}" <${process.env.ZOHO_EMAIL_USER}>`,
    replyTo: data.email,
    to: recipientEmail,
    subject: `New Contact Form Submission from ${data.name}`,
    text: emailContent,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></p>
          ${data.company ? `<p><strong>Company:</strong> ${escapeHtml(data.company)}</p>` : ""}
          ${data.solution ? `<p><strong>Solution:</strong> ${escapeHtml(data.solution)}</p>` : ""}
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
        </div>
      </div>
    `,
  });
}
