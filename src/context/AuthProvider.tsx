import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { login, registration, type UserDataType } from "../services/auth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { validateForm, type FieldsErrors } from "../utils/helpers";


type AuthProviderProps = {
  children: ReactNode;
};


export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname.endsWith("/login");


  function checkUserInfoInLS() {
    try {
      const userInfoFromLS = localStorage.getItem("userInfo");
      return userInfoFromLS ? JSON.parse(userInfoFromLS) : null;
    } catch {
      return;
    }
  };

  const initialFormState = { email: "", password: "", confirmPassword: "" };
  const initialErrorsState = { email: "", password: "", confirmPassword: "" };
  const initialUserDataState = { email: "", password: "", confirmPassword: "" };

  const [user, setUser] = useState(checkUserInfoInLS());

  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState<UserDataType>(initialUserDataState);
  const [errors, setErrors] = useState<FieldsErrors>(initialErrorsState);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsValid(true);
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
    setError("");
  };


  const updateUserInfo = (userEmail: string | null, newToken: string | null) => {
    if (userEmail && newToken) {
      const userInfo = {
        userName: userEmail.split("@")[0],
        email: userEmail,
      };

      setUser(userInfo);
      setToken(newToken);

      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      localStorage.setItem("token", newToken);
    } else {
      setUser(null);
      setToken(null);
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
    };
  };


  const handleOpenRegistrationForm = () => {
    setUserData(initialFormState);
    setErrors(initialErrorsState);
    setErrorMessage("");
    const parentPath = location.pathname.replace(/\/(login|registration)$/, "");
    navigate(`${parentPath}/registration`);
  };

  const handleOpenLoginForm = () => {
    setUserData(initialFormState);
    setErrors(initialErrorsState);
    setErrorMessage("");
    const parentPath = location.pathname.replace(/\/(login|registration)$/, "");
    navigate(`${parentPath}/login`);
  };

  const handleLogin = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    setErrorMessage("");

    if (!validateForm(userData, isLogin, setErrors, setIsValid, setErrorMessage)) {
      return;
    }

    try {
      const data = isLogin ? await login(userData) : await registration(userData);
      setToken(data.token);

      if (userData.email && data.token) {
        updateUserInfo(userData.email, data.token);

        setUserData(initialFormState);
        setErrors(initialFormState);

        const parentPath = location.pathname.replace(/\/(login|registration)$/, "");
        navigate(parentPath || "/");
      }
    } catch (err) {
      setIsValid(false)

      if (axios.isAxiosError(err)) {
        if (err && err.response) {
          setErrorMessage(err.response.data.message || "Ошибка регистрации");
        } else if (err.request) {
          setErrorMessage("Отсутствует интернет. Попробуйте позже");
        } else {
          setErrorMessage("Неизвестная ошибка");
        }
      }
    }
  };

  const handleRegister = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    setErrorMessage("");

    try {
      const data = await registration(userData)

      if (data) {
        const parentPath = location.pathname.replace(/\/(login|registration)$/, "");
        navigate(`${parentPath}/login`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error && error.response) {
          setErrorMessage(error.response.data.message || "Ошибка регистрации");
        } else if (error.request) {
          setErrorMessage("Отсутствует интернет. Попробуйте позже");
        } else {
          setErrorMessage("Неизвестная ошибка");
        }
      }
    }
  };

  const handleLogout = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();

    updateUserInfo(null, null);

    const currentPath = location.pathname.replace(/\/(login|registration)$/, "");

    const isMainPage = currentPath === "/";
    const isCoursePage = currentPath.startsWith("/course");

    if (isMainPage || isCoursePage) {
      navigate(currentPath || "/");
    } else {
      navigate("/");
    }
  };


  return (
    <AuthContext.Provider value={{
      token,
      user,
      userData,
      handleChange,
      errorMessage,
      handleOpenRegistrationForm,
      handleOpenLoginForm,
      handleLogin,
      handleRegister,
      handleLogout,
      errors,
      error,
      isValid
    }}>
      {children}
    </AuthContext.Provider>
  )
}