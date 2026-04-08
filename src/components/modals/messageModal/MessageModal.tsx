import { SPageBackground, SWrapper, SButton, STitle } from "./MessageModal.style";


type MessageModalProps = {
  onCloseModal: () => void;
};


export const MessageModal = ({onCloseModal}: MessageModalProps) => {

  return (
    <SPageBackground onClick={onCloseModal}>
      <SWrapper>
        <STitle>Ваш прогресс засчитан!</STitle>
        <SButton onClick={onCloseModal} aria-label="Закрыть" title="Ок"/>
      </SWrapper>
    </SPageBackground>
  )
}