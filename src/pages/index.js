import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import About from "../components/About/About"
import Service from "../components/Service/Service"
import Button from "../components/Button/Button"
import { useStaticQuery, graphql } from "gatsby"

const Index = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <Layout>
      <Hero>
        <Banner title={siteMetadata.title} info={siteMetadata.description}>
          <Button text="Learn More" to="/products" />
        </Banner>
      </Hero>
      <About />
      <Service />
    </Layout>
  )
}

export default Index
