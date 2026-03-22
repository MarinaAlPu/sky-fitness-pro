import { SWrapper, SImage, STitle, SButton, SPropertyContainer, SDaysIcon, STimeIcon, SComplexityIcon, SDescriptionContainer, SPropertiesContainer, SFirstRowProperties, SPropertyText, SImageContainer } from "./Card.style";


export const Card = () => {

  return (
    <SWrapper >

      <SImageContainer>
        {/* <SImage src="./images/main-page/mask-1.png" alt="Йога" /> */}
        <SImage src="./images/main-page/mask-1-1.svg" alt="Йога" />
        <SButton title="Добавить курс" />
      </SImageContainer>

      <SDescriptionContainer>
        <STitle>
          Йога
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
      </SDescriptionContainer>
    </SWrapper>
  )
}