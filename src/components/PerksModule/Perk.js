import React from "react"
import { PerkStyles } from "./PerksModuleStyles"

const Perk = ({ title, content }) => {
  return (
    <PerkStyles>
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
    </PerkStyles>
  )
}

export default Perk
