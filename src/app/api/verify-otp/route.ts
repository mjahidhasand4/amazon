import { SendMail, SendMessage } from "@/utils";
import { sql } from "@vercel/postgres";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

interface DecodedToken extends JwtPayload {
  id: number;
  type: string;
}

const handleCommonError = (message: string, statusCode: number) =>
  NextResponse.json({ error: message }, { status: statusCode });

const GET = async () => {
  try {
    const token = cookies().get("verify_otp_token");
    if (!token) return handleCommonError("Token not found", 400);

    const decodedToken = jwt.verify(token.value!, process.env.JWT_ACCESS_TOKEN_SECRET!) as DecodedToken;
    const { id, type } = decodedToken;
    const { rows } = await sql`SELECT email, mobile_phone_number, country_code FROM USERS WHERE id=${id};`;

    if (!rows || rows.length === 0)
      return handleCommonError("User does not exist", 400);

    const { email, mobile_phone_number, country_code } = rows[0];

    if (type === "email")
      return NextResponse.json({ contact: email, type }, { status: 200 });

    if (type === "mobile_phone_number") {
      return NextResponse.json({ contact: `${country_code + mobile_phone_number}`, type }, { status: 200 });
    }
  } catch (error) {
    return handleCommonError("Internal Server Error", 500);
  }
};

const POST = async (request: Request) => {
  try {
    const { otp } = await request.json();
    if (`${otp}`.length !== 6) return handleCommonError("Not a valid OTP", 400);

    const token = cookies().get("verify_otp_token");
    if (!token) return handleCommonError("Token not found", 400);

    const decodedToken = jwt.verify(token.value!, process.env.JWT_ACCESS_TOKEN_SECRET!) as DecodedToken;
    const { id, type } = decodedToken;
    const { rows } = await sql`SELECT otp_code FROM USERS WHERE id=${id};`;

    if (!rows || rows.length === 0)
      return handleCommonError("User does not exist", 400);

    const { otp_code } = rows[0];

    if (otp === otp_code) {
      await sql`UPDATE USERS SET otp_code='' WHERE id=${id}`;

      if (type === "email") await sql`UPDATE USERS SET is_email_verified=TRUE WHERE id=${id}`;
      if (type === "mobile_phone_number") await sql`UPDATE USERS SET is_mobile_phone_number_verified=TRUE WHERE id=${id}`;

      const accessToken = jwt.sign({ id }, process.env.JWT_ACCESS_TOKEN_SECRET!, { expiresIn: "15m" });
      const refreshToken = jwt.sign({ id }, process.env.JWT_REFRESH_TOKEN_SECRET!, { expiresIn: "7d" });

      cookies().delete("verify_otp_token");
      cookies().set("accessToken", accessToken);
      cookies().set("refreshToken", refreshToken);

      return NextResponse.json({ success: true }, { status: 200 });
    }

    return NextResponse.json({ success: false }, { status: 400 });
  } catch (error) {
    return handleCommonError("Internal Server Error", 500);
  }
};

const PUT = async () => {
  try {
    const token = cookies().get("verify_otp_token");
    if (!token) return handleCommonError("Token not found", 400);

    const { id, type } = jwt.verify(token.value!, process.env.JWT_ACCESS_TOKEN_SECRET!) as DecodedToken;

    const { rows } = await sql`SELECT email, mobile_phone_number, country_code FROM USERS WHERE id=${id};`;

    if (!rows || rows.length === 0)
      return handleCommonError("User does not exist", 400);

    const { email, mobile_phone_number, country_code } = rows[0];
    const OTP = Math.floor(100000 + Math.random() * 900000);
    await sql`UPDATE USERS SET otp_code=${OTP} WHERE id=${id}`;

    if (type === "email") SendMail(email, `Your OTP code is: ${OTP}`);
    if (type === "mobile_phone_number") SendMessage(`${country_code}${mobile_phone_number}`, `Your OTP code is: ${OTP}`);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {}
};

export { GET, POST, PUT };
