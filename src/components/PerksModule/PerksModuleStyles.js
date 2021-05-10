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
  }
`

export const PerkStyles = styled.aside``
