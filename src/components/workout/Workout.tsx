import { useParams } from "react-router-dom";
import { useCourses } from "../../context/CoursesContext";
import { Button } from "../button/Button";
import { Header } from "../header/Header";
import { SContainer, SWrapper, STitle, SVideo, SWorkoutPanel, SWorkoutTitle, SWorkoutExercises, SWorkoutExercise, SExerciseTitle, SExerciseProgress, SProgressFill } from "./Workout.style";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { ProgressModal } from "../modals/progressModal/ProgressModal";
import { MessageModal } from "../modals/messageModal/MessageModal";
import { formatProgress } from "../../utils/helpers";


export const Workout = () => {
  const { id } = useParams();
  const { token } = useAuth();

  const { getWorkoutData, workout, getCourses, courses, currentCourseName, currentCourseId, workoutProgress, getUserCourseProgress, getUserWorkoutProgress } = useCourses();

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
                const currentWorkoutProgress = workoutProgress?.progressData?.[index] || 0;
                const currentProgress = formatProgress(currentWorkoutProgress, exercise.quantity);

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
        onSuccess={onOpenMessageModal}
      />)}
      {isMessageModalOpen && <MessageModal
        onCloseModal={onCloseMessageModal}
      />}
    </>
  )
}