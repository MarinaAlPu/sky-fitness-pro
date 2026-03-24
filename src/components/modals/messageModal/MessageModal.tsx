import { SPageBackground, SWrapper, SButton, STitle } from "./MessageModal.style";


export const MessageModal = () => {
  const onClose = () => {
    console.log("Нажали кнопку Закрыть");
  };

  return (
    <SPageBackground>
      <SWrapper>
        <STitle>Ваш прогресс засчитан!</STitle>
        <SButton onClick={onClose} aria-label="Закрыть" />
      </SWrapper>
    </SPageBackground>
  )
}