import { NextRequest, NextResponse } from 'next/server';
import { handleProjectBriefSubmission } from '@/backend/projectController';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await handleProjectBriefSubmission(body);
    return NextResponse.json(result.body, { status: result.status });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Invalid JSON input';
    return NextResponse.json(
      { success: false, message: 'Invalid request', error: errorMsg },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { status: 'active', service: 'Poppy Productions Project Brief API' },
    { status: 200 }
  );
}
