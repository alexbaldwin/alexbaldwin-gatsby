/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Styled } from 'theme-ui'

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Newsletter from "./newsletter"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Header siteTitle={data.site.siteMetadata.title} />
    <main>{children}</main>
    <footer>
      <Newsletter />
      <Styled.p>
        © {new Date().getFullYear()}
        {` `}
        <Styled.a href="https://alexbaldwin.com">Alex Baldwin</Styled.a>
      </Styled.p>
    </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
