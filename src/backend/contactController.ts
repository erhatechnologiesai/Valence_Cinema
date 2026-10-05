import { ContactSubmission, ApiResponse } from './types';
import { sendContactEmail } from './emailService';
import { saveContactSubmission } from './databaseService';

export async function handleContactSubmission(body: unknown): Promise<{ status: number; body: ApiResponse }> {
  if (!body || typeof body !== 'object') {
    return {
      status: 400,
      body: {
        success: false,
        message: 'Invalid request body',
        error: 'Request payload must be a JSON object',
      },
    };
  }

  const payload = body as Partial<ContactSubmission>;

  // Basic validation
  if (!payload.name || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    return {
      status: 400,
      body: {
        success: false,
        message: 'Name is required',
        error: 'Missing name field',
      },
    };
  }

  if (!payload.email || typeof payload.email !== 'string' || !payload.email.includes('@')) {
    return {
      status: 400,
      body: {
        success: false,
        message: 'A valid email address is required',
        error: 'Invalid or missing email field',
      },
    };
  }

  if (!payload.message || typeof payload.message !== 'string' || payload.message.trim().length === 0) {
    return {
      status: 400,
      body: {
        success: false,
        message: 'Message cannot be empty',
        error: 'Missing message field',
      },
    };
  }

  const cleanData: ContactSubmission = {
    name: payload.name.trim(),
    email: payload.email.trim().toLowerCase(),
    company: payload.company ? String(payload.company).trim() : undefined,
    department: payload.department ? String(payload.department).trim() : 'General Inquiry',
    message: payload.message.trim(),
    source: payload.source || 'Poppy Productions Website',
    submittedAt: new Date().toISOString(),
  };

  try {
    // 1. Save to database / webhook
    const dbResult = await saveContactSubmission(cleanData);

    // 2. Dispatch email via Hostinger SMTP / nodemailer
    const emailResult = await sendContactEmail(cleanData);

    return {
      status: 200,
      body: {
        success: true,
        message: emailResult.simulated
          ? 'Inquiry received successfully (simulation mode active).'
          : 'Inquiry dispatched to Poppy Productions executive team.',
        data: {
          submissionId: dbResult.id,
          sent: emailResult.sent,
        },
      },
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown server error';
    console.error('[ContactController] Error processing inquiry:', err);

    return {
      status: 500,
      body: {
        success: false,
        message: 'Failed to process inquiry. Please try again or reach out directly.',
        error: errorMsg,
      },
    };
  }
}
