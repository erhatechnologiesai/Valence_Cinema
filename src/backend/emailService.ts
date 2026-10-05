import nodemailer from 'nodemailer';
import { ContactSubmission, ProjectBriefSubmission } from './types';

// Hostinger SMTP defaults
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.hostinger.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
const SMTP_SECURE = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : SMTP_PORT === 465;
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASSWORD || process.env.SMTP_PASS || '';
const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || 'info@poppyproductions.pk';

/**
 * Creates Nodemailer transporter configured for Hostinger SMTP
 */
function createTransporter() {
  if (!SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

/**
 * Sends a contact inquiry email to the production team and an acknowledgment to client
 */
export async function sendContactEmail(data: ContactSubmission) {
  const transporter = createTransporter();

  if (!transporter) {
    console.warn(
      '[Backend EmailService] SMTP credentials not configured in environment variables. Inquiry received in simulation mode:',
      data
    );
    return {
      sent: true,
      simulated: true,
      note: 'SMTP not configured yet; inquiry recorded successfully.',
    };
  }

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; background-color: #0c0c0e; color: #ffffff; padding: 32px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #27272a;">
      <div style="border-bottom: 2px solid #FF5E3A; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">
          Poppy <span style="color: #FF5E3A;">Productions</span>
        </h1>
        <p style="color: #a1a1aa; font-size: 13px; margin: 6px 0 0 0;">New Contact Inquiry Received via Website</p>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 10px 0; color: #a1a1aa; font-size: 13px; width: 140px; font-weight: bold; text-transform: uppercase;">Full Name:</td>
          <td style="padding: 10px 0; color: #ffffff; font-size: 15px; font-weight: bold;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #a1a1aa; font-size: 13px; font-weight: bold; text-transform: uppercase;">Email:</td>
          <td style="padding: 10px 0; color: #FF5E3A; font-size: 15px;">
            <a href="mailto:${data.email}" style="color: #FF5E3A; text-decoration: none;">${data.email}</a>
          </td>
        </tr>
        ${data.company ? `
        <tr>
          <td style="padding: 10px 0; color: #a1a1aa; font-size: 13px; font-weight: bold; text-transform: uppercase;">Company / Brand:</td>
          <td style="padding: 10px 0; color: #ffffff; font-size: 15px;">${data.company}</td>
        </tr>` : ''}
        ${data.department ? `
        <tr>
          <td style="padding: 10px 0; color: #a1a1aa; font-size: 13px; font-weight: bold; text-transform: uppercase;">Department:</td>
          <td style="padding: 10px 0; color: #e4e4e7; font-size: 14px;">${data.department}</td>
        </tr>` : ''}
        <tr>
          <td style="padding: 10px 0; color: #a1a1aa; font-size: 13px; font-weight: bold; text-transform: uppercase;">Date / Time:</td>
          <td style="padding: 10px 0; color: #a1a1aa; font-size: 13px;">${data.submittedAt || new Date().toLocaleString()}</td>
        </tr>
      </table>

      <div style="background-color: #18181b; padding: 20px; border-radius: 8px; border-left: 4px solid #FF5E3A; margin-bottom: 24px;">
        <h3 style="margin: 0 0 10px 0; color: #FF5E3A; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Message / Brief</h3>
        <p style="margin: 0; color: #e4e4e7; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
      </div>

      <div style="border-top: 1px solid #27272a; padding-top: 16px; font-size: 11px; color: #71717a; text-align: center;">
        Sent automatically from Poppy Productions website contact portal.
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Poppy Productions Contact Portal" <${SMTP_USER}>`,
    to: RECEIVER_EMAIL,
    replyTo: data.email,
    subject: `[New Inquiry] ${data.department || 'Contact'}: ${data.name} ${data.company ? `(${data.company})` : ''}`,
    html: htmlContent,
  });

  return { sent: true, simulated: false };
}

/**
 * Sends a detailed project commission brief email
 */
