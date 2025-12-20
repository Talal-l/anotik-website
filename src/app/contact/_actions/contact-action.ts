"use server";

import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  solution?: string;
  message: string;
};

type ActionResult = {
  success: boolean;
  message: string;
};

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, "");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendContactEmail(data: ContactFormData): Promise<void> {
  const user = process.env.ZOHO_EMAIL_USER;
  const password = process.env.ZOHO_EMAIL_PASSWORD;

  if (!user || !password) {
    throw new Error(
      "Zoho email credentials are not configured. Please set ZOHO_EMAIL_USER and ZOHO_EMAIL_PASSWORD environment variables."
    );
  }

  const recipientEmail = process.env.CONTACT_EMAIL_RECIPIENT || user;

  if (!recipientEmail) {
    throw new Error(
      "Contact email recipient is not configured. Please set CONTACT_EMAIL_RECIPIENT environment variable."
    );
  }

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
    from: `"${escapeHtml(data.name)}" <${user}>`,
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

export async function submitContactForm(
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

    const name = sanitizeInput((formData.get("name") as string) || "");
    const email = sanitizeInput((formData.get("email") as string) || "");
    const phone = sanitizeInput((formData.get("phone") as string) || "");
    const company = sanitizeInput((formData.get("company") as string) || "");
    const solution = sanitizeInput((formData.get("solution") as string) || "");
    const message = sanitizeInput((formData.get("message") as string) || "");

    if (!name || name.length < 2) {
      return {
        success: false,
        message: "Please provide a valid name (at least 2 characters).",
      };
    }

    if (!email || !validateEmail(email)) {
      return {
        success: false,
        message: "Please provide a valid email address.",
      };
    }

    if (!phone || phone.length < 5) {
      return {
        success: false,
        message: "Please provide a valid phone number.",
      };
    }

    if (!message || message.length < 10) {
      return {
        success: false,
        message: "Please provide a message (at least 10 characters).",
      };
    }

    const contactData: ContactFormData = {
      name,
      email,
      phone,
      company: company || undefined,
      solution: solution || undefined,
      message,
    };

    await sendContactEmail(contactData);

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return {
      success: false,
      message: `An error occurred: ${errorMessage}. Please try again later.`,
    };
  }
}
