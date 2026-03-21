import { SCards, SContainer, SDescribe, SText, STitle, SWrapper } from "./MainContent.style";
import { Card } from "../card/Card";


export const MainContent = () => {

  return (
    <SWrapper>
      <SContainer>
        <STitle>
          <SDescribe>Начните заниматься спортом и улучшите качество жизни</SDescribe>
          <SText>Измени своё тело за полгода!</SText>
        </STitle>

        <SCards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </SCards>
      </SContainer>
    </SWrapper>
  )
}