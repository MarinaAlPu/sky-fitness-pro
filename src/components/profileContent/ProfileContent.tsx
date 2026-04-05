import { useAuth } from "../../context/AuthContext";
import { Button } from "../button/Button";
import { Card } from "../card/Card";
import { Footer } from "../footer/Footer";
import { SContainer, STitle, SUserPanel, SWrapper, SCourses, SUserIcon, SUserData, SUserName, SUserLogin, SUserPanelContent } from "./ProfileContent.style";
import { useCourses } from "../../context/CoursesContext";
import { useEffect, useState } from "react";
import { TrainModal } from "../modals/trainModal/TrainModal";


export const ProfileContent = () => {
  const page = "profile";

  const { handleLogout, user } = useAuth();

  const { courses, userCourses, getCourses } = useCourses();
  // console.log("userCourses: ", userCourses);
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);


  useEffect(() => {
    if (courses.length === 0) {
      getCourses();
    }
  }, []);


  const onOpenTrainModal = (courseId: string) => {
    setActiveCourseId(courseId);
  };

  const onCloseModal = () => {
    setActiveCourseId(null);
  };


  const userName = user?.userName || null;

  // const handleLogout = () => {
  //   console.log("Нажали кнопку Выйти");
  // };


  const userCoursesSelected = courses.filter((course) => userCourses.includes(course._id));
  // console.log("userCoursesSelected: ", userCoursesSelected);

  const onOpenTrain = () => {
    console.log("Нажали кнопку Начать");

  };


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
                    onOpenTrainModal={onOpenTrainModal}
                    onCloseModal={onCloseModal}
                  />
                ))
              ) : (
                <div>Вы не добавили ни одного курса</div>
              )}

          </SCourses>

        </SContainer>
      </SWrapper >
      {activeCourseId && (<TrainModal onCloseModal={onCloseModal} courseId={activeCourseId} onOpenTrain={onOpenTrain}/>)}
      <Footer buttonDisplay={{ desktop: 'none', mobile: 'flex' }} />
    </>
  )
}