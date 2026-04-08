import styled from "styled-components";


export const SWrapper = styled.main`
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
  padding: 60px 140px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 376px) {
    padding: 40px 16px;
  }
`;

export const STitle = styled.div`
  width: 100%;
  max-height: 120px;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  
  @media screen and (max-width: 376px) {
    margin-bottom: 34px;
  }
`;

export const SDescribe = styled.div`
  font-weight: 500;
  font-size: 60px;
  line-height: 100%;
  letter-spacing: 0px;

  @media screen and (max-width: 376px) {
    font-size: 32px;
    line-height: 110%;
  }
`;

export const SText = styled.div`
  width: 288px;
  height: 120px;
  background-image: url('./icons/comment.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  padding: 16px 20px 18px;
  display: flex;
  flex-shrink: 0;
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  letter-spacing: 0px;
  border-radius: 5px;

  @media screen and (max-width: 376px) {
    display: none;
  }
`;

export const SCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;


  @media screen and (max-width: 376px) {
    flex-direction: column;
    gap: 24px;
  }
`;
