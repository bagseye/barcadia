import React from "react"
import { Link } from "gatsby"
import useAllBlogPost from "../hooks/use-all-blog-post"
import Button from "../components/Button/Button"
import { BlogSingleStyles } from "../components/Blog/BlogStyles"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

const PostTemplate = contentfulPost => {
  const allBlogPost = useAllBlogPost()

  return (
    <section>
      <BlogSingleStyles>
        <h1 className="blogsingle__title">{contentfulPost.title}</h1>
        {/* <p className="blogsingle__date">{published}</p> */}
        <article className="blogsingle__content">
          {renderRichText(contentfulPost.content)}
          <div className="blogsingle__back">
            <Button to="/news" text="Back to news" as={Link} />
          </div>
        </article>
      </BlogSingleStyles>
    </section>
  )
}

export default PostTemplate
