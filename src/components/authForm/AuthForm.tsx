import { forwardRef } from "react";
import { Button } from "../button/Button";
import { SHeaderLogo } from "../header/Header.style";
import { Input } from "../input/Input";
import { SPageBackground, SButtonBlock, SInputBlock, SWrapper, SError, SForm, SLink } from "./AuthForm.style";


export const AuthForm = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const isLogin = true;

  const onChange = () => {
    console.log("Ввели символ в инпут");
  };

  const handleRegistration = () => {
    console.log("Нажали кнопку Зарегистрироваться");
  };

  const handleLogin = () => {
    console.log("Нажали кнопку Войти");
  };


  return (
    <SPageBackground>
      <SWrapper ref={ref}>
        <SHeaderLogo src='/logo.svg' alt="logo" />

        <SForm onSubmit={handleLogin}>

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
                    onClick={handleLogin}
                  >
                    Войти</Button>
                  <SLink to="/registration">
                    <Button
                      type="secondary"
                    >
                      Зарегистритоваться</Button>
                  </SLink>
                </>
              )
              :
              (
                <>
                  <Button
                    onClick={handleRegistration}
                  >
                    Зарегистритоваться</Button>
                  <SLink to="/login">
                    <Button
                      type="secondary"
                    >
                      Войти</Button>
                  </SLink>
                </>
              )
            }
          </SButtonBlock>

        </SForm>
      </SWrapper>
    </SPageBackground>
  )
})