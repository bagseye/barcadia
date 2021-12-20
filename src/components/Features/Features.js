import * as React from "react"
import { ProductsStyles } from "../Products/ProductsStyles"
import Product from "../Products/Product"
import useFeaturedProduct from "../../hooks/use-featured-product"

const Features = () => {
  const featuredProduct = useFeaturedProduct()

  return (
    <ProductsStyles className="section">
      <div className="features__container">
        <h2>Featured Products from Barcadia.</h2>
        <div className="features__container--scroll">
          {featuredProduct.map(node => {
            return <Product feature={node} />
          })}
        </div>
      </div>
    </ProductsStyles>
  )
}

export default Features
