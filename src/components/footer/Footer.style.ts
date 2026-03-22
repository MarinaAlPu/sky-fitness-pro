import styled from 'styled-components';
import type { DisplayType } from '../button/Button.style';


export const SWrapper = styled.div`
  width: 100%;
  background-color: #FAFAFA;
`;

export const SFooterContainer = styled.div<{ $display?: DisplayType }>`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  /* padding: 0 140px 81px 140px; */
  padding: ${({ $display }) => 
    $display?.desktop === 'none' ? '0 140px 0 140px' : '0 140px 81px 140px'};

  @media screen and (max-width: 375px) {
    /* padding: 0 16px 29px 16px; */
    padding: ${({ $display }) => 
    $display?.mobile === 'none' ? '0 16px 0 16px' : '0 16px 29px 16px'};
  }
`;

export const SFooterBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 375px) {
    justify-content: flex-end;
  }
`;
