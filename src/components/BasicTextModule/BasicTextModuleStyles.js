import styled from "styled-components"

export const BasicTextModuleStyles = styled.section`
  .container {
    @media (min-width: 768px) {
      width: 66vw;
      margin-left: 0;
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 700px;
    letter-spacing: -0.5px;
    margin-top: 0;
    margin-bottom: 25px;

    @media (min-width: 375px) {
      font-size: 22px;
    }

    @media (min-width: 414px) {
      font-size: 27px;
    }

    @media (min-width: 768px) {
      font-size: 30px;
    }

    @media (min-width: 1024px) {
      font-size: 36px;
    }

    @media (min-width: 1152px) {
      font-size: 28px;
    }

    @media (min-width: 1440px) {
      font-size: 30px;
    }
  }
`
