import React from "react"
import Layout from "../components/Layout"
import Grid from "../components/Grid/Grid"
import Products from "../components/Products/Products"
import PageIntro from "../components/PageIntro/PageIntro"
import SEO from "../components/SEO"

const products = () => {
  return (
    <Layout>
      <SEO title="Products" />
      <section className="section-padding">
        <Grid>
          <PageIntro
            title="All Products"
            subTitle="If you have a wide range of products, you can list them here, with pagination"
            paragraph=" Phasellus pellentesque, massa a ultricies sagittis, ligula felis dapibus urna, et sagittis ex justo et libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi et sodales elit. Etiam varius dapibus sem, et bibendum nisi egestas vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
          />
          <Products />
        </Grid>
      </section>
    </Layout>
  )
}

export default products
