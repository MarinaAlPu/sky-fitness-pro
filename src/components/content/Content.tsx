import { SCards, SContainer, SDescribe, SText, STitle, SWrapper } from "./Content.style";
import { Card } from "../card/Card";


export const Content = () => {

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