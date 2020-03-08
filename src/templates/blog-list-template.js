import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import Grid from "../components/Grid/Grid"
import PageIntro from "../components/PageIntro/PageIntro"
import BlogCard from "../components/Blog/BlogCard"
import SEO from "../components/SEO"

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

const Pagination = styled.div`
  grid-column: 1 / 4;
  text-align: right;

  .btn {
    margin-right: 20px;

    &:hover {
      cursor: pointer;
    }

    &.btn-active {
      color: var(--primary);

      &:after {
        display: none;
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

const Blog = props => {
  const { currentPage, numPages } = props.pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage =
    currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`
  const { data } = props
  return (
    <Layout>
      <SEO title="Blogs" />
      <section className="section-padding">
        <Grid>
          <PageIntro
            title="Blog"
            subTitle="A simple blog system that will allow you to update your followers with recent news"
            paragraph="Aliquam tempus libero nec quam aliquam fringilla. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In quis ipsum magna."
          />
          <Section>
            <FlexContainer>
              {data.post.edges.map(({ node }) => {
                return (
                  <FlexItem>
                    <BlogCard key={node.id} blog={node} />
                  </FlexItem>
                )
              })}
            </FlexContainer>
          </Section>
          <Pagination>
            {!isFirst && (
              <AniLink
                className="btn"
                cover
                bg="var(--background)"
                to={prevPage}
              >
                Prev
              </AniLink>
            )}

            {Array.from({ length: numPages }, (_, i) => {
              return (
                <AniLink
                  key={i}
                  cover
                  bg="var(--background)"
                  to={`/blogs/${i === 0 ? "" : i + 1}`}
                  className={i + 1 === currentPage ? "btn btn-active" : "btn"}
                >
                  {i + 1}
                </AniLink>
              )
            })}
            {!isLast && (
              <AniLink
                className="btn"
                cover
                bg="var(--background)"
                to={nextPage}
              >
                Next
              </AniLink>
            )}
          </Pagination>
        </Grid>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    post: allContentfulPosts(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          postId: contentful_id
          published(formatString: "MMMM Do, YYYY")
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
export default Blog
