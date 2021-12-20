import { graphql, useStaticQuery } from "gatsby"

const useFeaturedProduct = () => {
  const {
    allContentfulProduct: { nodes },
  } = useStaticQuery(graphql`
    query featuredProductLinksQuery {
      allContentfulProduct(
        filter: { featureThisProduct: { eq: true } }
        sort: { fields: url }
      ) {
        nodes {
          title
          gatsbyPath(filePath: "/products/{contentfulProduct.sku}")
          featureThisProduct
          introduction
          headerImage {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  return nodes
}

export default useFeaturedProduct
