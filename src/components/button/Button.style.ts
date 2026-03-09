import styled from 'styled-components';


export const SButton = styled.button`
  background-color: #BCEC30;
  cursor: pointer;
  border: none;

  width: 103px;
  height: 52px;
  border-radius: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #000000;
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  letter-spacing: 0px;
  text-align: center;
  
  &:hover {
    background-color: #C6FF00;
  }
  
  &:focus {
    outline: none;
  }

  &:active {
    background-color: #000000;
    color: #FFFFFF;
  }
`
