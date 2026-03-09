import { SWrapper, SHeaderContainer, SHeaderBlock, SHeaderBlockLeft, SHeaderLogoLink, SHeaderLogo, SHeaderDescription, SHeaderBlockRight } from './Header.style';
import { SButton } from '../button/Button.style';


export const Header = () => {
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
            <SButton>Войти</SButton>
          </SHeaderBlockRight>
        </SHeaderBlock>
      </SHeaderContainer>
    </SWrapper>
  )
}