import { SWrapper, SImage, STitle, SButton, SPropertyContainer, SDaysIcon, STimeIcon, SComplexityIcon, SDescriptionContainer, SPropertiesContainer, SFirstRowProperties, SPropertyText } from "./Card.style";


export const Card = () => {

  return (
    <SWrapper >
      <SImage src="./images/main-page/mask-1.png" alt="Йога" />
      <SButton title="Добавить курс"/>

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