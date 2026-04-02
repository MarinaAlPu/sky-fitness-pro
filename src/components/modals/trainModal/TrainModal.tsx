import { useEffect, useState } from "react";
import { useCourses } from "../../../context/CoursesContext";
import { Button } from "../../button/Button";
import { SPageBackground, SWrapper, STitle, SContent, SItem, SItemTitle, SCheckbox, SItemContent, SItemDescription, SCloseButton, SItemContentWrapper } from "./TrainModal.style";
import { useAuth } from "../../../context/AuthContext";


export type TrainModalPropsType = {
  onCloseModal: () => void;
  courseId: string;
};


export const TrainModal = ({ onCloseModal, courseId }: TrainModalPropsType) => {
  // const [workouts, setWorkouts] = useState([]);

  const { token } = useAuth();
  const { workouts, getWorkouts } = useCourses();


  useEffect(() => {
    if (courseId && token) {
      getWorkouts(courseId, token);
    }
  }, [courseId]);


  const handleStart = () => {
    console.log("Нажали кнопку Начать");
  };

  const handleCheck = () => {
    console.log("Кликнули чек-бокс");
  };


  return (
    <SPageBackground onClick={onCloseModal}>
      <SWrapper onClick={(e) => e.stopPropagation()}>
        <STitle>Выберите тренировку</STitle>
        <SContent>
          <SCloseButton title="Закрыть" onClick={onCloseModal}>&times;</SCloseButton>

          {workouts.map((workout) => (
            <SItem key={workout._id}>
              <SItemContentWrapper>
                <SCheckbox type="checkbox" onClick={handleCheck} />
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
        >
          Начать
        </Button>
      </SWrapper>
    </SPageBackground>
  )
}