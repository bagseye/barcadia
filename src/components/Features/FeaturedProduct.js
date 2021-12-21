import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const FeaturedProduct = ({ feature }) => {
  const { gatsbyPath, headerImage, title, introduction } = feature
  const image = getImage(headerImage)

  return (
    <aside className="features__item">
      <Link to={gatsbyPath}>
        <GatsbyImage
          className="features__item--img"
          image={image}
          alt="Product Image"
        />
        <div className="features__item--content">
          {title && <h2>{title}</h2>}
          {introduction && <p>{introduction}</p>}
          <Button text="Read More" as="span" />
        </div>
      </Link>
    </aside>
  )
}

export default FeaturedProduct
