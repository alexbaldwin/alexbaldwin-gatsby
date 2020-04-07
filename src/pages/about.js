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
      <h1>Yes sir</h1>
      <p>
        Why hello there, I'm Alex Baldwin; a product designer and writer. I live
        and work in San Francisco, California.
      </p>

      <p>
        Previously I've worked as a designer-in-residence with Techstars and 500
        Startups running design sessions, prepping pitch decks, and shipping an
        insane amount of landing pages. My focus is in product design (a
        combination of user interface, interaction, marketing, and graphic
        design), however, when I'm not doing that, you can find me climbing
        nature, drinking lattes, or possibly cartwheeling.
      </p>
    </Layout>
  )
}
