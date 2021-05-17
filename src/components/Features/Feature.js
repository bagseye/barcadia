import React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Feature = ({ feature }) => {
  const { name, slug, images } = feature
  const image = getImage(images[0])

  return (
    <aside className="features__item">
      <Link to={slug}>
        <GatsbyImage className="features__item--img" image={image} />
        <div className="features__item--content">
          <h2>{name}</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            eligendi neque ipsam.
          </p>
          <Button text="Read More" as="span" />
        </div>
      </Link>
    </aside>
  )
}

export default Feature
