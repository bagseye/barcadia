import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import useAllBlogPost from "../hooks/use-all-blog-post"
import useAllProduct from "../hooks/use-all-product"
import PostItems from "../components/Post/PostItems"
import PostItem from "../components/Post/PostItem"
import ProductFeed from "../components/Feeds/ProductFeed"
import PostFeed from "../components/Feeds/PostFeed"

const FeedTemplate = contentfulPage => {
  // let query

  const getTemplate = contentfulPage => {
    const { feedType } = contentfulPage

    switch (feedType) {
      case "Products":
        return <ProductFeed {...contentfulPage} />

      default:
        return <PostFeed {...contentfulPage} />
    }
  }

  const headerImage = getImage(contentfulPage.headerImage)
  return (
    <>
      <Seo title={contentfulPage.title} />
      <Layout>
        <SimpleBanner title={contentfulPage.title}>
          <GatsbyImage className="banner__image" image={headerImage} />
        </SimpleBanner>
        <div className="section">
          <PostItems>
            {getTemplate(contentfulPage)}
            {/* {query.map((node, index) => {
              return <PostItem key={index} node={node} />
            })} */}
          </PostItems>
        </div>
      </Layout>
    </>
  )
}

export default FeedTemplate
