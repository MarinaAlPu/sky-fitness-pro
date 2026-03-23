import { Button } from "../button/Button";
import { Header } from "../header/Header";
import { SContainer, SWrapper, STitle, SVideo, SWorkoutPanel, SWorkoutTitle, SWorkoutExercises, SWorkoutExercise, SExerciseTitle, SExerciseProgress, SProgressFill } from "./Workout.style";


export const Workout = () => {

  const progress = 40;

  const handleSetProgress = () => {
    console.log("Нажали кнопку Заполнить свой прогресс");
  }

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
              width={{desktop: "320px", mobile: "100%"}}
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