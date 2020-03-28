const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/components/page.js`);

  return graphql(
    `
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              path
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

    const posts = result.data.allMdx.edges

    posts.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path || node.frontmatter.title,
          component: pageTemplate,
          context: { id: node.id },
        })
    })
  })
}

