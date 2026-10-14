"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const senderName = formData.get("senderName") || "Prospective Client";
  const serviceType = formData.get("serviceType") || "General Inquiry";

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email address",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message content",
    };
  }

  // If Resend API key is not yet configured in environment variables, handle gracefully
  if (!resend) {
    console.log("Contact form submission received (Dev mode):", {
      senderName,
      senderEmail,
      serviceType,
      message,
    });
    return {
      data: { id: "dev-mock-success" },
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "saurabh.pandeyy24@gmail.com",
      subject: `New Inquiry from ${senderName} [${serviceType}]`,
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: `${message}\n\n[Service Required: ${serviceType}]`,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
