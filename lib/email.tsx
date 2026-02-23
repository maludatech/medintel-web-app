import { Resend } from "resend";
import { render } from "@react-email/render";
import PasswordResetEmail from "@/emails/ResetPassword";
import WelcomeEmail from "@/emails/WelcomeEmail";
import { APP_NAME } from "./constants";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendResetEmail(email: string, resetUrl: string) {
  try {
    const emailHtml = await render(
      <PasswordResetEmail email={email} resetUrl={resetUrl} />,
      { pretty: true },
    );

    const response = await resend.emails.send({
      from: `${APP_NAME} <no-reply@driftfund.net>`,
      to: email,
      subject: `${APP_NAME} - Password Reset`,
      html: emailHtml,
    });

    console.log("Resend response:", response);

    return response;
  } catch (error: any) {
    console.error("Reset email error:", {
      message: error.message,
      status: error.status,
      response: error.response?.data,
    });
    throw new Error("Failed to send reset email");
  }
}

export async function sendWelcomeEmail(email: string, username: string) {
  try {
    const emailHtml = await render(
      <WelcomeEmail email={email} username={username} />,
      { pretty: true },
    );

    await resend.emails.send({
      from: `${APP_NAME} <no-reply@polomalbullish-remi.com>`,
      to: email,
      subject: `Welcome to ${APP_NAME}!`,
      html: emailHtml,
    });
  } catch (error) {
    console.error("Welcome email error:", error);
    throw new Error("Failed to send welcome email");
  }
}
