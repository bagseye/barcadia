import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ProductsStyles } from "./ProductsStyles"
import Product from "./Product"

const getProducts = graphql`
  query {
    products: allContentfulProducts {
      edges {
        node {
          name
          price
          excerpt
          contentful_id
          slug
          description {
            description
          }
          images {
            gatsbyImageData(width: 600, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
`

const Features = () => {
  const response = useStaticQuery(getProducts)
  const products = response.products.edges

  return (
    <ProductsStyles>
      <div className="features__container">
        <div className="features__container--scroll">
          {products.map(({ node }) => {
            return <Product feature={node} />
          })}
        </div>
      </div>
    </ProductsStyles>
  )
}

export default Features
