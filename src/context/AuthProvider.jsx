import React, { createContext, useEffect, useState } from "react";
import { getlocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getlocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
}
