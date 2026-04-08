import styled from "styled-components";


export const SWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FAFAFA;
  margin-top: 120px;
`;

export const SContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 60px 140px 280px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 376px) {
    padding: 40px 16px;
  }
`;

export const STitle = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 110%;
  letter-spacing: 0px;
  margin-bottom: 40px;

  @media screen and (max-width: 376px) {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const SUserPanel = styled.div`
  width: 100%;
  padding: 30px;
  border-radius: 30px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 67px -12px #00000021;
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  gap: 33px;

  @media screen and (max-width: 376px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;
    margin-bottom: 24px;
  }
`;

export const SUserIcon = styled.img`
  width: 197px;
  height: 197px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 376px) {
    width: 141px;
    height: 141px;
  }
`;

export const SUserPanelContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 376px) {
    gap: 20px;
    align-items: flex-start;
  }
`;

export const SUserData = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 376px) {
    gap: 20px;
  }
`;

export const SUserName = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 110%;
  letter-spacing: 0px;
  margin-bottom: 30px;

  @media screen and (max-width: 376px) {
    font-size: 24px;
    margin-bottom: 0;
  }
`;

export const SUserLogin = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  letter-spacing: 0px;
  margin-bottom: 44px;

  @media screen and (max-width: 376px) {
    font-size: 16px;
    margin-bottom: 0;
  }
`;

export const SCourses = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;

  @media screen and (max-width: 376px) {
    flex-direction: column;
    gap: 24px;
  }
`;
