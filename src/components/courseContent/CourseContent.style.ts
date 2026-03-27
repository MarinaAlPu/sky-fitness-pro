import styled from "styled-components";


const backgroundColors: Record<number, string> = {
  1: "#FFC700",
  2: "#2491D2",
  3: "#F7A012",
  4: "#FF7E65",
  5: "#7D458C",
};

type SBannerProps = {
  $order: number
};


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
  /* position: relative; */

  @media screen and (max-width: 375px) {
    padding: 40px 16px;
  }
`;

export const SBanner = styled.div<SBannerProps>`
  width: 100%;
  height: 310px;
  /* background-color: #FFC700; */
  background-color: ${({ $order }) =>
    backgroundColors[$order]
  };
  position: relative;
  border-radius: 30px;
  margin-bottom: 60px;
  overflow: hidden;

  @media screen and (max-width: 375px) {
    /* justify-content: center;
    align-items: center; */
    height: 389px;
    margin-bottom: 40px;
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
  top: 0px;
  right: 0px;
  z-index: 10;

  @media screen and (max-width: 375px) {
    top: 58px;
    right: -20px;
    width: 360px;
    height: 325px;
  }
`;

export const SCentralBlock = styled.div`
  width: 100%;
  /* height: 486px; */
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 102px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 375px) {
    gap: 40px;
    margin-bottom: 156px;
  }
`;

export const SCentralBlockDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (max-width: 375px) {
    gap: 24px;
  }
`;

export const SCentralBlockTitle = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 110%;
  letter-spacing: 0px;

  @media screen and (max-width: 375px) {
    font-weight: 500;
    font-size: 24px;
  }
`;

// export const SDescriptionBlocksWrapper = styled.div`
export const SDescriptionBlocksWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 17px;
  list-style: none;

  @media screen and (max-width: 375px) {
    flex-wrap: wrap;
  }  
`;

export const SDescriptionBlock = styled.li`
  /* width: 368px;
  height: 141px; */
  border-radius: 28px;
  padding: 20px;
  background-color: #151720;
  /* background-color: #1E212E; */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
`;

export const SDescriptionNumber = styled.div`
  color: #BCEC30;
  font-weight: 500;
  font-size: 75px;
  line-height: 135%;
  letter-spacing: 0px;
`;

export const SDescriptionText = styled.div`
  color: #FFFFFF;
  font-weight: 400;
  font-size: 24px;
  line-height: 110%;
  letter-spacing: 0px;
`;

export const SCentralBlockTypes = styled.div`
  width: 100%;
  /* height: 486px; */
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (max-width: 375px) {
    gap: 24px;
    position: relative;
    z-index: 10;
  }
`;

export const STypesWrapper = styled.ul`
  background-color: #BCEC30;
  width: 100%;
  border-radius: 38px;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 124px;
  row-gap: 34px;
  list-style: none;

  @media screen and (max-width: 375px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const STypesItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 284px;
  gap: 8px;
`;

export const STypesImage = styled.img`
  width: 26px;
  height: 26px;;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const STypesText = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 110%;
  letter-spacing: 0px;

  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
`;

export const SBottomBlockWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 5;
`;

export const SBottomBlock = styled.div`
  width: 100%;
  /* height: 486px; */
  padding: 40px;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 4px 67px -12px #00000021;
  position: relative;
  overflow: hidden;
  z-index: 10;
  border-radius: 30px;
  background-color: #FAFAFA;

  @media screen and (max-width: 375px) {
    /* position: relative;
    overflow: visible; */
    padding: 30px;
    /* height: 412px; */
    z-index: 20;
  }
`;

export const SBottomBlockText = styled.div`
  width: 437px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media screen and (max-width: 375px) {
    width: 343px;
    position: relative;
    z-index: 1000;
  }
`;

export const SBottomBlockTextTitleWrapper = styled.div`
  width: 400px;
  /* display: flex; */

  @media screen and (max-width: 375px) {
    width: 283px;
  }
`;

export const SBottomBlockTextTitle = styled.div`
  font-weight: 500;
  font-size: 60px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;

  @media screen and (max-width: 375px) {
    font-size: 32px;
    width: 225px;
  }  
`;

export const SList = styled.ul`
  list-style: none;
  padding-left: 15px;

  @media screen and (max-width: 375px) {
    padding-left: 10px;
  }  
`;

export const SListItem = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.4;

  font-weight: 400;
  font-size: 24px;
  line-height: 110%;
  letter-spacing: 0px;
  vertical-align: middle;
  opacity: 60%;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    /* width: 8px;
    height: 8px; */
    width: 4.37px;
    height: 4.06px;
    background-color: #000000;
    opacity: 60%;
    border-radius: 50%;
  }

  @media screen and (max-width: 375px) {
    font-size: 18px;
    padding-left: 20px;
  }   
`;

export const SBottomBlockImageWrapper = styled.div`
  position: absolute;
  top: -100px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 30;

  @media screen and (max-width: 375px) {
    /* position: relative; */
    z-index: 10;
    overflow: visible;
  }
`;

export const SBottomBlockImageContainer = styled.picture`

`;

export const SBottomBlockImage = styled.img`
  /* background-image: url('./images/skill-cards/man-lines.png'); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 20px;
  right: -30px;
  /* z-index: 10; */
  height: 690px;

  position: absolute;
  pointer-events: none;

  @media screen and (max-width: 375px) {
    /* display: none; */
    top: -165px;
    right: -23px;
    height: 450px;
    /* width: auto;
    z-index: 100; */
  }   
`;
