import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const DefaultTemplate = contentfulPage => {
  const headerImage = getImage(contentfulPage.headerImage)
  return (
    <>
      <Seo title={contentfulPage.title} />
      <Layout>
        <SimpleBanner title={contentfulPage.title}>
          <GatsbyImage className="banner__image" image={headerImage} />
        </SimpleBanner>
        <div className="section">
          <div className="container container__tight">
            {renderRichText(contentfulPage.mainContent)}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default DefaultTemplate