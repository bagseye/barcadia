import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Faq from "../components/Faq/Faq"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"

const ContentArea = styled.div`
  display: flex;
  padding: var(--sectionPadding) var(--borderSpacing);
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

const Description = styled.div`
  flex: 0 0 50%;
  padding-right: 20px;
`

const FaqBlock = styled.div`
  flex: 0 0 50%;
  padding-left: 20px;
`

const productTemplate = ({ data }) => {
  const {
    name,
    price,
    excerpt,
    description: { description },
    images,
    faq,
  } = data.product

  const [mainImage, ...productImages] = images
  const image = getImage(mainImage)

  return (
    <>
      <Seo title={name} />
      <BannerModule
        title={name}
        price={price}
        subTitle={excerpt}
        enquire={true}
      >
        <GatsbyImage
          className="banner__image"
          image={image}
          alt="Banner Image"
        />
      </BannerModule>
      <ContentArea>
        <Description>{description}</Description>
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

      <ImageGallery>
        {productImages.map((item, index) => {
          return (
            <GatsbyImage
              image={item.gatsbyImageData}
              className="image-gallery--item"
              key={index}
              alt="Single product"
            />
          )
        })}
      </ImageGallery>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    product: contentfulProducts(slug: { eq: $slug }) {
      name
      price
      excerpt
      description {
        description
      }
      faq {
        title
        description
      }
      images {
        gatsbyImageData(width: 2000, formats: [AUTO, WEBP])
      }
    }
  }
`

export default productTemplate
