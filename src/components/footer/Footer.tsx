import { SWrapper, SFooterContainer, SFooterBlock } from './Footer.style';
import { Button } from '../button/Button';


export const Footer = () => {
  const handleUp = () => {
    console.log('Нажали кнопку "Наверх"');
  };


  return (
    <SWrapper>
      <SFooterContainer>
        <SFooterBlock>
          <Button
            // width={{ desktop: "127px", mobile: "127px" }}
            width="127px"
            onClick={handleUp}
          >
            Наверх ↑
          </Button>
        </SFooterBlock>
      </SFooterContainer>
    </SWrapper>
  )
}