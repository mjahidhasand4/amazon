import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mjahidhasand@gmail.com",
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

const SendMail = async (to: string, subject: string, text = "", html = "") => {
  try {
    await transport.sendMail({
      from: '"MD. Jahid Hasan 👻" <mjahidhasand@gmail.com>',
      subject,
      to,
      text,
      html,
    });

    return true;
  } catch (error) {
    console.log("Nodemailer ERROR: ", error);

    return false;
  }
};

export default SendMail;