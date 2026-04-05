import { SPageBackground, SWrapper, SButton, STitle } from "./MessageModal.style";


type MessageModalProps = {
  onCloseModal: () => void;
};


export const MessageModal = ({onCloseModal}: MessageModalProps) => {
  // const onClose = () => {
  //   console.log("Нажали кнопку Закрыть");
  // };

  return (
    <SPageBackground onClick={onCloseModal}>
      <SWrapper>
        <STitle>Ваш прогресс засчитан!</STitle>
        <SButton onClick={onCloseModal} aria-label="Закрыть" title="Ок"/>
      </SWrapper>
    </SPageBackground>
  )
}