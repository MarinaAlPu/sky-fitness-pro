import type { UserDataType } from "../services/auth";


export type ValidateFormType = (
  userData: UserDataType,
  isLogin: boolean,
  setErrors: (errors: any) => void,
  setError: (message: string) => void,
  setIsValid: (valid: boolean) => void
) => boolean;

type FieldsErrors = {
  email: string;
  password: string;
  confirmPassword?: string;
};


export const validateForm: ValidateFormType = (userData, isLogin, setErrors, setError, setIsValid) => {
  const fieldsErrors: FieldsErrors = { email: "", password: "", confirmPassword: "" };

  let isValid = true;

  const userDataFields = Object.keys(userData);
  console.log("userDataFields: ", userDataFields);

  userDataFields.forEach((key) => {
    // проверить, что ключ в userData - один из ключей в UserDataType
    const fieldKey = key as string; // чтобы не было ошибки, если ключ = confirmPassword

    if (isLogin && fieldKey === 'confirmPassword') return;

    const fieldValue = userData[key as keyof UserDataType]?.trim() || "";

    if (!fieldValue) {
      fieldsErrors[fieldKey as keyof FieldsErrors] = "Заполните все поля";
      isValid = false;
    }
  });


  // ошибки email при регистрации
  if (!isLogin && userData.email.length > 0 && (userData.email).includes("@") === false) {
    fieldsErrors.email = "Введите корректный Email";
    isValid = false;
  }


  // ошибки пароля при регистрации (пароль меньше 6 символов)
  let isPasswordValid = userData.password.length >= 6;

  if (!isLogin && userData.password.length > 0 && !isPasswordValid) {
    fieldsErrors.password = "Пароль должен содержать не менее 6 симоволов";
    isValid = false;
  }


  // ошибки пароля при регистрации (пароль содержит меньше 2 символов)
  const specialCharsRegex = /[!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?]/g;
  const hasSpecialChars = userData.password.match(specialCharsRegex) || [];
  console.log(hasSpecialChars);

  const specialCharsCount = hasSpecialChars.length;
  console.log("specialCharsCount: ", specialCharsCount);

  if (!isLogin && userData.password.length > 0 && specialCharsCount < 2) {
    fieldsErrors.password = "Пароль должен содержать не менее 2 спецсимволов";
    isValid = false;
  };


  // ошибки пароля при регистрации (пароль не содержит заглавных букв)
  const hasUpperCase = /[A-ZА-ЯЁ]/.test(userData.password);

  if (!isLogin && userData.password.length > 0 && !hasUpperCase) {
    fieldsErrors.password = "Пароль должен содержать как минимум одну заглавную букву";
    isValid = false;
  };


  // совпадение паролей
  if (!isLogin && userData.password !== userData.confirmPassword) {
    fieldsErrors.confirmPassword = "Пароли не совпадают";
    isValid = false;
  };


  setErrors(fieldsErrors);
  setIsValid(isValid);
  return isValid;
}
