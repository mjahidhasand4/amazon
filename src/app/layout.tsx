import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components";
import { UserProvider } from "@/context";

export const metadata: Metadata = {
  title: process.env.APP_NAME,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f5]">
        <UserProvider>
          <Header />
          {children}
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;