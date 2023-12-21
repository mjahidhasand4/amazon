"use client";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  name: "",
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState({
    name: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/verify-user');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;