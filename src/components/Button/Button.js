import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Button = ({ text, link }) => {
  return (
    <AniLink className="btn" cover bg="#1d1d1d" to={link}>
      {text}
    </AniLink>
  )
}

export default Button
