import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const getImages = graphql`
  query HeroImage {
    fluid: file(relativePath: { eq: "yellow-metal-design-decoration.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

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

const HeroImage = styled.div`
  width: 100%;
  background-color: var(--primary);
  border: none;
  outline: none;

  @media (min-width: 768px) {
    grid-column: 1 / 4;
  }

  @media (min-width: 1200px) {
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
  margin-bottom: 2.125rem;
`

const Banner = ({ title, info, children }) => {
  const data = useStaticQuery(getImages)
  return (
    <section className="section-padding">
      <HeroContainer className="container">
        <GridContainer>
          <HeroImage>
            <Img fluid={data.fluid.childImageSharp.fluid} />
          </HeroImage>
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
