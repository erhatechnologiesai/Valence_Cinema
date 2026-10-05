import { ProjectBriefSubmission, ApiResponse } from './types';
import { sendProjectBriefEmail } from './emailService';
import { saveProjectBriefSubmission } from './databaseService';

export async function handleProjectBriefSubmission(body: unknown): Promise<{ status: number; body: ApiResponse }> {
  if (!body || typeof body !== 'object') {
    return {
      status: 400,
      body: {
        success: false,
        message: 'Invalid request body',
        error: 'Payload must be an object',
      },
    };
  }

  const payload = body as Partial<ProjectBriefSubmission>;

  if (!payload.contact || !payload.contact.fullName || !payload.contact.email) {
    return {
      status: 400,
      body: {
        success: false,
        message: 'Full Name and Email are required to initiate a project brief',
        error: 'Missing contact info',
      },
    };
  }

  const cleanData: ProjectBriefSubmission = {
    projectType: payload.projectType || 'Commercial & Film Production',
    services: Array.isArray(payload.services) ? payload.services : [],
    budget: payload.budget || 'Custom Budget',
    timeline: payload.timeline || 'Flexible',
    contact: {
      fullName: payload.contact.fullName.trim(),
      email: payload.contact.email.trim().toLowerCase(),
      phone: payload.contact.phone ? String(payload.contact.phone).trim() : undefined,
      company: payload.contact.company ? String(payload.contact.company).trim() : undefined,
      projectDetails: payload.contact.projectDetails ? String(payload.contact.projectDetails).trim() : undefined,
    },
    submittedAt: new Date().toISOString(),
  };

  try {
    const dbResult = await saveProjectBriefSubmission(cleanData);
    const emailResult = await sendProjectBriefEmail(cleanData);

    return {
      status: 200,
      body: {
        success: true,
        message: 'Commission brief received successfully. A producer will contact you promptly.',
        data: {
          submissionId: dbResult.id,
          sent: emailResult.sent,
        },
      },
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown server error';
    console.error('[ProjectController] Error processing brief:', err);

    return {
      status: 500,
      body: {
        success: false,
        message: 'Failed to submit project brief. Please try again or reach out directly.',
        error: errorMsg,
      },
    };
  }
}
