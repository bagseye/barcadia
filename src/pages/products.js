import React from "react"
import Features from "../components/Products/Products"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import { StaticImage } from "gatsby-plugin-image"

const products = () => {
  return (
    <>
      <Seo title="Products" />
      <SimpleBanner title="All Products">
        <StaticImage
          className="banner__image"
          src="../images/iphone-face-down.jpg"
          alt="Apple iPhone face down"
        />
      </SimpleBanner>
      <Features />
    </>
  )
}

export default products
