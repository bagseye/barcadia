import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import propTypes from "prop-types"

const ProductItem = styled.article`
  width: 100%;
  padding: 0 20px;
`

const ProductContent = styled.div`
  background-color: #272727;
  border-top: 3px solid var(--primary);
  padding: 2.5rem 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
`

const Product = ({ product }) => {
  const { name, price, slug, images } = product

  const image = getImage(images[0])

  return (
    <ProductItem>
      <GatsbyImage image={image} alt="single Product" />
      <ProductContent>
        <h2>{name || "Name not listed"}</h2>
        <h3>£ {price || "Call"}</h3>
        <AniLink className="btn" cover bg="#1d1d1d" to={`/products/${slug}`}>
          View Product
        </AniLink>
      </ProductContent>
    </ProductItem>
  )
}

Product.propTypes = {
  product: propTypes.shape({
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    images: propTypes.arrayOf(propTypes.object).isRequired,
  }),
}

export default Product
