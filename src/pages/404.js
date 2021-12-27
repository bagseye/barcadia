import * as React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Seo from "../components/SEO"
import Button from "../components/Button/Button"

const error = () => {
  return (
    <>
      <Seo title="Error" />
      <Layout>
        <div className="section">
          <div className="container container__tight">
            <h1>Sorry.</h1>
            <h3>This page has moved or no longer exists.</h3>
            <p>
              Please choose another option from the menu above, or to return
              home, press the button below.
            </p>
            <Button text="Return Home" to="/" as={Link} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default error
