import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import About from "../components/About/About"
import Service from "../components/Service/Service"
import Button from "../components/Button/Button"

export default () => (
  <Layout>
    <Hero>
      <Banner title="Barcadia." info="A modern GatsbyJS theme">
        <Button text="Learn More" to="/products" />
      </Banner>
    </Hero>
    <About />
    <Service />
  </Layout>
)
