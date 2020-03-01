import React from "react"
import Layout from "../components/Layout"
import Grid from "../components/Grid/Grid"
import Products from "../components/Products/Products"
import PageIntro from "../components/PageIntro/PageIntro"

const products = () => {
  return (
    <Layout>
      <section className="section-padding">
        <Grid>
          <PageIntro
            title="All Products"
            subTitle="If you have a wide range of products, you can list them here, with pagination"
          />
          <Products />
        </Grid>
      </section>
    </Layout>
  )
}

export default products
