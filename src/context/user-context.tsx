"use client";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({ name: "" });

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    name: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(process.env.NEXT_PUBLIC_BASE_API + "verify-user");

        const response = await fetch(
          process.env.NEXT_PUBLIC_BASE_API + "get/user"
        );
        const { name } = await response.json();

        setUser({ name });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
