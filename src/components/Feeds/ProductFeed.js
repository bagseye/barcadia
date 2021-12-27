import React from "react"
import FeaturedProduct from "../Features/FeaturedProduct"
import useAllProduct from "../../hooks/use-all-product"

const ProductFeed = () => {
  const allProduct = useAllProduct()

  return allProduct.map((node, index) => {
    return <FeaturedProduct key={index} feature={node} />
  })
}

export default ProductFeed
