import { createContext, useEffect, useState } from "react";

export const UserStateContext = createContext();

const UserStateProvider = ({ children, setUser, user }) => {
  const [isRegistered, setIsRegistered] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)

  const login = (userDetails) => {
    console.log(userDetails);
    if (userDetails.detail != "Not found.") {
      setUser(userDetails);
    }else{
      setErrorMessage(`No User Found! Please Sign Up!`)
    }
  };

  const logout = () => {
    setUser(null);
  };

  const registered = () => {
    setIsRegistered(true);
  };

  useEffect(() => {
    if (isRegistered) {
      const timer = setTimeout(() => setIsRegistered(false), 7000);
      return () => {
        clearTimeout(timer);
      };
    }

    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(null), 7000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isRegistered, errorMessage]);

  return (
    <UserStateContext.Provider
      value={{ user, login, logout, registered, isRegistered, errorMessage }}
    >
      {children}
    </UserStateContext.Provider>
  );
};

export default UserStateProvider;
