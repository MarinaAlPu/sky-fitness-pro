import { SButton, type ButtonType, type HeightType, type WidthType } from './Button.style';


type ButtonProps = {
  type?: ButtonType,
  width?: WidthType | string,
  height?: HeightType | string,
  disabled?: boolean,
  onClick: () => void,
  text: string
}

export const Button: React.FC<ButtonProps> = ({ type = 'primary', width, height, disabled = false, onClick, text }) => {
  return (
    <SButton
      $type={type}
      $width={width}
      $height={height}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </SButton>
  );
};
