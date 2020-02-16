import React from "react"
import { Link } from "gatsby"

const Button = ({ text, link }) => {
  return (
    <Link className="btn" to={link}>
      {text}
    </Link>
  )
}

export default Button
