import { useEffect, useRef, useState } from 'react';
import { SWrapper, SHeaderContainer, SHeaderBlock, SHeaderBlockLeft, SHeaderLogoLink, SHeaderLogo, SHeaderDescription, SHeaderBlockRight, SHeaderUserInfoBlock, SHeaderUserName, SHeaderUserIcon, SArrow } from './Header.style';
import { Button } from '../button/Button';
import { AuthForm } from '../authForm/AuthForm';


export const Header = () => {
  const [isAuthFormOpen, setIsAuthFormOpen] = useState(false);

  const authFormRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (authFormRef.current && !authFormRef.current.contains(e.target as Node)) {
        setIsAuthFormOpen(false);
      }
    };

    // добавить обработчик клика вне окна
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      // удалить обработчик клика вне окна при размонтировании компонента
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


  const handleLogin = () => {
    // console.log('Нажали кнопку "Войти"');
    setIsAuthFormOpen(true);
  };


  return (
    <SWrapper>
      <SHeaderContainer>
        <SHeaderBlock>
          <SHeaderBlockLeft>
            <SHeaderLogoLink>
              <SHeaderLogo src='/logo.svg' alt="logo" />
            </SHeaderLogoLink>
            <SHeaderDescription>Онлайн-тренировки для занятий дома</SHeaderDescription>
          </SHeaderBlockLeft>
          <SHeaderBlockRight>

            <Button
              width={{ desktop: "103px", mobile: "83px" }}
              height={{ desktop: "52px", mobile: "36px" }}
              onClick={handleLogin}
            >
              Войти
            </Button>

            {/* <SHeaderUserInfoBlock>
              <SHeaderUserIcon src="/icons/profile.svg" alt="Иконка пользователя" />
              <SHeaderUserName>Сергей</SHeaderUserName>
              <SArrow />
            </SHeaderUserInfoBlock> */}

          </SHeaderBlockRight>
        </SHeaderBlock>
      </SHeaderContainer>

      {isAuthFormOpen && (
        <AuthForm  ref={authFormRef}/>
      )}

    </SWrapper>
  )
}