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
    const refreshToken = cookieStore.get("refreshToken");
    const accessToken = cookieStore.get("accessToken");

    if (!refreshToken)
      return NextResponse.json({ success: false, message: "Refresh token not found" }, { status: 200 });

    if (accessToken) return NextResponse.json({}, { status: 200 });
    
    const { id, exp } = jwt.verify(refreshToken.value, process.env.JWT_REFRESH_TOKEN_SECRET!) as DecodedToken;

    if (exp! < Date.now() / 1000)
      return handleCommonError("Token expired", 400);

    const newAccessToken = jwt.sign({ id }, process.env.JWT_ACCESS_TOKEN_SECRET!, { expiresIn: "15m" });

    cookies().set({
      name: "accessToken",
      value: newAccessToken,
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 15,
      sameSite: true,
      secure: true,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
};

export { GET };