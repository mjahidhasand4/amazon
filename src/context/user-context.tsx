"use client";
import React, { createContext, useState } from "react";

export const UserContext = createContext({ name: "" });

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    name: "",
  });

  fetch("http://localhost:3000/api/verify-user");

  return (
    <UserContext.Provider value={{ name: "" }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
