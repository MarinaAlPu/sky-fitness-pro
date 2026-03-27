import { SCards, SContainer, SDescribe, SText, STitle, SWrapper } from "./MainContent.style";
import { Card } from "../card/Card";
import { useContext, useEffect } from "react";
import { CoursesContext } from "../../context/CoursesContext";


export const MainContent = () => {
  const page = "main";
  const { courses, getCourses } = useContext(CoursesContext) || { courses: [] };


  useEffect(() => {

    if (getCourses) {
      getCourses();
    }
  }, []);

  // console.log("courses в MainContent: ", courses);

  const sortedCourses = [...courses].sort((a, b) => a.order - b.order);


  return (
    <SWrapper>
      <SContainer>
        <STitle>
          <SDescribe>Начните заниматься спортом и улучшите качество жизни</SDescribe>
          <SText>Измени своё тело за полгода!</SText>
        </STitle>

        <SCards>
          {sortedCourses.map((course) => (
            <Card
              key={course._id}
              id={course._id}
              title={course.nameRU}
              durationInDays={course.durationInDays}
              dailyDurationInMinutes={course.dailyDurationInMinutes}
              difficulty={course.difficulty}
              order={course.order}
              page={page}
            />
          ))}
        </SCards>
      </SContainer>
    </SWrapper>
  )
}