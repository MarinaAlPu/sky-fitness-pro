import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../button/Button";
import { SWrapper, SContainer, SBanner, STitle, SImage, SBottomBlock, SBottomBlockText, SBottomBlockImage, SCentralBlock, SCentralBlockDescription, SCentralBlockTypes, SCentralBlockTitle, SDescriptionBlocksWrapper, SDescriptionBlock, SDescriptionNumber, SDescriptionText, STypesWrapper, STypesItem, STypesImage, STypesText, SBottomBlockImageWrapper, SBottomBlockTextTitle, SList, SListItem, SBottomBlockTextTitleWrapper, SBottomBlockWrapper, SBottomBlockImageContainer } from "./CourseContent.style";
import { CoursesContext } from "../../context/CoursesContext";


export const CourseContent = () => {
  const { courses, getCourses } = useContext(CoursesContext) || { courses: [] };

  const { id } = useParams();

  const course = courses.find((item) => item._id === id);


  useEffect(() => {
    if (courses.length === 0 && getCourses) {
      getCourses();
    }
  }, [courses, getCourses]);


  // типа лоадер
  // console.log("course: ", course);
  if (!course) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1 style={{ color: 'red', fontSize: '32px' }}>Загрузка данных курса...</h1>;
      </div>
    )
  };


  const handleAddCourse = () => {
    console.log("Нажали кнопку 'Войдите, чтобы добавить курс'");
  };


  return (
    <SWrapper>
      <SContainer>
        <SBanner
          $order={course.order}
        >
          <STitle>{course.nameRU}</STitle>
          <SImage src={`/images/skill-cards/skill-card-${course.order}.svg`} alt={course.nameRU} />
        </SBanner>

        <SCentralBlock>
          <SCentralBlockDescription>
            <SCentralBlockTitle>Подойдет для вас, если:</SCentralBlockTitle>
            <SDescriptionBlocksWrapper>
              {course.fitting.map((fit, index) => (
                <SDescriptionBlock key={index}>
                  <SDescriptionNumber>{index + 1}</SDescriptionNumber>
                  <SDescriptionText>{fit}</SDescriptionText>
                </SDescriptionBlock>
              ))}
            </SDescriptionBlocksWrapper>
          </SCentralBlockDescription>

          <SCentralBlockTypes>
            <SCentralBlockTitle>Направления</SCentralBlockTitle>
            <STypesWrapper>
              {course.directions.map((direction) => (
                <STypesItem key={direction}>
                  <STypesImage src="/icons/star.svg" alt="Звёздочка" />
                  <STypesText>{direction}</STypesText>
                </STypesItem>
              ))}
            </STypesWrapper>
          </SCentralBlockTypes>
        </SCentralBlock>

        <SBottomBlockWrapper>
          <SBottomBlock>
            <SBottomBlockText>
              <SBottomBlockTextTitleWrapper>
                <SBottomBlockTextTitle>Начните путь к новому телу</SBottomBlockTextTitle>
              </SBottomBlockTextTitleWrapper>

              <SList>
                <SListItem>проработка всех групп мышц</SListItem>
                <SListItem>тренировка суставов</SListItem>
                <SListItem>улучшение циркуляции крови</SListItem>
                <SListItem>упражнения заряжают бодростью</SListItem>
                <SListItem>помогают противостоять стрессам</SListItem>
              </SList>

              <Button
                width={{ desktop: "437px", mobile: "100%" }}
                onClick={handleAddCourse}
              >
                Войдите, чтобы добавить курс
              </Button>
            </SBottomBlockText>
          </SBottomBlock>

          <SBottomBlockImageWrapper>
            <SBottomBlockImageContainer>
              {/* МП */}
              <source media="(max-width: 375px)" srcSet="/images/skill-cards/runner-mobile.svg" />

              {/* десктоп */}
              <SBottomBlockImage src="/images/skill-cards/runner.svg" alt="Мужик" />
            </SBottomBlockImageContainer>
          </SBottomBlockImageWrapper>
        </SBottomBlockWrapper>

      </SContainer>
    </SWrapper >
  )
}
