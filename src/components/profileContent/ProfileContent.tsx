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

  const { handleLogout, user, token } = useAuth();

  const { courses, userCourses, getCourses, getUserCourseProgress, courseProgress } = useCourses();
  // console.log("userCourses: ", userCourses);
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);


  useEffect(() => {
    if (courses.length === 0) {
      getCourses();
    }
  }, []);

  useEffect(() => {
    if (userCourses.length > 0 && token) {
      userCourses.forEach(id => getUserCourseProgress(id, token));
    };
  }, [useCourses, token]);

  useEffect(() => {
    if (token && userCourses.length > 0) {
      userCourses.forEach((courseId) => {
        getUserCourseProgress(courseId, token);
      })
    }
  }, [userCourses, token]);


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
    // console.log("Нажали кнопку Начать");

  };


  // console.log("Данные всех прогрессов в профиле:", courseProgress);
  // console.log("ID курсов пользователя:", userCourses);

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

            {userCoursesSelected.length > 0 ? (
              userCoursesSelected.map((course) => {
                // console.log("course после маппинга курсов в профиле", course);
                const progressData = (courseProgress as any)[course._id];

                // const workouts = progressData?.workoutsProgress || [];
                
                // const completedCount = workouts.filter((workout: any) => workout.workoutCompleted).length;
                
                // const percent = workouts.length > 0 ? (completedCount / workouts.length * 100) : 0;
                

                const workoutsInCourse = course.workouts?.length || 0;
                // console.log(`количество тренировок в курсе "${course.nameRU}" после маппинга курсов в профиле`, workoutsInCourse);
                
                const completedWorkouts = (progressData?.workoutsProgress || []).filter((workout: any) => workout.workoutCompleted).length;
                // console.log(`количество завершённых тренировок в курсе "${course.nameRU}" после маппинга курсов в профиле`, completedWorkouts);

                const courseProgressInCard = workoutsInCourse > 0 ? ((completedWorkouts / workoutsInCourse) * 100) : 0;


                return (
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
                    progress={courseProgressInCard}
                  />
                )
              })
            ) : (
              <div>Вы не добавили ни одного курса</div>
            )}

          </SCourses>

        </SContainer>
      </SWrapper >
      {activeCourseId && (<TrainModal onCloseModal={onCloseModal} courseId={activeCourseId} onOpenTrain={onOpenTrain} />)}
      <Footer buttonDisplay={{ desktop: 'none', mobile: 'flex' }} />
    </>
  )
}