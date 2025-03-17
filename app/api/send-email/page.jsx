"use strict";
const nodemailer = require("nodemailer");



export default async function handler(req, res) {
  try {
    
  
    const body = req.body;

    console.log("Request Body:", req);

    if (req.method !== "POST") {
      res.status(405).end(); // Only allow POST requests
      return;
    }

    const { firstName, lastName, email, question, file } = body;

    // Create a nodemailer transporter with your email configuration
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "hgswmrg@gmail.com", // generated ethereal user
        pass: "HydroGeoScience1", // generated ethereal password
      },
    });

    // Compose the email message
    const message = {
      from: "tanyabansal2203@gmail.com",
      to: "hgswmrg@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Question: ${question}</p>
      `,
      attachments: [
        {
          filename: file ? file.name : null,
          content: file ? file.data : null,
        },
      ],
    };

    // Send the email
    await transporter.sendMail(message);
    console.log("Email sent successfully");
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    if (res) {
      res.statusCode = 500;
      res.json({ error: "Failed to send email" });
    }
  }
}

export const dynamic = 'auto';
// 'auto' | 'force-dynamic' | 'error' | 'force-static'