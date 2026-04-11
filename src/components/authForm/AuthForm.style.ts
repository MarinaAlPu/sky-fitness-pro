import { Link } from "react-router-dom";
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
  z-index: 1000000;
`;

export const SWrapper = styled.div`
  width: 360px;
  position: relative;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 40px;

  @media screen and (max-width: 376px) {
    padding: 40px 31.5px;
  }
`;

export const SLogo = styled.img`
  display: block;
  width: 220px;
  height: 35px;
`;

export const SForm = styled.form`
`;

export const SInputBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 48px;
`;

export const SButtonBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 34px;
`;

export const SLink = styled(Link)`
  display: block;
  width: 100%;
`;

export const SError = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  letter-spacing: 0px;
  text-align: center;
  color: #DB0030;
  margin-top: 10px;
`;
