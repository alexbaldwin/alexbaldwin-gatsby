/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/page.js`);

  return graphql(
    `
    {
      allMdx {
        edges {
          node {
            frontmatter {
              date
              published
              image
              external
              title
            }
          }
        }
      }
    }
    `
  ).then(result => {
    if(result.errors) {
      return Promise.reject(result.errors)
    }

    const markdownItems = result.data.allMdx.edges

    // Create pages and blog post pages
    markdownItems.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: pageTemplate,
        })
    })
  })
}
