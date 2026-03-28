import styled from 'styled-components';


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

  @media screen and (max-width: 375px) {
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

export const SHeaderLogoLink = styled.a`
  display: flex;
  align-items: center;
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

  @media screen and (max-width: 375px) {
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
`;

export const SHeaderUserIcon = styled.img`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  order: 1;
`;

export const SHeaderUserName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  order: 2;

    /* &::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 1px;
    border-left: 2px solid #000000;
    border-bottom: 2px solid #000000;
    margin: 5px 0px;
    padding: 0;
    transform: rotate(-45deg);
  } */

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const SArrow = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 1px;
  border-left: 2px solid #000000;
  border-bottom: 2px solid #000000;
  /* margin: 5px 0px; */
  /* padding: 0; */
  transform: rotate(-45deg);
  /* transform: rotate(135deg); */
  order: 3;

  @media screen and (max-width: 375px) {
    order: 2;
  }
`;