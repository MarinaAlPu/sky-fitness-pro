import { SWrapper, SFooterContainer, SFooterBlock } from './Footer.style';
import { Button } from '../button/Button';
import type { DisplayType } from '../button/Button.style';


type FooterProps = {
  buttonDisplay?: DisplayType;
};


export const Footer: React.FC<FooterProps> = ({ buttonDisplay }) => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <SWrapper>
      <SFooterContainer $display={buttonDisplay}>
        <SFooterBlock>
          <Button
            display={buttonDisplay}
            width="127px"
            onClick={handleScrollToTop}
          >
            Наверх ↑
          </Button>
        </SFooterBlock>
      </SFooterContainer>
    </SWrapper>
  )
}