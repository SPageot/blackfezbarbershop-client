import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext(null);

export function useUser() {
  return useContext(UserContext);
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [userAppointments, setUserAppoinments] = useState([]);
  const verifyUser = (userInfo) => {
    setUser(userInfo);
  };

  const getAppointments = (userApp) => {
    setUserAppoinments(userApp);
  };

  return (
    <UserContext.Provider
      value={{ user, verifyUser, getAppointments, userAppointments }}
    >
      {children}
    </UserContext.Provider>
  );
}
