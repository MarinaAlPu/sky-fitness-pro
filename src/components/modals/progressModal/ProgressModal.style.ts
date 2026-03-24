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
  z-index: 10;
`;

export const SWrapper = styled.div`
  width: 426px;
  height: 595.5px;
  position: relative;
  /* z-index: 10; */
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  justify-content: center;
  border-radius: 30px;
  padding: 40px;
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
  gap: 20px;
  padding-right: 26px;
  padding-bottom: 1px;
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
  flex-direction: column;
  gap: 10px;
`;

export const SItemTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  letter-spacing: 0px;

  @media screen and (max-width: 375px) {
    font-size: 16px;
  } 
`;
