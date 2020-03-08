import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const BlogItem = styled.article`
  width: 100%;
  padding: 0 20px;
`

const BlogItemContent = styled.div`
  background-color: #272727;
  border-top: 3px solid var(--primary);
  padding: 2.5rem 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 40px;
  }
`

const BlogCard = ({ blog }) => {
  const { slug, title, images, published } = blog

  let mainImage = images[0].fluid
  return (
    <BlogItem>
      <AniLink
        className="btn"
        cover
        bg="var(--background)"
        to={`/blogs/${slug}`}
      >
        <Image fluid={mainImage} alt="Single Post" />
        <BlogItemContent>
          <h2>{title}</h2>
          <p>{published}</p>
          <button className="btn">Read Post</button>
        </BlogItemContent>
      </AniLink>
    </BlogItem>
  )
}

export default BlogCard
