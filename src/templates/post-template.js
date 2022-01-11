import React from "react"
import { Link } from "gatsby"
import Button from "../components/Button/Button"
import { PostSingleStyles } from "../components/Post/PostStyles"
import LatestPosts from "../components/Post/LatestPosts"
import RichText from "../components/RichText"

const PostTemplate = (contentfulPost) => {
  const { title, createdAt, content } = contentfulPost
  return (
    <>
      <section>
        <PostSingleStyles>
          {title && <h1 className="blogsingle__title">{title}</h1>}
          {createdAt && (
            <p className="blogsingle__date">Posted on {createdAt}</p>
          )}
          {content && (
            <article className="blogsingle__content">
              <RichText richText={content} />
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
