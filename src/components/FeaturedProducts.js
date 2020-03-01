import React from "react"
import Grid from "../components/Grid/Grid"
import Product from "../components/Products/Product"
import Button from "../components/Button/Button"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

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
            fluid(quality: 90, maxWidth: 768) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
const TitleArea = styled.div`
  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const FlexContainer = styled.div`
  grid-column: 1/4;
  margin-left: -20px;
  margin-right: -20px;
  @media (min-width: 768px) {
    grid-column: 2 / 4;
    display: flex;
    justify-content: space-between;

    p {
      margin-top: 0;
    }
  }
`

const FlexItem = styled.div`
  flex: 0 0 50%;
`

const FeaturedProducts = props => {
  const response = useStaticQuery(getProducts)
  const products = response.featuredProducts.edges

  return (
    <section
      className={
        props.largePadding ? "section-padding--large" : "section-padding"
      }
    >
      <Grid>
        <TitleArea>
          <Title>Displaying your featured products is easy</Title>
          <p>
            Aenean pulvinar ligula id elit pulvinar, sit amet semper sem semper.
            In porttitor ornare libero, eu faucibus tellus elementum sit amet.
          </p>
          <Button text="All Products" link="/products" />
        </TitleArea>
        <FlexContainer>
          {products.map(({ node }) => {
            return (
              <FlexItem>
                <Product key={node.contentful_id} product={node} />
              </FlexItem>
            )
          })}
        </FlexContainer>
      </Grid>
    </section>
  )
}

export default FeaturedProducts
