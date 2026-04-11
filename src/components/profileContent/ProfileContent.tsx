import { useAuth } from "../../context/AuthContext";
import { Button } from "../button/Button";
import { Card } from "../card/Card";
import { Footer } from "../footer/Footer";
import { SContainer, STitle, SUserPanel, SWrapper, SCourses, SUserIcon, SUserData, SUserName, SUserLogin, SUserPanelContent } from "./ProfileContent.style";
import { useCourses } from "../../context/CoursesContext";
import { useEffect, useState } from "react";
import { TrainModal } from "../modals/trainModal/TrainModal";
import { formatProgress } from "../../utils/helpers";
import type { CourseProgressReturnType } from "../../services/courses";


export const ProfileContent = () => {
  const page = "profile";

  const { handleLogout, user, token } = useAuth();

  const { courses, userCourses, getCourses, getUserCourseProgress, courseProgress, clearWorkouts } = useCourses();
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
    clearWorkouts([]);
  };


  const userName = user?.userName || null;

  const userCoursesSelected = courses.filter((course) => userCourses.includes(course._id));

  const onOpenTrain = () => {
  };


  return (
    <>
      <SWrapper>
        <SContainer>

          <STitle>Профиль</STitle>
          <SUserPanel>
            <SUserIcon src={`${import.meta.env.BASE_URL}icons/mask-group.svg`} alt="Фото пользователя" />

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
                const progressData = (courseProgress as Record<string, CourseProgressReturnType>)[course._id];
                const workoutsInCourse = course.workouts?.length || 0;
                const completedWorkouts = (progressData?.workoutsProgress || []).filter((workout) => workout.workoutCompleted).length;
                const courseProgressInCard = formatProgress(completedWorkouts, workoutsInCourse);

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