import { SWrapper, SHeaderContainer, SHeaderBlock, SHeaderBlockLeft, SHeaderLogoLink, SHeaderLogo, SHeaderDescription, SHeaderBlockRight, SHeaderUserInfoBlock, SHeaderUserName, SHeaderUserIcon, SArrow } from './Header.style';
import { Button } from '../button/Button';


export const Header = () => {
  const handleLogin = () => {
    console.log('Нажали кнопку "Войти"');
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
    </SWrapper>
  )
}