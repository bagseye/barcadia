const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      products: allContentfulProducts {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPosts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.products.edges.forEach(({ node }) => {
    createPage({
      path: `products/${node.slug}`,
      component: path.resolve("src/templates/product-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blogs/${node.slug}`,
      component: path.resolve("src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  //Amount of posts
  const posts = data.posts.edges
  // Posts per page
  const postsPerPage = 6
  // How many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
