import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import propTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
  query {
    file(relativePath: { eq: "yellow-metal-design-decoration.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

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

const ProductImg = styled.div`
  height: 185px;
`

const Product = ({ product }) => {
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid
  const { name, price, slug, images } = product

  let mainImage = images ? images[0].fluid : img

  return (
    <ProductItem>
      <Image fluid={mainImage} alt="single Product">
        <ProductImg />
      </Image>
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
