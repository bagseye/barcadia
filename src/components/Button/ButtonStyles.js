import styled from "styled-components"

export const ButtonStyles = styled.button`
  position: relative;
  background-color: transparent;
  color: #fff;
  outline: none;
  border: none;
  padding: 0;
  height: 32px;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  font-family: "Heebo", sans-serif;
  letter-spacing: -0.5px;
  text-decoration: none;

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
