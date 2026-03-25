import { Button } from "../button/Button";
import { SWrapper, SContainer, SImage, STitle, SRoundButton, SPropertyContainer, SDaysIcon, STimeIcon, SComplexityIcon, SDescriptionContainer, SPropertiesContainer, SFirstRowProperties, SPropertyText, SImageContainer, SProgress, SProgressTitle, ProgressBar, SProgressFill } from "./Card.style";


type CardProps = {
  title: string;
}


export const Card = ({ title }: CardProps) => {
  const progress = 40;

  const handleWorkout = () => {
    console.log("Нажали кнопку Продолжить");
  };


  return (
    <SWrapper >
      <SImageContainer>
        <SImage src="./images/main-page/mask-1-1.svg" alt="Йога" />
        <SRoundButton src="./icons/add-button.svg" alt="Добавить" title="Добавить курс" />
        {/* <SRoundButton src="./icons/delete-button.svg" alt="Удалить" title="Удалить курс" /> */}
      </SImageContainer>

      <SContainer>
        <SDescriptionContainer>

          <STitle>
            {/* Йога */}
            {title}
          </STitle>

          <SPropertiesContainer>
            <SFirstRowProperties>
              <SPropertyContainer>
                <SDaysIcon />
                <SPropertyText>25 дней</SPropertyText>
              </SPropertyContainer>

              <SPropertyContainer>
                <STimeIcon />
                <SPropertyText>20-50 мин/день</SPropertyText>
              </SPropertyContainer>
            </SFirstRowProperties>

            <SPropertyContainer>
              <SComplexityIcon />
              <SPropertyText>Сложность</SPropertyText>
            </SPropertyContainer>
          </SPropertiesContainer>

          <SProgress>
            <SProgressTitle>Прогресс {progress}%</SProgressTitle>
            <ProgressBar>
              <SProgressFill $percent={progress} />
            </ProgressBar>
          </SProgress>

        </SDescriptionContainer>

        <Button
          type='primary'
          width='300px'
          onClick={handleWorkout}
        >
          Продолжить
        </Button>
      </SContainer>

    </SWrapper >
  )
}