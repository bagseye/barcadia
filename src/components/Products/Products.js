import React from "react"
import ProductList from "./ProductList"
import { useStaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  query {
    products: allContentfulProducts {
      edges {
        node {
          name
          price
          contentful_id
          slug
          description {
            description
          }
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Products = () => {
  const { products } = useStaticQuery(getProducts)
  return <ProductList products={products} />
}

export default Products
