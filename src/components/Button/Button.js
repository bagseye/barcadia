import React from "react"
import { MdArrowForward as Arrow } from "react-icons/md"
import { ButtonStyles } from "./ButtonStyles"

const Button = ({ text, to, as }) => {
  return (
    <ButtonStyles as={as} to={to}>
      {text}
      <Arrow style={{ marginLeft: "10px" }} />
    </ButtonStyles>
  )
}

export default Button
