import { useEffect, useRef, useState } from "react";
import { Button } from "../button/Button";
import { SHeaderLogo } from "../header/Header.style";
import { Input } from "../input/Input";
import { SPageBackground, SButtonBlock, SInputBlock, SWrapper, SError, SForm } from "./AuthForm.style";
import { useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../../services/auth";
import axios from "axios";


type AuthFormProps = {
  isLogin: boolean;
};


export const AuthForm = (({ isLogin }: AuthFormProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  // const authFormRef = useRef<string | null>(null);
  const authFormRef = useRef<HTMLDivElement>(null);

  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (authFormRef.current && !authFormRef.current.contains(e.target as Node)) {
        const parentPath = window.location.pathname.replace(/\/(login|registration)$/, "");
        // navigate("/");
        navigate(parentPath || "/");
      }
    };

    // добавить обработчик клика вне окна
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      // удалить обработчик клика вне окна при размонтировании компонента
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [navigate]);


  const onChange = () => {
    console.log("Ввели символ в инпут");
  };

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
    <SPageBackground>
      <SWrapper
        ref={authFormRef}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <SHeaderLogo src='/logo.svg' alt="logo" />

        <SForm
          // onSubmit={handleSubmit}
        >

          <SInputBlock>

            <Input
              type="email"
              onChange={onChange}
              placeholder={isLogin ? "Логин" : "Эл. почта"}
            />
            <Input
              type="password"
              onChange={onChange}
              placeholder="Пароль"
            />
            {!isLogin &&
              <Input
                type="password"
                onChange={onChange}
                placeholder="Повторите пароль"
              />
            }

          </SInputBlock>

          {/* <SError>Данная почта уже используется. Попробуйте войти.</SError> */}
          {/* {errorMessage && <SError>{errorMessage}</SError>} */}
          {errorMessage && <SError>{errorMessage}</SError>}

          <SButtonBlock>
            {isLogin ?
              (
                <>
                  <Button
                    htmlType="submit"
                    onClick={handleLogin}
                  // onClick={() => console.log("Нажали кнопку Войти в форме входа")}
                  >
                    Войти</Button>
                  <Button
                    htmlType="button"
                    type="secondary"
                    onClick={handleOpenRegistrationForm}
                  >
                    Зарегистритоваться</Button>
                </>
              )
              :
              (
                <>
                  <Button
                    htmlType="submit"
                    onClick={handleRegister}
                  // onClick={() => console.log("Нажали кнопку зарегистрироваться в форме регистрации")}
                  >
                    Зарегистритоваться</Button>
                  <Button
                    htmlType="button"
                    type="secondary"
                    onClick={handleOpenLoginForm}
                  >
                    Войти</Button>
                </>
              )
            }
          </SButtonBlock>

        </SForm>
      </SWrapper>
    </SPageBackground>
  )
})