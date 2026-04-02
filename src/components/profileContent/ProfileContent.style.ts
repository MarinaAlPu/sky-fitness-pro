import styled from "styled-components";


export const SWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FAFAFA;
  /* flex-grow: 1; */
  /* overflow: hidden; */
  margin-top: 120px;
  /* margin-top: 85px; */
`;

export const SContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 60px 140px 280px;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */

  @media screen and (max-width: 375px) {
    padding: 40px 16px;
  }
`;

export const STitle = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 110%;
  letter-spacing: 0px;
  margin-bottom: 40px;

  @media screen and (max-width: 375px) {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const SUserPanel = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  /* margin: 0 auto; */
  padding: 30px;
  border-radius: 30px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 67px -12px #00000021;
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  gap: 33px;
  /* flex-wrap: wrap; */

  @media screen and (max-width: 375px) {
    /* padding: 40px 16px; */
    flex-direction: column;
    gap: 30px;
    align-items: center;
    margin-bottom: 24px;
  }
`;

export const SUserIcon = styled.img`
  width: 197px;
  height: 197px;
  /* margin: 0 auto; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* display: flex; */

  @media screen and (max-width: 375px) {
    /* padding: 40px 16px; */
    width: 141px;
    height: 141px;
  }
`;

export const SUserPanelContent = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */

  @media screen and (max-width: 375px) {
    /* padding: 40px 16px; */
    gap: 20px;
    align-items: flex-start;
  }
`;

export const SUserData = styled.div`
  /* width: 100%; */
  /* min-height: 100vh; */
  /* margin: 0 auto; */
  /* padding: 60px 140px; */
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */

  @media screen and (max-width: 375px) {
    /* padding: 40px 16px; */
    gap: 20px;
  }
`;

export const SUserName = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 110%;
  letter-spacing: 0px;
  margin-bottom: 30px;

  @media screen and (max-width: 375px) {
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

  @media screen and (max-width: 375px) {
    font-size: 16px;
    margin-bottom: 0;
  }
`;

export const SCourses = styled.div`
  width: 100%;
  /* margin: 0 auto; */
  /* padding: 60px 140px; */
  display: flex;
  /* flex-direction: row; */
  gap: 40px;
  flex-wrap: wrap;

  @media screen and (max-width: 375px) {
    /* padding: 40px 16px; */
    flex-direction: column;
    gap: 24px;
  }
`;
