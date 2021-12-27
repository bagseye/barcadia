import React from "react"
import { Link } from "gatsby"
import Button from "../components/Button/Button"
import { PostSingleStyles } from "../components/Post/PostStyles"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import LatestPosts from "../components/Post/LatestPosts"

const PostTemplate = (contentfulPost) => {
  return (
    <>
      <section>
        <PostSingleStyles>
          {contentfulPost.title && (
            <h1 className="blogsingle__title">{contentfulPost.title}</h1>
          )}
          {contentfulPost.createdAt && (
            <p className="blogsingle__date">
              Posted on {contentfulPost.createdAt}
            </p>
          )}
          {contentfulPost.content && (
            <article className="blogsingle__content">
              {renderRichText(contentfulPost.content)}
              <div className="blogsingle__back">
                <Button to="/news" text="Back to news" as={Link} />
              </div>
            </article>
          )}
        </PostSingleStyles>
      </section>
      <LatestPosts title="Further reading from Barcadia" />
    </>
  )
}

export default PostTemplate
