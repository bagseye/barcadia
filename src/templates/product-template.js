import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import Grid from "../components/Grid/Grid"
import styled from "styled-components"
import Button from "../components/Button/Button"
import Faq from "../components/Faq"

const ImageArea = styled.div`
  grid-column: 1 / 4;

  @media (min-width: 1200px) {
    grid-column: 1 / 2;
  }
`

const ContentArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 1200px) {
    grid-column: 2 / 4;
  }

  h1 {
    margin-top: 0;
    text-transform: capitalize;
  }

  .faq-cont {
    margin-top: 40px;
  }
`

const productTemplate = ({ data }) => {
  const {
    name,
    price,
    description: { description },
    images,
    faq,
  } = data.product

  const [mainImage, ...productImages] = images
  console.log(mainImage)

  return (
    <Layout>
      <section className="section-padding">
        <Grid>
          <ImageArea>
            {productImages.map((item, index) => {
              return (
                <Image key={index} fluid={item.fluid} alt="Single product" />
              )
            })}
          </ImageArea>
          <ContentArea>
            <h1>{name}</h1>
            <h2>£{price}</h2>
            <p>{description}</p>
            <Button text="Enquire Now" to="/contact" />
            <div className="faq-cont">
              {faq.map((item, index) => {
                return (
                  <Faq
                    key={index}
                    title={item.title}
                    description={item.description}
                  />
                )
              })}
            </div>
          </ContentArea>
        </Grid>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    product: contentfulProducts(slug: { eq: $slug }) {
      name
      price
      description {
        description
      }
      faq {
        title
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default productTemplate
