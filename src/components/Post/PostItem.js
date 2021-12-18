import * as React from "react"
import { Link } from "gatsby"
import { PostItemStyles } from "./PostStyles"
import Button from "../Button/Button"

const BlogItem = ({ key, node }) => {
  const { title, gatsbyPath, introduction, createdAt } = node
  return (
    <PostItemStyles>
      <h2>
        <Link to={gatsbyPath}>{title}</Link>
      </h2>
      <p>{introduction}</p>
      <div className="blogitem__meta">
        <Button text="Read More" as={Link} to={gatsbyPath} />
        <p>{createdAt}</p>
      </div>
    </PostItemStyles>
  )
}

export default BlogItem
