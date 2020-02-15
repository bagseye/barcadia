import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { Link } from "gatsby"

const Error404 = styled.section`
  background-color: var(--background);
  color: #fff;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
`

const GridContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
  }
`

const Title = styled.h1`
  margin-top: 0;
  font-size: var(--h1);

  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`

const SubContent = styled.div`
  @media (min-width: 768px) {
    grid-column: 2 / 3;
  }
`

const SubTitle = styled.h2`
  font-size: var(--h2);

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const error = () => {
  return (
    <Layout>
      <Error404>
        <GridContainer>
          <Title>Sorry.</Title>
          <SubContent>
            <SubTitle>This page has moved or no longer exists.</SubTitle>
            <p>
              Please choose another option from the menu above, or to return
              home, press the button below.
            </p>
            <Link className="btn" to="/">
              Return Home
            </Link>
          </SubContent>
        </GridContainer>
      </Error404>
    </Layout>
  )
}

export default error
