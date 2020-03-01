import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-gap: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: content-box;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Grid = ({ children }) => {
  return <Container>{children}</Container>
}

export default Grid
