import { sql } from "@vercel/postgres";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

interface DecodedToken extends JwtPayload {
  id: number;
}

const GET = async () => {
  try {
    const refreshToken = cookies().get("refreshToken");
    console.log(refreshToken);

    if (!refreshToken) {
      return NextResponse.json(
        { success: false, message: "Refresh token not found" },
        { status: 401 }
      );
    }

    const decodedToken = jwt.verify(
      refreshToken.value,
      process.env.JWT_REFRESH_TOKEN_SECRET!
    ) as DecodedToken;

    const { rows } =
      await sql`SELECT name FROM USERS WHERE id=${decodedToken.id}`;

    if (rows.length > 0) {
      const { name } = rows[0];

      const accessToken = jwt.sign(
        { id: decodedToken.id },
        process.env.JWT_ACCESS_TOKEN_SECRET!,
        {
          expiresIn: "15m",
        }
      );

      cookies().set({
        name: "accessToken",
        value: accessToken,
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 15,
        sameSite: true,
        secure: true,
      });

      return NextResponse.json({ name }, { status: 200 });
    }

    return NextResponse.json(
      { success: false, message: "User doesn't exist" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
};

export { GET };