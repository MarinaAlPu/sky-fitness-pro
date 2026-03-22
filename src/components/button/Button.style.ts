import styled from 'styled-components';


export type ButtonType = "primary" | "secondary";

type BackgroundColorType = {
  regular: string,
  hover: string,
  active: string,
  inactive: string,
};

type BackgroundColorsType = {
  primary: BackgroundColorType,
  secondary: BackgroundColorType,
};

type ColorType = {
  regular: string,
  hover: string,
  active: string,
  inactive: string,
};

type ColorsType = {
  primary: ColorType,
  secondary: ColorType,
};

type SecondaryBorderType = {
  regular: string,
  hover: string,
  active: string,
  inactive: string,
};

type BorderType = {
  primary: string,
  secondary: SecondaryBorderType,
};

export type WidthType = {
  desktop: string;
  mobile: string;
};


const backgroundColors: BackgroundColorsType = {
  primary: {
    regular: "#BCEC30",
    hover: "#C6FF00",
    active: "#000000",
    inactive: "#F7F7F7",
  },
  secondary: {
    regular: "#FFFFFF",
    hover: "#F7F7F7",
    active: "#E9ECED",
    inactive: "#FFFFFF",
  },
};

const colors: ColorsType = {
  primary: {
    regular: "#000000",
    hover: "#000000",
    active: "#FFFFFF",
    inactive: "#999999",
  },
  secondary: {
    regular: "#000000",
    hover: "#000000",
    active: "#000000",
    inactive: "#999999",
  },
};

const borders: BorderType = {
  primary: "none",
  secondary: {
    regular: "1px solid #000000",
    hover: "1px solid #000000",
    active: "1px solid #000000",
    inactive: "1px solid #999999",
  },
};


type SButtonProps = {
  $type: ButtonType, //"primary" | "secondary",
  $width?: string | WidthType,
  // $borderColor: string,
  disabled?: boolean,
  // onClick: () => void
  // text: string,
}


export const SButton = styled.button<SButtonProps>`
  /* cursor: pointer; */
  
  height: 52px;
  border-radius: 46px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  letter-spacing: 0px;
  text-align: center;
  
  /* width: 103px; */
  width: ${({ $width }) => {
    if (typeof $width === "object") {
      return $width.desktop;
    } else {
      return $width || "100%";
    }
  }};

/* background-color: #BCEC30; */
background-color: ${({ $type, disabled }) =>
    disabled ? backgroundColors[$type].inactive : backgroundColors[$type].regular
  };

/* color: #000000; */
color: ${({ $type, disabled }) =>
    disabled ? colors[$type].inactive : colors[$type].regular
  };

/* border: none; */
border: ${({ $type, disabled }) => {
    if ($type === 'primary') {
      return borders.primary;
    } else {
      return disabled ? borders.secondary.inactive : borders.secondary.regular;
    }
  }};

  
  &:hover:not(:disabled) {
    /* background-color: #C6FF00; */
    background-color: ${({ $type }) => backgroundColors[$type].hover};
    color: ${({ $type }) => colors[$type].hover};
    border: ${({ $type }) => {
    if ($type === 'primary') {
      return borders.primary;
    } else {
      return borders.secondary.hover;
    }
  }};
    cursor: pointer;
  }
  
  &:focus {
    outline: none;
  }

  &:active:not(:disabled) {
    /* background-color: #000000; */
    background-color: ${({ $type }) => backgroundColors[$type].active};
    /* color: #FFFFFF; */
    color: ${({ $type }) => colors[$type].active};
    border: ${({ $type }) => {
    if ($type === 'primary') {
      return borders.primary;
    } else {
      return borders.secondary.active;
    }
  }};
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
  }


  @media screen and (max-width: 375px) {
    height: 36px;

    width: ${({ $width }) => {
    if (typeof $width === "object") {
      return $width.mobile;
    } else {
      return $width || "100%";
    }
  }};
  }
`
