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

  .main-img {
    border-bottom: 3px solid var(--primary);
  }

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

  p {
    margin-bottom: 40px;
  }
`

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;

  .image-gallery--item {
    flex: 0 0 calc(50% - 10px);
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
    .image-gallery--item {
      flex-basis: calc((100% / 3) - 40px);
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  @media (min-width: 1200px) {
    .image-gallery--item {
      flex-basis: calc(50% - 20px);
    }
  }
`

const FaqBlock = styled.div`
  margin-top: 40px;
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
            <Image className="main-img" fluid={mainImage.fluid} />
          </ImageArea>
          <ContentArea>
            <h1>{name}</h1>
            <h2>£{price}</h2>
            <p>{description}</p>
            <Button text="Enquire Now" to="/contact" />

            <ImageGallery>
              {productImages.map((item, index) => {
                return (
                  <Image
                    className="image-gallery--item"
                    key={index}
                    fluid={item.fluid}
                    alt="Single product"
                  />
                )
              })}
            </ImageGallery>

            <FaqBlock>
              {faq.map((item, index) => {
                return (
                  <Faq
                    key={index}
                    title={item.title}
                    description={item.description}
                  />
                )
              })}
            </FaqBlock>
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
