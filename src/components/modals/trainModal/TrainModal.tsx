import { Button } from "../../button/Button";
import { SPageBackground, SWrapper, STitle, SContent, SItem, SItemTitle, SCheckbox, SItemContent, SItemDescription, SCloseButton, SItemContentWrapper } from "./TrainModal.style";


export type TrainModalPropsType = {
  onCloseModal: () => void;
};


export const TrainModal = ({ onCloseModal }: TrainModalPropsType) => {
  const handleStart = () => {
    console.log("Нажали кнопку Начать");
  };

  const handleCheck = () => {
    console.log("Кликнули чек-бокс");
  };


  return (
    <SPageBackground onClick={onCloseModal}>
      <SWrapper onClick={(e) => e.stopPropagation()}>
        <STitle>Выберите тренировку</STitle>
        <SContent>
          <SCloseButton title="Закрыть" onClick={onCloseModal}>&times;</SCloseButton>

          <SItem>
            <SItemContentWrapper>
              <SCheckbox type="checkbox" onClick={handleCheck} />
              <SItemContent>
                <SItemTitle>Утренняя практика</SItemTitle>
                <SItemDescription>Йога на каждый день / 1 день </SItemDescription>
              </SItemContent>
            </SItemContentWrapper>
          </SItem>

          <SItem>
            <SItemContentWrapper>
              <SCheckbox type="checkbox" onClick={handleCheck} />
              <SItemContent>
                <SItemTitle>Растягиваем мышцы бедра</SItemTitle>
                <SItemDescription>Йога на каждый день / 2 день </SItemDescription>
              </SItemContent>
            </SItemContentWrapper>
          </SItem>

          <SItem>
            <SCheckbox type="checkbox" onClick={handleCheck} />
            <SItemContent>
              <SItemTitle>Утренняя практика</SItemTitle>
              <SItemDescription>Йога на каждый день / 1 день </SItemDescription>
            </SItemContent>
          </SItem>

          <SItem>
            <SCheckbox type="checkbox" onClick={handleCheck} />
            <SItemContent>
              <SItemTitle>Утренняя практика</SItemTitle>
              <SItemDescription>Йога на каждый день / 1 день </SItemDescription>
            </SItemContent>
          </SItem>

          <SItem>
            <SCheckbox type="checkbox" onClick={handleCheck} />
            <SItemContent>
              <SItemTitle>Утренняя практика</SItemTitle>
              <SItemDescription>Йога на каждый день / 1 день </SItemDescription>
            </SItemContent>
          </SItem>

          <SItem>
            <SCheckbox type="checkbox" onClick={handleCheck} />
            <SItemContent>
              <SItemTitle>Утренняя практика</SItemTitle>
              <SItemDescription>Йога на каждый день / 1 день </SItemDescription>
            </SItemContent>
          </SItem>

          <SItem>
            <SCheckbox type="checkbox" onClick={handleCheck} />
            <SItemContent>
              <SItemTitle>Утренняя практика</SItemTitle>
              <SItemDescription>Йога на каждый день / 1 день </SItemDescription>
            </SItemContent>
          </SItem>

        </SContent>
        <Button
          onClick={handleStart}
        >
          Начать
        </Button>
      </SWrapper>
    </SPageBackground>
  )
}