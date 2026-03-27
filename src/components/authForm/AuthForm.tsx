import { forwardRef } from "react";
import { Button } from "../button/Button";
import { SHeaderLogo } from "../header/Header.style";
import { Input } from "../input/Input";
import { SPageBackground, SButtonBlock, SInputBlock, SWrapper, SError } from "./AuthForm.style";


export const AuthForm = forwardRef<HTMLDivElement, {}>((props, ref) => {

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

        <SInputBlock>

          <Input
            type="email"
            onChange={onChange}
            placeholder="Эл. почта"
          />
          <Input
            type="password"
            onChange={onChange}
            placeholder="Пароль"
          />
          <Input
            type="password"
            onChange={onChange}
            placeholder="Повторите пароль"
          />
        </SInputBlock>

        <SError>Данная почта уже используется. Попробуйте войти.</SError>

        <SButtonBlock>
          <Button
            // width="206px"
            onClick={handleRegistration}
          >
            Зарегистритоваться</Button>
          <Button
            type="secondary"
            onClick={handleLogin}
          >
            Войти</Button>
        </SButtonBlock>
      </SWrapper>
    </SPageBackground>
  )
})