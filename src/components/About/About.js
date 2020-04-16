import React from "react"
import styled from "styled-components"
import Grid from "../Grid/Grid"
import { Link } from "react-scroll"

const TitleArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const ContentArea = styled.div`
  grid-column: 1/4;
  @media (min-width: 768px) {
    grid-column: 2 / 3;

    p {
      margin-top: 0;
    }
  }
`

const About = ({ largePadding, id }) => {
  return (
    <section
      id={id}
      className={largePadding ? "section-padding--large" : "section-padding"}
    >
      <Grid>
        <TitleArea>
          <Title>
            A super-fast theme that is easy to get started, using the power of
            GatsbyJS
          </Title>
          <Link className="btn" to="products" smooth={true} duration={500}>
            View Products
          </Link>
        </TitleArea>
        <ContentArea>
          <p>
            Using modern CSS properties such as grid, this theme is optmised for
            speed and mobile devices. Giving users an excellent experience on
            any device. Future-proofing your product.
          </p>
        </ContentArea>
      </Grid>
    </section>
  )
}

export default About
