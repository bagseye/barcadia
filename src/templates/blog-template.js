import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Grid from "../components/Grid/Grid"
import styled from "styled-components"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const DetailArea = styled.div`
  grid-column: 1 / 4;

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 40px;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / 2;
  }
`

const ContentArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 1200px) {
    grid-column: 2 / 4;
  }

  h1 {
    margin-top: 0;
    text-transform: capitalize;
  }

  .main-image {
    border-bottom: 3px solid var(--primary);
    margin-top: 40px;
    margin-bottom: 40px;
  }

  p {
    margin-bottom: 40px;
  }
`

const Blog = ({ data }) => {
  const {
    title,
    introduction,
    published,
    images,
    richText: { json },
  } = data.post

  const [mainImage, ...restImages] = images
  return (
    <Layout>
      <section className="section-padding">
        <Grid>
          <DetailArea>
            <h2>{introduction}</h2>
            <p>Published on - {published}</p>
            <AniLink className="btn" cover bg="var(--background)" to="/blog">
              Back to Blogs
            </AniLink>
          </DetailArea>
          <ContentArea>
            <h1>{title}</h1>
            <Image className="main-image" fluid={mainImage.fluid} />
            <article>{documentToReactComponents(json)}</article>
          </ContentArea>
        </Grid>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPosts(slug: { eq: $slug }) {
      title
      introduction
      published(formatString: "MMMM Do YYYY")
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      richText {
        json
      }
    }
  }
`

export default Blog
