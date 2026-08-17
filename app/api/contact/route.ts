import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { parseContactBody } from '@/lib/contact-schema';
import { sanitizeForEmail, sanitizeString } from '@/lib/sanitize';
import { isRateLimited, cleanupExpired } from '@/lib/rate-limit';

const RECIPIENT_EMAIL = 'alan@aosentertainment.ie';
const MIN_SUBMIT_TIME_MS = 3000; // 3 seconds

function getOriginHost(headers: Headers): string | null {
  const origin = headers.get('origin');
  if (!origin) return null;
  try {
    return new URL(origin).host;
  } catch {
    return null;
  }
}

function isAllowedOrigin(headers: Headers): boolean {
  const host = getOriginHost(headers);
  if (!host) return true; // No origin (e.g. form POST from same origin) is allowed
  let allowedHost: string;
  try {
    allowedHost = process.env.NEXT_PUBLIC_APP_URL
      ? new URL(process.env.NEXT_PUBLIC_APP_URL).host
      : process.env.VERCEL_URL ?? 'localhost:3000';
  } catch {
    allowedHost = 'localhost:3000';
  }
  return host === allowedHost || host.endsWith('.' + allowedHost);
}

export async function POST(request: NextRequest) {
  cleanupExpired();

  if (request.method !== 'POST') {
    return NextResponse.json(
      { success: false, message: 'There was a problem submitting your enquiry. Please try again.' },
      { status: 405 }
    );
  }

  const origin = request.headers.get('origin');
  if (origin && !isAllowedOrigin(request.headers)) {
    console.warn('[Contact] Rejected cross-origin submission from:', origin);
    return NextResponse.json(
      { success: false, message: 'There was a problem submitting your enquiry. Please try again.' },
      { status: 400 }
    );
  }

  if (isRateLimited(request.headers)) {
    console.warn('[Contact] Rate limit exceeded for IP');
    return NextResponse.json(
      { success: false, message: 'There was a problem submitting your enquiry. Please try again.' },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'There was a problem submitting your enquiry. Please try again.' },
      { status: 400 }
    );
  }

  if (body !== null && typeof body !== 'object') {
    return NextResponse.json(
      { success: false, message: 'There was a problem submitting your enquiry. Please try again.' },
      { status: 400 }
    );
  }

  const raw = body as Record<string, unknown>;

  // Honeypot: if filled, pretend success and do nothing
  const honeypot = raw?.website ?? raw?.company ?? raw?._honeypot;
  if (honeypot !== undefined && honeypot !== null && String(honeypot).trim() !== '') {
    console.warn('[Contact] Honeypot triggered');
    return NextResponse.json({ success: true, message: 'Your enquiry has been sent.' });
  }

  // Time check: submitted too fast = likely bot
  const ts = raw?._timestamp;
  const submittedAt = typeof ts === 'number' ? ts : typeof ts === 'string' ? parseInt(ts, 10) : NaN;
  if (!Number.isNaN(submittedAt) && Date.now() - submittedAt < MIN_SUBMIT_TIME_MS) {
    console.warn('[Contact] Submission too fast (possible bot)');
    return NextResponse.json({ success: true, message: 'Your enquiry has been sent.' });
  }

  const parsed = parseContactBody(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: parsed.error },
      { status: 400 }
    );
  }

  const { data } = parsed;
  const name = sanitizeString(sanitizeForEmail(data.name), 100);
  const email = sanitizeString(sanitizeForEmail(data.email), 255);
  const eventType = sanitizeString(sanitizeForEmail(data.eventType), 100);
  const eventDate = sanitizeString(sanitizeForEmail(data.eventDate), 50);
  const message = sanitizeString(sanitizeForEmail(data.message), 2000);

  const host = process.env.EMAIL_HOST;
  const port = process.env.EMAIL_PORT;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!host || !port || !user || !pass) {
    console.error('[Contact] SMTP not configured (EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS required)');
    return NextResponse.json(
      { success: false, message: 'There was a problem submitting your enquiry. Please try again.' },
      { status: 500 }
    );
  }

  const fromEmail = process.env.EMAIL_FROM ?? user;
  const fromName = process.env.EMAIL_FROM_NAME ?? 'AOS Entertainment Contact';

  const emailBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Event Type: ${eventType}`,
    `Event Date: ${eventDate}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const subject = `Enquiry from ${name} – ${eventType} – ${eventDate}`.slice(0, 200);

  try {
    const portNum = parseInt(port, 10);
    if (Number.isNaN(portNum)) {
      console.error('[Contact] Invalid EMAIL_PORT');
      return NextResponse.json(
        { success: false, message: 'There was a problem submitting your enquiry. Please try again.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port: portNum,
      secure: portNum === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `${fromName} <${fromEmail}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject,
      text: emailBody,
    });

    return NextResponse.json({ success: true, message: 'Your enquiry has been sent.' });
  } catch (err) {
    console.error('[Contact] Send failed:', err);
    return NextResponse.json(
      { success: false, message: 'There was a problem submitting your enquiry. Please try again.' },
      { status: 500 }
    );
  }
}
