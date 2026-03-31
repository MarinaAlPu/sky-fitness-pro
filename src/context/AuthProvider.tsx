import { useEffect, useRef, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { login, registration, type UserDataType } from "../services/auth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { validateForm } from "../utils/helpers";
import { useCourses } from "./CoursesContext";


type AuthProviderProps = {
  children: ReactNode;
};


export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname.endsWith("/login");


  function checkUserInfoInLS() {
    try {
      // return localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
      const userInfoFromLS = localStorage.getItem("userInfo");
      return userInfoFromLS ? JSON.parse(userInfoFromLS) : null;
    } catch {
      // return null;
      return;
    }
  };


  const [user, setUser] = useState(checkUserInfoInLS());

  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState<UserDataType>({ email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);
  const initialFormState = { email: "", password: "", confirmPassword: "" };
  const initialErrorsState = { email: "", password: "", confirmPassword: "" };
  const { removeUserCoursesFromLS } = useCourses();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Провайдер. Ввели символ в инпут");
    setIsValid(true);
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    // setUserData({ ...userData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: false }));
    // setErrors({ ...errors, [name]: false });
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
    // console.log("Нажали кнопку Зарегистрироваться в форме входа");
    setUserData(initialFormState);
    setErrors(initialErrorsState);
    setErrorMessage("");
    // e.preventDefault();
    const parentPath = location.pathname.replace(/\/(login|registration)$/, "");
    // console.log("parentPath: ", parentPath);
    // navigate("/registration");
    navigate(`${parentPath}/registration`);
  };

  const handleOpenLoginForm = () => {
    // console.log("Нажали кнопку Войти в форме регистрации");
    setUserData(initialFormState);
    setErrors(initialErrorsState);
    setErrorMessage("");
    // e.preventDefault();

    const parentPath = location.pathname.replace(/\/(login|registration)$/, "");
    navigate(`${parentPath}/login`);
  };

  const handleLogin = async (e?: React.MouseEvent) => {
    console.log("Нажали кнопку Войти в форме входа");

    e?.preventDefault();
    setErrorMessage("");

    if (!validateForm(userData, isLogin, setErrors, setError, setIsValid, setErrorMessage)) {
      // return false;
      return;
    }

    // setIsValid(false);

    try {
      // const data = isLogin ? await login({ login: userData.login, password: userData.password }) : await registration(userData);
      const data = isLogin ? await login(userData) : await registration(userData);
      console.log("Ответ сервера при входе: ", data);
      console.log("Токен: ", data.token);

      if (userData.email && data.token) {
        updateUserInfo(userData.email, data.token);

        setUserData(initialFormState);
        setErrors(initialFormState);

        const parentPath = location.pathname.replace(/\/(login|registration)$/, "");
        navigate(parentPath || "/");
        // return true;
      }
    } catch (err) {
      // setError(err.message);
      setIsValid(false)
      // return false;

      if (axios.isAxiosError(err)) {
        if (err && err.response) {
          console.log("Ошибка при регистрации: ", err.response.data.message);
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
    console.log("Нажали кнопку Зарегистироваться в форме регистрации");

    e?.preventDefault();
    setErrorMessage("");

    try {
      const data = await registration(userData)
      console.log("Ответ сервера при регистрации: ", data);

      // const parentPath = location.pathname.replace(/\/(login|registration)$/, "");
      // navigate(parentPath || "/");

      if (data) {
        // После регистрации обычно сразу логиним или просим войти
        const parentPath = location.pathname.replace(/\/(login|registration)$/, "");
        navigate(`${parentPath}/login`);
      }
    } catch (error) {
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

  const handleLogout = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();

    updateUserInfo(null, null);
    removeUserCoursesFromLS();

    // navigate("/");

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
      handleLogout
    }}>
      {children}
    </AuthContext.Provider>
  )
}