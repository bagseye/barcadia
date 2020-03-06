import React from "react"
import BlogCard from "./BlogCard"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Section = styled.section`
  grid-column: 1 / 4;
  margin-left: -20px;
  margin-right: -20px;
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const FlexItem = styled.div`
  width: 100%;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    flex: 0 0 calc(100% / 3);
  }
`

const getPosts = graphql`
  query {
    posts: allContentfulPosts(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          title
          slug
          postId: contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)
  return (
    <Section>
      <FlexContainer>
        {posts.edges.map(({ node }) => {
          return (
            <FlexItem>
              <BlogCard key={node.id} blog={node} />
            </FlexItem>
          )
        })}
      </FlexContainer>
    </Section>
  )
}

export default BlogList
