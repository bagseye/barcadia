import styled from "styled-components"

export const PerksModuleStyles = styled.section`
  padding-top: var(--sectionPadding);
  padding-bottom: var(--sectionPadding);
  background-color: #000;
  position: relative;

  .perks__image--bg,
  .perks__image--overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .perks__image--bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .perks__image--overlay {
    background-color: rgba(0, 0, 0, 0.65);
  }

  > .container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--gap);

    @media (min-width: 768px) {
      flex-direction: row;
    }

    @media (min-width: 1154px) {
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
    margin-bottom: var(--gap);

    @media (min-width: 375px) {
      width: 200px;
    }

    @media (min-width: 414px) {
      width: 220px;
    }

    @media (min-width: 768px) {
      width: 250px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain !important;
      object-position: left center;
    }
  }
`
