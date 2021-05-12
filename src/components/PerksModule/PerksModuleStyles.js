import styled from "styled-components"

export const PerksModuleStyles = styled.section`
  padding: var(--sectionPadding) var(--borderSpacing);
  color: #fff;
  background-color: #000;
  position: relative;

  .perks__image--bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .perks__image--overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.65);
  }

  > .container {
    position: relative;

    @media (min-width: 1154px) {
      display: flex;
      justify-content: space-between;
      max-width: 1100px;
      margin-left: 0;
    }
  }
`

export const PerkStyles = styled.aside`
  .gatsby-image-wrapper {
    width: 170px;
    height: 45px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (min-width: 375px) {
      width: 200px;
    }

    @media (min-width: 414px) {
      width: 220px;
    }

    @media (min-width: 768px) {
      width: 250px;
    }

    @media (min-width: 1154px) {
      width: 200px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain !important;
      object-position: left center;
    }
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;

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

    @media (min-width: 1154px) {
      font-size: 26px;
    }
  }

  p {
    font-size: 15px;

    @media (min-width: 375px) {
      font-size: 16px;
    }

    @media (min-width: 414px) {
      font-size: 18px;
    }

    @media (min-width: 768px) {
      font-size: 19px;
    }

    @media (min-width: 1024px) {
      font-size: 20px;
    }

    @media (min-width: 1154px) {
      font-size: 18px;
    }
  }

  margin-bottom: 60px;

  @media (min-width: 375px) {
    margin-bottom: 80px;
  }

  @media (min-width: 768px) {
    margin-bottom: 100px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 120px;
  }

  @media (min-width: 1154px) {
    margin-bottom: 0;
    width: 260px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`
