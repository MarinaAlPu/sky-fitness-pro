import { SWrapper, SContainer, SBanner, STitle, SImage } from "./CourseContent.style";


export const CourseContent = () => {

  return (
    <SWrapper>
      <SContainer>
        <SBanner>
          <STitle>Йога</STitle>
          <SImage src="/images/skill-cards/skill-card-1.svg" alt="Йога" />
        </SBanner>
      </SContainer>
    </SWrapper>
  )
}
