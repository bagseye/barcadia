import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"

export default () => (
  <Layout>
    <Hero>
      <Banner title="Barcadia." info="A modern GatsbyJS theme">
        <Link className="btn" to="/products">
          Learn More
        </Link>
      </Banner>
    </Hero>
    Hello world!<Link to="/blog/">Blog Page</Link>
  </Layout>
)
