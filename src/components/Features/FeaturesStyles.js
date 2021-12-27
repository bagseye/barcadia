import styled from "styled-components"

export const FeaturedProductsStyles = styled.section`
  > div {
    &.container__scroll {
      gap: calc(var(--gap) / 2);
      padding-bottom: var(--gap);
      padding-left: var(--borderSpacing);
      padding-right: var(--borderSpacing);
      margin-left: calc(var(--borderSpacing) * -1);
      width: calc(100% + (var(--borderSpacing) * 2));

      @media (min-width: 1200px) {
        padding-bottom: 0;
        width: 100%;
        margin-left: auto;
        padding-left: 0;
        padding-right: 0;
        gap: var(--gap);
      }
    }
  }
`

export const FeaturedProductStyles = styled.aside`
  min-height: 408px;
  background-color: #000;
  flex: 0 0 80%;
  overflow: hidden;
  scroll-snap-align: center;
  scroll-margin-left: 25px;
  position: relative;
  border-radius: 6px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  transition: border-color 0.6s ease, box-shadow 0.6s ease;

  @media (min-width: 414px) {
    min-height: 434px;
  }

  @media (min-width: 768px) {
    min-height: 500px;
    flex-basis: 40%;
  }

  @media (min-width: 1024px) {
    min-height: 600px;
  }

  @media (min-width: 1200px) {
    flex-basis: 33.333%;
    flex-shrink: 1;
  }

  .features__item--img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .features__item--content {
    width: 100%;
    position: absolute;
    z-index: 2;
    padding: 20px 10px;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    @media (min-width: 768px) {
      padding: 20px;
    }

    @media (min-width: 1024px) {
      padding: 40px 20px;
    }

    @media (min-width: 1200px) {
      padding: 50px 30px;
    }

    h4,
    p {
      text-shadow: var(--textShadow);
    }

    h4 {
      color: #fff;
    }

    p {
      color: var(--bodyColor);
    }
  }

  &:hover {
    cursor: pointer;
    border-color: var(--primary);
    box-shadow: var(--boxShadow);

    .features__item--img {
      transform: scale(1.1);
      opacity: 0.5;
    }
  }
`
