import { createContext, useContext, useEffect, useState } from "react";
import { LoginUser } from "../types/user";

interface IUserContextData {
  loginStatus: boolean;
  user: LoginUser | undefined;
  changeUser: (user: LoginUser | undefined) => void;
}

const UserContext = createContext({} as IUserContextData);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  const [currentUser, setCurrentUser] = useState<LoginUser | undefined>();

  useEffect(() => {
    if (currentUser) {
      setLoginStatus(true);
    } else setLoginStatus(false);
  }, [currentUser, setCurrentUser]);

  return (
    <UserContext.Provider
      value={{
        loginStatus,
        user: currentUser,
        changeUser: setCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
