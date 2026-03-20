import styled from 'styled-components';


export const SWrapper = styled.div`
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
  padding: 50px 140px;

  @media screen and (max-width: 375px) {
    padding: 40px 16px;
  }
`;

export const SHeaderBlock = styled.div`
  /* height: 120px; */
  /* padding-top: 50px; */
  display: flex;
  flex-direction: row;
  gap: 15px;
  /* align-items: flex-start; */
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
  line-height: 110.00000000000001%;
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
