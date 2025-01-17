const transporter = require("./transporter");

const generateVerificationEmail = async (userEmail, token, type) => {
  if (type === "emailVerification") {
    const verificationUrl = `${process.env.CLIENT_URL}/verify-email/${token}`;
    const adminEmail = "verify@taskvibe.icu";

    const mailOptions = {
      from: adminEmail,
      to: userEmail,
      subject: "Activate Your Account at TaskVibe.icu",
      html: `<p>
      Hi User,<br>
      Thank you for signing up with TaskVibe! We're excited to have you on board.
      <br>
      To complete your registration and activate your account, please verify your email address by clicking the button below.
      </p>
      <a href="${verificationUrl}">Activate Your Account</a>
      <p>If the button above doesn't work, copy and paste the following link into your browser:</p>
      ${verificationUrl}
      <p>This link is valid for the next 24 hours</p>
      <p>If you did not create an account with TaskVibe, please ignore this email or contact our support team at taskvibeofficial@gmail.com.</p>
      <p>Thank you,<br>
         The TaskVibe Team
      </p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("email sending failed", error);
    }
  }

  if (type === "forgotPassword") {
    const verificationUrl = `${process.env.CLIENT_URL}/reset-password/${token}`;

    const mailOptions = {
      from: adminEmail,
      to: userEmail,
      subject: "Reset Your Password for TaskVibe.icu",
      html: `<p>Hi User,<br>
      We received a request to reset the password for your TaskVibe account. If you didn't make this request, you can ignore this email.<br>
      To reset your password, click the button below:</p>
      <a href="${verificationUrl}">Reset Your Password</a>
      <p>If the button doesn't work, copy and paste the following link into your browser:</p>
      ${verificationUrl}
      <p>This link expire in 30 minutes</p>
      <p>If you face any issue, feel free to contact us at taskvibeofficial@gmail.com</p>
      <br>
      <p>Thank you,<br>
      The TaskVibe Team
      </p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("email sending failed", error);
    }
  }
};

module.exports = generateVerificationEmail;
