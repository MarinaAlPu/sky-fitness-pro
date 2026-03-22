import { Button } from "../button/Button";
import { Card } from "../card/Card";
import { SContainer, STitle, SUserPanel, SWrapper, SCourses, SUserIcon, SUserData, SUserName, SUserLogin, SUserPanelContent } from "./ProfileContent.style";


export const ProfileContent = () => {
  const handleLogout = () => {
    console.log("Нажали кнопку Выйти");
  };


  return (
    <SWrapper>
      <SContainer>

        <STitle>Профиль</STitle>
        <SUserPanel>
          <SUserIcon src="./icons/mask-group.svg" alt="Фото пользователя" />

          <SUserPanelContent>
            <SUserData>
              <SUserName>Сергей</SUserName>
              <SUserLogin>Логин: sergey.petrov96</SUserLogin>
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
          <Card />
          <Card />
          <Card />
        </SCourses>

      </SContainer>
    </SWrapper>
  )
}