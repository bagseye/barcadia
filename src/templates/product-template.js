import React from "react"
import Seo from "../components/SEO"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styled from "styled-components"
import BannerModule from "../components/BannerModule/BannerModule"
import Faq from "../components/Faq/Faq"

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

  .product__gallery {
    width: 100%;
    display: flex;
  }
`

const ProductGallery = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--gap) / 2);

  @media (min-width: 1024px) {
    gap: var(--gap);
  }

  > * {
    width: calc(50% - 10px);

    @media (min-width: 768px) {
      width: calc(33.333% - 14px);
    }

    @media (min-width: 1024px) {
      width: calc(25% - 30px);
    }
  }
`

const Producttemplate = contentfulProduct => {
  const {
    headerImage,
    title,
    price,
    introduction,
    description,
    faqs,
    gallery,
  } = contentfulProduct
  const productHeaderImage = getImage(headerImage)
  return (
    <>
      <Seo title={title} />
      <BannerModule
        title={title}
        price={price}
        subTitle={introduction}
        enquire={true}
      >
        <GatsbyImage className="banner__image" image={productHeaderImage} />
      </BannerModule>
      <ProductTemplateStyles className="section">
        {description && (
          <div className="column">{renderRichText(description)}</div>
        )}
        {faqs && (
          <div className="column">
            {faqs.map((item, index) => {
              return (
                <Faq
                  key={index}
                  title={item.question}
                  description={item.answer}
                />
              )
            })}
          </div>
        )}
      </ProductTemplateStyles>
      {gallery && (
        <ProductGallery className="section">
          {gallery.map((item, index) => {
            let galleyImage = getImage(item)
            return <GatsbyImage key={index} image={galleyImage} />
          })}
        </ProductGallery>
      )}
    </>
  )
}

export default Producttemplate
