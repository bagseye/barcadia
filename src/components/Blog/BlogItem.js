import React from "react"
import { Link } from "gatsby"
import { BlogItemStyles } from "./BlogStyles"
import Button from "../Button/Button"

const BlogItem = ({ blog }) => {
  const { slug, title, published, introduction } = blog
  return (
    <BlogItemStyles>
      <h2>
        <Link to={slug}>{title}</Link>
      </h2>
      <p>{introduction}</p>
      <div className="blogitem__meta">
        <Button text="Read More" as={Link} to={slug} />
        <p>{published}</p>
      </div>
    </BlogItemStyles>
  )
}

export default BlogItem
