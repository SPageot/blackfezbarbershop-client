import { createContext, useState, useContext } from "react";

const UserContext = createContext(null);

export function useUser() {
  return useContext(UserContext);
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const verifyUser = (user) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, verifyUser }}>
      {children}
    </UserContext.Provider>
  );
}
