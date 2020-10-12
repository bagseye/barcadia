import React from "react"
import Grid from "../components/Grid/Grid"
import Products from "../components/Products/Products"
import PageIntro from "../components/PageIntro/PageIntro"
import SEO from "../components/SEO"

const products = () => {
  return (
    <>
      <SEO title="Products" />
      <section className="section-padding">
        <Grid>
          <PageIntro
            title="All Products"
            subTitle="Every product you could ask for in one place. Easy to list new products and expand your line"
            paragraph="When using Contentful you can add, remove, and edit you products as your business grows. Updating the content model is easy too. It's time to get started!"
          />
          <Products />
        </Grid>
      </section>
    </>
  )
}

export default products
