import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../button/Button";
import { Card } from "../card/Card";
import { Footer } from "../footer/Footer";
import { SContainer, STitle, SUserPanel, SWrapper, SCourses, SUserIcon, SUserData, SUserName, SUserLogin, SUserPanelContent } from "./ProfileContent.style";


export const ProfileContent = () => {
  const navigate = useNavigate();

  const { handleLogout, user } = useAuth();

  const userName = user?.userName || null;

  // const handleLogout = () => {
  //   console.log("Нажали кнопку Выйти");
  // };


  return (
    <>
      <SWrapper>
        <SContainer>

          <STitle>Профиль</STitle>
          <SUserPanel>
            <SUserIcon src="./icons/mask-group.svg" alt="Фото пользователя" />

            <SUserPanelContent>
              <SUserData>
                <SUserName>{userName}</SUserName>
                <SUserLogin>Логин: {userName}</SUserLogin>
              </SUserData>
              <Button
                type='secondary'
                width={{ desktop: "192px", mobile: "283px" }}
                onClick={handleLogout}
              >
                Выйти
              </Button>
            </SUserPanelContent>
          </SUserPanel>

          <STitle>Мои курсы</STitle>
          <SCourses>
            {/* <Card />
            <Card />
            <Card /> */}
          </SCourses>

        </SContainer>
      </SWrapper>

      <Footer buttonDisplay={{ desktop: 'none', mobile: 'flex' }}/>
    </>
  )
}