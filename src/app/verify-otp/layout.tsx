import { Header } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication required",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default Layout;