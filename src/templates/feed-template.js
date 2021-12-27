import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import ProductFeed from "../components/Feeds/ProductFeed"
import PostFeed from "../components/Feeds/PostFeed"

const getTemplate = (contentfulPage) => {
  const { feedType } = contentfulPage

  switch (feedType) {
    case "Products":
      return <ProductFeed {...contentfulPage} />

    default:
      return <PostFeed {...contentfulPage} />
  }
}

const FeedTemplate = (contentfulPage) => {
  const headerImage = getImage(contentfulPage.headerImage)
  return (
    <>
      <Seo title={contentfulPage.title} />
      <Layout>
        <SimpleBanner title={contentfulPage.title}>
          <GatsbyImage
            className="banner__image"
            image={headerImage}
            alt={`${contentfulPage.title} feed`}
          />
        </SimpleBanner>
        <div className="section">
          <div className="feed">{getTemplate(contentfulPage)}</div>
        </div>
      </Layout>
    </>
  )
}

export default FeedTemplate
