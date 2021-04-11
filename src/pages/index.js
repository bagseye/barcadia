import React from "react"
import About from "../components/About/About"
import Service from "../components/Service/Service"
import StyledAbout from "../components/StyledAbout/StyledAbout"
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/SEO"
import { Link } from "react-scroll"
import BannerModule from "../components/BannerModule/BannerModule"

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
      featuredProductsImg: file(relativePath: { eq: "bark.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <>
      <Seo title="Home" />
      <BannerModule />
      <StyledAbout>
        <About id="about" largePadding={true} />
      </StyledAbout>
      <Service largePadding={true} />
      <StyledAbout
        gradient="true"
        img={data.featuredProductsImg.childImageSharp.gatsbyImageData}
      >
        <FeaturedProducts id="products" largePadding={true} />
      </StyledAbout>
    </>
  )
}

export default Index
