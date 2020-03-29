/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Styled } from 'theme-ui'

import React from "react"
import { graphql, Link } from "gatsby"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default function Page({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={ mdx.frontmatter.title} />
      <Styled.h1>{mdx.frontmatter.title}</Styled.h1>
      <MDXRenderer>
        {mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

