import styled from "styled-components"

export const SimpleBannerStyles = styled.section`
  height: 70vh;
  position: relative;
  padding: 30px var(--borderSpacing);

  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  .banner__content {
    position: relative;
    z-index: 2;
    height: 20vh;
    width: 100%;

    @media (min-width: 768px) {
      width: 66vw;
    }

    h1 {
      margin-top: 0;
      margin-bottom: 10px;
      font-weight: 700;
      font-size: var(--bannerTitle);
      letter-spacing: -1px;
    }

    h2 {
      margin-top: 0;
      margin-bottom: 30px;
      font-weight: 300;
      font-size: var(--bannerSubTitle);
      letter-spacing: -0.5px;
    }
  }
`
