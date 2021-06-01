import React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <h2>
          A super-fast theme that is easy to get started, using the power of
          GatsbyJS
        </h2>
        <p style={{ marginBottom: "60px" }}>
          Using modern CSS properties such as grid, this theme is optmised for
          speed and mobile devices. Giving users an excellent experience on any
          device. Future-proofing your product.
        </p>
        <Button text="View Products" as={Link} to="/products" />
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
