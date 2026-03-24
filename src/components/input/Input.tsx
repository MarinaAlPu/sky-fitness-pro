import { SInput, type InputType } from "./Input.style";


type InputProps = {
  type?: InputType,
  height?: string,
  border?: string,
  onChange: () => void,
  placeholder?: string
}


export const Input: React.FC<InputProps> = ({ type = "text", height = "52px", border = "success", placeholder }) => {
  const onChange = () => {
    console.log("Ввели символ в инпут");
  };


  return (
    <SInput
      $type={type}
      $height={height}
      $border={border}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
