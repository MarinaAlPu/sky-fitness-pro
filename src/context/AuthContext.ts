import { createContext, useContext } from "react";
import type { UserDataType } from "../services/auth";


export type AuthContextType = {
  userData: UserDataType;
  handleChange:  (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string | null;
  handleOpenRegistrationForm: () => void;
  handleOpenLoginForm: () => void;
  handleLogin: (e?: React.MouseEvent) => Promise<void>;
  handleRegister: (e?: React.MouseEvent) => Promise<void>;
};


export const AuthContext = createContext<AuthContextType | null>(null);


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth должен использоваться внутри AuthProvider. Проверьте, обернуто ли приложение в AuthProvider");
  }
  return context;
};
