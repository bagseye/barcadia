import React from "react"
import AnimMain from "./src/components/AnimMain/AnimMain"
import Footer from "./src/components/Footer/Footer"
import Layout from "./src/components/Layout"
import { MenuProvider } from "./src/components/MenuContext"
import NavModule from "./src/components/NavModule/NavModule"

export function wrapPageElement({ element, props }) {
  return (
    <Layout {...props}>
      <NavModule />
      <AnimMain>
        {element}
        <Footer />
      </AnimMain>
    </Layout>
  )
}

export function wrapRootElement({ element }) {
  return <MenuProvider>{element}</MenuProvider>
}
