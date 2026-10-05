import { ContactSubmission, ProjectBriefSubmission } from './types';

// In-memory / buffer storage for recent submissions during runtime
const recentSubmissions: Array<{ type: 'contact' | 'brief'; data: unknown; timestamp: string }> = [];

/**
 * Saves a contact submission to optional database or webhook
 */
export async function saveContactSubmission(submission: ContactSubmission): Promise<{ saved: boolean; id: string }> {
  const id = `contact_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const record = {
    ...submission,
    id,
    submittedAt: submission.submittedAt || new Date().toISOString(),
  };

  recentSubmissions.push({ type: 'contact', data: record, timestamp: record.submittedAt });

  // Optional: Webhook dispatch (e.g. Hostinger custom PHP endpoint, Google Sheets, or Zapier)
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'contact_submission', payload: record }),
      });
    } catch (err) {
      console.warn('[DatabaseService] Optional webhook notification failed:', err);
    }
  }

  return { saved: true, id };
}

/**
 * Saves a project brief submission
 */
export async function saveProjectBriefSubmission(submission: ProjectBriefSubmission): Promise<{ saved: boolean; id: string }> {
  const id = `brief_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const record = {
    ...submission,
    id,
    submittedAt: submission.submittedAt || new Date().toISOString(),
  };

  recentSubmissions.push({ type: 'brief', data: record, timestamp: record.submittedAt });

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'project_brief_submission', payload: record }),
      });
    } catch (err) {
      console.warn('[DatabaseService] Optional webhook notification failed:', err);
    }
  }

  return { saved: true, id };
}

/**
 * Helper to inspect recent submissions (for internal admin/debugging)
 */
export function getRecentSubmissions() {
  return recentSubmissions;
}
