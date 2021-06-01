import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const blog = () => {
  return (
    <>
      <Seo title="Blog" />
      <SimpleBanner title="Trade news">
        <StaticImage
          className="banner__image"
          src="../images/iphone-camera.jpg"
          alt="Apple iPhone camera"
        />
      </SimpleBanner>
    </>
  )
}

export default blog
