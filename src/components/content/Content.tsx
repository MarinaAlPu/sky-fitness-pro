import { SContainer, SDescribe, SText, STitle, SWrapper } from "./Content.style"


export const Content = () => {
  return (
    <SWrapper>
      <SContainer>
        <STitle>
          <SDescribe>Начните заниматься спортом и улучшите качество жизни</SDescribe>
          <SText>Измени своё тело за полгода!</SText>
        </STitle>
      </SContainer>
    </SWrapper>
  )
}