// import { useEffect, useRef, useState } from 'react';
import { SWrapper, SHeaderContainer, SHeaderBlock, SHeaderBlockLeft, SHeaderLogoLink, SHeaderLogo, SHeaderDescription, SHeaderBlockRight, SHeaderUserInfoBlock, SHeaderUserName, SHeaderUserIcon, SArrow } from './Header.style';
import { Button } from '../button/Button';
// import { AuthForm } from '../authForm/AuthForm';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserModal } from '../modals/userModal/UserModal';


export const Header = () => {
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("token");
  // console.log("isAuth: ", isAuth);

  const [isOpen, setIsOpen] = useState(false);


  const handleLogin = () => {
    // console.log('Нажали кнопку "Войти"');
    // setIsAuthFormOpen(true);
    // navigate("/login");
    const currentPath = location.pathname === "/" ? "/" : location.pathname;
    // console.log("currentPath: ", currentPath);
    navigate(`${currentPath}/login`);
  };

  const handleOpenLogout = () => {
    setIsOpen(!isOpen);
  };


  return (
    <SWrapper>
      <SHeaderContainer>
        <SHeaderBlock>
          <SHeaderBlockLeft>
            <SHeaderLogoLink href="/" target="_self">
              <SHeaderLogo src='/logo.svg' alt="logo" />
            </SHeaderLogoLink>
            <SHeaderDescription>Онлайн-тренировки для занятий дома</SHeaderDescription>
          </SHeaderBlockLeft>
          <SHeaderBlockRight>
            {isAuth ?
              <SHeaderUserInfoBlock onClick={handleOpenLogout}>
                <SHeaderUserIcon src="/icons/profile.svg" alt="Иконка пользователя" />
                <SHeaderUserName>Сергей</SHeaderUserName>
                <SArrow $isOpen={isOpen} />
                {isOpen && <UserModal />}
              </SHeaderUserInfoBlock>
              :
              <Button
                width={{ desktop: "103px", mobile: "83px" }}
                height={{ desktop: "52px", mobile: "36px" }}
                onClick={handleLogin}
              >
                Войти
              </Button>
            }

            {/* {isOpen && <UserModal />} */}

          </SHeaderBlockRight>
        </SHeaderBlock>
      </SHeaderContainer>

      {/* {isAuthFormOpen && (
        <AuthForm  ref={authFormRef}/>
      )} */}

    </SWrapper>
  )
}