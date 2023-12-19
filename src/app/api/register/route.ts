import { SendMail, SendMessage } from "@/utils";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

const POST = async (request: Request) => {
  try {
    const { name, contact, password, countryCode } = await request.json();
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const mobileReg = /^\d+$/;
    const isEmail = emailReg.test(contact);
    const isMobile = mobileReg.test(contact);
    const isEmailOrMobile =
      (isEmail && "email") || (isMobile && "mobile_phone_number");
    const OTP = Math.floor(100000 + Math.random() * 900000);

    if (
      name &&
      (isEmail || (isMobile && countryCode)) &&
      `${password}`.length >= 6
    ) {
      const { rows } =
        await sql`SELECT is_email_verified, is_mobile_phone_number_verified FROM USERS WHERE email=${contact} OR mobile_phone_number=${contact}`;

      if (rows.length > 0) {
        const isEmailVerified = rows[0].is_email_verified;
        const isMobilePhoneNumberVerified =
          rows[0].is_mobile_phone_number_verified;

        if (
          (isEmail && isEmailVerified) ||
          (isMobile && isMobilePhoneNumberVerified)
        ) {
          return NextResponse.json(
            {
              error: "Registration failed",
              message: `There's already an account with this ${
                (isEmail && "email") || (isMobile && "mobile phone number")
              }.`,
            },
            { status: 400 }
          );
        }

        const existingUserId = rows[0].id;
        await sql`UPDATE USERS SET otp_code=${OTP} WHERE id=${existingUserId}`;
        const verify_token = jwt.sign(
          { id: existingUserId, type: isEmailOrMobile },
          process.env.JWT_ACCESS_TOKEN_SECRET!
        );

        if (isEmail) SendMail(contact, `Your OTP code is: ${OTP}`);
        if (isMobile)
          SendMessage(`${countryCode}${contact}`, `Your OTP code is: ${OTP}`);
        cookies().set("verify_otp_token", verify_token);
        return NextResponse.json(
          { success: true, message: "User exist. Please verify OTP code." },
          { status: 200 }
        );
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser =
        await sql`INSERT INTO USERS (name, password, country_code, email, mobile_phone_number, otp_code) VALUES (${name}, ${hashedPassword}, ${countryCode}, ${
          isEmail ? contact : ""
        }, ${isMobile ? contact : ""}, ${OTP}) RETURNING id;`;
      const newUserId = newUser.rows[0].id;
      const verify_token = jwt.sign(
        { id: newUserId, type: isEmailOrMobile },
        process.env.JWT_ACCESS_TOKEN_SECRET!
      );

      if (isEmail) SendMail(contact, `Your OTP code is: ${OTP}`);
      if (isMobile)
        SendMessage(`${countryCode}${contact}`, `Your OTP code is: ${OTP}`);
      cookies().set("verify_otp_token", verify_token);
      return NextResponse.json(
        {
          success: true,
          message: "Registration successfull. Please verify OTP code.",
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      {
        error: "Registration failed",
        message: "Name, contact, password are required.",
      },
      { status: 400 }
    );
  } catch (error) {
    console.error("Error in registration:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export { POST };
