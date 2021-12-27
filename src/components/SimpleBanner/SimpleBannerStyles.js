import styled from "styled-components"

export const SimpleBannerStyles = styled.section`
  height: 70vh;
  position: relative;
  padding: var(--gap) var(--borderSpacing);

  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .banner__image,
  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  .gradient {
    background: radial-gradient(
      at bottom left,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
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
      font-size: var(--bannerTitle);
      border-bottom: 2px solid rgba(255, 255, 255, 0.15);
      display: inline-block;
      text-shadow: var(--textShadow);
    }
  }
`
