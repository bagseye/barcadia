import styled from "styled-components"

export const BasicTextModuleStyles = styled.section`
  .container {
    @media (min-width: 768px) {
      > div {
        width: 66.666%;
        max-width: 700px;
      }
    }
  }
`
