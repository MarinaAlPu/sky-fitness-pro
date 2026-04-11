import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "../button/Button";
import { SWrapper, SContainer, SBanner, STitle, SImage, SBottomBlock, SBottomBlockText, SBottomBlockImage, SCentralBlock, SCentralBlockDescription, SCentralBlockTypes, SCentralBlockTitle, SDescriptionBlocksWrapper, SDescriptionBlock, SDescriptionNumber, SDescriptionText, STypesWrapper, STypesItem, STypesImage, STypesText, SBottomBlockImageWrapper, SBottomBlockTextTitle, SList, SListItem, SBottomBlockTextTitleWrapper, SBottomBlockWrapper, SBottomBlockImageContainer } from "./CourseContent.style";
import { useCourses } from "../../context/CoursesContext";
import { useAuth } from "../../context/AuthContext";


export const CourseContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const { token } = useAuth();
  const isAuth: boolean = !!token;

  const { courses, getCourses, addUserCourse, userCourses, deleteUserCourse } = useCourses();

  const course = courses.find((item) => item._id === id);

  const isCourseAdded: boolean = id ? userCourses.includes(id) : false;


  useEffect(() => {
    if (courses.length === 0 && getCourses) {
      getCourses();
    }
  }, [courses, getCourses]);


  const handleLogin = () => {
    const currentPath = location.pathname === "/" ? "/" : location.pathname;
    navigate(`${currentPath}/login`);
  };

  const handleAddCourse = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();

    if (!token) {
      navigate("/login");
      return;
    }

    if (id && token) {
      addUserCourse(id, token);
    }
  };

  const handleDeleteCourse = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();

    if (!token) {
      navigate("/login");
      return;
    }

    if (id && token) {
      deleteUserCourse(id, token);
    }
  };


  // типа лоадер
  if (!course) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1 style={{ color: 'red', fontSize: '32px' }}>Загрузка данных курса...</h1>;
      </div>
    )
  };


  return (
    <SWrapper>
      <SContainer>
        <SBanner
          $order={course.order}
        >
          <STitle>{course.nameRU}</STitle>
          <SImage src={`${import.meta.env.BASE_URL}images/skill-cards/skill-card-${course.order}.svg`} alt={course.nameRU} />
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
                  <STypesImage src={`${import.meta.env.BASE_URL}icons/star.svg`}alt="Звёздочка" />
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

              {!isAuth ?
                <Button
                  width={{ desktop: "437px", mobile: "100%" }}
                  onClick={handleLogin}
                >
                  Войдите, чтобы добавить курс
                </Button>
                :
                isCourseAdded ?
                  <Button
                    type="secondary"
                    width={{ desktop: "437px", mobile: "100%" }}
                    onClick={handleDeleteCourse}
                  >
                    Удалить курс
                  </Button>
                  :
                  <Button
                    width={{ desktop: "437px", mobile: "100%" }}
                    onClick={handleAddCourse}
                  >
                    Добавить курс
                  </Button>
              }

            </SBottomBlockText>
          </SBottomBlock>

          <SBottomBlockImageWrapper>
            <SBottomBlockImageContainer>
              {/* МП */}
              <source media="(max-width: 375px)" srcSet={`${import.meta.env.BASE_URL}images/skill-cards/runner-mobile.svg`} />

              {/* десктоп */}
              <SBottomBlockImage src={`${import.meta.env.BASE_URL}images/skill-cards/runner.svg`} alt="Мужик" />
            </SBottomBlockImageContainer>
          </SBottomBlockImageWrapper>
        </SBottomBlockWrapper>

      </SContainer>
    </SWrapper >
  )
}
