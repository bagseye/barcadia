import { graphql, useStaticQuery } from "gatsby"

const useAllProduct = () => {
  const {
    allContentfulProduct: { nodes },
  } = useStaticQuery(graphql`
    query allProductLinksQuery {
      allContentfulProduct(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          gatsbyPath(filePath: "/products/{contentfulProduct.sku}")
          introduction
          sku
          price
          description {
            raw
          }
        }
      }
    }
  `)

  return nodes
}

export default useAllProduct
