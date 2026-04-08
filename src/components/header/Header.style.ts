import { Link } from 'react-router-dom';
import styled from 'styled-components';


type SArrowProps = {
  $isOpen: boolean;
};


export const SWrapper = styled.header`
  width: 100%;
  background-color: #FAFAFA;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const SHeaderContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 140px 0 140px;

  @media screen and (max-width: 376px) {
    padding: 40px 16px 0 16px;
  }
`;

export const SHeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SHeaderBlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const SHeaderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const SHeaderLogo = styled.img`
  display: block;
  width: 220px;
  height: 35px;
`;

export const SHeaderDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.5;

  @media screen and (max-width: 376px) {
    display: none;
  }
`;

export const SHeaderBlockRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SHeaderUserInfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  position: relative;
`;

export const SHeaderUserIcon = styled.img`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  order: 1;
`;

export const SHeaderUserNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SHeaderUserName = styled.div`
  gap: 12px;
  order: 2;

  @media screen and (max-width: 376px) {
    display: none;
  }
`;

export const SArrow = styled.div<SArrowProps>`
  width: 8px;
  height: 8px;
  border-radius: 1px;
  border-left: 2px solid #000000;
  border-bottom: 2px solid #000000;
  order: 3;

  transform:
    ${({ $isOpen }) => ($isOpen ? "translateY(3px)" : "translateY(0)")}
    rotateZ(${({ $isOpen }) => ($isOpen ? "135deg" : "-45deg")});
  transition: transform 0.2s ease-in-out;

  @media screen and (max-width: 376px) {
    order: 2;
  }
`;