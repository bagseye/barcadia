import React from "react"
import styled from "styled-components"

const HeroContainer = styled.div``

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-rows: 1fr 1fr;
    grid-gap: 40px;
  }
`

const HeroImage = styled.img`
  height: 210px;
  width: 100%;
  background-color: var(--primary);
  border: none;
  outline: none;

  @media (min-width: 768px) {
    height: 470px;
    grid-column: 1 / 4;
  }

  @media (min-width: 1200px) {
    height: 535px;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    margin-bottom: 0;
  }
`

const TitleArea = styled.div`
  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }

  @media (min-width: 1200px) {
    grid-column: 3 / 4;
  }
`
const ContentArea = styled.div`
  @media (min-width: 768px) {
    grid-column: 3 / 4;
  }

  @media (min-width: 1200px) {
    grid-row: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`

const HeroTitle = styled.h1`
  font-size: var(--h1);
  margin-top: 0;
  margin-bottom: 0;
`

const HeroSubTitle = styled.h2`
  font-size: var(--h2);
  margin-top: 0;
`

const Banner = ({ title, info, children }) => {
  return (
    <section className="section-padding">
      <HeroContainer className="container">
        <GridContainer>
          <HeroImage />
          <TitleArea>
            <HeroTitle>{title}</HeroTitle>
          </TitleArea>
          <ContentArea>
            <HeroSubTitle>{info}</HeroSubTitle>
            {children}
          </ContentArea>
        </GridContainer>
      </HeroContainer>
    </section>
  )
}

export default Banner
