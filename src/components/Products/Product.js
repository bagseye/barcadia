import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ProductItem = styled.article`
  flex: 0 0 calc(50% - 20px);
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

const ProductImg = styled.div`
  height: 185px;
`

const Product = ({ product }) => {
  const { name, price, slug, images } = product

  let mainImage = images[0].fluid

  return (
    <ProductItem>
      <Image fluid={mainImage} alt="single Product">
        <ProductImg />
      </Image>
      <ProductContent>
        <h2>{name}</h2>
        <h3>£{price}</h3>
        <AniLink className="btn" cover bg="#1d1d1d" to={`/products/${slug}`}>
          View Product
        </AniLink>
      </ProductContent>
    </ProductItem>
  )
}

export default Product
