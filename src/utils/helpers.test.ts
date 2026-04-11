import { formatProgress, validateForm } from './helpers'


describe('formatProgress', () => {
  it('Обрабатывает положительные значения, результат меньше 100', () => {
    expect(formatProgress(5, 50)).toBe(10);
  });
  it('Обрабатывает положительные значения, результат больше 100', () => {
    expect(formatProgress(60, 50)).toBe(100);
  });
  it('Обрабатывает 0 в числителе', () => {
    expect(formatProgress(0, 50)).toBe(0);
  });
  it('Обрабатывает 0 в знаменателе', () => {
    expect(formatProgress(5, 0)).toBe(0);
  });
  it('Обрабатывает 0 в числителе и знаменателе', () => {
    expect(formatProgress(0, 0)).toBe(0);
  });
  it('Округляет до целого значения', () => {
    expect(formatProgress(1, 3)).toBe(33);
  });
});


describe('validateForm registration', () => {
  const registrationValidUserData = {
    email: "user@user.user",
    password: "Password+-",
    confirmPassword: "Password+-",
  };

  const registrationEmptyErrors = {
    email: "",
    password: "",
    confirmPassword: ""
  };


  const registrationSpacesUserData = {
    email: "    ",
    password: "    ",
    confirmPassword: "    ",
  };

  const registrationSpacesErrors = {
    email: "Введите корректный Email",
    password: "Пароль должен содержать как минимум одну заглавную букву",
    confirmPassword: "Заполните все поля"
  };


  const registrationEmptyUserData = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const registrationEmptyFieldsErrors = {
    email: "Заполните все поля",
    password: "Заполните все поля",
    confirmPassword: "Заполните все поля"
  };


  const registrationEmptyOneFieldUserData = {
    email: "",
    password: "Password+-",
    confirmPassword: "Password+-",
  };

  const registrationEmptyOneFieldErrors = {
    email: "Заполните все поля",
    password: "",
    confirmPassword: ""
  };


  const registrationInvalidEmail = {
    email: "user.user.user",
    password: "Password+-",
    confirmPassword: "Password+-",
  };

  const registrationEmailErrors = {
    email: "Введите корректный Email",
    password: "",
    confirmPassword: ""
  };


  const registrationInvalidPasswordLessThan6Chars = {
    email: "user@user.user",
    password: "Pas+-",
    confirmPassword: "Pas+-",
  };

  const registrationPasswordErrorsLessThan6Chars = {
    email: "",
    password: "Пароль должен содержать не менее 6 симоволов",
    confirmPassword: ""
  };


  const registrationInvalidPasswordHasNoUpperCase = {
    email: "user@user.user",
    password: "password+-",
    confirmPassword: "password+-",
  };

  const registrationPasswordErrorsHasNoUpperCase = {
    email: "",
    password: "Пароль должен содержать как минимум одну заглавную букву",
    confirmPassword: ""
  };


  const registrationInvalidPasswordHasNoSpecialChars = {
    email: "user@user.user",
    password: "Password",
    confirmPassword: "Password",
  };

  const registrationInvalidPasswordHas1SpecialChar = {
    email: "user@user.user",
    password: "Password+",
    confirmPassword: "Password+",
  };

  const registrationPasswordErrorsHasNoEnoughSpecialChars = {
    email: "",
    password: "Пароль должен содержать не менее 2 спецсимволов",
    confirmPassword: ""
  };


  const registrationInvalidPasswordWasNotConfirm = {
    email: "user@user.user",
    password: "Password+-",
    confirmPassword: "Password+--",
  };

  const registrationPasswordErrorsWasNotConfirm = {
    email: "",
    password: "",
    confirmPassword: "Пароли не совпадают"
  };


  // заглушки функций
  const setErrors = jest.fn();
  const setIsValid = jest.fn();
  const setErrorMessage = jest.fn();


  // очистить историю вызовов
  beforeEach(() => {
    jest.clearAllMocks();
  });


  it('При регистрации принимает корректные значения', () => {
    const result = validateForm(registrationValidUserData, false, setErrors, setIsValid, setErrorMessage);

    expect(result).toBe(true);
    expect(setIsValid).toHaveBeenCalledWith(true);
    expect(setErrors).toHaveBeenCalledWith(registrationEmptyErrors);
  });

  it('При регистрации удаляются пробелы', () => {
    const result = validateForm(registrationSpacesUserData, false, setErrors, setIsValid, setErrorMessage);

    expect(result).toBe(false);
    expect(setIsValid).toHaveBeenCalledWith(false);
    expect(setErrors).toHaveBeenCalledWith(registrationSpacesErrors);
  });

  it('При регистрации все пустые поля', () => {
    const result = validateForm(registrationEmptyUserData, false, setErrors, setIsValid, setErrorMessage);

    expect(result).toBe(false);
    expect(setIsValid).toHaveBeenCalledWith(false);
    expect(setErrors).toHaveBeenCalledWith(registrationEmptyFieldsErrors);
  });

  it('При регистрации одно пустое поле', () => {
    const result = validateForm(registrationEmptyOneFieldUserData, false, setErrors, setIsValid, setErrorMessage);

    expect(result).toBe(false);
    expect(setIsValid).toHaveBeenCalledWith(false);
    expect(setErrors).toHaveBeenCalledWith(registrationEmptyOneFieldErrors);
  });

  it('При регистрации некорректный email', () => {
    const result = validateForm(registrationInvalidEmail, false, setErrors, setIsValid, setErrorMessage);

    expect(result).toBe(false);
    expect(setIsValid).toHaveBeenCalledWith(false);
    expect(setErrors).toHaveBeenCalledWith(registrationEmailErrors);
  });

  it('При регистрации пароль меньше 6 символов', () => {
    const result = validateForm(registrationInvalidPasswordLessThan6Chars, false, setErrors, setIsValid, setErrorMessage);

    expect(result).toBe(false);
    expect(setIsValid).toHaveBeenCalledWith(false);
    expect(setErrors).toHaveBeenCalledWith(registrationPasswordErrorsLessThan6Chars);
  });

  it('При регистрации пароль не содержит заглавную букву', () => {
    const result = validateForm(registrationInvalidPasswordHasNoUpperCase, false, setErrors, setIsValid, setErrorMessage);

    expect(result).toBe(false);
    expect(setIsValid).toHaveBeenCalledWith(false);
    expect(setErrors).toHaveBeenCalledWith(registrationPasswordErrorsHasNoUpperCase);
  });

  it('При регистрации пароль не содержит спецсимволы', () => {
    const result = validateForm(registrationInvalidPasswordHasNoSpecialChars, false, setErrors, setIsValid, setErrorMessage);

    expect(result).toBe(false);
    expect(setIsValid).toHaveBeenCalledWith(false);
    expect(setErrors).toHaveBeenCalledWith(registrationPasswordErrorsHasNoEnoughSpecialChars);
  });

  it('При регистрации пароль содержит 1 спецсимвол', () => {
    const result = validateForm(registrationInvalidPasswordHas1SpecialChar, false, setErrors, setIsValid, setErrorMessage);

    expect(result).toBe(false);
    expect(setIsValid).toHaveBeenCalledWith(false);
    expect(setErrors).toHaveBeenCalledWith(registrationPasswordErrorsHasNoEnoughSpecialChars);
  });

  it('При регистрации пароли не совпали', () => {
    const result = validateForm(registrationInvalidPasswordWasNotConfirm, false, setErrors, setIsValid, setErrorMessage);

    expect(result).toBe(false);
    expect(setIsValid).toHaveBeenCalledWith(false);
    expect(setErrors).toHaveBeenCalledWith(registrationPasswordErrorsWasNotConfirm);
  });
});


