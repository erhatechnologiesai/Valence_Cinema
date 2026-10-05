export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  department?: string;
  message: string;
  source?: string;
  submittedAt?: string;
}

export interface ProjectBriefSubmission {
  projectType?: string;
  services: string[];
  budget: string;
  timeline: string;
  contact: {
    fullName: string;
    email: string;
    phone?: string;
    company?: string;
    projectDetails?: string;
  };
  submittedAt?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
