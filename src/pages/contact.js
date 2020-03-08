import React from "react"
import Layout from "../components/Layout"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Contact />
    </Layout>
  )
}

export default contact
