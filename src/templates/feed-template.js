import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import useAllBlogPost from "../hooks/use-all-blog-post"
import BlogItems from "../components/Blog/BlogItems"
import BlogItem from "../components/Blog/BlogItem"

const FeedTemplate = contentfulPage => {
  const allBlogPost = useAllBlogPost()
  return (
    <>
      <Seo title={contentfulPage.title} />
      <Layout>
        <SimpleBanner title={contentfulPage.title}>
          <StaticImage
            className="banner__image"
            src="../images/iphone-camera.jpg"
            alt="Apple iPhone camera"
          />
        </SimpleBanner>
        <BlogItems>
          {allBlogPost.map((node, index) => {
            return <BlogItem key={index} node={node} />
          })}
        </BlogItems>
      </Layout>
    </>
  )
}

export default FeedTemplate
