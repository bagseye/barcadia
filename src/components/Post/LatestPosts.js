import React from "react"
import { Link } from "gatsby"
import PostItems from "./PostItems"
import PostItem from "./PostItem"
import useLatestBlogPost from "../../hooks/use-latest-blog-post"
import { LatestPostsStyles } from "./PostStyles"
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

        <PostItems>
          {latestBlogPost.map((node, index) => {
            return <PostItem key={index} node={node} />
          })}
        </PostItems>
        <Button text="All News Items" as={Link} to="/news" />
      </div>
    </LatestPostsStyles>
  )
}

export default LatestPosts
