import React from "react"
import styled from "styled-components"
import services from "../../constants/services"

const GridContainer = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
  }
`

const ServiceItem = styled.article`
  background-color: #272727;
  border-top: 3px solid var(--primary);
  padding: 2.5rem 1.25rem;
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
`

const Service = () => {
  return (
    <section className="section-padding section-padding--large">
      <GridContainer className="container">
        {services.map((item, index) => {
          return (
            <ServiceItem key={index}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </ServiceItem>
          )
        })}
      </GridContainer>
    </section>
  )
}

export default Service
