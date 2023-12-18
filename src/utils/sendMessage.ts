import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const SendMessage = async (to: string, body: string) => {
  try {
    await client.messages.create({
      body,
      from: "+19194298527",
      to,
    });

    return true;
  } catch (error: any) {
    console.log(error.message);
    return false;
  }
};

export default SendMessage;