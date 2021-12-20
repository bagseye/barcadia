import React from "react"
import Seo from "../components/SEO"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styled from "styled-components"
import BannerModule from "../components/BannerModule/BannerModule"

const ProductTemplateStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const Producttemplate = contentfulProduct => {
  const productHeaderImage = getImage(contentfulProduct.headerImage)
  return (
    <>
      <Seo title={contentfulProduct.title} />
      <BannerModule
        title={contentfulProduct.title}
        price={contentfulProduct.price}
        subTitle={contentfulProduct.introduction}
        enquire={true}
      >
        <GatsbyImage className="banner__image" image={productHeaderImage} />
      </BannerModule>
      <ProductTemplateStyles className="section">
        <div className="column">
          {renderRichText(contentfulProduct.description)}
        </div>
        {/* <div className="column">
              {faq.map((item, index) => {
                return (
                  <Faq
                    key={index}
                    title={item.title}
                    description={item.description}
                  />
                )
              })}
            </div> */}
      </ProductTemplateStyles>
    </>
  )
}

export default Producttemplate
