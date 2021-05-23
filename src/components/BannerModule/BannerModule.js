import React from "react"
import { Link } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import { MdArrowDownward as Arrow } from "react-icons/md"
import Button from "../Button/Button"

const BannerModule = ({ children, title, subTitle, slim, price, enquire }) => {
  return (
    <BannerModuleStyles>
      {children ? (
        children
      ) : (
        <StaticImage
          className="banner__image"
          src="../../images/macbook-color.jpg"
          alt="Banner Image"
        />
      )}

      <div className="container">
        <div className="banner__content">
          {title && (
            <h1>
              {title}
              <span style={{ color: "var(--primary)" }}>.</span>
            </h1>
          )}
          {subTitle && <h2>{subTitle}</h2>}
          {price && (
            <h2 className="price">
              £{price}
              <span style={{ color: "var(--primary)" }}>.</span>
            </h2>
          )}
          {enquire && <Button text="Enquire Now" as={Link} to="/contact" />}
          <button>
            <Arrow />
          </button>
        </div>
      </div>
    </BannerModuleStyles>
  )
}

export default BannerModule
