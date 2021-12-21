import * as React from "react"
import { FeaturedProductsStyles } from "./FeaturesStyles"
import FeaturedProduct from "./FeaturedProduct"
import useFeaturedProduct from "../../hooks/use-featured-product"

const Features = ({ title }) => {
  const featuredProduct = useFeaturedProduct()

  return (
    <FeaturedProductsStyles className="section">
      {title && <h2>{title}</h2>}
      <div className="container__scroll">
        {featuredProduct.map(node => {
          return <FeaturedProduct feature={node} />
        })}
      </div>
    </FeaturedProductsStyles>
  )
}

export default Features
