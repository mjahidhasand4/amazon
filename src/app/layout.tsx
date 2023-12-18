import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components";

export const metadata: Metadata = {
  title: process.env.APP_NAME,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;