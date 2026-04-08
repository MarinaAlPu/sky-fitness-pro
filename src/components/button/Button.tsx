import { SButton, type ButtonType, type DisplayType, type HeightType, type WidthType } from './Button.style';


type ButtonProps = {
  htmlType?: "button" | "submit";
  type?: ButtonType,
  width?: WidthType | string,
  height?: HeightType | string,
  disabled?: boolean,
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void,
  children: React.ReactNode,
  display?: DisplayType
}

export const Button: React.FC<ButtonProps> = ({ htmlType = "button", type = 'primary', width, height, disabled = false, onClick, children, display }) => {
  return (
    <SButton
      type={htmlType}
      $type={type}
      $width={width}
      $height={height}
      disabled={disabled}
      onClick={onClick}
      $display={display}
    >
      {children}
    </SButton>
  );
};
