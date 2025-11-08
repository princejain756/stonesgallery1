import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, phone, projectType, notes } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: 'Name and email are required.' }, { status: 400 });
    }

    console.info('New Stones Gallery lead', { name, email, phone, projectType, notes });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Lead capture failed', error);
    return NextResponse.json({ ok: false, error: 'Unable to submit lead at this time.' }, { status: 500 });
  }
}
