import styled from "styled-components"

export const ProductsStyles = styled.section`
  padding: var(--sectionPadding) var(--borderSpacing);
  color: #fff;
  background-color: #000;

  .features__container {
    width: calc(100% + 60px);
    transform: translateX(-30px);
    /* max-width: 1230px; */
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1024px) {
      width: calc(100% + 150px);
      transform: translateX(-75px);
    }

    @media (min-width: 1152px) {
      width: 100%;
      transform: translateX(0);
    }

    &--scroll {
      overflow-x: scroll;
      display: flex;
      scroll-snap-type: x mandatory;

      &::-webkit-scrollbar {
        width: 14px;
        height: 14px;
      }
      &::-webkit-scrollbar-thumb {
        background: #ffc400;
        border-radius: 0px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: #ffc400;
      }
      &::-webkit-scrollbar-track {
        background: #505050;
        border-radius: 0px;
      }

      @media (min-width: 1152px) {
        overflow-x: visible;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }

  .features__item {
    flex: 0 0 80%;
    min-height: 408px;
    background-color: #000;
    margin-right: 8px;
    margin-left: 8px;
    overflow: hidden;
    scroll-snap-align: start;
    scroll-margin-left: 25px;

    @media (min-width: 414px) {
      min-height: 434px;
    }

    @media (min-width: 768px) {
      min-height: 500px;
    }

    @media (min-width: 1024px) {
      min-height: 600px;
    }

    @media (min-width: 1152px) {
      min-height: 500px;
    }

    &:hover,
    &:focus {
      cursor: pointer;

      h2,
      p {
        color: #fff;
      }

      .features__item--img {
        transform: scale(1.1);
      }
    }

    > a {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: flex-end;
      position: relative;
      text-decoration: none;
    }

    &--img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      transition: transform 0.3s ease;
    }

    &--content {
      width: 100%;
      position: relative;
      z-index: 2;
      padding: 20px;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
      );

      > * {
        &:first-child {
          margin-top: 0;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }

      > h2 {
        color: #fff;
        font-size: var(--h2);
        margin-bottom: 20px;
      }

      > p {
        color: #fff;
        font-size: var(--p);
        margin-bottom: 40px;
      }
    }

    @media (min-width: 414px) {
      min-height: 434px;
    }

    @media (min-width: 768px) {
      flex-basis: 65%;
      min-height: 500px;
      margin-left: 15px;
      margin-right: 15px;
    }

    @media (min-width: 1024px) {
      flex-basis: 60%;
      min-height: 500px;
      margin-left: 20px;
      margin-right: 20px;
    }

    @media (min-width: 1152px) {
      flex: 0 0 calc((100% / 3) - 27px);
      margin-bottom: 40px;
      scroll-margin-left: 0;

      &:nth-of-type(3n + 0) {
        margin-right: 0;
      }
    }

    &:nth-child(1) {
      margin-left: 30px;

      @media (min-width: 1024px) {
        margin-left: 75px;
      }

      @media (min-width: 1152px) {
        margin-left: 0;
      }
    }

    &:last-child {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: transparent;
        right: -30px;
        bottom: 0;

        @media (min-width: 1024px) {
          right: -75px;
          width: 75px;
        }

        @media (min-width: 1152px) {
          display: none;
        }
      }
    }
  }
`
