import * as React from "react"
import { PostItemStyles } from "./PostStyles"

const BlogItem = ({ key, node }) => {
  const { title, gatsbyPath, introduction, createdAt } = node
  return (
    <PostItemStyles to={gatsbyPath}>
      <h4>{title}</h4>
      {introduction && <p>{introduction}</p>}
      <div className="blogitem__meta">
        <span className="btn">Read More</span>
        <p>{createdAt}</p>
      </div>
    </PostItemStyles>
  )
}

export default BlogItem
