import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import useAllBlogPost from "../hooks/use-all-blog-post"
import PostItems from "../components/Post/PostItems"
import PostItem from "../components/Post/PostItem"

const FeedTemplate = contentfulPage => {
  const allBlogPost = useAllBlogPost()
  const headerImage = getImage(contentfulPage.headerImage)
  return (
    <>
      <Seo title={contentfulPage.title} />
      <Layout>
        <SimpleBanner title={contentfulPage.title}>
          <GatsbyImage className="banner__image" image={headerImage} />
        </SimpleBanner>
        <PostItems>
          {allBlogPost.map((node, index) => {
            return <PostItem key={index} node={node} />
          })}
        </PostItems>
      </Layout>
    </>
  )
}

export default FeedTemplate
