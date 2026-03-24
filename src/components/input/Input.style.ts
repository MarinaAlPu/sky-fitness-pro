import styled from 'styled-components';


export type InputType = "text" | "email" | "password" | "number";

type BorderType = {
  success: string,
  error: string,
};

const borders: BorderType = {
  success: "1px solid #D0CECE",
  error: "1px solid #DB0030",
};

type SInputProps = {
  $type?: InputType,
  $height?: string,
  $border?: string
  onChange: () => void
}


export const SInput = styled.input<SInputProps>`
  border-radius: 8px;
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  letter-spacing: 0px;
  padding-left: 18px;
  width: 100%;
  
  height: ${({ $height }) => {
    return $height || "52px";
  }};

  border: ${({ $border }) => {
    if ($border === 'error') {
      return borders.error;
    } else {
      return borders.success;
    }
  }};

  &::placeholder {
    color: #D0CECE;
  }
  
  &:focus {
    outline: none;
    border-color: #BCEC30;
    box-shadow: 0 0 5px #d9ed9d;
  }

    @media screen and (max-width: 375px) {
    height: ${({ $height }) => {
      return $height || "52px";
    }};
  }
`
