import { SWrapper, SHeaderContainer, SHeaderBlock, SHeaderBlockLeft, SHeaderLogoLink, SHeaderLogo, SHeaderDescription, SHeaderBlockRight, SHeaderUserInfoBlock, SHeaderUserName, SHeaderUserIcon, SArrow } from './Header.style';
import { Button } from '../button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserModal } from '../modals/userModal/UserModal';
import { useAuth } from '../../context/AuthContext';
import { getAssetPath } from '../../utils/getAssetPath';


export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, token } = useAuth();

  const userName = user?.userName || "";

  const isAuth = !!token;

  const [isOpen, setIsOpen] = useState(false);


  const handleLogin = () => {
    const currentPath = location.pathname === "/" ? "/" : location.pathname;
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
            <SHeaderLogoLink to="/">
              <SHeaderLogo src={getAssetPath("logo.svg")} alt="logo" />
            </SHeaderLogoLink>
            <SHeaderDescription>Онлайн-тренировки для занятий дома</SHeaderDescription>
          </SHeaderBlockLeft>
          <SHeaderBlockRight>
            {isAuth ?
              <SHeaderUserInfoBlock onClick={handleOpenLogout}>
                <SHeaderUserIcon src={getAssetPath("icons/profile.svg")} alt="Иконка пользователя" />
                <SHeaderUserName>{userName}</SHeaderUserName>
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

          </SHeaderBlockRight>
        </SHeaderBlock>
      </SHeaderContainer>
    </SWrapper>
  )
}