export async function sendProjectBriefEmail(data: ProjectBriefSubmission) {
  const transporter = createTransporter();

  if (!transporter) {
    console.warn(
      '[Backend EmailService] SMTP credentials not configured. Project brief received in simulation mode:',
      data
    );
    return {
      sent: true,
      simulated: true,
      note: 'SMTP not configured yet; project brief recorded successfully.',
    };
  }

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; background-color: #0c0c0e; color: #ffffff; padding: 32px; border-radius: 12px; max-width: 650px; margin: 0 auto; border: 1px solid #27272a;">
      <div style="border-bottom: 2px solid #FF5E3A; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; text-transform: uppercase;">
          Poppy <span style="color: #FF5E3A;">Productions</span>
        </h1>
        <p style="color: #a1a1aa; font-size: 13px; margin: 6px 0 0 0;">New Project Commission Brief Submitted</p>
      </div>

      <h2 style="font-size: 16px; color: #FF5E3A; text-transform: uppercase; margin: 0 0 12px 0;">Client Information</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; background-color: #18181b; padding: 16px; border-radius: 8px;">
        <tr>
          <td style="padding: 8px 12px; color: #a1a1aa; font-size: 13px; width: 140px; font-weight: bold;">Full Name:</td>
          <td style="padding: 8px 12px; color: #ffffff; font-size: 15px; font-weight: bold;">${data.contact.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; color: #a1a1aa; font-size: 13px; font-weight: bold;">Email:</td>
          <td style="padding: 8px 12px; color: #FF5E3A; font-size: 15px;">
            <a href="mailto:${data.contact.email}" style="color: #FF5E3A; text-decoration: none;">${data.contact.email}</a>
          </td>
        </tr>
        ${data.contact.phone ? `
        <tr>
          <td style="padding: 8px 12px; color: #a1a1aa; font-size: 13px; font-weight: bold;">Phone / WhatsApp:</td>
          <td style="padding: 8px 12px; color: #ffffff; font-size: 14px;">${data.contact.phone}</td>
        </tr>` : ''}
        ${data.contact.company ? `
        <tr>
          <td style="padding: 8px 12px; color: #a1a1aa; font-size: 13px; font-weight: bold;">Brand / Company:</td>
          <td style="padding: 8px 12px; color: #ffffff; font-size: 14px;">${data.contact.company}</td>
        </tr>` : ''}
      </table>

      <h2 style="font-size: 16px; color: #FF5E3A; text-transform: uppercase; margin: 0 0 12px 0;">Project Scope</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; color: #a1a1aa; font-size: 13px; width: 140px; font-weight: bold;">Budget Bracket:</td>
          <td style="padding: 8px 0; color: #22c55e; font-size: 14px; font-weight: bold;">${data.budget || 'Not specified'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #a1a1aa; font-size: 13px; font-weight: bold;">Target Timeline:</td>
          <td style="padding: 8px 0; color: #e4e4e7; font-size: 14px;">${data.timeline || 'Flexible'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #a1a1aa; font-size: 13px; font-weight: bold; vertical-align: top;">Required Services:</td>
          <td style="padding: 8px 0; color: #ffffff; font-size: 14px;">
            ${(data.services || []).map((s) => `<span style="display: inline-block; background-color: #27272a; border: 1px solid #3f3f46; padding: 4px 8px; border-radius: 4px; margin-right: 6px; margin-bottom: 6px; font-size: 12px;">${s}</span>`).join('')}
          </td>
        </tr>
      </table>

      ${data.contact.projectDetails ? `
      <div style="background-color: #18181b; padding: 20px; border-radius: 8px; border-left: 4px solid #FF5E3A; margin-bottom: 24px;">
        <h3 style="margin: 0 0 10px 0; color: #FF5E3A; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Creative Vision & Specifics</h3>
        <p style="margin: 0; color: #e4e4e7; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.contact.projectDetails}</p>
      </div>` : ''}

      <div style="border-top: 1px solid #27272a; padding-top: 16px; font-size: 11px; color: #71717a; text-align: center;">
        Submitted via Poppy Productions Commission Portal • ${data.submittedAt || new Date().toLocaleString()}
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Poppy Productions Brief Portal" <${SMTP_USER}>`,
    to: RECEIVER_EMAIL,
    replyTo: data.contact.email,
    subject: `[Project Brief] ${data.contact.fullName} - ${data.budget || 'Production Inquiry'}`,
    html: htmlContent,
  });

  return { sent: true, simulated: false };
}
