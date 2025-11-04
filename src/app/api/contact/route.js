import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

// ✅ MongoDB connect function
const connectMongo = async () => {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(process.env.MONGO_URI);
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    // ✅ Connect to MongoDB
    await connectMongo();

    // ✅ Email transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      text: `Email: ${email}\n\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
