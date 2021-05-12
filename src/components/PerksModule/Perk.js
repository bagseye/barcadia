import React from "react"
import { PerkStyles } from "./PerksModuleStyles"

const Perk = ({ children, title, content }) => {
  return (
    <PerkStyles>
      {children}
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
    </PerkStyles>
  )
}

export default Perk
