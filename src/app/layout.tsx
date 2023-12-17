import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: process.env.APP_NAME,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;