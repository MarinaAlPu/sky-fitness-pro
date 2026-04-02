import { useEffect, useState } from "react";
import { useCourses } from "../../../context/CoursesContext";
import { Button } from "../../button/Button";
import { SPageBackground, SWrapper, STitle, SContent, SItem, SItemTitle, SCheckbox, SItemContent, SItemDescription, SCloseButton, SItemContentWrapper } from "./TrainModal.style";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";


export type TrainModalPropsType = {
  onCloseModal: () => void;
  courseId: string;
  onOpenTrain: () => void;
};


export const TrainModal = ({ onCloseModal, courseId }: TrainModalPropsType) => {
  const navigate = useNavigate();

  // const [workouts, setWorkouts] = useState([]);

  const { token } = useAuth();
  const { workouts, getWorkouts } = useCourses();

  const [selectedWorkoutId, setSelectedWorkoutId] = useState<string | null>(null);


  useEffect(() => {
    if (courseId && token) {
      getWorkouts(courseId, token);
    }
  }, [courseId]);


  const handleStart = () => {
    console.log("Нажали кнопку Начать");
    if (selectedWorkoutId) {
      navigate(`/workout/${selectedWorkoutId}`);
    } else {
      console.error("Ошибка при открытии страницы тренировки");
    }
  };

  // const handleCheck = () => {
  //   console.log("Кликнули чек-бокс");
  // };


  return (
    <SPageBackground onClick={onCloseModal}>
      <SWrapper onClick={(e) => e.stopPropagation()}>
        <STitle>Выберите тренировку</STitle>
        <SContent>
          <SCloseButton title="Закрыть" onClick={onCloseModal}>&times;</SCloseButton>

          {workouts.map((workout) => (
            <SItem key={workout._id}>
              <SItemContentWrapper>
                <SCheckbox
                // type="checkbox"
                type="radio"
                // onClick={handleCheck}
                onChange={() => setSelectedWorkoutId(workout._id)}
                checked={selectedWorkoutId === workout._id}
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
          ))}

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