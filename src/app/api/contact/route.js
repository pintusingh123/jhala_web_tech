import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, projectType, budget, message, honeypot } = data;

    // Spam prevention trap: if bot filled honeypot, return success silently
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Inquiry processed' });
    }

    // Server-side validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and phone/WhatsApp number are required.' },
        { status: 400 }
      );
    }

    // Structured lead object
    const lead = {
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      projectType: projectType || 'Web / Mobile Development',
      budget: budget || 'Flexible',
      message: message ? String(message).trim() : 'No additional message provided',
      timestamp: new Date().toISOString(),
      source: 'JhalaWebTech Next.js Website Contact Form',
    };

    // If webhook or email service configured in environment variables, trigger dispatch
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(lead),
        });
      } catch (err) {
        console.error('Lead webhook dispatch failed:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your project details have been received. Lead Engineer will contact you within 24 hours.',
      leadId: `JWT-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process inquiry. Please chat directly on WhatsApp.' },
      { status: 500 }
    );
  }
}
