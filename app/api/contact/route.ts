import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, industry, message } = await request.json();

    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Industry:', industry);
    console.log('Message:', message);
    const transporter = nodemailer.createTransport({
      host: "smtp.bizmail.yahoo.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.TURBIFY_EMAIL,
        pass: process.env.TURBIFY_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.TURBIFY_EMAIL,
      to: "savanitransportspvtlimited@yahoo.in",
      subject: "New Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Industry: ${industry}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail Error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
} 