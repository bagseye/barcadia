import { graphql, useStaticQuery } from "gatsby"

const useAllBlogPost = () => {
  const {
    allContentfulPost: { nodes },
  } = useStaticQuery(graphql`
    query allBlogLinksQuery {
      allContentfulPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          gatsbyPath(filePath: "/news/{contentfulPost.url}")
          createdAt(formatString: "DD MMMM, YYYY")
          introduction
        }
      }
    }
  `)

  return nodes
}

export default useAllBlogPost
