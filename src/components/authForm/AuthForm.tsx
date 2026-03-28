import { useEffect, useRef } from "react";
import { Button } from "../button/Button";
import { SHeaderLogo } from "../header/Header.style";
import { Input } from "../input/Input";
import { SPageBackground, SButtonBlock, SInputBlock, SWrapper, SError, SForm } from "./AuthForm.style";
import { useLocation, useNavigate } from "react-router-dom";


type AuthFormProps = {
  isLogin: boolean;
};


export const AuthForm = (({ isLogin }: AuthFormProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  // const authFormRef = useRef<string | null>(null);
  const authFormRef = useRef<HTMLDivElement>(null);


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

  const handleRegistration = () => {
    console.log("Нажали кнопку Зарегистрироваться в форме входа");
    // e.preventDefault();
    const parentPath = location.pathname.replace(/\/(login|registration)$/, "");
    // console.log("parentPath: ", parentPath);
    // navigate("/registration");
    navigate(`${parentPath}/registration`);
  };

  const handleLogin = () => {
    console.log("Нажали кнопку Войти в форме регистрации");
    // e.preventDefault();
    const parentPath = location.pathname.replace(/\/(login|registration)$/, "");
    // navigate("/login");
    // console.log("parentPath: ", parentPath);
    navigate(`${parentPath}/login`);
  };

  const handleSubmit = () => {
    console.log("Нажали кнопку Войти в форме входа");
  };


  return (
    <SPageBackground>
      <SWrapper
        ref={authFormRef}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <SHeaderLogo src='/logo.svg' alt="logo" />

        <SForm onSubmit={handleSubmit}>

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

          <SButtonBlock>
            {isLogin ?
              (
                <>
                  <Button
                    // onClick={handleSubmit}
                    onClick={() => console.log("Нажали кнопку Войти в форме входа")}
                  >
                    Войти</Button>
                  <Button
                    htmlType="button"
                    type="secondary"
                    onClick={handleRegistration}
                  >
                    Зарегистритоваться</Button>
                </>
              )
              :
              (
                <>
                  <Button
                    onClick={() => console.log("Нажали кнопку зарегистрироваться в форме регистрации")}
                  >
                    Зарегистритоваться</Button>
                  <Button
                    htmlType="button"
                    type="secondary"
                    onClick={handleLogin}
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