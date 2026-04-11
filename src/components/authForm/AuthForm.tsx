import { useEffect, useRef } from "react";
import { Button } from "../button/Button";
import { SHeaderLogo } from "../header/Header.style";
import { Input } from "../input/Input";
import { SPageBackground, SButtonBlock, SInputBlock, SWrapper, SError, SForm } from "./AuthForm.style";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


type AuthFormProps = {
  isLogin: boolean;
};


export const AuthForm = ({ isLogin }: AuthFormProps) => {
  const navigate = useNavigate();

  const {
    userData,
    handleChange,
    errorMessage,
    handleOpenRegistrationForm,
    handleOpenLoginForm,
    handleLogin,
    handleRegister
  } = useAuth();

  const authFormRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (authFormRef.current && !authFormRef.current.contains(e.target as Node)) {
        const parentPath = window.location.pathname.replace(/\/(login|registration)$/, "");
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


  return (
    <SPageBackground>
      <SWrapper
        ref={authFormRef}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <SHeaderLogo src={`${import.meta.env.BASE_URL}logo.svg`} alt="logo" />

        <SForm>

          <SInputBlock>

            <Input
              type="email"
              onChange={handleChange}
              placeholder={isLogin ? "Логин" : "Эл. почта"}
              name="email"
              value={userData.email}
            />
            <Input
              type="password"
              onChange={handleChange}
              placeholder="Пароль"
              name="password"
              value={userData.password} 
            />
            {!isLogin &&
              <Input
                type="password"
                onChange={handleChange}
                placeholder="Повторите пароль"
                name="confirmPassword"
                value={userData.confirmPassword || ""} 
              />
            }

          </SInputBlock>

          {errorMessage && <SError>{errorMessage}</SError>}

          <SButtonBlock>
            {isLogin ?
              (
                <>
                  <Button
                    htmlType="submit"
                    onClick={handleLogin}
                  >
                    Войти</Button>
                  <Button
                    htmlType="button"
                    type="secondary"
                    onClick={handleOpenRegistrationForm}
                  >
                    Зарегистрироваться</Button>
                </>
              )
              :
              (
                <>
                  <Button
                    htmlType="submit"
                    onClick={handleRegister}
                  >
                    Зарегистрироваться</Button>
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
}