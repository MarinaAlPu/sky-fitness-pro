import styled from "styled-components";


export const SWrapper = styled.div`
  width: 266px;
  height: 258px;
  position: relative;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 30px;
  gap: 34px;

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const SContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 375px) {
    /* display: none; */
  }
`;

export const SUserName = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  letter-spacing: 0%;

  @media screen and (max-width: 375px) {
    /* display: none; */
  }
`;

export const SEmail = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  letter-spacing: 0%;
  color: #999999;

  @media screen and (max-width: 375px) {
    /* display: none; */
  }
`;