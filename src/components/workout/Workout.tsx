import { useParams } from "react-router-dom";
import { useCourses } from "../../context/CoursesContext";
import { Button } from "../button/Button";
import { Header } from "../header/Header";
import { SContainer, SWrapper, STitle, SVideo, SWorkoutPanel, SWorkoutTitle, SWorkoutExercises, SWorkoutExercise, SExerciseTitle, SExerciseProgress, SProgressFill } from "./Workout.style";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";


export const Workout = () => {
  const { id } = useParams();
  const { token } = useAuth();

  const { getWorkoutData, workout, getCourses, courses, currentCourseName } = useCourses();

  // console.log("workout: ", workout);


  useEffect(() => {
    if (courses.length === 0) {
      getCourses();
    }

    if (id && token) {
      getWorkoutData(id, token);
    }
  }, [id, token]);


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
              {workout.exercises.map((exercise) => (
                <SWorkoutExercise key={exercise._id}>
                  <SExerciseTitle>
                    {
                      exercise.name.split(" (")[0]
                    } {progress}%
                  </SExerciseTitle>
                  <SExerciseProgress>
                    <SProgressFill $percent={progress} />
                  </SExerciseProgress>
                </SWorkoutExercise>
              ))}
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