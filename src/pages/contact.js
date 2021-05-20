import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Contact from "../components/Contact/Contact"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <SimpleBanner title="Get in touch">
        <StaticImage
          className="banner__image"
          src="../images/macbook-dark.jpg"
          alt="Apple Macbook Dark"
        />
      </SimpleBanner>
      <Contact />
    </>
  )
}

export default contact
