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
            paragraph="If you have something more to say, just publish a new blog post. Your editing capabilities are available in the Contentful admin area."
          />
          <BlogList />
        </Grid>
      </section>
    </Layout>
  )
}

export default blog
