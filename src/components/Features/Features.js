import * as React from "react"
import { FeatureProductsStyles } from "./FeaturesStyles"
import FeaturedProduct from "./FeaturedProduct"
import useFeaturedProduct from "../../hooks/use-featured-product"

const Features = () => {
  const featuredProduct = useFeaturedProduct()

  return (
    <FeatureProductsStyles className="section">
      <div className="features__container">
        <h2>Featured Products from Barcadia.</h2>
        <div className="features__container--scroll">
          {featuredProduct.map(node => {
            return <FeaturedProduct feature={node} />
          })}
        </div>
      </div>
    </FeatureProductsStyles>
  )
}

export default Features
