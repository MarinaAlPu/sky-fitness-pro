import styled from "styled-components";


export const SWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FAFAFA;
  /* flex-grow: 1; */
  /* overflow: hidden; */
  /* margin-top: 120px; */
  margin-top: 85px;
`;

export const SContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 60px 140px 260px 140px;
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
  /* flex-wrap: wrap; */
  /* position: relative; */

  @media screen and (max-width: 375px) {
    padding: 24px 16px 40px 16px;
  }
`;

export const STitle = styled.div`
  font-weight: 500;
  font-size: 60px;
  line-height: 100%;
  letter-spacing: 0px;
  padding-bottom: 40px;
  
  @media screen and (max-width: 375px) {
    font-weight: 500;
    font-size: 24px;
    padding-bottom: 24px;
  }
`;

export const SVideo = styled.iframe`
  width: 100%;
  max-width: 1160px;
  height: 639px;
  border-radius: 30px;
  margin-bottom: 40px;
  border: none;
  
  @media screen and (max-width: 375px) {
    width: 343;
    height: 189;
  }
`;

export const SWorkoutPanel = styled.div`
  /* width: 1160;
  height: 639; */
  border-radius: 30px;
  padding: 40px;
  box-shadow: 0px 4px 67px -12px #00000021;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  
  @media screen and (max-width: 375px) {
    padding: 30px;
  }
`;

export const SWorkoutTitle = styled.div`
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  letter-spacing: 0%;
  border-radius: 30px;
  box-shadow: 0px 4px 67px -12px #00000021;
  margin-bottom: 20px;
  
  @media screen and (max-width: 375px) {
    /* font-weight: 400;
    font-size: 32px; */
  }
`;

export const SWorkoutExercises = styled.ul`
  list-style: none;
  margin-bottom: 40px;
  /* display: flex; */
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 60px;
  row-gap: 20px;
  
  @media screen and (max-width: 375px) {
    /* flex-direction: column; */
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const SWorkoutExercise = styled.li`
  width: 100%;
  /* width: 320px; */
  /* height: 189; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media screen and (max-width: 375px) {
    /* width: 343;
    height: 189; */
  }
`;

export const SExerciseTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  letter-spacing: 0px;
  
  @media screen and (max-width: 375px) {
    /* width: 343;
    height: 189; */
  }
`;

export const SExerciseProgress = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 50px;
  background-color: #F7F7F7;
  border: none;
  outline: none;
  
  @media screen and (max-width: 375px) {
    /* width: 343;
    height: 189; */
  }
`;

export const SProgressFill = styled.div<{ $percent: number }>`
  height: 100%;
  background-color: #00C1FF;
  border-radius: 50px;
  
  width: ${props => props.$percent}%; 
`;
