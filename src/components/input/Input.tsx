import { SInput, type HeightType, type InputType } from "./Input.style";


type InputProps = {
  type?: InputType,
  height?: HeightType | string,
  border?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string;
  name: string;
  value?: string;
}


export const Input: React.FC<InputProps> = ({ type = "text", height = "52px", border = "success", onChange, placeholder, name, value="" }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Инпут. Ввели символ в инпут: ", e.target.value);
    onChange(e);
  };


  return (
    <SInput
      type={type}
      $height={height}
      $border={border}
      onChange={handleChange}
      placeholder={placeholder}
      name={name}
      value={value}
    />
  )
}
