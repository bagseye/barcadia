import { graphql, useStaticQuery } from "gatsby"

const useLatestPost = () => {
  const {
    allContentfulPost: { nodes },
  } = useStaticQuery(graphql`
    query latestBlogLinksQiery {
      allContentfulPost(sort: { fields: createdAt, order: DESC }, limit: 3) {
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

export default useLatestPost
