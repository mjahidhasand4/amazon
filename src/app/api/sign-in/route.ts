import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const POST = async (request: Request) => {
  const { contact, password } = await request.json();
  const { rows } = await sql`SELECT id, password FROM USERS WHERE email=${contact} OR mobile_phone_number=${contact};`;

  if (rows.length > 0) {
    const { id, password: hashedPassword } = rows[0];
    const isMatchedPassword = await bcrypt.compare(password, hashedPassword);

    if (isMatchedPassword) {
      const accessToken = jwt.sign({ id }, process.env.JWT_ACCESS_TOKEN_SECRET!, { expiresIn: "15m" });
      const refreshToken = jwt.sign({ id }, process.env.JWT_REFRESH_TOKEN_SECRET!, { expiresIn: "7d" });

      cookies().set({
        name: "accessToken",
        value: accessToken,
        expires: Date.now() + 1000 * 60 * 15,
      });
      cookies().set({
        name: "refreshToken",
        value: refreshToken,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 365,
        secure: true,
      });
      return NextResponse.json({ success: true }, { status: 200 });
    }

    return NextResponse.json({ success: false }, { status: 401 });
  }

  return NextResponse.json({ success: false }, { status: 404 });
};

export { POST };