describe('validateForm login', () => {
  const loginValidUserData = {
    email: "user@user.user",
    password: "Password+-",
    confirmPassword: "",
  };

  const loginEmptyErrors = {
    email: "",
    password: "",
    confirmPassword: "",
  };


  const loginEmptyUserData = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const loginEmptyFieldsErrors = {
    email: "Заполните все поля",
    password: "Заполните все поля",
    confirmPassword: "",
  };


  const loginEmptyOneFieldUserData = {
    email: "",
    password: "Password+-",
    confirmPassword: "",
  };

  const loginEmptyOneFieldErrors = {
    email: "Заполните все поля",
    password: "",
    confirmPassword: "",
  };


  // заглушки функций
  const setErrors = jest.fn();
  const setIsValid = jest.fn();
  const setErrorMessage = jest.fn();


  // очистить историю вызовов
  beforeEach(() => {
    jest.clearAllMocks();
  });


  it('При логине принимает корректные значения', () => {
    const result = validateForm(loginValidUserData, true, setErrors, setIsValid, setErrorMessage);

    expect(result).toBe(true);
    expect(setIsValid).toHaveBeenCalledWith(true);
    expect(setErrors).toHaveBeenCalledWith(loginEmptyErrors);
  });

  it('При логине все пустые поля', () => {
    const result = validateForm(loginEmptyUserData, true, setErrors, setIsValid, setErrorMessage);

    expect(result).toBe(false);
    expect(setIsValid).toHaveBeenCalledWith(false);
    expect(setErrors).toHaveBeenCalledWith(loginEmptyFieldsErrors);
  });

  it('При логине одно пустое поле', () => {
    const result = validateForm(loginEmptyOneFieldUserData, true, setErrors, setIsValid, setErrorMessage);

    expect(result).toBe(false);
    expect(setIsValid).toHaveBeenCalledWith(false);
    expect(setErrors).toHaveBeenCalledWith(loginEmptyOneFieldErrors);
  });
});
