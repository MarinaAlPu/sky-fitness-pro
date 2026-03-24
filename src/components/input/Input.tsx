import { SInput, type HeightType, type InputType } from "./Input.style";


type InputProps = {
  type?: InputType,
  height?: HeightType | string,
  border?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string
}


export const Input: React.FC<InputProps> = ({ type = "text", height = "52px", border = "success", placeholder }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Ввели символ в инпут: ", e.target.value);
  };


  return (
    <SInput
      type={type}
      $height={height}
      $border={border}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}
