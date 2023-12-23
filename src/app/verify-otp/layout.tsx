import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication required",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default Layout;
