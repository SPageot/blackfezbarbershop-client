import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext(null);

export function useUser() {
  return useContext(UserContext);
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const verifyUser = (userInfo) => {
    setUser({ ...userInfo });
  };

  return (
    <UserContext.Provider value={{ user, verifyUser }}>
      {children}
    </UserContext.Provider>
  );
}
