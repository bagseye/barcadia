import React from "react"
import BlogList from "../components/Blog/BlogList"
import Layout from "../components/Layout"
import Grid from "../components/Grid/Grid"
import PageIntro from "../components/PageIntro/PageIntro"
import SEO from "../components/SEO"

const blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="section-padding">
        <Grid>
          <PageIntro
            title="Blog"
            subTitle="A simple blog system that will allow you to update your followers with recent news"
            paragraph="Aliquam tempus libero nec quam aliquam fringilla. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In quis ipsum magna."
          />
          <BlogList />
        </Grid>
      </section>
    </Layout>
  )
}

export default blog
