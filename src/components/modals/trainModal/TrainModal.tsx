import { useEffect, useState } from "react";
import { useCourses } from "../../../context/CoursesContext";
import { Button } from "../../button/Button";
import { SPageBackground, SWrapper, STitle, SContent, SItem, SItemTitle, SCheckbox, SItemContent, SItemDescription, SCloseButton, SItemContentWrapper } from "./TrainModal.style";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import type { WorkoutProgressReturnType } from "../../../services/courses";


export type TrainModalPropsType = {
  onCloseModal: () => void;
  courseId: string;
  onOpenTrain: () => void;
};


export const TrainModal = ({ onCloseModal, courseId }: TrainModalPropsType) => {
  const navigate = useNavigate();

  const { token } = useAuth();
  const { workouts, getWorkouts, courseProgress } = useCourses();

  const currentCourseProgress = courseProgress[courseId];
  // console.log("currentCourseProgress: ", currentCourseProgress);

  const workoutsProgress = currentCourseProgress?.workoutsProgress as WorkoutProgressReturnType[];
  // console.log("workoutsProgress: ", workoutsProgress);

  const [selectedWorkoutId, setSelectedWorkoutId] = useState<string | null>(null);


  useEffect(() => {
    if (courseId && token) {
      getWorkouts(courseId, token);
    }
  }, [courseId]);


  const handleStart = () => {
    if (selectedWorkoutId) {
      navigate(`/workout/${selectedWorkoutId}`);
    } else {
      console.error("Ошибка при открытии страницы тренировки");
    }
  };


  return (
    <SPageBackground onClick={onCloseModal}>
      <SWrapper onClick={(e) => e.stopPropagation()}>
        <STitle>Выберите тренировку</STitle>
        <SContent>
          <SCloseButton title="Закрыть" onClick={onCloseModal}>&times;</SCloseButton>

          {workouts.map((workout) => {
            const currentWorkoutProgress = workoutsProgress?.find(
              (item) => item.workoutId === workout._id
            );
            // console.log("currentWorkoutProgress: ", currentWorkoutProgress);

            const isDone = currentWorkoutProgress?.workoutCompleted === true;
            // console.log("isDone: ", isDone);


            return (
              <SItem key={workout._id}>
                <SItemContentWrapper>
                  <SCheckbox
                    type="radio"
                    onChange={() => setSelectedWorkoutId(workout._id)}
                    checked={selectedWorkoutId === workout._id}
                    $done={isDone}
                    disabled={isDone}
                  />
                  <SItemContent>
                    <SItemTitle>{workout.name.split("/")[0]}</SItemTitle>
                    {courseId === "ab1c3f" ? (
                      <SItemDescription>
                        {workout.name.split("/")[1]} / {workout.name.split("/")[2]}
                      </SItemDescription>
                    ) : null}
                  </SItemContent>
                </SItemContentWrapper>
              </SItem>
            )
          }
          )}
        </SContent>
        <Button
          onClick={handleStart}
          disabled={!selectedWorkoutId}
        >
          Начать
        </Button>
      </SWrapper>
    </SPageBackground>
  )
}