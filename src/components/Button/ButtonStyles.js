import styled from "styled-components"

export const ButtonStyles = styled.button`
  color: #fff;
  background-color: transparent;
  font-family: "Heebo", sans-serif;
  border: 0;
  text-decoration: none;
  padding: 0;
  transition: color 0.3s ease;
  text-transform: capitalize;
  font-size: var(--p);
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: 8px;
    background-color: var(--primary);
    transition: left 0.3s ease;
  }

  &:focus {
    color: var(--primary);
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: var(--primary);

      &::after {
        left: 100%;
      }
    }
  }
`
