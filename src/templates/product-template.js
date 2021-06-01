import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Faq from "../components/Faq/Faq"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ProductTemplateStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: var(--sectionPadding) var(--borderSpacing);
  background-color: #000;

  .column {
    flex: 0 0 100%;

    @media (min-width: 768px) {
      flex-basis: 50%;

      &:nth-child(1) {
        padding-right: 20px;
      }

      &:nth-child(2) {
        padding-left: 20px;
      }

      > * {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    > * {
      &:first-child {
        margin-top: 0;
      }
    }
  }
`

const productTemplate = ({ data }) => {
  const { name, price, excerpt, productDescription, images, faq } = data.product

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
      <ProductTemplateStyles>
        <div className="column">{renderRichText(productDescription)}</div>
        <div className="column">
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
      </ProductTemplateStyles>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    product: contentfulProducts(slug: { eq: $slug }) {
      name
      price
      excerpt
      productDescription {
        raw
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
