const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Function to send verification email during registration
exports.sendVerificationEmail = (user) => {
  const dynamicTemplateData = {
    username: user.username,
    verification_url: `${process.env.SERVER_BASE_URL}/api/users/verify-email/${user.verification.verificationString}.${user._id}`,
  };

  const message = {
    to: user.email,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: "Email verification",
    dynamicTemplateData: dynamicTemplateData,
    template_id: process.env.SENDGRID_REGISTER_TEMPLATE_ID,
  };

  sgMail
    .send(message)
    .then(() => console.log("Verification email sent successfully"))
    .catch((err) => {
      Promise.reject(err);
    });
};
