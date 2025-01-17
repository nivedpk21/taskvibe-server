const nodemailer = require("nodemailer");

// nodemailer setup

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("error with email transporter", error);
  } else {
    console.log("email server is ready");
  }
});

module.exports = transporter;
