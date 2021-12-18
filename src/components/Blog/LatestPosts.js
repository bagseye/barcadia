import React from "react"
import { Link } from "gatsby"
import BlogItems from "./BlogItems"
import BlogItem from "./BlogItem"
import useLatestBlogPost from "../../hooks/use-latest-blog-post"
import { LatestPostsStyles } from "./BlogStyles"
import Button from "../Button/Button"

const LatestPosts = ({ title }) => {
  const latestBlogPost = useLatestBlogPost()
  return (
    <LatestPostsStyles>
      <div className="container">
        {title && (
          <h2>
            {title}
            <span>.</span>
          </h2>
        )}

        <BlogItems>
          {latestBlogPost.map((node, index) => {
            return <BlogItem key={index} node={node} />
          })}
        </BlogItems>
        <Button text="All News Items" as={Link} to="/news" />
      </div>
    </LatestPostsStyles>
  )
}

export default LatestPosts
