import { Button } from "../../button/Button";
import { SWrapper, SContainer, SEmail, SUserName } from "./UserModal.style";


export const UserModal = () => {
  const onOpenProfile = () => {
    console.log("Нажали кнопку Мой профиль");
  };

  const handleLogout = () => {
    console.log("Нажали кнопку Выйти");
  };


  return (
    <SWrapper>
      <SContainer>
        <SUserName>Сергей</SUserName>
        <SEmail>sergey.petrov96@mail.ru</SEmail>
      </SContainer>

      <SContainer>
        <Button
          // width="206px"
          onClick={onOpenProfile}
        >
          Мой профиль</Button>
        <Button
          type="secondary"
          onClick={handleLogout}
        >
          Выйти</Button>
      </SContainer>
    </SWrapper>
  )
}