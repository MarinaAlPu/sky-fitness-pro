import styled from "styled-components";


export const SWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FAFAFA;
  /* flex-grow: 1; */
  /* overflow: hidden; */
  margin-top: 120px;
`;

export const SContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 60px 140px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 375px) {
    padding: 40px 16px;
  }
`;

export const SBanner = styled.div`
  width: 100%;
  height: 310px;
  background-color: #FFC700;
  position: relative;
  border-radius: 30px;

  @media screen and (max-width: 375px) {
    
  }
`;

export const STitle = styled.div`
color: #FFFFFF;
  font-weight: 500;
  font-size: 60px;
  line-height: 110%;
  letter-spacing: 0px;
  z-index: 10;
  position: absolute;
  top: 40px;
  left: 40px;
  
  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const SImage = styled.img`
  /* background-image: url('./images/skill-cards/skill-card-1.png'); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  /* top: 0; */
  right: 0;
  z-index: 10;
`;

