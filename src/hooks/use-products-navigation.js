import { graphql, useStaticQuery } from "gatsby"

const useProductsNavigation = () => {
  const {
    allContentfulPage: { nodes },
  } = useStaticQuery(graphql`
    query ProductNavQuery {
      allContentfulPage(
        filter: { navigation: { eq: "products-navigation" } }
        sort: { fields: url }
      ) {
        nodes {
          url
          title
        }
      }
    }
  `)

  return nodes
}

export default useProductsNavigation
