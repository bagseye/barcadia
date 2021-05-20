import React from "react"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import { MdArrowDownward as Arrow } from "react-icons/md"

const BannerModule = ({ title, subTitle, slim }) => {
  return (
    <BannerModuleStyles>
      <StaticImage
        className="banner__image"
        src="../../images/macbook-color.jpg"
        alt="Banner Image"
      />
      <div className="container">
        <div className="banner__content">
          {title && (
            <h1>
              {title}
              <span style={{ color: "var(--primary)" }}>.</span>
            </h1>
          )}
          {subTitle && <h2>{subTitle}</h2>}
          <button>
            <Arrow />
          </button>
        </div>
      </div>
    </BannerModuleStyles>
  )
}

export default BannerModule
