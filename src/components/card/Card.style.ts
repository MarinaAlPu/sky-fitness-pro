// import { Link } from "react-router-dom";
import styled from "styled-components";


// export const SWrapper = styled(Link)`
export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  /* height: 501px; */
  text-decoration: none;
  color: inherit;
  border-radius: 30px;
  position: relative;
  box-shadow: 0px 4px 67px -12px #00000021;

  @media screen and (max-width: 375px) {
    width: 343px;
    height: 492px;
  }
`;

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 30px 15px 30px;
  /* width: 360px;
  height: 501px; */

  @media screen and (max-width: 375px) {
    padding: 24px 21.5px 15px;
  }
`;

export const SImageContainer = styled.div`
  width: 360px;
  height: 325px;
  background-color: #FFC700;
  border-radius: 30px;
  display: flex;
`;

export const SImage = styled.img`
  width: 360px;
  height: 325px;
  /* background-image: url("./images/mask-1.png"); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;

  @media screen and (max-width: 375px) {
    width: 343px;
    height: 325px;
  }
`;

export const SRoundButton = styled.img`
  width: 32px;
  height: 32px;
  /* background-image: url("./icons/add-button.svg"); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 10;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const SDescriptionContainer = styled.div`
  /* padding: 24px 30px 15px; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
/* 
  @media screen and (max-width: 375px) {
    padding: 24px 21.5px 15px;
  } */
`;

export const STitle = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 110%;
  letter-spacing: 0px;

  @media screen and (max-width: 375px) {
    font-size: 24px;
  }
`;

export const SPropertiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
`;

export const SFirstRowProperties = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
`;

export const SPropertyContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  border-radius: 50px;
  background-color: #F7F7F7;
`;

// export const SDaysContainer = styled.div`
//   padding: 10px;
//   display: flex;
//   flex-direction: row;
//   gap: 6px;
// `;

export const SDaysIcon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url("./icons/calendar.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// export const SDaysText = styled.div`
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 110%;
//   letter-spacing: 0px;
//   vertical-align: bottom;
// `;

export const SPropertyText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: 0px;
  vertical-align: bottom;
`;

// export const STimeContainer = styled.div`
//   padding: 10px;
//   display: flex;
//   flex-direction: row;
//   gap: 6px;
// `;

export const STimeIcon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url("./icons/time.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// export const STimeText = styled.div`
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 110%;
//   letter-spacing: 0px;
//   vertical-align: bottom;
// `;

// export const SComplexityContainer = styled.div`
//   padding: 10px;
//   display: flex;
//   flex-direction: row;
//   gap: 6px;
// `;

export const SComplexityIcon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url("./icons/сomplexity.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  outline: none;
`;

// export const SComplexityText = styled.div`
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 110%;
//   letter-spacing: 0px;
//   vertical-align: bottom;
// `;

export const SProgress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* margin-bottom: 40px; */
`;

export const SProgressTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  letter-spacing: 0px;
`;

export const ProgressBar = styled.div`
  width: 300px;
  height: 6px;
  border-radius: 50px;
  background-color: #F7F7F7;
  /* background-color: #00C1FF; */
  border: none;
  outline: none;
`;

export const SProgressFill = styled.div<{ $percent: number }>`
  height: 100%;
  background-color: #00C1FF;
  border-radius: 50px;
  
  width: ${props => props.$percent}%; 
`;