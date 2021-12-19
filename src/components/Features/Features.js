import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ProductsStyles } from "../Products/ProductsStyles"
import Product from "../Products/Product"

const getProducts = graphql`
  query {
    featuredProducts: allContentfulProducts(
      filter: { featured: { eq: true } }
    ) {
      edges {
        node {
          name
          price
          excerpt
          contentful_id
          slug
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
  const products = response.featuredProducts.edges

  return (
    <ProductsStyles className="section">
      <div className="features__container">
        <h2>Featured Products from Barcadia.</h2>
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
