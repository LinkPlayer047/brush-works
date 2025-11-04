import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, service, message } = await req.json();

    // ✅ MongoDB Connection
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db("contactDB");
    const collection = db.collection("messages");

    await collection.insertOne({
      name,
      email,
      service,
      message,
      createdAt: new Date(),
    });

    // ✅ Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: `
      📩 New Message from Website:

      Name: ${name}
      Email: ${email}
      Service: ${service}
      Message: ${message}
      `,
    });

    client.close();

    return NextResponse.json(
      { message: "✅ Message received successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "❌ Something went wrong!", error },
      { status: 500 }
    );
  }
}
