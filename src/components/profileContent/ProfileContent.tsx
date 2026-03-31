import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../button/Button";
import { Card } from "../card/Card";
import { Footer } from "../footer/Footer";
import { SContainer, STitle, SUserPanel, SWrapper, SCourses, SUserIcon, SUserData, SUserName, SUserLogin, SUserPanelContent } from "./ProfileContent.style";
import { useCourses } from "../../context/CoursesContext";
import { useEffect } from "react";


export const ProfileContent = () => {
  const page = "profile";

  // const navigate = useNavigate();

  const { handleLogout, user } = useAuth();

  const { courses, userCourses, getCourses } = useCourses();
  console.log("userCourses: ", userCourses);

  useEffect(() => {
    if (courses.length === 0) {
      getCourses();
    }
  }, []);


  const userName = user?.userName || null;

  // const handleLogout = () => {
  //   console.log("Нажали кнопку Выйти");
  // };


  const userCoursesSelected = courses.filter((course) => userCourses.includes(course._id));
  console.log("userCoursesSelected: ", userCoursesSelected);


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

            {userCoursesSelected.length > 0 ?
              (
                userCoursesSelected.map((course) => (
                  <Card
                    key={course._id}
                    id={course._id}
                    title={course.nameRU}
                    durationInDays={course.durationInDays}
                    dailyDurationInMinutes={course.dailyDurationInMinutes}
                    difficulty={course.difficulty}
                    order={course.order}
                    page={page}
                  />
                ))
              ) : (
                <div>Вы не добавили ни одного курса</div>
              )}

          </SCourses>

        </SContainer>
      </SWrapper >

      <Footer buttonDisplay={{ desktop: 'none', mobile: 'flex' }} />
    </>
  )
}