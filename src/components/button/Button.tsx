import { SButton, type ButtonType, type DisplayType, type HeightType, type WidthType } from './Button.style';


type ButtonProps = {
  type?: ButtonType,
  width?: WidthType | string,
  height?: HeightType | string,
  disabled?: boolean,
  onClick: () => void,
  children: React.ReactNode,
  // text?: string
  display?: DisplayType
}

export const Button: React.FC<ButtonProps> = ({ type = 'primary', width, height, disabled = false, onClick, children, display }) => {
  return (
    <SButton
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
