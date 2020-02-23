import React from "react"
import styled from "styled-components"
import Grid from "../Grid/Grid"
import services from "../../constants/services"

const ServiceItem = styled.article`
  background-color: #272727;
  border-top: 3px solid var(--primary);
  padding: 2.5rem 1.25rem;

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

const Service = props => {
  return (
    <section
      className={
        props.largePadding
          ? "section-padding section-padding--large"
          : "section-padding"
      }
    >
      <Grid>
        {services.map((item, index) => {
          return (
            <ServiceItem key={index}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </ServiceItem>
          )
        })}
      </Grid>
    </section>
  )
}

export default Service
