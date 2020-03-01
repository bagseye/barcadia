import React from "react"
import Button from "../Button/Button"
import styled from "styled-components"

const TitleArea = styled.div`
  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const ContentArea = styled.div`
  grid-column: 1/4;
  @media (min-width: 768px) {
    grid-column: 2 / 4;

    h2,
    p {
      margin-top: 0;
    }
  }
`

const PageIntro = ({ title, subTitle }) => {
  return (
    <>
      <TitleArea>
        <Title>{title}</Title>
        <Button text="View Products" link="/products" />
      </TitleArea>
      <ContentArea>
        <h2>{subTitle}</h2>
        <p>
          Using modern CSS properties such as grid, this theme is optmised for
          speed and mobile devices. Giving users an excellent experience on any
          device. Future-proofing your product.
        </p>
      </ContentArea>
    </>
  )
}

export default PageIntro
