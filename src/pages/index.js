import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import About from "../components/About/About"
import Service from "../components/Service/Service"
import Button from "../components/Button/Button"
import StyledAbout from "../components/StyledAbout"
import { useStaticQuery, graphql } from "gatsby"

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { eq: "mac-white-bg.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Hero>
        <Banner
          title={data.site.siteMetadata.title}
          info={data.site.siteMetadata.description}
        >
          <Button text="Learn More" to="/products" />
        </Banner>
      </Hero>
      <StyledAbout gradient="true" img={data.file.childImageSharp.fluid}>
        <About />
      </StyledAbout>
      <Service />
    </Layout>
  )
}

export default Index
