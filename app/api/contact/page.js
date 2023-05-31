{/*const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Nodemailer docs: // https://nodemailer.com/about/
app.post("/api/contact", async (req, res) => {

  console.log(res)
  console.log(req.body);
  if (req.method === 'POST') {
    console.log(req.body);
  // https://nodemailer.com/smtp/
  const transporter = nodemailer.createTransport({
    service: 'smtp.gmail.com',
    auth: {
      user: process.env.email,
      pass: process.env.SMTP_PASS,
    },
    secure: false, // Default value but showing for explicitness
  });
  
  const {firstName, lastName, email, question } = req.body;

  if (!firstName || !lastName || !email || !question) {
    return res.status(400).json({ message: 'Please fill out the necessary fields' });
  }
  
  // https://nodemailer.com/message/#common-fields
  const mailData = {
    from: "hgswmrg@gmail.com", // Replace with your own email address
    to: "hgswmrg@gmail.com", // Replace with the recipient email address
    subject: "New Contact Form Submission",
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Question:</strong> ${question}</p>
    `,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        reject(err);
        return res
          .status(500)
          .json({ error: err.message || 'Something went wrong' });
      } else {
        resolve(info.accepted);
        res.status(200).json({ message: 'Message sent!' });
      }
    });
  });
  return;

  } else {

    console.log("error has occurred")
  }
});
*/}

