import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/SEO"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { BlogSingleStyles } from "../components/Blog/BlogStyles"
import Button from "../components/Button/Button"

const Bold = ({ children }) => <strong>{children}</strong>
const Italic = ({ children }) => <em>{children}</em>
const Text = ({ children }) => <p>{children}</p>

const Blog = ({ data }) => {
  const { title, published, richText } = data.post

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }

  return (
    <>
      <Seo title={title} />
      <section>
        <BlogSingleStyles>
          <h1 className="blogsingle__title">{title}</h1>
          <p className="blogsingle__date">{published}</p>
          <article className="blogsingle__content">
            {renderRichText(richText, options)}
            <div className="blogsingle__back">
              <Button to="/blogs" text="Back to news" as={Link} />
            </div>
          </article>
        </BlogSingleStyles>
      </section>
    </>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPosts(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do YYYY")
      richText {
        raw
      }
    }
  }
`

export default Blog
