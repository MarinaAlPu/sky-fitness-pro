import { SButton, type ButtonType, type WidthType } from './Button.style';


type ButtonProps = {
  type?: ButtonType,
  width?: WidthType | string,
  disabled?: boolean,
  onClick: () => void,
  text: string
}

export const Button: React.FC<ButtonProps> = ({ type = 'primary', width, disabled = false, onClick, text }) => {
  return (
    <SButton
      $type={type}
      $width={width}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </SButton>
  );
};
