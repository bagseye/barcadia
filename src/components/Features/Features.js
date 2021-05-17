import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FeaturesStyles } from "./FeaturesStyles"
import Feature from "./Feature"

const getProducts = graphql`
  query {
    featuredProducts: allContentfulProducts(
      filter: { featured: { eq: true } }
    ) {
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
    <FeaturesStyles>
      <div className="features__container">
        <div className="features__container--scroll">
          {products.map(({ node }) => {
            return <Feature feature={node} />
          })}
        </div>
      </div>
    </FeaturesStyles>
  )
}

export default Features
