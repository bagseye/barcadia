import styled from "styled-components"

export const ButtonStyles = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: #fff;
  outline: none;
  border: none;
  padding: 0;
  height: 36px;
  line-height: 36px;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  font-family: "Heebo", sans-serif;
  letter-spacing: -0.5px;
  text-decoration: none;

  svg {
    font-size: 18px;
  }

  @media (min-width: 375px) {
    font-size: 16px;
  }

  @media (min-width: 414px) {
    font-size: 18px;

    svg {
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    font-size: 19px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }

  &:hover,
  &:focus {
    color: #fff;

    &:after {
      width: 0%;
    }
  }
`
