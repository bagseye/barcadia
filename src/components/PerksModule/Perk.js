import * as React from "react"
import { PerkStyles } from "./PerksModuleStyles"

const Perk = ({ children, title, content }) => {
  return (
    <PerkStyles>
      {children}
      {title && <h3>{title}</h3>}
      {content && <p>{content}</p>}
    </PerkStyles>
  )
}

export default Perk
