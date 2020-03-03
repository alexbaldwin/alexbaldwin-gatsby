import React from "react"
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  query {
      allMdx {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`


export default props => {
  const posts = props.data.allMdx.edges

  return (
    <Layout>
      <SEO title="Home" />
        <h1>Alex Baldwin</h1>
          <p>Blog Posts</p>
            <ul>
              {posts.map(post => (
                <li key={post.node.id}>
                  <h2>
                      <Link to={post.node.frontmatter.title} >
                      {post.node.frontmatter.title}
                      </Link>
                        </h2>
                          </li>
              ))}
                            </ul>
                              </Layout>
  )
}
