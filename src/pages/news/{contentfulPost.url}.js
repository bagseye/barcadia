import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "../../templates/post-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const Post = ({ data: { contentfulPost } }) => {
  return (
    <>
      <Seo title={contentfulPost.title} />
      <Layout>
        <PostTemplate {...contentfulPost} />
      </Layout>
    </>
  )
}

export const data = graphql`
  query postQuery($id: String) {
    contentfulPost(id: { eq: $id }) {
      title
      introduction
      content {
        raw
      }
      createdAt(formatString: "DD MMMM, YYYY")
    }
  }
`

export default Post
