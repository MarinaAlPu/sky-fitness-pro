import { Button } from "../button/Button";
import {
  SWrapper, SContainer, SBanner, STitle, SImage, SBottomBlock, SBottomBlockText, SBottomBlockImage, SCentralBlock, SCentralBlockDescription, SCentralBlockTypes, SCentralBlockTitle, SDescriptionBlocksWrapper, SDescriptionBlock, SDescriptionNumber, SDescriptionText, STypesWrapper, STypesItem, STypesImage, STypesText, SBottomBlockImageWrapper, SBottomBlockTextTitle, SList,
  SListItem,
  SBottomBlockTextTitleWrapper,
  //  SBottomBlockItems
} from "./CourseContent.style";


export const CourseContent = () => {

  const handleAddCourse = () => {
    console.log("Нажали кнопку 'Войдите, чтобы добавить курс'");
  };


  return (
    <SWrapper>
      <SContainer>
        <SBanner>
          <STitle>Йога</STitle>
          <SImage src="/images/skill-cards/skill-card-1.svg" alt="Йога" />
        </SBanner>

        <SCentralBlock>
          <SCentralBlockDescription>
            <SCentralBlockTitle>Подойдет для вас, если:</SCentralBlockTitle>
            <SDescriptionBlocksWrapper>

              <SDescriptionBlock>
                <SDescriptionNumber>1</SDescriptionNumber>
                <SDescriptionText>Давно хотели попробовать йогу, но не решались начать</SDescriptionText>
              </SDescriptionBlock>

              <SDescriptionBlock>
                <SDescriptionNumber>2</SDescriptionNumber>
                <SDescriptionText>Хотите укрепить позвоночник, избавиться от болей в спине и суставах</SDescriptionText>
              </SDescriptionBlock>

              <SDescriptionBlock>
                <SDescriptionNumber>3</SDescriptionNumber>
                <SDescriptionText>Ищете активность, полезную для тела и души</SDescriptionText>
              </SDescriptionBlock>

            </SDescriptionBlocksWrapper>
          </SCentralBlockDescription>

          <SCentralBlockTypes>
            <SCentralBlockTitle>Направления</SCentralBlockTitle>
            <STypesWrapper>

              <STypesItem>
                <STypesImage src="/icons/star.svg" alt="Звёздочка" />
                <STypesText>Йога для новичков</STypesText>
              </STypesItem>

              <STypesItem>
                <STypesImage src="/icons/star.svg" alt="Звёздочка" />
                <STypesText>Кундалини-йога</STypesText>
              </STypesItem>

              <STypesItem>
                <STypesImage src="/icons/star.svg" alt="Звёздочка" />
                <STypesText>Хатха-йога</STypesText>
              </STypesItem>

              <STypesItem>
                <STypesImage src="/icons/star.svg" alt="Звёздочка" />
                <STypesText>Классическая йога</STypesText>
              </STypesItem>

              <STypesItem>
                <STypesImage src="/icons/star.svg" alt="Звёздочка" />
                <STypesText>Йогатерапия</STypesText>
              </STypesItem>

              <STypesItem>
                <STypesImage src="/icons/star.svg" alt="Звёздочка" />
                <STypesText>Аштанга-йога</STypesText>
              </STypesItem>

            </STypesWrapper>
          </SCentralBlockTypes>
        </SCentralBlock>

        <SBottomBlock>
          <SBottomBlockText>
            <SBottomBlockTextTitleWrapper>
              <SBottomBlockTextTitle>Начните путь к новому телу</SBottomBlockTextTitle>
            </SBottomBlockTextTitleWrapper>

            {/* <SBottomBlockItems>

            </SBottomBlockItems> */}

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
              text='Войдите, чтобы добавить курс'
            ></Button>
          </SBottomBlockText>
          <SBottomBlockImageWrapper>
            <SBottomBlockImage src="/images/skill-cards/runner.svg" alt="Мужик" />
          </SBottomBlockImageWrapper>
        </SBottomBlock>
      </SContainer>
    </SWrapper>
  )
}
