import { useEffect, useRef, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { login, registration } from "../services/auth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


type AuthProviderProps = {
  children: ReactNode;
};


export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [errorMessage, setErrorMessage] = useState("");


  const handleOpenRegistrationForm = () => {
    setErrorMessage("");
    console.log("Нажали кнопку Зарегистрироваться в форме входа");
    // e.preventDefault();
    const parentPath = location.pathname.replace(/\/(login|registration)$/, "");
    // console.log("parentPath: ", parentPath);
    // navigate("/registration");
    navigate(`${parentPath}/registration`);
  };

  const handleOpenLoginForm = () => {
    console.log("Нажали кнопку Войти в форме регистрации");
    setErrorMessage("");
    // e.preventDefault();
    const parentPath = location.pathname.replace(/\/(login|registration)$/, "");
    // navigate("/login");
    // console.log("parentPath: ", parentPath);
    navigate(`${parentPath}/login`);
  };

  const handleLogin = async (e?: React.MouseEvent) => {
    console.log("Нажали кнопку Войти в форме входа");

    e?.preventDefault();

    const userData = {
      email: "diplom-user2026-10@user.user",
      password: "Parol+-"
    };

    const userName = userData.email.split("@")[0];
    console.log("userName: ", userName);

    try {
      const data = await login(userData)
      console.log("Ответ сервера при входе: ", data);
      console.log("Токен: ", data.token);

      localStorage.setItem("userName", userName);
      localStorage.setItem("email", userData.email);
      localStorage.setItem("token", data.token);


      const parentPath = window.location.pathname.replace(/\/(login|registration)$/, "");
      navigate(parentPath || "/");
    } catch (error) {
      // console.log("Ошибка при входе: ", error);

      if (axios.isAxiosError(error)) {
        if (error && error.response) {
          console.log("Ошибка при регистрации: ", error.response.data.message);
          setErrorMessage(error.response.data.message || "Ошибка регистрации");
        } else if (error.request) {
          setErrorMessage("Отсутствует интернет. Попробуйте позже");
        } else {
          setErrorMessage("Неизвестная ошибка");
        }
      }
    }
  };

  const handleRegister = async (e?: React.MouseEvent) => {
    console.log("Нажали кнопку Зарегистироваться в форме регистрации");

    e?.preventDefault();

    try {
      const data = await registration({
        email: "diplom-user2026-10@user.user",
        password: "Parol+-"
      })
      console.log("Ответ сервера при регистрации: ", data);

      const parentPath = window.location.pathname.replace(/\/(login|registration)$/, "");
      navigate(parentPath || "/");
    } catch (error) {
      // console.log("Ошибка при регистрации: ", error.message);
      // setErrorMessage(error.message)

      if (axios.isAxiosError(error)) {
        if (error && error.response) {
          console.log("Ошибка при регистрации: ", error.response.data.message);
          setErrorMessage(error.response.data.message || "Ошибка регистрации");
        } else if (error.request) {
          setErrorMessage("Отсутствует интернет. Попробуйте позже");
        } else {
          setErrorMessage("Неизвестная ошибка");
        }
      }
    }
  };


  return (
    <AuthContext.Provider value={{
      errorMessage,
      handleOpenRegistrationForm,
      handleOpenLoginForm,
      handleLogin,
      handleRegister
    }}>
      {children}
    </AuthContext.Provider>
  )
}