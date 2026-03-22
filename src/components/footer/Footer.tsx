import { SWrapper, SFooterContainer, SFooterBlock } from './Footer.style';
import { Button } from '../button/Button';
import type { DisplayType } from '../button/Button.style';


type FooterProps = {
  buttonDisplay?: DisplayType;
};


export const Footer: React.FC<FooterProps> = ({ buttonDisplay }) => {

  const handleUp = () => {
    console.log('Нажали кнопку "Наверх"');
  };


  return (
    <SWrapper>
      <SFooterContainer $display={buttonDisplay}>
        <SFooterBlock>
          <Button
            display={buttonDisplay}
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