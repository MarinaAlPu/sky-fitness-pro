import { SCards, SContainer, SDescribe, SText, STitle, SWrapper } from "./MainContent.style";
import { Card } from "../card/Card";
import { useContext, useEffect } from "react";
import { CoursesContext } from "../../context/CoursesContext";


export const MainContent = () => {
  const { courses, getCourses } = useContext(CoursesContext) || { courses: [] };


  useEffect(() => {

    if (getCourses) {
      getCourses();
    }
  }, []);

  console.log("courses в MainContent: ", courses);

  return (
    <SWrapper>
      <SContainer>
        <STitle>
          <SDescribe>Начните заниматься спортом и улучшите качество жизни</SDescribe>
          <SText>Измени своё тело за полгода!</SText>
        </STitle>

        <SCards>
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}

          {courses.map((course) => (
            <Card
            key={course._id}
            title={course.nameRU}
            />
          ))}
        </SCards>
      </SContainer>
    </SWrapper>
  )
}