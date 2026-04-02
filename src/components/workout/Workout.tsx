import { useParams } from "react-router-dom";
import { useCourses } from "../../context/CoursesContext";
import { Button } from "../button/Button";
import { Header } from "../header/Header";
import { SContainer, SWrapper, STitle, SVideo, SWorkoutPanel, SWorkoutTitle, SWorkoutExercises, SWorkoutExercise, SExerciseTitle, SExerciseProgress, SProgressFill } from "./Workout.style";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";


export const Workout = () => {
  const { workoutId } = useParams();

  const { getWorkoutData, workout } = useCourses();

  // const [workout, setWorkout] = useState([]);

  const { token } = useAuth();

  useEffect(() => {
    if (workoutId && token) {
      getWorkoutData(workoutId, token);
    }
  }, [workoutId, token]);


  const progress = 40;


  const handleSetProgress = () => {
    console.log("Нажали кнопку Заполнить свой прогресс");
  };


  // личинка лоадера
  console.log("workout: ", workout);
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
          <STitle>Йога</STitle>
          <SVideo src="/images/video.png" alt="Видео" />

          <SWorkoutPanel>
            <SWorkoutTitle>Упражнения тренировки 2</SWorkoutTitle>

            <SWorkoutExercises>
              <SWorkoutExercise>
                <SExerciseTitle>Наклоны вперёд {progress}%</SExerciseTitle>
                <SExerciseProgress>
                  <SProgressFill $percent={progress} />
                </SExerciseProgress>
              </SWorkoutExercise>

              <SWorkoutExercise>
                <SExerciseTitle>Наклоны вперёд {progress}%</SExerciseTitle>
                <SExerciseProgress>
                  <SProgressFill $percent={progress} />
                </SExerciseProgress>
              </SWorkoutExercise>

              <SWorkoutExercise>
                <SExerciseTitle>Наклоны вперёд {progress}%</SExerciseTitle>
                <SExerciseProgress>
                  <SProgressFill $percent={progress} />
                </SExerciseProgress>
              </SWorkoutExercise>

              <SWorkoutExercise>
                <SExerciseTitle>Поднятие ног, согнутых в коленях {progress}%</SExerciseTitle>
                <SExerciseProgress>
                  <SProgressFill $percent={progress} />
                </SExerciseProgress>
              </SWorkoutExercise>

              <SWorkoutExercise>
                <SExerciseTitle>Поднятие ног, согнутых в коленях {progress}%</SExerciseTitle>
                <SExerciseProgress>
                  <SProgressFill $percent={progress} />
                </SExerciseProgress>
              </SWorkoutExercise>

              <SWorkoutExercise>
                <SExerciseTitle>Поднятие ног, согнутых в коленях {progress}%</SExerciseTitle>
                <SExerciseProgress>
                  <SProgressFill $percent={progress} />
                </SExerciseProgress>
              </SWorkoutExercise>
            </SWorkoutExercises>

            <Button
              width={{ desktop: "320px", mobile: "100%" }}
              onClick={handleSetProgress}
            >
              Заполнить свой прогресс
            </Button>
          </SWorkoutPanel>
        </SContainer>
      </SWrapper>
    </>
  )
}