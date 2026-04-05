import { useParams } from "react-router-dom";
import { useCourses } from "../../context/CoursesContext";
import { Button } from "../button/Button";
import { Header } from "../header/Header";
import { SContainer, SWrapper, STitle, SVideo, SWorkoutPanel, SWorkoutTitle, SWorkoutExercises, SWorkoutExercise, SExerciseTitle, SExerciseProgress, SProgressFill } from "./Workout.style";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getCourseProgress } from "../../services/courses";
import { ProgressModal } from "../modals/progressModal/ProgressModal";
import { MessageModal } from "../modals/messageModal/MessageModal";


export const Workout = () => {
  const { id } = useParams();
  const { token } = useAuth();

  const { getWorkoutData, workout, getCourses, courses, currentCourseName, currentCourseId, courseProgress, workoutProgress, getUserCourseProgress, getUserWorkoutProgress } = useCourses();

  console.log("workout в Workout до useEffect: ", workout);
  console.log("currentCourseId в Workout до useEffect: ", currentCourseId);

  const [isProgressModalOpen, setIsProgressModalOpen] = useState<boolean>(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState<boolean>(false);


  useEffect(() => {
    if (courses.length === 0) {
      getCourses();
    }

    if (id && token) {
      getWorkoutData(id, token);
    }
  }, [id, token]);

  useEffect(() => {
    if (currentCourseId && token) {
      getUserCourseProgress(currentCourseId, token);
    }

  }, [currentCourseId, token]);

  useEffect(() => {
    if (currentCourseId && id && token) {
      getUserWorkoutProgress(currentCourseId, id, token);
    }

  }, [currentCourseId, id, token]);


  console.log("courseProgress в Workout после useEffect: ", courseProgress);
  console.log("workoutProgress в Workout после useEffect: ", workoutProgress);

  // const handleSetProgress = () => {
  //   console.log("Нажали кнопку Заполнить свой прогресс");
  // };

  const handleOpenProgressModal = () => {
    setIsProgressModalOpen(true);
  };

  const onCloseModal = () => {
    setIsProgressModalOpen(false);
  };

  const onOpenMessageModal = () => {
    setIsMessageModalOpen(true);
  };

  const onCloseMessageModal = () => {
    setIsMessageModalOpen(false);
  };

  // личинка лоадера
  if (!workout) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1 style={{ color: 'red', fontSize: '32px' }}>Загрузка данных тренировки...</h1>;
      </div>
    )
  };


  return (
    <>
      <Header />
      <SWrapper>
        <SContainer>
          <STitle>{currentCourseName}</STitle>
          <SVideo
            // src="/images/video.png"
            // alt="Видео"
            src={workout.video}
            title={workout.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

          <SWorkoutPanel>
            <SWorkoutTitle>{
              currentCourseName === "Йога" ?
                workout.name.split("/")[0]
                :
                workout.name
            }</SWorkoutTitle>

            <SWorkoutExercises>
              {workout.exercises.map((exercise, index) => {
                // const progress = 40;

                // const currentWorkoutProgress = (courseProgress as any)?.workoutsProgress?.find((item: any) => item.workoutId === id);

                // const currentWorkoutProgress = (workoutProgress as any)?.progressData?.[index] || 0;
                const currentWorkoutProgress = workoutProgress?.progressData?.[index] || 0;

                // const exerciseCount = currentWorkoutProgress?.progressData?.[index] || 0;

                // const currentProgress = exercise.quantity > 0 ? (exerciseCount/exercise.quantity)*100 : 0;

                const currentProgress = exercise.quantity > 0 ? (currentWorkoutProgress / exercise.quantity) * 100 : 0;

                return (
                  <SWorkoutExercise key={exercise._id}>
                    <SExerciseTitle>
                      {
                        exercise.name.split(" (")[0]
                      } {currentProgress}%
                    </SExerciseTitle>
                    <SExerciseProgress>
                      <SProgressFill $percent={currentProgress} />
                    </SExerciseProgress>
                  </SWorkoutExercise>
                )
              }

              )}
            </SWorkoutExercises>

            <Button
              width={{ desktop: "320px", mobile: "100%" }}
              onClick={handleOpenProgressModal}
            >
              Заполнить свой прогресс
            </Button>
          </SWorkoutPanel>
        </SContainer>
      </SWrapper>
      {isProgressModalOpen && (<ProgressModal
        onCloseModal={onCloseModal}
        // workoutId={activeWorkoutId}
        // onOpenProgressModal={onOpenProgressModal}
        onSuccess={onOpenMessageModal}
      />)}
      {isMessageModalOpen && <MessageModal
        onCloseModal={onCloseMessageModal}
      />}
    </>
  )
}