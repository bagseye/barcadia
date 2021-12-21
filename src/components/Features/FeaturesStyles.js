import styled from "styled-components"

export const FeaturedProductsStyles = styled.section`
  > div {
    gap: var(--gap);
  }
`

export const FeaturedProductStyles = styled.aside`
  min-height: 408px;
  background-color: #000;
  flex: 0 0 80%;
  overflow: hidden;
  scroll-snap-align: start;
  scroll-margin-left: 25px;
  position: relative;

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
    padding: 20px;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    h2,
    p {
      color: #fff;
    }
  }

  &:hover {
    cursor: pointer;

    .features__item--img {
      transform: scale(1.1);
      opacity: 0.5;
    }
  }
`
