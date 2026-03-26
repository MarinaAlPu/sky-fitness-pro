import { Button } from "../button/Button";
import { SWrapper, SContainer, SImage, STitle, SRoundButton, SPropertyContainer, SDaysIcon, STimeIcon, SDifficultyIcon, SDescriptionContainer, SPropertiesContainer, SFirstRowProperties, SPropertyText, SImageContainer, SProgress, SProgressTitle, ProgressBar, SProgressFill } from "./Card.style";
import type { dailyDurationInMinutesType } from "../../types/types";


type CardProps = {
  // _id: string;
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
}


export const Card = ({ title, durationInDays, dailyDurationInMinutes, difficulty, order, page }: CardProps) => {
  const progress = 40;

  const handleWorkout = () => {
    console.log("Нажали кнопку Продолжить");
  };


  return (
    <SWrapper >
      <SImageContainer
      $order={order}>
        <SImage src={`/images/main-page/mask-${order}.svg`}
        // {
        //   order === 1 ? "./images/main-page/mask-1.svg"
        //     :
        //     order === 2 ? "./images/main-page/mask-2.svg"
        //       :
        //       order === 3 ? "./images/main-page/mask-3.svg"
        //         :
        //         order === 4 ? "./images/main-page/mask-4.svg"
        //           :
        //           "./images/main-page/mask-5.svg"
        // }
          alt={title} />
        <SRoundButton src="./icons/add-button.svg" alt="Добавить" title="Добавить курс" />
        {/* <SRoundButton src="./icons/delete-button.svg" alt="Удалить" title="Удалить курс" /> */}
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
            onClick={handleWorkout}
          >
            Продолжить
          </Button>
          : null
        }

      </SContainer>

    </SWrapper >
  )
}