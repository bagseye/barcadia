import React from "react"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { StaticImage } from "gatsby-plugin-image"

const PerksModule = ({ children }) => {
  return (
    <PerksModuleStyles>
      <StaticImage
        class="perks__image--bg"
        src="../../images/abstract-building.jpg"
      />
      <div className="perks__image--overlay"></div>
      <div className="container">
        <h2>Perks Module</h2>
        {children}
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
