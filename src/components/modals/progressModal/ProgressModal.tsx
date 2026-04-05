import { useState } from "react";
import { useCourses } from "../../../context/CoursesContext";
import { Button } from "../../button/Button";
import { Input } from "../../input/Input";
import { SPageBackground, SWrapper, STitle, SContent, SItem, SItemTitle, SCloseButton } from "./ProgressModal.style";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";


type ProgressModalProps = {
  onCloseModal: () => void;
  onSuccess: () => void;
};


export const ProgressModal = ({ onCloseModal, onSuccess }: ProgressModalProps) => {
  const { id: workoutId } = useParams();
  const { token } = useAuth();
  const { workout, currentCourseId, saveProgress, getUserWorkoutProgress } = useCourses();

  const [exerciseCount, setExerciseCount] = useState<{ [key: number]: number }>({});

  // const onChange = () => {
  //   console.log("Ввели символ в инпут");
  // };

  const handleInputChange = (index: number, exerciseCount: string) => {
    const numValue = exerciseCount === "" ? 0 : Number(exerciseCount);

    setExerciseCount((prev) => ({ ...prev, [index]: numValue }));
  };

  const onSave = async () => {
    console.log("Нажали кнопку Сохранить");

    console.log("currentCourseId в onSave:", currentCourseId);
    console.log("workoutId в onSave:", workoutId);

    if (!workoutId || !token || !currentCourseId) {
      return;
    }

    const progressData = workout.exercises.map((_, index) => {
      return exerciseCount[index] || 0;
    });

    console.log("Массив для отправки на сервер:", progressData);

    const resp = await saveProgress(currentCourseId, workoutId, token, progressData);

    console.log(`Сохранили прогресс по тренировке "${workoutId}":`, resp);
    
    const respProgress = await getUserWorkoutProgress(currentCourseId, workoutId, token);

    console.log(`Обновили прогресс по тренировке "${workoutId}":`, respProgress);

    onCloseModal();
    onSuccess();
  };


  return (
    <SPageBackground onClick={onCloseModal}>
      <SWrapper onClick={(e) => e.stopPropagation()}>
        <STitle>Мой прогресс</STitle>
        <SContent>
          <SCloseButton title="Закрыть" onClick={onCloseModal}>&times;</SCloseButton>

          {workout?.exercises?.map((exercise: any, index: number) => (
            <SItem key={exercise._id}>
              {/* <SItemTitle>Сколько раз вы сделали наклоны вперед?</SItemTitle> */}
              <SItemTitle>Сколько раз вы сделали {exercise.name.split(" (")[0]}?</SItemTitle>
              <Input
                type="number"
                value={exerciseCount[index] !== undefined ? String(exerciseCount[index]) : ""}
                onChange={(e) => handleInputChange(index, e.target.value)}
                height={{ desktop: "52px", mobile: "47px" }}
                placeholder="0"
                name="value"
              />
            </SItem>
          ))}

        </SContent>
        <Button
          onClick={onSave}
        >
          Сохранить
        </Button>
      </SWrapper>
    </SPageBackground>
  )
}