/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { Box, Styled } from 'theme-ui'

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            date(formatString: "MMMM Do, YYYY")
            permalink
            published
            title
          }
        }
      }
    }
  }
`

export default (props) => {
  const posts = props.data.allMdx.edges

  return (
    <Layout>
      <SEO title="Alex Baldwin" />
      {posts.map((post) => (
        <Box key={post.node.id} py={1}>
          <Styled.p
            sx={{
              color: 'secondary',
            }}
          >
            <Styled.a as={Link} to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Styled.a>
            <br />
            {post.node.frontmatter.date}
          </Styled.p>
        </Box>
      ))}
    </Layout>
  )
}
