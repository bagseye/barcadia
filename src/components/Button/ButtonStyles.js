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
  min-height: 36px;
  line-height: 36px;
  cursor: pointer;
  font-weight: 700;
  font-size: var(--p);
  text-decoration: none;

  svg {
    font-size: var(--h6);
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
    &:after {
      width: 0%;
    }
  }
`
