import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { Button } from "../../button/Button";
import { SWrapper, SContainer, SEmail, SUserName } from "./UserModal.style";


export const UserModal = () => {
  const navigate = useNavigate();

  const { handleLogout, user, token } = useAuth();

  const userName = user?.userName || null;
  const email = user?.email || null;


  const onOpenProfile = () => {
    if (token) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleLogoutClick = (e?: React.MouseEvent) => {
    handleLogout(e);
  };


  return (
    <SWrapper onClick={(e) => e.stopPropagation()}>
      <SContainer>
        <SUserName>{userName}</SUserName>
        <SEmail>{email}</SEmail>
      </SContainer>

      <SContainer>
        <Button
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