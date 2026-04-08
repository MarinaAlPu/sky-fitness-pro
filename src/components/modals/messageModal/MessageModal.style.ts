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
  position: relative;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  gap: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 40px;
`;

export const STitle = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 110%;
  letter-spacing: 0px;
  text-align: center;
`;

export const SButton = styled.button`
  width: 68px;
  height: 68px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  background: url("icons/ok-button.svg") no-repeat center / contain;

  &:hover {
    background-image: url("icons/ok-button-hover.svg");
  }

  &:active {
    background-image: url("icons/ok-button-active.svg");
  }
`;