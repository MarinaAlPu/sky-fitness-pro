import { useAuth } from "../../../context/AuthContext";
import { Button } from "../../button/Button";
import { SWrapper, SContainer, SEmail, SUserName } from "./UserModal.style";


export const UserModal = () => {
  const {handleLogout} = useAuth();


  const onOpenProfile = () => {
    console.log("Нажали кнопку Мой профиль");
  };

  const handleLogoutClick = () => {
    console.log("Нажали кнопку Выйти");
    // e?.preventDefault();
    // e.stopPropagation();
    handleLogout();
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
          htmlType="button"
          onClick={handleLogoutClick}
        >
          Выйти</Button>
      </SContainer>
    </SWrapper>
  )
}