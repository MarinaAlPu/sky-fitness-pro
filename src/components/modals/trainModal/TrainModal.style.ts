import styled from "styled-components";


export const SPageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const SWrapper = styled.div`
  width: 460px;
  height: 609px;
  position: relative;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 40px;

  @media screen and (max-width: 375px) {
    width: 343px;
    height: 585px;
    padding: 30px;
    gap: 34px;
  }
`;

export const STitle = styled.div`
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  letter-spacing: 0%;
`;

export const SContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 26px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #F7F7F7;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 10px;
    cursor: pointer;
  }

  /* *::-webkit-scrollbar-button {
    display: none;
    height: 0;
    width: 0;
  } */
`;

export const SItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #C4C4C4;
  align-items: center;
`;

export const SCheckbox = styled.img`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const SItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SItemTitle = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 110%;
  letter-spacing: 0px;

  @media screen and (max-width: 375px) {
    font-size: 18px;
  } 
`;

export const SItemDescription = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: 0px;

  @media screen and (max-width: 375px) {
    font-size: 14px;
  } 
`;

export const SCloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 28px;
    font-weight: bold;
    color: #999999;
    background: none;
    border: none;
    cursor: pointer;
`
