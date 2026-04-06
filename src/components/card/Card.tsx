import { Button } from "../button/Button";
import { SWrapper, SContainer, SImage, STitle, SRoundButton, SPropertyContainer, SDaysIcon, STimeIcon, SDifficultyIcon, SDescriptionContainer, SPropertiesContainer, SFirstRowProperties, SPropertyText, SImageContainer, SProgress, SProgressTitle, ProgressBar, SProgressFill } from "./Card.style";
import type { dailyDurationInMinutesType } from "../../types/types";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../../context/CoursesContext";


type CardProps = {
  id: string;
  title: string;
  durationInDays: number;
  dailyDurationInMinutes: dailyDurationInMinutesType;
  difficulty: "начальный" | "средний" | "сложный";
  // description: string;
  // directions: string[];
  // fitting: string[];
  // nameEN: string;
  // nameRU: string;
  order: number;
  // workouts: string[];
  page: string;
  onOpenTrainModal?: (courseId: string) => void;
  onCloseModal?: () => void;
  progress?: number;
}


export const Card = ({ id, title, durationInDays, dailyDurationInMinutes, difficulty, order, page, onOpenTrainModal, progress = 0 }: CardProps) => {
  const navigate = useNavigate();
  const { token } = useAuth();

  // const [isOpen, setIsOpen] = useState(false);

  // const {addUserCourse} = useContext(CoursesContext);
  const { addUserCourse, userCourses, deleteUserCourse } = useCourses();

  const isCourseAdded = userCourses.includes(id);
  // console.log("Курс добавлен: ", isCourseAdded);


  const handleAddCourse = (e: React.MouseEvent) => {
    // console.log("Нажали кнопку Добавить курс");
    e.preventDefault();
    e.stopPropagation();

    if (!token) {
      // console.log("Токена нет, отправляем на логин");
      navigate("/login");
      return;
    }

    // // const courseId = "q02a6i";
    // addUserCourse(id, token)
    //   .then((data) => console.log("Курс добавлен:", data))
    //   .catch((err) => console.error("Ошибка при добавлении:", err));
    addUserCourse(id, token);
  };

  const handleDeleteCourse = (e: React.MouseEvent) => {
    // console.log("Нажали кнопку Удалить курс");
    e.preventDefault();
    e.stopPropagation();


    if (!token) {
      // console.log("Токена нет, иди залогинься");
      navigate("/login");
      return;
    }

    // const courseId = "q02a6i";
    deleteUserCourse(id, token)
    // .then((data) => console.log("Курс добавлен:", data))
    // .catch((err) => console.error("Ошибка при удалении курса:", err));
  };


  // const progress = 40;


  // const handleWorkout = () => {
  //   console.log("Нажали кнопку Продолжить");
  // };
  const handleOpenWorkoutsModal = (e?: React.MouseEvent) => {
    // console.log(`Открыть модалку с тренировками курса с id "${id}"`);
    e?.preventDefault();
    e?.stopPropagation();

    if (onOpenTrainModal) {
      onOpenTrainModal(id);
    }
  };


  return (
    <SWrapper to={`/course/${id}`}>
      <SImageContainer
        $order={order}>
        <SImage src={`/images/main-page/mask-${order}.svg`}
          alt={title} />
        {isCourseAdded ?
          (<SRoundButton
            src="./icons/delete-button.svg"
            alt="Удалить"
            title="Удалить курс"
            onClick={handleDeleteCourse}
          />)
          :
          (<SRoundButton
            src="./icons/add-button.svg"
            alt="Добавить"
            title="Добавить курс"
            onClick={handleAddCourse}
          />)
        }

      </SImageContainer>

      <SContainer>
        <SDescriptionContainer>

          <STitle>
            {title}
          </STitle>

          <SPropertiesContainer>
            <SFirstRowProperties>
              <SPropertyContainer>
                <SDaysIcon />
                <SPropertyText>{durationInDays} дней</SPropertyText>
              </SPropertyContainer>

              <SPropertyContainer>
                <STimeIcon />
                <SPropertyText>{dailyDurationInMinutes.from}-{dailyDurationInMinutes.to} мин/день</SPropertyText>
              </SPropertyContainer>
            </SFirstRowProperties>

            <SPropertyContainer>
              <SDifficultyIcon
                src={
                  difficulty === "начальный" ? "/icons/difficulty-beginner.svg"
                    :
                    difficulty === "средний" ? "/icons/difficulty-intermediate.svg"
                      :
                      "/icons/difficulty-advanced.svg"
                }
                alt="Сложность" />
              <SPropertyText>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</SPropertyText>
            </SPropertyContainer>
          </SPropertiesContainer>

          {page === "profile" ?
            <SProgress>
              <SProgressTitle>Прогресс {progress}%</SProgressTitle>
              <ProgressBar>
                <SProgressFill $percent={progress} />
              </ProgressBar>
            </SProgress>
            : null
          }

        </SDescriptionContainer>

        {page === "profile" ?
          <Button
            type='primary'
            width='300px'
            onClick={handleOpenWorkoutsModal}
          >
            {
              progress === 0 ? "Начать тренировки" :
                progress === 100 ? "Начать заново" :
                  "Продолжить"
            }
          </Button>
          : null
        }

      </SContainer>
    </SWrapper >
  )
}