import React from "react"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import { MdArrowDownward as Arrow } from "react-icons/md"

const BannerModule = () => {
  return (
    <BannerModuleStyles>
      <StaticImage
        className="banner__image"
        src="../../images/macbook-color.jpg"
      />
      <div className="container">
        <div className="banner__content">
          <h1>
            Barcadia<span style={{ color: "var(--primary)" }}>.</span>
          </h1>
          <h2>A product based template system for GatsbyJS</h2>
          <button>
            <Arrow />
          </button>
        </div>
      </div>
    </BannerModuleStyles>
  )
}

export default BannerModule
