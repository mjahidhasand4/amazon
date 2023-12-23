import { sql } from "@vercel/postgres";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

interface DecodedToken extends JwtPayload {
  id: number;
}

const handleCommonError = (message: string, statusCode: number) =>
  NextResponse.json({ error: message }, { status: statusCode });

const GET = async () => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken");
    console.log(cookieStore);
    

    if (!accessToken)
      return NextResponse.json({ success: false }, { status: 400 });

    const { id, exp } = jwt.verify(
      accessToken?.value!,
      process.env.JWT_ACCESS_TOKEN_SECRET!
    ) as DecodedToken;

    if (exp! < Date.now() / 1000)
      return handleCommonError("Token expired", 400);

    const { rows } = await sql`SELECT name FROM USERS WHERE id=${id};`;
    if (rows.length > 0)
      return NextResponse.json({ name: rows[0].name }, { status: 200 });

    return NextResponse.json(
      { success: false, message: "User don't exist" },
      { status: 404 }
    );
  } catch (error) {
    console.log("Error: Get name\n", error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
};

export { GET };
